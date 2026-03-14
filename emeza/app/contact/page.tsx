"use client";

import { useLanguage } from "@/components/language-provider";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  const { copy } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_24px_90px_rgba(18,17,16,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1b5e20]">
            {copy.contact.kicker}
          </p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-[#121110]">
            {copy.contact.title}
          </h1>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[24px] bg-[#f3f2ef] p-6">
              <h2 className="text-xl font-semibold text-[#121110]">WhatsApp</h2>
              <p className="mt-3 text-sm leading-7 text-[#6b6358]">
                +250 788 000 000
              </p>
            </div>
            <div className="rounded-[24px] bg-[#f3f2ef] p-6">
              <h2 className="text-xl font-semibold text-[#121110]">Email</h2>
              <p className="mt-3 text-sm leading-7 text-[#6b6358]">
                support@emeza.me
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
