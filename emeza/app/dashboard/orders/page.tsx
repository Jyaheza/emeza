"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { SellerShell } from "@/components/seller-shell";
import { dashboardOrders } from "@/lib/app-data";

export default function OrdersPage() {
  const { copy, language } = useLanguage();

  return (
    <SellerShell
      title={copy.dashboard.ordersTitle}
      description={copy.dashboard.ordersDescription}
    >
      <div className="grid gap-4">
        {dashboardOrders.map((order) => (
          <Link
            key={order.id}
            href={`/dashboard/orders/${order.id}`}
            className="rounded-[26px] border border-black/5 bg-white p-6 shadow-[0_18px_60px_rgba(18,17,16,0.05)]"
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-[#121110]">
                  {order.product}
                </h2>
                <p className="mt-2 text-sm leading-7 text-[#6b6358]">
                  {language === "rw" ? "Umuguzi" : "Buyer"}: {order.buyer} ·{" "}
                  {language === "rw" ? "Agaciro" : "Value"}: {order.amount}
                </p>
              </div>
              <span className="w-fit rounded-full bg-[#e8f5e9] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#1b5e20]">
                {order.status}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </SellerShell>
  );
}
