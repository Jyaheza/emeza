import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type CheckoutPageProps = {
  searchParams: Promise<{
    slug?: string;
    productId?: string;
  }>;
};

export default async function CheckoutPage({
  searchParams,
}: CheckoutPageProps) {
  const { slug = "joyce-style", productId = "sample-product" } =
    await searchParams;

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_24px_90px_rgba(18,17,16,0.06)] sm:p-8">
          <div className="mx-auto max-w-2xl">
            <div className="mx-auto mb-5 h-1.5 w-16 rounded-full bg-[#d9d6cf]" />
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1b5e20]">
              Protected checkout
            </p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#121110]">
              Review your safe deal
            </h1>
            <p className="mt-3 text-sm leading-7 text-[#6b6358]">
              This mirrors the checkout modal from the wireframes. Payment is
              protected by Emeza and only released after buyer confirmation.
            </p>

            <div className="mt-8 grid gap-4">
              <div className="rounded-[24px] bg-[#fafaf8] p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#918a7e]">
                  Deal summary
                </p>
                <div className="mt-4 grid gap-3 text-sm text-[#504a41]">
                  <div className="flex items-center justify-between gap-4">
                    <span>Storefront</span>
                    <span className="font-semibold text-[#121110]">{slug}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Product ref</span>
                    <span className="font-mono text-[#121110]">{productId}</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Buyer fee</span>
                    <span className="font-semibold text-[#121110]">Free</span>
                  </div>
                  <div className="flex items-center justify-between gap-4">
                    <span>Seller fee</span>
                    <span className="font-semibold text-[#121110]">2%</span>
                  </div>
                </div>
              </div>

              <div className="rounded-[24px] bg-[#e8f5e9] p-5 text-sm leading-7 text-[#1b5e20]">
                <strong>Money held by Emeza.</strong> The seller is paid only
                after the buyer confirms that the order arrived as promised.
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-[#121110]">
                    Buyer phone
                  </span>
                  <input
                    placeholder="+250 78X XXX XXX"
                    className="rounded-2xl border border-black/10 px-4 py-3 outline-none"
                  />
                </label>
                <label className="grid gap-2">
                  <span className="text-sm font-semibold text-[#121110]">
                    Payment method
                  </span>
                  <div className="rounded-2xl border border-black/10 px-4 py-3 text-sm text-[#504a41]">
                    MTN MoMo
                  </div>
                </label>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/checkout/processing"
                className="rounded-full bg-[#2e7d32] px-6 py-3 text-sm font-semibold text-white"
              >
                Continue
              </Link>
              <Link
                href={`/store/${slug}`}
                className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-[#1b5e20]"
              >
                Go back
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
