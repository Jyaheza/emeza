import { NextResponse } from "next/server";

import { getStorefrontBySlug } from "@/lib/storefronts";

type RouteContext = {
  params: Promise<{
    slug: string;
  }>;
};

export async function GET(_: Request, { params }: RouteContext) {
  const { slug } = await params;
  const storefront = await getStorefrontBySlug(slug);

  if (!storefront) {
    return NextResponse.json(
      { error: "Storefront not found" },
      { status: 404 },
    );
  }

  return NextResponse.json({
    seller: {
      id: storefront.id,
      businessName: storefront.businessName,
      slug: storefront.slug,
      supportPhone: storefront.supportPhone,
    },
    products: storefront.products,
    escrowPolicy: {
      releaseWindowHours: 48,
      disputeWindowHours: 48,
      productType: "physical_good",
    },
  });
}
