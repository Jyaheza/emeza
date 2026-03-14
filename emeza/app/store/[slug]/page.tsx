import { notFound } from "next/navigation";

import { StorefrontPageClient } from "@/components/storefront-page-client";
import { getStorefrontBySlug } from "@/lib/storefronts";

type StorefrontPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function StorefrontPage({ params }: StorefrontPageProps) {
  const { slug } = await params;
  const storefront = await getStorefrontBySlug(slug);

  if (!storefront) {
    notFound();
  }

  return <StorefrontPageClient storefront={storefront} />;
}
