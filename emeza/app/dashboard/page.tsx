"use client";

import { useLanguage } from "@/components/language-provider";
import { SellerShell } from "@/components/seller-shell";
import { dashboardOrders, sellerMetrics } from "@/lib/app-data";

export default function DashboardPage() {
  const { copy } = useLanguage();

  return (
    <SellerShell
      title={copy.dashboard.overviewTitle}
      description={copy.dashboard.overviewDescription}
    >
      <div className="grid gap-4 md:grid-cols-3">
        {sellerMetrics.map((item) => (
          <article
            key={item.label}
            className="rounded-[24px] border border-black/5 bg-white p-6 shadow-[0_16px_50px_rgba(18,17,16,0.05)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#918a7e]">
              {item.label}
            </p>
            <p className="mt-2 font-mono text-2xl text-[#121110]">{item.value}</p>
            <p className="mt-2 text-sm text-[#2e7d32]">{item.change}</p>
          </article>
        ))}
      </div>

      <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_18px_60px_rgba(18,17,16,0.05)]">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#1b5e20]">
              {copy.dashboard.recentOrders}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-[#121110]">
              {copy.dashboard.attention}
            </h2>
          </div>
        </div>

        <div className="mt-6 grid gap-4">
          {dashboardOrders.map((order) => (
            <article key={order.id} className="rounded-[22px] bg-[#fafaf8] p-5">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#121110]">
                    {order.product}
                  </h3>
                  <p className="mt-1 text-sm text-[#6b6358]">
                    {order.buyer} · {order.amount}
                  </p>
                </div>
                <span className="w-fit rounded-full bg-[#fffde7] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8d6e18]">
                  {order.status}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </SellerShell>
  );
}
