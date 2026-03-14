"use client";

import Link from "next/link";
import { use } from "react";

import { useLanguage } from "@/components/language-provider";
import { SiteHeader } from "@/components/site-header";

type TrackingPageProps = {
  params: Promise<{
    token: string;
  }>;
};

export default function TrackingPage({ params }: TrackingPageProps) {
  const { token } = use(params);
  const { copy, language } = useLanguage();
  const updates =
    language === "rw"
      ? [
          {
            title: "Order yakiriwe",
            body: "Ubwishyu bwawe bubitswe neza na Emeza kugeza igihe uzemeza ko ibyo waguze byageze.",
            time: "2:31 PM",
          },
          {
            title: "Order yoherejwe",
            body: "Umucuruzi yavuze ko order yawe yoherejwe kandi iri mu nzira.",
            time: "5:42 PM",
          },
          {
            title: "Icyibutsa",
            body: "Ibintu byawe byageze? Emeza mbere y'amasaha 23 kugira ngo payout ibe yasohoka.",
            time: "10:15 AM",
          },
        ]
      : [
          {
            title: "Order confirmed",
            body: "Your payment is held safely by Emeza until you confirm that the order arrived as promised.",
            time: "2:31 PM",
          },
          {
            title: "Order shipped",
            body: "The seller marked your order as shipped and you can continue to track it from this page.",
            time: "5:42 PM",
          },
          {
            title: "Reminder",
            body: "Has your order arrived? Confirm within 23 hours or the payment will auto-release to the seller.",
            time: "10:15 AM",
          },
        ];

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_24px_90px_rgba(18,17,16,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1b5e20]">
            {copy.tracking.kicker}
          </p>
          <h1 className="mt-3 text-5xl font-semibold tracking-tight text-[#121110]">
            {copy.tracking.title}
          </h1>
          <div className="mt-8 rounded-[24px] bg-[#f3f2ef] p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#918a7e]">
              {copy.tracking.trackingToken}
            </p>
            <p className="mt-2 font-mono text-lg text-[#121110]">{token}</p>
          </div>
          <div className="mt-6 space-y-4">
            {copy.tracking.steps.map((item, index) => (
              <div key={item} className="flex gap-4 rounded-[24px] bg-[#fafaf8] p-5">
                <span className={`mt-1 h-4 w-4 rounded-full ${index < 2 ? "bg-[#2e7d32]" : "bg-[#d9d6cf]"}`} />
                <div>
                  <p className="font-semibold text-[#121110]">{item}</p>
                  <p className="mt-1 text-sm text-[#6b6358]">
                    {copy.tracking.stepHint}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 rounded-[28px] bg-[#0d3b12] p-6 text-white">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f2c12e]">
              WhatsApp updates
            </p>
            <div className="mt-5 space-y-4">
              {updates.map((update) => (
                <article
                  key={update.title}
                  className="max-w-[90%] rounded-[20px] bg-[#dcf8c6] px-4 py-4 text-[#121110]"
                >
                  <p className="text-sm font-semibold">{update.title}</p>
                  <p className="mt-2 text-sm leading-7">{update.body}</p>
                  <p className="mt-3 text-right text-xs text-[#6b8e5b]">
                    {update.time}
                  </p>
                </article>
              ))}
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/deal/new"
              className="rounded-full bg-[#2e7d32] px-5 py-3 text-sm font-semibold text-white"
            >
              {copy.tracking.confirm}
            </Link>
            <Link
              href={`/track/${token}/dispute`}
              className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[#1b5e20]"
            >
              {copy.tracking.report}
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
