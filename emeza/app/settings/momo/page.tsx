"use client";

import { useLanguage } from "@/components/language-provider";
import { SellerShell } from "@/components/seller-shell";

export default function MomoSettingsPage() {
  const { copy, language } = useLanguage();

  return (
    <SellerShell
      title={copy.dashboard.verifyMomoTitle}
      description={copy.dashboard.verifyMomoDescription}
    >
      <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_18px_60px_rgba(18,17,16,0.05)]">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fffde7] text-3xl">
            M
          </div>
          <h2 className="mt-5 text-4xl font-semibold text-[#121110]">
            {language === "rw"
              ? "Emeza nimero yawe ya MoMo"
              : "Verify your MoMo number"}
          </h2>
          <p className="mt-4 text-sm leading-7 text-[#6b6358]">
            {language === "rw"
              ? "Turemeza nimero zishyurwaho mbere yo kurekura amafaranga agenewe umucuruzi."
              : "We verify payout numbers before releasing funds to the seller."}
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-2xl gap-4">
          <input
            placeholder="+250 78X XXX XXX"
            className="rounded-2xl border border-black/10 px-4 py-3 outline-none"
          />
          <button className="rounded-full bg-[#2e7d32] px-5 py-3 text-sm font-semibold text-white">
            {copy.dashboard.verifyMomoButton}
          </button>
        </div>
      </div>
    </SellerShell>
  );
}
