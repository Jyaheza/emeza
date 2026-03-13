import Link from "next/link";

import { getFeaturedStorefront } from "@/lib/storefronts";

const trustBenefits = [
  "Your money stays protected until you confirm delivery.",
  "Sellers can share one trusted link across WhatsApp, Instagram, and TikTok.",
  "Every order has a clear status from payment to confirmation.",
];

const socialProof = [
  "Made for WhatsApp commerce in Rwanda",
  "Built around MTN MoMo and Airtel Money behavior",
  "Designed for mobile-first buyers on low-bandwidth devices",
];

export default function Home() {
  const featuredSeller = getFeaturedStorefront();

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(212,168,67,0.16),_transparent_30%),linear-gradient(180deg,_#f8fcf8_0%,_#eef6f1_46%,_#ffffff_100%)] text-slate-900">
      <section className="mx-auto flex w-full max-w-7xl flex-col gap-12 px-6 py-8 lg:px-10">
        <header className="flex flex-col gap-6 rounded-[2rem] border border-white/60 bg-white/82 p-6 shadow-[0_30px_80px_rgba(13,59,36,0.08)] backdrop-blur md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1B7A4A]">
              Emeza
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-[#0D3B24] md:text-5xl">
              Gura udatinya.
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
              Buy without fear. Emeza protects payment for social commerce in
              Rwanda, so the buyer confirms first and the seller gets paid with
              confidence.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/sell"
              className="rounded-full bg-[#1B7A4A] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#15613b]"
            >
              Start selling with Emeza
            </Link>
            <Link
              href={`/store/${featuredSeller.slug}`}
              className="rounded-full border border-[#0D3B24]/10 bg-white px-5 py-3 text-sm font-semibold text-[#0D3B24] transition hover:border-[#1B7A4A] hover:text-[#1B7A4A]"
            >
              Shop a live storefront
            </Link>
          </div>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[2.25rem] bg-[#0D3B24] p-8 text-white shadow-[0_32px_100px_rgba(13,59,36,0.18)] md:p-10">
            <div className="inline-flex rounded-full border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D4A843]">
              Protected payments for social commerce
            </div>
            <h2 className="mt-6 max-w-2xl text-4xl font-bold tracking-tight md:text-6xl">
              Pay on mobile money. Confirm when it arrives.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/76 md:text-lg">
              Emeza fits the way people already buy and sell in Rwanda. Sellers
              keep the WhatsApp conversation. Buyers get a trusted checkout and
              confirmation step before money is released.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {trustBenefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-white/10 bg-white/6 px-4 py-4 text-sm leading-6 text-white/84"
                >
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-[#1B7A4A]/10 bg-white p-6 shadow-[0_24px_70px_rgba(27,122,74,0.08)] md:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#1B7A4A]">
              How it works
            </p>
            <ol className="mt-6 space-y-4">
              {[
                "Buyer chooses a product from a seller's shared storefront.",
                "Emeza starts the mobile money payment and holds the payment status.",
                "Seller delivers the item and the buyer confirms receipt.",
                "Emeza releases payment to the seller after confirmation.",
              ].map((step, index) => (
                <li
                  key={step}
                  className="flex items-start gap-4 rounded-2xl bg-[#F0F7F3] px-4 py-4"
                >
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1B7A4A] text-sm font-semibold text-white">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium leading-6 text-[#0D3B24]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-2xl border border-dashed border-[#D4A843] bg-[#fffaf0] p-4">
              <p className="text-sm font-semibold text-[#8b6b22]">
                Why buyers trust it
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Emeza is not replacing WhatsApp or mobile money. It adds the
                confirmation layer both sides are missing today.
              </p>
            </div>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <article className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_18px_70px_rgba(15,31,23,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1B7A4A]">
              For sellers
            </p>
            <h3 className="mt-3 text-3xl font-bold tracking-tight text-[#0D3B24]">
              One link. More trust. Better conversions.
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              Share a storefront in your bio or WhatsApp thread, receive
              protected payments, and show buyers that you deliver before you
              get paid.
            </p>
            <Link
              href="/sell"
              className="mt-6 inline-flex rounded-full bg-[#1B7A4A] px-5 py-3 text-sm font-semibold text-white"
            >
              Open a seller account
            </Link>
          </article>

          <article className="rounded-[1.8rem] border border-slate-200 bg-white p-6 shadow-[0_18px_70px_rgba(13,59,36,0.05)]">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#1B7A4A]">
              Built for Rwanda
            </p>
            <div className="mt-4 grid gap-4 md:grid-cols-3">
              {socialProof.map((item) => (
                <div key={item} className="rounded-2xl bg-[#F0F7F3] p-5">
                  <p className="text-sm leading-6 text-[#0D3B24]">{item}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}
