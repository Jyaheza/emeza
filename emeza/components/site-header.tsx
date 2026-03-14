"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";

export function SiteHeader() {
  const { language, setLanguage, copy } = useLanguage();
  const navigation = [
    { href: "/", label: copy.nav.home },
    { href: "/how-it-works", label: copy.nav.howItWorks },
    { href: "/contact", label: copy.nav.contact },
    { href: "/sell", label: copy.nav.forSellers },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[rgba(243,242,239,0.9)] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 text-[#0f2b11]">
          <span className="font-[600] tracking-[0.18em] uppercase text-sm">
            Emeza
          </span>
          <span className="hidden h-2 w-2 rounded-full bg-[#e8453c] sm:block" />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#504a41] hover:text-[#1b5e20]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="rounded-full border border-black/10 bg-white p-1">
            <button
              type="button"
              onClick={() => setLanguage("rw")}
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] sm:px-3 sm:text-xs ${
                language === "rw"
                  ? "bg-[#1b5e20] text-white"
                  : "text-[#504a41]"
              }`}
            >
              RW
            </button>
            <button
              type="button"
              onClick={() => setLanguage("en")}
              className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] sm:px-3 sm:text-xs ${
                language === "en"
                  ? "bg-[#1b5e20] text-white"
                  : "text-[#504a41]"
              }`}
            >
              EN
            </button>
          </div>
          <Link
            href="/dashboard"
            className="hidden rounded-full border border-[#1b5e20]/15 px-4 py-2 text-sm font-semibold text-[#1b5e20] lg:inline-flex"
          >
            {copy.nav.dashboard}
          </Link>
          <Link
            href="/deal/new"
            className="rounded-full bg-[#2e7d32] px-3 py-2 text-xs font-semibold text-white sm:px-4 sm:text-sm"
          >
            {copy.nav.startDeal}
          </Link>
        </div>
      </div>
    </header>
  );
}
