import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function CheckoutProcessingPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-black/5 bg-white p-8 text-center shadow-[0_24px_90px_rgba(18,17,16,0.06)]">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#fffde7] text-3xl">
            ⏳
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#1b5e20]">
            MoMo processing
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#121110]">
            Waiting for payment confirmation
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-8 text-[#6b6358]">
            This screen represents the post-checkout processing state from the
            wireframes. Once MoMo confirms the payment, Emeza will open the
            tracking flow and notify the buyer on WhatsApp.
          </p>

          <div className="mx-auto mt-8 max-w-xl rounded-[24px] bg-[#fafaf8] p-6 text-left">
            <div className="flex items-center justify-between gap-4 border-b border-black/5 pb-4">
              <span className="text-sm text-[#6b6358]">Payment status</span>
              <span className="rounded-full bg-[#fffde7] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8d6e18]">
                Pending buyer approval
              </span>
            </div>
            <div className="mt-4 space-y-3 text-sm text-[#504a41]">
              <p>1. Buyer authorizes MTN MoMo</p>
              <p>2. Emeza records the payment</p>
              <p>3. Seller prepares the order</p>
              <p>4. Buyer confirms receipt before payout release</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              href="/track/sample-order-token"
              className="rounded-full bg-[#2e7d32] px-6 py-3 text-sm font-semibold text-white"
            >
              View order tracking
            </Link>
            <Link
              href="/deal/new"
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-[#1b5e20]"
            >
              HERE WE&apos;LL HIT FLUTTERWAVE
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
