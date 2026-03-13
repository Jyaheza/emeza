import crypto from "node:crypto";

import { getMockStorefrontBySlug } from "@/lib/mock-data";
import { getServiceSupabase } from "@/lib/supabase/server";

type CreateOrderInput = {
  sellerSlug: string;
  productId: string;
  buyerName?: string;
  buyerPhone: string;
  quantity?: number;
};

type DbSeller = {
  id: string;
  business_name: string;
  storefront_slug: string;
};

type DbProduct = {
  id: string;
  seller_id: string;
  title: string;
  price_rwf: number;
};

export async function createOrderRecord(input: CreateOrderInput) {
  const quantity = Math.max(input.quantity ?? 1, 1);
  const supabase = getServiceSupabase();

  if (!supabase) {
    return createMockOrder(input, quantity);
  }

  const { data: seller } = await supabase
    .from("sellers")
    .select("id, business_name, storefront_slug")
    .eq("storefront_slug", input.sellerSlug)
    .single<DbSeller>();

  const { data: product } = await supabase
    .from("products")
    .select("id, seller_id, title, price_rwf")
    .eq("id", input.productId)
    .single<DbProduct>();

  if (!seller || !product || product.seller_id !== seller.id) {
    return createMockOrder(input, quantity);
  }

  const buyerPhoneHash = hashPhone(input.buyerPhone);
  const totalAmountRwf = product.price_rwf * quantity;
  const feeRwf = Math.round(totalAmountRwf * 0.02);
  const orderToken = crypto.randomUUID();

  const { data: existingSession } = await supabase
    .from("buyer_sessions")
    .select("id, order_count")
    .eq("phone_hash", buyerPhoneHash)
    .single();

  if (existingSession) {
    await supabase
      .from("buyer_sessions")
      .update({
        last_active_at: new Date().toISOString(),
        order_count: existingSession.order_count + 1,
      })
      .eq("id", existingSession.id);
  } else {
    await supabase.from("buyer_sessions").insert({
      phone_hash: buyerPhoneHash,
      order_count: 1,
      last_active_at: new Date().toISOString(),
    });
  }

  const { data: order, error: orderError } = await supabase
    .from("orders")
    .insert({
      seller_id: seller.id,
      product_id: product.id,
      buyer_phone_hash: buyerPhoneHash,
      buyer_phone_last4: input.buyerPhone.slice(-4),
      buyer_name: input.buyerName?.trim() || "Customer",
      quantity,
      total_amount_rwf: totalAmountRwf,
      status: "payment_pending",
      order_token: orderToken,
    })
    .select("id")
    .single();

  if (orderError || !order) {
    throw new Error(orderError?.message ?? "Failed to create order");
  }

  await supabase.from("escrow_transactions").insert({
    order_id: order.id,
    amount_rwf: totalAmountRwf,
    fee_rwf: feeRwf,
    seller_receives_rwf: totalAmountRwf - feeRwf,
    status: "payment_pending",
  });

  return {
    persisted: true,
    orderId: order.id,
    sellerName: seller.business_name,
    productTitle: product.title,
    totalAmountRwf,
    feeRwf,
    sellerReceivesRwf: totalAmountRwf - feeRwf,
    orderToken,
  };
}

function createMockOrder(input: CreateOrderInput, quantity: number) {
  const storefront = getMockStorefrontBySlug(input.sellerSlug);
  const product = storefront?.products.find((item) => item.id === input.productId);

  if (!storefront || !product) {
    throw new Error("Seller or product not found");
  }

  const totalAmountRwf = product.priceRwf * quantity;
  const feeRwf = Math.round(totalAmountRwf * 0.02);

  return {
    persisted: false,
    orderId: `ord_${product.id}_${Date.now()}`,
    sellerName: storefront.businessName,
    productTitle: product.title,
    totalAmountRwf,
    feeRwf,
    sellerReceivesRwf: totalAmountRwf - feeRwf,
    orderToken: crypto.randomUUID(),
  };
}

function hashPhone(phone: string) {
  return crypto.createHash("sha256").update(phone).digest("hex");
}
