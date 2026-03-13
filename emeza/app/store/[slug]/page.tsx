import Link from "next/link";
import { notFound } from "next/navigation";

import { StorefrontExperience } from "@/components/storefront-experience";
import { getStorefrontBySlug } from "@/lib/storefronts";

type StorefrontPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function StorefrontPage({ params }: StorefrontPageProps) {
  const { slug } = await params;
  const storefront = await getStorefrontBySlug(slug);

  if (!storefront) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,_#f4faf6_0%,_#ffffff_35%)] px-6 py-8 lg:px-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="overflow-hidden rounded-[2rem] bg-[#0D3B24] text-white shadow-[0_32px_90px_rgba(13,59,36,0.16)]">
          <div className="grid gap-8 px-8 py-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D4A843]">
                {storefront.businessName}
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
                {storefront.headline}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/78">
                {storefront.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={storefront.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#0D3B24]"
                >
                  Message seller on WhatsApp
                </a>
                <Link
                  href="/sell"
                  className="rounded-full border border-white/18 px-5 py-3 text-sm font-semibold text-white"
                >
                  Sell with Emeza
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/8 p-6 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#D4A843]">
                Store details
              </p>
              <div className="mt-4 grid gap-3 text-sm leading-7 text-white/80">
                <div className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3">
                  <span className="font-semibold text-white">City:</span>{" "}
                  {storefront.city}
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3">
                  <span className="font-semibold text-white">Response:</span>{" "}
                  {storefront.responseTime}
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3">
                  <span className="font-semibold text-white">Proof:</span>{" "}
                  {storefront.rating}
                </div>
                <div className="rounded-2xl border border-white/8 bg-white/6 px-4 py-3">
                  <span className="font-semibold text-white">Track record:</span>{" "}
                  {storefront.fulfilledOrders}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-[1.8rem] border border-[#1B7A4A]/10 bg-white p-5 shadow-[0_18px_60px_rgba(13,59,36,0.05)]">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Payment is protected until buyer confirmation.",
              "If a delivery issue happens, the buyer can open a dispute.",
              "For physical goods, payment auto-releases after the review window.",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[#F0F7F3] p-4 text-sm leading-6 text-[#0D3B24]">
                {item}
              </div>
            ))}
          </div>
        </section>

        <StorefrontExperience storefront={storefront} />

        <div className="flex justify-between gap-4 rounded-[1.5rem] bg-white px-6 py-5 shadow-[0_18px_60px_rgba(13,59,36,0.05)]">
          <Link href="/" className="text-sm font-semibold text-[#1B7A4A]">
            Back to home
          </Link>
          <Link href="/dashboard" className="text-sm font-semibold text-[#1B7A4A]">
            Seller dashboard
          </Link>
        </div>
      </div>
    </main>
  );
}
