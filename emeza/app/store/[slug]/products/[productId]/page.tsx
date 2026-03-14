import Link from "next/link";
import { notFound } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { getStorefrontBySlug } from "@/lib/storefronts";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
    productId: string;
  }>;
};

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug, productId } = await params;
  const storefront = await getStorefrontBySlug(slug);

  if (!storefront) {
    notFound();
  }

  const product = storefront.products.find((item) => item.id === productId);

  if (!product) {
    notFound();
  }

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_24px_90px_rgba(18,17,16,0.06)] sm:p-8">
            <div className="relative flex aspect-square items-end overflow-hidden rounded-[28px] bg-[linear-gradient(145deg,#ecd7c2,#f7f1e9)] p-6">
              <div className="absolute -right-8 top-4 h-28 w-28 rounded-full bg-white/35 blur-2xl" />
              <div className="absolute left-10 top-14 h-40 w-28 rounded-[32px] bg-[#915d3a]" />
              <div className="absolute left-24 top-8 h-16 w-16 rounded-full border-2 border-[#6c4024]" />
              <div className="relative z-10 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#9a4f1f]">
                {product.categoryLabel}
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_24px_90px_rgba(18,17,16,0.06)] sm:p-8">
            <Link
              href={`/store/${slug}`}
              className="text-sm font-semibold text-[#1b5e20] underline decoration-[#f2c12e] underline-offset-4"
            >
              Back to storefront
            </Link>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-[#121110] sm:text-5xl">
              {product.title}
            </h1>
            <p className="mt-3 font-mono text-2xl text-[#121110]">{product.price}</p>
            <div className="mt-4 flex items-center gap-3 rounded-[20px] bg-[#fafaf8] p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[linear-gradient(135deg,#81c784,#2e7d32)] text-sm font-semibold text-white">
                {storefront.businessName.charAt(0)}
              </div>
              <div>
                <p className="text-sm font-semibold text-[#121110]">
                  {storefront.businessName}
                </p>
                <p className="text-sm text-[#6b6358]">{storefront.rating}</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-8 text-[#504a41]">
              {product.description}
            </p>

            <div className="mt-8 grid gap-3">
              <div className="rounded-[22px] bg-[#f3f2ef] px-5 py-4 text-sm text-[#504a41]">
                {product.deliveryEstimate}
              </div>
              <div className="rounded-[22px] bg-[#f3f2ef] px-5 py-4 text-sm text-[#504a41]">
                {product.stockNote}
              </div>
              <div className="rounded-[22px] bg-[#e8f5e9] px-5 py-4 text-sm text-[#1b5e20]">
                Emeza holds the payment until the buyer confirms receipt.
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={`/checkout?slug=${slug}&productId=${product.id}`}
                className="rounded-full bg-[#2e7d32] px-6 py-3 text-sm font-semibold text-white"
              >
                Continue to protected checkout
              </Link>
              <a
                href={storefront.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-[#1b5e20]"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
