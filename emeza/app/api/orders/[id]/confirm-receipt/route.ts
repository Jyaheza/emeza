import { NextResponse } from "next/server";

type RouteContext = {
  params: Promise<{
    id: string;
  }>;
};

export async function PUT(_: Request, { params }: RouteContext) {
  const { id } = await params;

  return NextResponse.json({
    orderId: id,
    status: "release_confirmed",
    payoutStatus: "processing",
    message:
      "Buyer confirmation received. The next step is to trigger Flutterwave transfer or subaccount settlement release.",
  });
}
