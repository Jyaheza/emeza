"use client";

import Link from "next/link";
import { use } from "react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type DisputePageProps = {
  params: Promise<{
    token: string;
  }>;
};

export default function DisputePage({ params }: DisputePageProps) {
  const { token } = use(params);

  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        <section className="rounded-[32px] border border-black/5 bg-white p-8 shadow-[0_24px_90px_rgba(18,17,16,0.06)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1b5e20]">
            Dispute filing
          </p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight text-[#121110]">
            Report a problem with this order
          </h1>
          <p className="mt-4 text-sm leading-8 text-[#6b6358]">
            If the order did not arrive or did not match what was promised, the
            buyer can file a dispute before funds are released.
          </p>

          <div className="mt-8 rounded-[24px] bg-[#fafaf8] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#918a7e]">
              Tracking token
            </p>
            <p className="mt-2 font-mono text-lg text-[#121110]">{token}</p>
          </div>

          <div className="mt-8 grid gap-3">
            {[
              "Did not receive the order",
              "Item does not match the photos",
              "Item arrived damaged",
              "Other",
            ].map((reason, index) => (
              <label
                key={reason}
                className={`flex items-center gap-4 rounded-[22px] border px-5 py-4 ${
                  index === 0
                    ? "border-[#2e7d32] bg-[#e8f5e9]"
                    : "border-black/10 bg-white"
                }`}
              >
                <span
                  className={`flex h-5 w-5 items-center justify-center rounded-full border ${
                    index === 0
                      ? "border-[#2e7d32] bg-[#2e7d32]"
                      : "border-[#b8b2a8]"
                  }`}
                >
                  {index === 0 ? (
                    <span className="h-2.5 w-2.5 rounded-full bg-white" />
                  ) : null}
                </span>
                <span className="text-sm text-[#121110]">{reason}</span>
              </label>
            ))}
          </div>

          <label className="mt-6 grid gap-2">
            <span className="text-sm font-semibold text-[#121110]">
              Add more context
            </span>
            <textarea
              rows={4}
              placeholder="Describe what happened..."
              className="rounded-[22px] border border-black/10 px-4 py-3 outline-none"
            />
          </label>

          <div className="mt-6 rounded-[24px] bg-[#e8f5e9] p-5 text-sm leading-7 text-[#1b5e20]">
            Your payment is frozen while Emeza reviews the issue. You are still
            protected.
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <button className="rounded-full bg-[#e8453c] px-6 py-3 text-sm font-semibold text-white">
              Submit report
            </button>
            <Link
              href={`/track/${token}`}
              className="rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-[#1b5e20]"
            >
              Back to tracking
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
