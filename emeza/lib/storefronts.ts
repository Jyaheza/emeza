import {
  getMockStorefrontBySlug,
  sellerStorefronts,
  type Product,
  type Storefront,
} from "@/lib/mock-data";
import { getServiceSupabase } from "@/lib/supabase/server";

type SellerRow = {
  id: string;
  business_name: string;
  storefront_slug: string;
  phone_number: string;
  city: string | null;
  tagline: string | null;
  description: string | null;
  whatsapp_number: string | null;
  response_time_label: string | null;
  rating_label: string | null;
  fulfilled_orders_label: string | null;
};

type ProductRow = {
  id: string;
  title: string;
  description: string | null;
  price_rwf: number;
  category: string | null;
  delivery_estimate: string | null;
  stock_note: string | null;
};

export async function getStorefrontBySlug(slug: string) {
  const supabase = getServiceSupabase();

  if (!supabase) {
    return getMockStorefrontBySlug(slug);
  }

  const { data: seller, error: sellerError } = await supabase
    .from("sellers")
    .select(
      "id, business_name, storefront_slug, phone_number, city, tagline, description, whatsapp_number, response_time_label, rating_label, fulfilled_orders_label",
    )
    .eq("storefront_slug", slug)
    .single<SellerRow>();

  if (sellerError || !seller) {
    return getMockStorefrontBySlug(slug);
  }

  const { data: products, error: productsError } = await supabase
    .from("products")
    .select(
      "id, title, description, price_rwf, category, delivery_estimate, stock_note",
    )
    .eq("seller_id", seller.id)
    .eq("is_active", true)
    .order("created_at", { ascending: false })
    .returns<ProductRow[]>();

  if (productsError || !products?.length) {
    return mapSellerToStorefront(seller, []);
  }

  return mapSellerToStorefront(seller, products);
}

export function getFeaturedStorefront() {
  return sellerStorefronts[0];
}

function mapSellerToStorefront(seller: SellerRow, products: ProductRow[]): Storefront {
  const whatsappNumber = seller.whatsapp_number ?? seller.phone_number;
  const cleanWhatsApp = whatsappNumber.replace(/\D/g, "");

  return {
    id: seller.id,
    slug: seller.storefront_slug,
    businessName: seller.business_name,
    headline:
      seller.tagline ??
      "Buy on WhatsApp. Confirm when it arrives. Pay with confidence.",
    description:
      seller.description ??
      "Your payment stays protected until you confirm that your order has arrived as promised.",
    supportPhone: seller.phone_number,
    whatsappHref: `https://wa.me/${cleanWhatsApp}`,
    city: seller.city ?? "Kigali",
    responseTime: seller.response_time_label ?? "Replies in under 15 minutes",
    rating: seller.rating_label ?? "Trusted by confirmed buyers",
    fulfilledOrders: seller.fulfilled_orders_label ?? "Protected orders enabled",
    products: products.map((product) => mapProduct(product)),
  };
}

function mapProduct(product: ProductRow): Product {
  return {
    id: product.id,
    title: product.title,
    description:
      product.description ?? "Protected payment available for this item.",
    price: new Intl.NumberFormat("en-US").format(product.price_rwf).replace(
      /,/g,
      ",",
    )
      ? `RWF ${new Intl.NumberFormat("en-US").format(product.price_rwf)}`
      : `RWF ${product.price_rwf}`,
    priceRwf: product.price_rwf,
    categoryLabel: product.category ?? "Physical good",
    deliveryEstimate: product.delivery_estimate ?? "Delivery in 1-3 days",
    stockNote: product.stock_note ?? "Available now",
  };
}
