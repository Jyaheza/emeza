"use client";

import Link from "next/link";

import { useLanguage } from "@/components/language-provider";
import { SellerShell } from "@/components/seller-shell";

export default function SettingsPage() {
  const { copy, language } = useLanguage();
  const settingsGroups =
    language === "rw"
      ? [
          {
            title: "Shop",
            rows: [
              ["Izina rya shop", "Joyce Style"],
              ["Theme", "Urugo"],
              ["Bio", "Genzura"],
            ],
          },
          {
            title: "Payment",
            rows: [["Nimero ya MoMo", "Yemejwe"]],
          },
          {
            title: "Account",
            rows: [
              ["Ururimi", "RW / EN"],
              ["Notifications", "WhatsApp"],
            ],
          },
          {
            title: "Support",
            rows: [
              ["Ubufasha", "Fungura"],
              ["Amategeko", "Fungura"],
              ["Amakuru bwite", "Fungura"],
            ],
          },
        ]
      : [
          {
            title: "Shop",
            rows: [
              ["Shop name", "Joyce Style"],
              ["Theme", "Urugo"],
              ["Bio", "Edit"],
            ],
          },
          {
            title: "Payment",
            rows: [["MoMo number", "Verified"]],
          },
          {
            title: "Account",
            rows: [
              ["Language", "RW / EN"],
              ["Notifications", "WhatsApp"],
            ],
          },
          {
            title: "Support",
            rows: [
              ["Help / Contact", "Open"],
              ["Terms", "Open"],
              ["Privacy", "Open"],
            ],
          },
        ];

  return (
    <SellerShell
      title={copy.dashboard.settingsTitle}
      description={copy.dashboard.settingsDescription}
    >
      <div className="grid gap-5">
        {settingsGroups.map((group) => (
          <section
            key={group.title}
            className="rounded-[24px] border border-black/5 bg-white p-5 shadow-[0_18px_60px_rgba(18,17,16,0.05)]"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#918a7e]">
              {group.title}
            </p>
            <div className="mt-4 grid gap-3">
              {group.rows.map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 rounded-[18px] bg-[#f3f2ef] px-4 py-4"
                >
                  <p className="text-sm text-[#6b6358]">{label}</p>
                  <p className="text-sm font-semibold text-[#121110]">{value}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
        <Link
          href="/settings/momo"
          className="rounded-[24px] border border-black/5 bg-white p-5 text-xl font-semibold text-[#121110] shadow-[0_18px_60px_rgba(18,17,16,0.05)]"
        >
          {copy.dashboard.verifyMomo}
        </Link>
      </div>
    </SellerShell>
  );
}
