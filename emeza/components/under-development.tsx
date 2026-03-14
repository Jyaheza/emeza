"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";

export function UnderDevelopment({
  title,
  description,
}: {
  title?: string;
  description?: string;
}) {
  const { copy } = useLanguage();

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-16 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl rounded-[32px] border border-black/5 bg-white p-8 text-center shadow-[0_24px_90px_rgba(18,17,16,0.08)] sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#2e7d32]">
          Emeza
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-[#121110]">
          {title ?? copy.deal.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#6b6358]">
          {description ?? copy.deal.description}
        </p>
        <div className="mt-8 inline-flex rounded-full border border-[#f2c12e]/40 bg-[#fffde7] px-5 py-3 text-sm font-semibold text-[#8d6e18]">
          {copy.deal.still}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-[#2e7d32] px-5 py-3 text-sm font-semibold text-white"
          >
            {copy.deal.backHome}
          </Link>
          <Link
            href="/store/joyce-style"
            className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[#1b5e20]"
          >
            {copy.deal.browseStorefront}
          </Link>
        </div>
      </div>
    </div>
  );
}
