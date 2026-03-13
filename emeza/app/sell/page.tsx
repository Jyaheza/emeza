import Link from "next/link";

import { SellerOnboarding } from "@/components/seller-onboarding";

export default function SellPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f5fbf6_0%,_#ffffff_40%)] px-6 py-8 lg:px-10">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <section className="rounded-[2rem] bg-[#0D3B24] p-8 text-white shadow-[0_30px_90px_rgba(13,59,36,0.16)]">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D4A843]">
            Emeza for sellers
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Turn your WhatsApp sales into trusted checkouts.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-white/76">
            Share one storefront link in your bio, accept mobile money with
            buyer protection, and only get paid when your customer confirms.
          </p>

          <div className="mt-8 grid gap-4">
            {[
              "Protected orders instead of risky manual MoMo transfers",
              "A storefront you can share on Instagram, TikTok, and WhatsApp",
              "Clear order status from payment held to payout delivered",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/7 px-4 py-4 text-sm leading-6 text-white/82"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/dashboard"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0D3B24]"
            >
              View seller dashboard
            </Link>
            <Link
              href="/store/joyce-style"
              className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white"
            >
              View buyer storefront
            </Link>
          </div>
        </section>

        <SellerOnboarding />
      </div>
    </main>
  );
}
