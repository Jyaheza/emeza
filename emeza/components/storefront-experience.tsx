"use client";

import { startTransition, useState } from "react";

import type { Product, Storefront } from "@/lib/mock-data";

type StorefrontExperienceProps = {
  storefront: Storefront;
};

type CheckoutResult = {
  orderId: string;
  totalAmountRwf: number;
  feeRwf: number;
  sellerReceivesRwf: number;
  flutterwavePlaceholderMessage: string;
  persisted: boolean;
  persistenceMode: string;
};

export function StorefrontExperience({
  storefront,
}: StorefrontExperienceProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [buyerName, setBuyerName] = useState("");
  const [buyerPhone, setBuyerPhone] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [checkoutResult, setCheckoutResult] = useState<CheckoutResult | null>(
    null,
  );
  const [error, setError] = useState<string | null>(null);

  function openCheckout(product: Product) {
    setSelectedProduct(product);
    setCheckoutResult(null);
    setError(null);
  }

  function closeCheckout() {
    setSelectedProduct(null);
    setCheckoutResult(null);
    setError(null);
  }

  function submitCheckout() {
    if (!selectedProduct) return;

    setLoading(true);
    setError(null);

    startTransition(async () => {
      try {
        const response = await fetch("/api/payments/initiate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            sellerSlug: storefront.slug,
            productId: selectedProduct.id,
            buyerName,
            buyerPhone,
            quantity,
          }),
        });

        const payload = (await response.json()) as CheckoutResult & {
          error?: string;
        };

        if (!response.ok) {
          setError(payload.error ?? "Unable to start checkout right now.");
          return;
        }

        setCheckoutResult(payload);
      } catch {
        setError("Checkout could not start. Please try again.");
      } finally {
        setLoading(false);
      }
    });
  }

  return (
    <>
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {storefront.products.map((product) => (
          <article
            key={product.id}
            className="rounded-[1.9rem] border border-slate-200 bg-white p-5 shadow-[0_22px_70px_rgba(13,59,36,0.06)]"
          >
            <div className="rounded-[1.5rem] bg-[#F0F7F3] p-5">
              <div className="flex h-44 flex-col justify-between rounded-[1.3rem] bg-[linear-gradient(145deg,_#cce5d4,_#ffffff)] p-5">
                <span className="w-fit rounded-full bg-white px-3 py-2 text-xs font-semibold text-[#1B7A4A] shadow-sm">
                  {product.categoryLabel}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#0D3B24]">
                    {product.deliveryEstimate}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-500">
                    {product.stockNote}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-bold text-[#0D3B24]">
                    {product.title}
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-slate-500">
                    {product.description}
                  </p>
                </div>
                <span className="rounded-full bg-[#fff7df] px-3 py-2 text-sm font-semibold text-[#8b6b22]">
                  {product.price}
                </span>
              </div>

              <div className="mt-5 grid gap-3">
                <button
                  type="button"
                  onClick={() => openCheckout(product)}
                  className="rounded-full bg-[#1B7A4A] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#15613b]"
                >
                  Buy with protection
                </button>
                <a
                  href={storefront.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-200 px-4 py-3 text-center text-sm font-semibold text-[#0D3B24] transition hover:border-[#1B7A4A] hover:text-[#1B7A4A]"
                >
                  Message seller on WhatsApp
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      {selectedProduct ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#06130d]/55 p-4">
          <div className="w-full max-w-xl rounded-[2rem] bg-white p-6 shadow-[0_40px_120px_rgba(0,0,0,0.28)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1B7A4A]">
                  Protected checkout
                </p>
                <h2 className="mt-2 text-3xl font-bold text-[#0D3B24]">
                  {selectedProduct.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  Your money stays protected until you confirm that your order
                  has arrived.
                </p>
              </div>
              <button
                type="button"
                onClick={closeCheckout}
                className="rounded-full bg-[#F0F7F3] px-3 py-2 text-sm font-semibold text-[#1B7A4A]"
              >
                Close
              </button>
            </div>

            {!checkoutResult ? (
              <div className="mt-6 space-y-4">
                <label className="block">
                  <span className="text-sm font-semibold text-[#0D3B24]">
                    Your name
                  </span>
                  <input
                    value={buyerName}
                    onChange={(event) => setBuyerName(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0 transition focus:border-[#1B7A4A]"
                    placeholder="Aline Mukamana"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-[#0D3B24]">
                    MTN MoMo or Airtel Money number
                  </span>
                  <input
                    value={buyerPhone}
                    onChange={(event) => setBuyerPhone(event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0 transition focus:border-[#1B7A4A]"
                    placeholder="0788 123 456"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-semibold text-[#0D3B24]">
                    Quantity
                  </span>
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(event) =>
                      setQuantity(Math.max(Number(event.target.value || 1), 1))
                    }
                    className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0 transition focus:border-[#1B7A4A]"
                  />
                </label>

                <div className="rounded-[1.5rem] bg-[#F0F7F3] p-4">
                  <div className="flex items-center justify-between text-sm text-slate-600">
                    <span>Item total</span>
                    <span className="font-semibold text-[#0D3B24]">
                      RWF{" "}
                      {new Intl.NumberFormat("en-US").format(
                        selectedProduct.priceRwf * quantity,
                      )}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-500">
                    Emeza only releases money after the buyer confirms receipt
                    or the confirmation window expires.
                  </p>
                </div>

                {error ? (
                  <div className="rounded-2xl bg-[#fff4f1] px-4 py-3 text-sm text-[#9b3a24]">
                    {error}
                  </div>
                ) : null}

                <button
                  type="button"
                  onClick={submitCheckout}
                  disabled={loading || !buyerPhone.trim()}
                  className="w-full rounded-full bg-[#1B7A4A] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#15613b] disabled:cursor-not-allowed disabled:opacity-55"
                >
                  {loading ? "Starting checkout..." : "Continue to payment"}
                </button>
              </div>
            ) : (
              <div className="mt-6 space-y-4">
                <div className="rounded-[1.6rem] border border-[#D4A843] bg-[#fff8e8] p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8b6b22]">
                    Payment step placeholder
                  </p>
                  <p className="mt-2 text-2xl font-bold text-[#0D3B24]">
                    {checkoutResult.flutterwavePlaceholderMessage}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Once the sandbox is switched on, this modal will redirect to
                    Flutterwave instead of stopping here.
                  </p>
                </div>

                <div className="grid gap-3 rounded-[1.6rem] bg-[#F0F7F3] p-5 sm:grid-cols-2">
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Order ID
                    </p>
                    <p className="mt-1 font-semibold text-[#0D3B24]">
                      {checkoutResult.orderId}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Payment total
                    </p>
                    <p className="mt-1 font-semibold text-[#0D3B24]">
                      RWF{" "}
                      {new Intl.NumberFormat("en-US").format(
                        checkoutResult.totalAmountRwf,
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Emeza fee
                    </p>
                    <p className="mt-1 font-semibold text-[#0D3B24]">
                      RWF{" "}
                      {new Intl.NumberFormat("en-US").format(
                        checkoutResult.feeRwf,
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-500">
                      Persistence
                    </p>
                    <p className="mt-1 font-semibold text-[#0D3B24]">
                      {checkoutResult.persisted
                        ? "Saved to Supabase"
                        : checkoutResult.persistenceMode}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
