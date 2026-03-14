"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { SocialIcon } from "@/components/social-icon";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import {
  getMarketingContent,
  sellerThemes,
  socialLinks,
} from "@/lib/app-data";

export default function HomePage() {
  const { copy, language } = useLanguage();
  const marketingContent = getMarketingContent(language);

  return (
    <>
      <SiteHeader />
      <main>
        <section className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-20">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#1b5e20]">
              {copy.home.kicker}
            </p>
            <h1 className="mt-4 text-5xl font-semibold leading-tight tracking-tight text-[#121110] sm:text-6xl">
              {copy.home.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6b6358]">
              {copy.home.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/deal/new"
                className="rounded-full bg-[#2e7d32] px-6 py-3 text-sm font-semibold text-white"
              >
                {copy.home.startDeal}
              </Link>
              <Link
                href="/store/joyce-style"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-[#1b5e20]"
              >
                {copy.home.browseShop}
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {marketingContent.heroStats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-[24px] border border-black/5 bg-white p-5 shadow-[0_16px_50px_rgba(18,17,16,0.05)]"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#918a7e]">
                    {item.label}
                  </p>
                  <p className="mt-2 font-mono text-2xl font-medium text-[#121110]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[32px] bg-[linear-gradient(160deg,#1b5e20_0%,#0d3b12_100%)] p-6 text-white shadow-[0_28px_100px_rgba(18,17,16,0.16)] sm:p-8">
            <div className="rounded-[28px] border border-white/10 bg-white/8 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f2c12e]">
                {copy.home.trustTitle}
              </p>
              <div className="mt-5 space-y-4">
                {copy.home.trustItems.map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-[22px] border border-white/10 bg-white/6 px-4 py-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f2c12e] text-sm font-bold text-[#121110]">
                      {index + 1}
                    </span>
                    <p className="text-sm leading-7 text-white/78">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 rounded-[28px] bg-white p-5 text-[#121110]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#1b5e20]">
                {copy.home.productStructure}
              </p>
              <div className="mt-4 grid gap-3">
                {copy.home.productItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-[18px] bg-[#f3f2ef] px-4 py-3 text-sm text-[#504a41]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_24px_90px_rgba(18,17,16,0.06)] sm:p-8">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1b5e20]">
                  {copy.home.storefrontKicker}
                </p>
                <h2 className="mt-2 text-4xl font-semibold tracking-tight text-[#121110]">
                  {copy.home.storefrontTitle}
                </h2>
              </div>
              <Link
                href="/sell"
                className="text-sm font-semibold text-[#1b5e20] underline decoration-[#f2c12e] underline-offset-4"
              >
                {copy.home.storefrontLink}
              </Link>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {marketingContent.sellerThemes.map((theme, index) => (
                <div
                  key={theme.id}
                  className="rounded-[26px] border border-black/5 bg-[#fafaf8] p-5"
                >
                  <div
                    className={`relative h-52 overflow-hidden rounded-[22px] bg-gradient-to-br ${sellerThemes[index].accent} p-4`}
                  >
                    <div className="absolute -right-5 top-4 h-24 w-24 rounded-full bg-white/12 blur-2xl" />
                    <div className="absolute left-4 top-4 h-16 w-16 rounded-[18px] border border-white/15 bg-white/12" />
                    <div className="absolute left-9 top-10 h-24 w-28 rounded-[22px] border border-white/15 bg-white/12 backdrop-blur-sm" />
                    <div className="absolute right-6 top-14 h-20 w-20 rounded-full border border-white/15 bg-[#f2c12e]/20" />
                    <div className="absolute bottom-5 left-5 right-5 rounded-[18px] bg-white/14 p-3 backdrop-blur-sm">
                      <div className="h-3 w-20 rounded-full bg-white/60" />
                      <div className="mt-2 h-2 w-28 rounded-full bg-white/35" />
                      <div className="mt-3 flex gap-2">
                        <div className="h-7 w-16 rounded-full bg-white/18" />
                        <div className="h-7 w-20 rounded-full bg-white/18" />
                      </div>
                    </div>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-[#121110]">
                    {theme.cardTitle}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#6b6358]">
                    {theme.cardDescription}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {theme.chips.map((chip) => (
                      <span
                        key={chip}
                        className="rounded-full bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#1b5e20]"
                      >
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_24px_90px_rgba(18,17,16,0.06)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1b5e20]">
                {copy.home.reviewsKicker}
              </p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-[#121110]">
                {copy.home.reviewsTitle}
              </h2>
              <div className="mt-8 grid gap-4">
                {marketingContent.reviews.map((review) => (
                  <article key={review.name} className="rounded-[24px] bg-[#f3f2ef] p-5">
                    <p className="text-sm leading-7 text-[#504a41]">
                      &quot;{review.quote}&quot;
                    </p>
                    <p className="mt-4 text-sm font-semibold text-[#121110]">
                      {review.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.16em] text-[#918a7e]">
                      {review.role}
                    </p>
                  </article>
                ))}
              </div>
            </div>

            <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_24px_90px_rgba(18,17,16,0.06)] sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1b5e20]">
                {copy.home.partnersKicker}
              </p>
              <h2 className="mt-2 text-4xl font-semibold tracking-tight text-[#121110]">
                {copy.home.partnersTitle}
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {marketingContent.partners.map((partner) => (
                  <article
                    key={partner.name}
                    className="rounded-[24px] bg-[#fafaf8] p-5"
                  >
                    <p className="text-lg font-semibold text-[#121110]">
                      {partner.name}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[#6b6358]">
                      {partner.detail}
                    </p>
                  </article>
                ))}
              </div>
              <div className="mt-8 rounded-[24px] bg-[#0d3b12] p-6 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f2c12e]">
                  {copy.home.follow}
                </p>
                <div className="mt-4 flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-semibold transition hover:bg-white/14"
                    >
                      <SocialIcon kind={social.icon} className="h-4 w-4" />
                      {social.handle}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_24px_90px_rgba(18,17,16,0.06)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1b5e20]">
              {copy.home.pricingKicker}
            </p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-[#121110]">
              {copy.home.pricingTitle}
            </h2>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {marketingContent.pricingTiers.map((tier) => (
                <article
                  key={tier.name}
                  className="rounded-[26px] border border-black/5 bg-[#fafaf8] p-6"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1b5e20]">
                    {tier.name}
                  </p>
                  <h3 className="mt-3 text-3xl font-semibold text-[#121110]">
                    {tier.price}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#6b6358]">
                    {tier.description}
                  </p>
                  <div className="mt-5 grid gap-3">
                    {tier.features.map((feature) => (
                      <div
                        key={feature}
                        className="rounded-[18px] bg-white px-4 py-3 text-sm text-[#504a41]"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_24px_90px_rgba(18,17,16,0.06)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1b5e20]">
              {copy.home.faqKicker}
            </p>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-[#121110]">
              {copy.home.faqTitle}
            </h2>
            <div className="mt-8 grid gap-4">
              {marketingContent.faqItems.map((item) => (
                <article key={item.question} className="rounded-[24px] bg-[#f3f2ef] p-5">
                  <h3 className="text-xl font-semibold text-[#121110]">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#6b6358]">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
