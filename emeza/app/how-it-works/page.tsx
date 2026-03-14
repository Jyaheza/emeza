"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HowItWorksPage() {
  const { copy } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_24px_90px_rgba(18,17,16,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1b5e20]">
            {copy.howItWorks.kicker}
          </p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-[#121110]">
            {copy.howItWorks.title}
          </h1>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {copy.howItWorks.steps.map((item, index) => (
              <article
                key={item.title}
                className="rounded-[24px] bg-[#f3f2ef] p-6"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2e7d32] text-sm font-bold text-white">
                  {index + 1}
                </div>
                <h2 className="mt-4 text-2xl font-semibold text-[#121110]">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#6b6358]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-8">
            <Link
              href="/deal/new"
              className="rounded-full bg-[#2e7d32] px-6 py-3 text-sm font-semibold text-white"
            >
              {copy.howItWorks.cta}
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
