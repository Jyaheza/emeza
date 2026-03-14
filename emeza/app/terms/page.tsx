"use client";

import { useLanguage } from "@/components/language-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { legalSections } from "@/lib/app-data";

export default function TermsPage() {
  const { copy } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_24px_90px_rgba(18,17,16,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1b5e20]">
            {copy.legal.termsKicker}
          </p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-[#121110]">
            {copy.legal.termsTitle}
          </h1>
          <div className="mt-8 space-y-6">
            {legalSections.map((section) => (
              <article key={section.title} className="rounded-[24px] bg-[#f3f2ef] p-6">
                <h2 className="text-2xl font-semibold text-[#121110]">
                  {section.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-[#6b6358]">
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
