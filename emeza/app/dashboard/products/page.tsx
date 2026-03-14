"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { SellerShell } from "@/components/seller-shell";
import { products } from "@/lib/app-data";

export default function ProductsPage() {
  const { copy, language } = useLanguage();

  return (
    <SellerShell
      title={copy.dashboard.productTitle}
      description={copy.dashboard.productDescription}
    >
      <div className="flex justify-end">
        <Link
          href="/dashboard/products/new"
          className="rounded-full bg-[#2e7d32] px-5 py-3 text-sm font-semibold text-white"
        >
          {copy.dashboard.addProduct}
        </Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.id}
            className="rounded-[26px] border border-black/5 bg-white p-5 shadow-[0_18px_60px_rgba(18,17,16,0.05)]"
          >
            <div className="flex h-40 items-center justify-center rounded-[22px] bg-[#f3f2ef] text-4xl font-semibold text-[#1b5e20]">
              {product.icon}
            </div>
            <h2 className="mt-4 text-2xl font-semibold text-[#121110]">
              {product.name}
            </h2>
            <p className="mt-2 font-mono text-sm text-[#504a41]">{product.price}</p>
            <span className="mt-4 inline-flex rounded-full bg-[#e8f5e9] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1b5e20]">
              {product.status}
            </span>
            <div className="mt-5 flex gap-2">
              <span className="rounded-full bg-[#f3f2ef] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6358]">
                {language === "rw" ? "Bigaragara" : "Visible"}
              </span>
              <span className="rounded-full bg-[#f3f2ef] px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#6b6358]">
                {language === "rw" ? "Storefront" : "Storefront"}
              </span>
            </div>
          </article>
        ))}
      </div>
    </SellerShell>
  );
}
