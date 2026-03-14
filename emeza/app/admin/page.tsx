"use client";

import { useLanguage } from "@/components/language-provider";
import { SiteHeader } from "@/components/site-header";

export default function AdminPage() {
  const { copy } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_24px_90px_rgba(18,17,16,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1b5e20]">
            {copy.admin.kicker}
          </p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-[#121110]">
            {copy.admin.title}
          </h1>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ["Flutterwave balance", "RWF 1,247,000"],
              ["Open disputes", "2"],
              ["Protected GMV", "RWF 4.2M"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-[24px] bg-[#f3f2ef] p-6">
                <p className="text-sm text-[#6b6358]">{label}</p>
                <p className="mt-2 font-mono text-2xl text-[#121110]">{value}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-[24px] bg-[#fafaf8] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#918a7e]">
                Review queue
              </p>
              <div className="mt-4 grid gap-3">
                {[
                  ["ord-2981", "Buyer says item did not arrive", "High"],
                  ["ord-2844", "Seller payout verification pending", "Medium"],
                  ["ord-2808", "Manual refund review", "High"],
                ].map(([id, issue, level]) => (
                  <article
                    key={id}
                    className="rounded-[18px] bg-white px-4 py-4"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-mono text-sm text-[#121110]">{id}</p>
                      <span className="rounded-full bg-[#fffde7] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#8d6e18]">
                        {level}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[#504a41]">{issue}</p>
                  </article>
                ))}
              </div>
            </section>
            <section className="rounded-[24px] bg-[#0d3b12] p-6 text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f2c12e]">
                Operations snapshot
              </p>
              <div className="mt-4 grid gap-3 text-sm text-white/78">
                <div className="rounded-[18px] border border-white/10 bg-white/6 px-4 py-4">
                  126 seller payouts released this week
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/6 px-4 py-4">
                  2 disputes currently frozen for review
                </div>
                <div className="rounded-[18px] border border-white/10 bg-white/6 px-4 py-4">
                  WhatsApp reminder jobs healthy
                </div>
              </div>
            </section>
          </div>
        </section>
      </main>
    </>
  );
}
