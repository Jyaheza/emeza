"use client";

import { notFound, useParams } from "next/navigation";

import { useLanguage } from "@/components/language-provider";
import { SellerShell } from "@/components/seller-shell";
import { dashboardOrders } from "@/lib/app-data";

function translateOrderStatus(status: string, language: "rw" | "en") {
  if (language === "en") {
    return status;
  }

  const labels: Record<string, string> = {
    "Payment held": "Ubwishyu burabitswe",
    "Buyer confirmed": "Umuguzi yemeje",
    "Ready for delivery": "Yiteguye koherezwa",
  };

  return labels[status] ?? status;
}

function translateTimelineLabel(label: string, language: "rw" | "en") {
  if (language === "en") {
    return label;
  }

  const labels: Record<string, string> = {
    "Buyer paid": "Umuguzi yishyuye",
    "Seller preparing order": "Umucuruzi ari gutegura order",
    "Buyer confirms receipt": "Umuguzi aremeza ko byageze",
    "Payout delivered": "Payout yoherejwe",
    "Seller delivered": "Umucuruzi yohereje order",
    "Buyer confirmed": "Umuguzi yemeje",
  };

  return labels[label] ?? label;
}

function translateTimelineTime(time: string, language: "rw" | "en") {
  if (language === "en") {
    return time;
  }

  const labels: Record<string, string> = {
    "Today, 2:30 PM": "Uyu munsi, 2:30 PM",
    Now: "Ubu",
    Waiting: "Hategerejwe",
    Yesterday: "Ejo hashize",
    "Today, 9:10 AM": "Uyu munsi, 9:10 AM",
    Processing: "Birimo gutunganywa",
    "Today, 11:05 AM": "Uyu munsi, 11:05 AM",
    Packed: "Byapfunyitswe",
  };

  return labels[time] ?? time;
}

export default function OrderDetailPage() {
  const { id } = useParams<{ id: string }>();
  const { copy, language } = useLanguage();
  const order = dashboardOrders.find((item) => item.id === id);

  if (!order) {
    notFound();
  }

  return (
    <SellerShell
      title={order.product}
      description={
        language === "rw"
          ? "Reba aho order igeze, igihe payout izarekurirwa n'intambwe umuguzi amaze kwemeza."
          : "See order progress, payout timing, and the buyer confirmation milestones in one place."
      }
    >
      <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_18px_60px_rgba(18,17,16,0.05)]">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm text-[#6b6358]">
              {language === "rw" ? "Umuguzi" : "Buyer"}: {order.buyer}
            </p>
            <h2 className="mt-1 text-3xl font-semibold text-[#121110]">
              {order.amount}
            </h2>
          </div>
          <span className="w-fit rounded-full bg-[#fffde7] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#8d6e18]">
            {translateOrderStatus(order.status, language)}
          </span>
        </div>

        <div className="mt-8 rounded-[24px] bg-[#fafaf8] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#1b5e20]">
            {language === "rw" ? "Urugendo rwa order" : "Order journey"}
          </p>
          <div className="mt-5 grid gap-4">
            {order.timeline.map((step) => (
              <div key={step.label} className="flex gap-4 rounded-[22px] bg-white p-5">
                <span
                  className={`mt-1 h-4 w-4 rounded-full ${
                    step.state === "done"
                      ? "bg-[#2e7d32]"
                      : step.state === "current"
                        ? "bg-[#f2c12e]"
                        : "bg-[#d9d6cf]"
                  }`}
                />
                <div>
                  <p className="font-semibold text-[#121110]">
                    {translateTimelineLabel(step.label, language)}
                  </p>
                  <p className="mt-1 text-sm text-[#6b6358]">
                    {translateTimelineTime(step.time, language)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <div className="rounded-[24px] bg-[#f3f2ef] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#918a7e]">
              {language === "rw" ? "Icyitonderwa" : "Quick note"}
            </p>
            <p className="mt-3 text-sm leading-7 text-[#504a41]">
              {language === "rw"
                ? "Amafaranga azarekurwa nyuma y'uko umuguzi yemeje cyangwa dispute ikaba nta kibazo yasanze."
                : "Funds will move after buyer confirmation or once the review path closes with no dispute issue."}
            </p>
          </div>
          <div className="rounded-[24px] bg-[#f3f2ef] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#918a7e]">
              {copy.dashboard.attention}
            </p>
            <p className="mt-3 text-sm leading-7 text-[#504a41]">
              {language === "rw"
                ? "Sangiza buyer tracking link kandi usubize vuba kuri WhatsApp kugira ngo confidence igume hejuru."
                : "Share the tracking link with the buyer and keep WhatsApp replies fast so trust stays high."}
            </p>
          </div>
        </div>
      </div>
    </SellerShell>
  );
}
