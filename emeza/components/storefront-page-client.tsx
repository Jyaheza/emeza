"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { SiteHeader } from "@/components/site-header";
import type { Storefront } from "@/lib/mock-data";

function getProductScene(title: string) {
  if (title.toLowerCase().includes("tote")) {
    return {
      gradient: "from-[#e4d0b9] via-[#f4eadf] to-[#d7c1a5]",
      badgeTone: "bg-[#fff6ee] text-[#9a4f1f]",
      lines: ["Ukoresha buri munsi", "Bikwiriye akazi n'impano"],
      shape: (
        <>
          <div className="absolute left-1/2 top-10 h-28 w-20 -translate-x-1/2 rounded-[28px] border-2 border-[#7a4c2d] bg-[#8e5a38]" />
          <div className="absolute left-1/2 top-6 h-14 w-14 -translate-x-1/2 rounded-full border-2 border-[#7a4c2d]" />
          <div className="absolute bottom-5 left-5 right-5 rounded-[20px] bg-white/70 p-3 backdrop-blur-sm">
            <div className="h-3 w-24 rounded-full bg-[#8e5a38]/70" />
            <div className="mt-2 h-2 w-32 rounded-full bg-[#8e5a38]/25" />
          </div>
        </>
      ),
    };
  }

  if (title.toLowerCase().includes("weekend")) {
    return {
      gradient: "from-[#d05d4e] via-[#f2bc8f] to-[#f6dfc2]",
      badgeTone: "bg-[#fff4e8] text-[#b35a2d]",
      lines: ["Set yiteguye weekend", "Isura ikurura amaso"],
      shape: (
        <>
          <div className="absolute left-10 top-10 h-24 w-16 rounded-[18px] bg-[#8d2f21]" />
          <div className="absolute left-8 top-28 h-20 w-20 rounded-[22px] bg-[#cb7047]" />
          <div className="absolute right-10 top-12 h-28 w-20 rounded-[22px] bg-[#f0d8b7]" />
          <div className="absolute bottom-5 left-5 right-5 rounded-[20px] bg-white/68 p-3 backdrop-blur-sm">
            <div className="h-3 w-20 rounded-full bg-[#8d2f21]/60" />
            <div className="mt-2 h-2 w-28 rounded-full bg-[#8d2f21]/20" />
          </div>
        </>
      ),
    };
  }

  return {
    gradient: "from-[#d8e5d1] via-[#f2f6ef] to-[#c7d6bf]",
    badgeTone: "bg-[#f1f7ee] text-[#35613a]",
    lines: ["Inkweto z'umunsi ku munsi", "Moto delivery irahari"],
    shape: (
      <>
        <div className="absolute left-8 top-20 h-14 w-28 rounded-[30px_30px_18px_18px] border border-[#4d654d]/20 bg-white/80" />
        <div className="absolute left-16 top-16 h-12 w-28 rounded-[28px_28px_16px_16px] border border-[#4d654d]/20 bg-[#7e9980]" />
        <div className="absolute right-8 top-24 h-12 w-28 rounded-[30px_30px_18px_18px] border border-[#4d654d]/20 bg-white/80" />
        <div className="absolute bottom-5 left-5 right-5 rounded-[20px] bg-white/70 p-3 backdrop-blur-sm">
          <div className="h-3 w-24 rounded-full bg-[#35613a]/60" />
          <div className="mt-2 h-2 w-32 rounded-full bg-[#35613a]/18" />
        </div>
      </>
    ),
  };
}

export function StorefrontPageClient({ storefront }: { storefront: Storefront }) {
  const { copy, language } = useLanguage();

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_24px_90px_rgba(18,17,16,0.06)] sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[linear-gradient(135deg,#81c784,#2e7d32)] text-3xl font-semibold text-white">
                J
              </div>
              <h1 className="mt-5 text-5xl font-semibold tracking-tight text-[#121110]">
                {storefront.businessName}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#6b6358]">
                {storefront.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={storefront.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-[#2e7d32] px-5 py-3 text-sm font-semibold text-white"
                >
                  {copy.storefront.whatsapp}
                </a>
                <Link
                  href="/deal/new"
                  className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[#1b5e20]"
                >
                  {copy.storefront.startDeal}
                </Link>
              </div>
            </div>

            <div className="rounded-[28px] bg-[#f3f2ef] p-6">
              <div className="grid gap-3 text-sm text-[#504a41]">
                <div className="rounded-[20px] bg-white px-4 py-3">
                  <strong className="text-[#121110]">{copy.storefront.city}:</strong>{" "}
                  {storefront.city}
                </div>
                <div className="rounded-[20px] bg-white px-4 py-3">
                  <strong className="text-[#121110]">
                    {copy.storefront.responseTime}:
                  </strong>{" "}
                  {storefront.responseTime}
                </div>
                <div className="rounded-[20px] bg-white px-4 py-3">
                  <strong className="text-[#121110]">
                    {copy.storefront.trustSignal}:
                  </strong>{" "}
                  {storefront.rating}
                </div>
                <div className="rounded-[20px] bg-white px-4 py-3">
                  <strong className="text-[#121110]">
                    {copy.storefront.trackRecord}:
                  </strong>{" "}
                  {storefront.fulfilledOrders}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-[32px] border border-black/5 bg-white p-6 shadow-[0_18px_70px_rgba(18,17,16,0.05)] sm:p-8">
          <div className="grid gap-4 md:grid-cols-3">
            {copy.storefront.protectedItems.map((item) => (
              <div
                key={item}
                className="rounded-[24px] bg-[#f3f2ef] p-5 text-sm leading-7 text-[#504a41]"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {storefront.products.map((product) => (
            (() => {
              const scene = getProductScene(product.title);

              return (
                <article
                  key={product.id}
                  className="rounded-[28px] border border-black/5 bg-white p-5 shadow-[0_18px_70px_rgba(18,17,16,0.05)]"
                >
                  <div
                    className={`relative flex h-56 items-end overflow-hidden rounded-[24px] bg-gradient-to-br ${scene.gradient} p-5`}
                  >
                    <div className="absolute -right-4 top-3 h-24 w-24 rounded-full bg-white/30 blur-2xl" />
                    <div className="absolute left-4 top-4 rounded-full border border-white/60 bg-white/70 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#121110]">
                      {product.categoryLabel}
                    </div>
                    {scene.shape}
                    <div className="relative z-10 flex w-full items-end justify-between gap-3">
                      <div className="max-w-[70%]">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#121110]/55">
                          {language === "rw" ? "Isura ya storefront" : "Storefront mood"}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-2">
                          {scene.lines.map((line) => (
                            <span
                              key={line}
                              className={`rounded-full px-3 py-1.5 text-[11px] font-semibold ${scene.badgeTone}`}
                            >
                              {line}
                            </span>
                          ))}
                        </div>
                      </div>
                      <span className="font-mono text-sm text-[#37322b]">
                        {product.price}
                      </span>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-3xl font-semibold text-[#121110]">
                          {product.title}
                        </h2>
                        <p className="mt-2 text-sm leading-7 text-[#6b6358]">
                          {product.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-5 grid gap-2 text-sm text-[#6b6358]">
                      <div>{product.deliveryEstimate}</div>
                      <div>{product.stockNote}</div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-3">
                      <Link
                        href={`/store/${storefront.slug}/products/${product.id}`}
                        className="rounded-full bg-[#2e7d32] px-5 py-3 text-sm font-semibold text-white"
                      >
                        View details
                      </Link>
                      <Link
                        href="/track/sample-order-token"
                        className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[#1b5e20]"
                      >
                        {copy.storefront.trackOrder}
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })()
          ))}
        </section>
      </main>
    </>
  );
}
