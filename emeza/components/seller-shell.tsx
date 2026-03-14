"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useLanguage } from "@/components/language-provider";

export function SellerShell({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { copy } = useLanguage();
  const items = [
    { href: "/dashboard", label: copy.dashboard.overview },
    { href: "/dashboard/orders", label: copy.dashboard.orders },
    { href: "/dashboard/products", label: copy.dashboard.products },
    { href: "/dashboard/earnings", label: copy.dashboard.earnings },
    { href: "/settings", label: copy.dashboard.settings },
  ];

  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[28px] border border-black/5 bg-[#0d3b12] text-white shadow-[0_24px_90px_rgba(18,17,16,0.12)]">
          <div className="flex flex-col gap-5 px-6 py-8 lg:flex-row lg:items-end lg:justify-between lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#f2c12e]">
                {copy.dashboard.sellerApp}
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
                {title}
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 sm:text-base">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/store/joyce-style"
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0d3b12]"
              >
                {copy.dashboard.viewStorefront}
              </Link>
              <Link
                href="/deal/new"
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white"
              >
                {copy.dashboard.startDeal}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-6 lg:grid lg:grid-cols-[240px_minmax(0,1fr)]">
          <aside className="rounded-[24px] border border-black/5 bg-white p-3 shadow-[0_18px_60px_rgba(18,17,16,0.06)]">
            <nav className="grid gap-2">
              {items.map((item) => {
                const active =
                  pathname === item.href ||
                  (item.href !== "/dashboard" && pathname.startsWith(item.href));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                      active
                        ? "bg-[#e8f5e9] text-[#1b5e20]"
                        : "text-[#504a41] hover:bg-[#f3f2ef]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>

          <section className="grid gap-6">{children}</section>
        </div>
      </div>
    </div>
  );
}
