"use client";

import { useLanguage } from "@/components/language-provider";
import { SellerShell } from "@/components/seller-shell";
import { earningsRows } from "@/lib/app-data";

export default function EarningsPage() {
  const { copy, language } = useLanguage();

  return (
    <SellerShell
      title={copy.dashboard.earningsTitle}
      description={copy.dashboard.earningsDescription}
    >
      <div className="rounded-[28px] bg-[linear-gradient(160deg,#1b5e20_0%,#0d3b12_100%)] p-6 text-white shadow-[0_24px_80px_rgba(18,17,16,0.12)]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
          {copy.dashboard.totalEarned}
        </p>
        <p className="mt-2 font-mono text-4xl font-medium">RWF 1,234,000</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {[
            language === "rw" ? "Iki cyumweru" : "This week",
            language === "rw" ? "Uku kwezi" : "This month",
            language === "rw" ? "Ibihe byose" : "All time",
          ].map((label, index) => (
            <span
              key={label}
              className={`rounded-full px-4 py-2 text-xs font-semibold ${
                index === 0 ? "bg-white/20 text-white" : "bg-white/10 text-white/70"
              }`}
            >
              {label}
            </span>
          ))}
        </div>
        <div className="mt-5 rounded-[22px] bg-white/10 p-4 text-sm text-white/78">
          {copy.dashboard.pendingPayout}: RWF 25,000
        </div>
      </div>

      <div className="grid gap-4">
        {earningsRows.map((row) => (
          <article
            key={row.title}
            className="rounded-[24px] border border-black/5 bg-white p-5 shadow-[0_18px_60px_rgba(18,17,16,0.05)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold text-[#121110]">{row.title}</h2>
                <p className="mt-1 text-sm text-[#6b6358]">{row.detail}</p>
              </div>
              <span className="font-mono text-lg text-[#121110]">{row.amount}</span>
            </div>
          </article>
        ))}
      </div>
    </SellerShell>
  );
}
