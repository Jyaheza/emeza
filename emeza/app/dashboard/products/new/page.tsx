"use client";

import { useLanguage } from "@/components/language-provider";
import { SellerShell } from "@/components/seller-shell";

export default function NewProductPage() {
  const { copy, language } = useLanguage();

  return (
    <SellerShell
      title={copy.dashboard.newProductTitle}
      description={copy.dashboard.newProductDescription}
    >
      <div className="rounded-[28px] border border-black/5 bg-white p-6 shadow-[0_18px_60px_rgba(18,17,16,0.05)]">
        <div className="grid gap-6 lg:grid-cols-[0.7fr_1fr]">
          <div className="flex min-h-[260px] flex-col items-center justify-center rounded-[24px] border-2 border-dashed border-[#d9d6cf] bg-[#fafaf8] px-6 text-center">
            <div className="grid w-full max-w-[220px] gap-3">
              <div className="h-24 rounded-[24px] bg-[linear-gradient(145deg,#d6e4cd,#f8fbf5)]" />
              <div className="grid grid-cols-2 gap-3">
                <div className="h-16 rounded-[18px] bg-[linear-gradient(145deg,#f4d2b8,#fff0e4)]" />
                <div className="h-16 rounded-[18px] bg-[linear-gradient(145deg,#cddbc3,#edf4e7)]" />
              </div>
            </div>
            <p className="mt-5 text-sm font-semibold text-[#121110]">
              {copy.dashboard.addPhotos}
            </p>
            <p className="mt-2 text-sm leading-7 text-[#918a7e]">
              {language === "rw"
                ? "Shyiraho amafoto asobanutse agaragaza igicuruzwa, ibara n'uko gisa neza."
                : "Add clear product photos that show the item, color, and the feeling buyers should expect."}
            </p>
          </div>
          <div className="grid gap-4">
            {[
              copy.dashboard.productName,
              copy.dashboard.productDescriptionLabel,
              copy.dashboard.priceLabel,
              copy.dashboard.categoryLabel,
            ].map(
              (label) => (
                <label key={label} className="grid gap-2">
                  <span className="text-sm font-semibold text-[#121110]">
                    {label}
                  </span>
                  <input className="rounded-2xl border border-black/10 px-4 py-3 outline-none" />
                </label>
              ),
            )}
          </div>
        </div>
      </div>
    </SellerShell>
  );
}
