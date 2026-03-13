import { NextResponse } from "next/server";

import { createOrderRecord } from "@/lib/orders";

type PaymentRequest = {
  sellerSlug?: string;
  productId?: string;
  buyerName?: string;
  buyerPhone?: string;
  quantity?: number;
};

export async function POST(request: Request) {
  const body = (await request.json()) as PaymentRequest;

  if (!body.sellerSlug || !body.productId || !body.buyerPhone) {
    return NextResponse.json(
      { error: "sellerSlug, productId, and buyerPhone are required" },
      { status: 400 },
    );
  }

  try {
    const order = await createOrderRecord({
      sellerSlug: body.sellerSlug,
      productId: body.productId,
      buyerName: body.buyerName,
      buyerPhone: body.buyerPhone,
      quantity: body.quantity,
    });

    return NextResponse.json({
      orderId: order.orderId,
      checkoutStatus: "payment_pending",
      totalAmountRwf: order.totalAmountRwf,
      feeRwf: order.feeRwf,
      sellerReceivesRwf: order.sellerReceivesRwf,
      persisted: order.persisted,
      persistenceMode: order.persisted
        ? "saved_to_supabase"
        : "Supabase not configured or seeded yet",
      flutterwavePlaceholderMessage: "HERE WE'LL HIT FLUTTERWAVE",
      releaseModel: {
        status: "held_after_successful_charge",
        confirmationWindowHours: 48,
      },
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to start checkout";

    return NextResponse.json({ error: message }, { status: 500 });
  }
}
