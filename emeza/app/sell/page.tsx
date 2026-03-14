"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { SellerOnboarding } from "@/components/seller-onboarding";
import { SiteHeader } from "@/components/site-header";
import { getMarketingContent, sellerThemes } from "@/lib/app-data";

export default function SellPage() {
  const { copy, language } = useLanguage();
  const marketingContent = getMarketingContent(language);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <section className="rounded-[32px] bg-[linear-gradient(160deg,#1b5e20_0%,#0d3b12_100%)] p-8 text-white shadow-[0_28px_100px_rgba(18,17,16,0.16)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#f2c12e]">
            {copy.sell.kicker}
          </p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight">
            {copy.sell.title}
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/74">
            {copy.sell.description}
          </p>

          <div className="mt-8 grid gap-4">
            {marketingContent.sellerThemes.map((theme, index) => (
              <div
                key={theme.id}
                className="rounded-[22px] border border-white/10 bg-white/6 px-4 py-4"
              >
                <div
                  className={`mb-4 h-24 rounded-[18px] bg-gradient-to-br ${sellerThemes[index].accent}`}
                />
                <p className="text-lg font-semibold">{theme.cardTitle}</p>
                <p className="mt-1 text-sm text-white/70">
                  {theme.cardDescription}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0d3b12]"
            >
              {copy.sell.dashboard}
            </Link>
            <Link
              href="/store/joyce-style"
              className="rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white"
            >
              {copy.sell.storefront}
            </Link>
          </div>
        </section>

        <SellerOnboarding />
      </main>
    </>
  );
}
