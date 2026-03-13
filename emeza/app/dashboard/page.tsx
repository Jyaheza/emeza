import Link from "next/link";

const orders = [
  {
    customer: "Aline M.",
    product: "Leather tote",
    amount: "RWF 48,000",
    status: "Payment held",
  },
  {
    customer: "Eric N.",
    product: "Weekend set",
    amount: "RWF 72,000",
    status: "Buyer confirmed",
  },
  {
    customer: "Claudine K.",
    product: "Low-top sneakers",
    amount: "RWF 64,000",
    status: "Ready for delivery",
  },
];

const metrics = [
  { label: "Protected sales", value: "RWF 3.4M" },
  { label: "Pending payout", value: "RWF 221K" },
  { label: "Confirmed orders", value: "96%" },
  { label: "Disputes", value: "2 open" },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#f6fbf7] px-6 py-8 text-slate-900 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <div className="flex flex-col gap-4 rounded-[2rem] bg-[#0D3B24] p-8 text-white shadow-[0_24px_70px_rgba(13,59,36,0.18)] md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D4A843]">
              Joyce Style
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight">
              Orders protected by Emeza
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/74 md:text-base">
              Track every order from payment held to payout delivered. This is
              the seller view for managing product sales with buyer protection.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/sell"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Seller onboarding
            </Link>
            <Link
              href="/store/joyce-style"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#0D3B24] transition hover:bg-[#F0F7F3]"
            >
              Open storefront
            </Link>
          </div>
        </div>

        <section className="grid gap-4 md:grid-cols-4">
          {metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-[1.5rem] border border-[#1B7A4A]/10 bg-white p-5 shadow-[0_16px_50px_rgba(13,59,36,0.05)]"
            >
              <p className="text-sm text-slate-500">{metric.label}</p>
              <p className="mt-3 text-2xl font-bold text-[#0D3B24]">
                {metric.value}
              </p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_50px_rgba(13,59,36,0.04)]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1B7A4A]">
                  Orders
                </p>
                <h2 className="mt-2 text-2xl font-bold text-[#0D3B24]">
                  Recent buyer activity
                </h2>
              </div>
              <button className="rounded-full bg-[#F0F7F3] px-4 py-2 text-sm font-semibold text-[#1B7A4A]">
                Add product
              </button>
            </div>

            <div className="mt-6 space-y-4">
              {orders.map((order) => (
                <div
                  key={`${order.customer}-${order.product}`}
                  className="grid gap-4 rounded-[1.5rem] border border-slate-100 bg-[#fbfdfb] p-4 md:grid-cols-[1fr_1fr_auto_auto]"
                >
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Buyer
                    </p>
                    <p className="mt-1 font-semibold text-[#0D3B24]">
                      {order.customer}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Product
                    </p>
                    <p className="mt-1 font-semibold text-[#0D3B24]">
                      {order.product}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                      Amount
                    </p>
                    <p className="mt-1 font-semibold text-[#0D3B24]">
                      {order.amount}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <span className="rounded-full bg-[#fff6df] px-3 py-2 text-xs font-semibold text-[#8b6b22]">
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="space-y-6">
            <section className="rounded-[1.75rem] bg-white p-6 shadow-[0_16px_50px_rgba(13,59,36,0.04)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1B7A4A]">
                Payout progress
              </p>
              <ol className="mt-5 space-y-4">
                {[
                  "Payment confirmed",
                  "Delivery completed",
                  "Buyer confirmed",
                  "Payout delivered",
                ].map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span
                      className={`mt-0.5 flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold ${
                        index < 3
                          ? "bg-[#1B7A4A] text-white"
                          : "bg-[#F0F7F3] text-[#1B7A4A]"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-[#0D3B24]">{step}</p>
                      <p className="text-sm leading-6 text-slate-500">
                        Clear payout visibility for sellers and support followup.
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="rounded-[1.75rem] bg-[#fffaf0] p-6 shadow-[0_16px_50px_rgba(139,107,34,0.08)]">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#8b6b22]">
                Trust signals
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-600">
                <li>Buyer confirmation before release.</li>
                <li>48-hour auto-release window for physical goods.</li>
                <li>Dispute capture when something goes wrong.</li>
                <li>Protected checkout language across every order.</li>
              </ul>
            </section>
          </aside>
        </section>
      </div>
    </main>
  );
}
