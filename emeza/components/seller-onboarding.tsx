"use client";

import { startTransition, useState } from "react";

import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export function SellerOnboarding() {
  const supabase = createBrowserSupabaseClient();
  const [step, setStep] = useState<"phone" | "otp" | "profile" | "done">(
    "phone",
  );
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [storefrontSlug, setStorefrontSlug] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const disabled = !supabase;
  const normalizedPhone = normalizeRwandaPhone(phone);

  function requestOtp() {
    if (!supabase) return;

    setLoading(true);
    setError(null);
    setMessage(null);

    startTransition(async () => {
      const { error: requestError } = await supabase.auth.signInWithOtp({
        phone: normalizedPhone,
      });

      setLoading(false);

      if (requestError) {
        setError(requestError.message);
        return;
      }

      setStep("otp");
      setMessage("We sent a code to your phone.");
    });
  }

  function verifyOtp() {
    if (!supabase) return;

    setLoading(true);
    setError(null);
    setMessage(null);

    startTransition(async () => {
      const { data, error: verifyError } = await supabase.auth.verifyOtp({
        phone: normalizedPhone,
        token: otp,
        type: "sms",
      });

      setLoading(false);

      if (verifyError || !data.session) {
        setError(verifyError?.message ?? "Code verification failed.");
        return;
      }

      setStep("profile");
      setMessage("Phone verified. Finish your seller profile.");
    });
  }

  function saveProfile() {
    if (!supabase) return;

    setLoading(true);
    setError(null);
    setMessage(null);

    startTransition(async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.access_token) {
        setLoading(false);
        setError("Your session expired. Please request a new code.");
        setStep("phone");
        return;
      }

      const response = await fetch("/api/sellers/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
        body: JSON.stringify({
          phoneNumber: normalizedPhone,
          businessName,
          storefrontSlug,
        }),
      });

      const payload = (await response.json()) as { error?: string };
      setLoading(false);

      if (!response.ok) {
        setError(payload.error ?? "Profile could not be saved.");
        return;
      }

      setStep("done");
      setMessage("Your seller account is ready.");
    });
  }

  return (
    <div className="rounded-[2rem] border border-[#1B7A4A]/10 bg-white p-6 shadow-[0_24px_80px_rgba(13,59,36,0.08)]">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1B7A4A]">
        Seller onboarding
      </p>
      <h2 className="mt-2 text-3xl font-bold text-[#0D3B24]">
        Open your protected storefront
      </h2>
      <p className="mt-3 text-sm leading-7 text-slate-600">
        Verify your phone, claim your storefront, and start receiving protected
        payments through Emeza.
      </p>

      {disabled ? (
        <div className="mt-5 rounded-2xl bg-[#fff4f1] px-4 py-3 text-sm text-[#9b3a24]">
          Add `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, and
          `SUPABASE_SERVICE_ROLE_KEY` to enable seller auth.
        </div>
      ) : null}

      {message ? (
        <div className="mt-5 rounded-2xl bg-[#F0F7F3] px-4 py-3 text-sm text-[#0D3B24]">
          {message}
        </div>
      ) : null}

      {error ? (
        <div className="mt-5 rounded-2xl bg-[#fff4f1] px-4 py-3 text-sm text-[#9b3a24]">
          {error}
        </div>
      ) : null}

      <div className="mt-6 space-y-4">
        <label className="block">
          <span className="text-sm font-semibold text-[#0D3B24]">
            Phone number
          </span>
          <input
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            placeholder="0788 123 456"
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1B7A4A]"
          />
        </label>

        {step !== "phone" ? (
          <label className="block">
            <span className="text-sm font-semibold text-[#0D3B24]">
              OTP code
            </span>
            <input
              value={otp}
              onChange={(event) => setOtp(event.target.value)}
              placeholder="123456"
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1B7A4A]"
            />
          </label>
        ) : null}

        {step === "profile" || step === "done" ? (
          <>
            <label className="block">
              <span className="text-sm font-semibold text-[#0D3B24]">
                Business name
              </span>
              <input
                value={businessName}
                onChange={(event) => setBusinessName(event.target.value)}
                placeholder="Joyce Style"
                className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1B7A4A]"
              />
            </label>

            <label className="block">
              <span className="text-sm font-semibold text-[#0D3B24]">
                Storefront link
              </span>
              <div className="mt-2 flex items-center rounded-2xl border border-slate-200 px-4 py-3">
                <span className="text-sm text-slate-500">emeza.me/</span>
                <input
                  value={storefrontSlug}
                  onChange={(event) => setStorefrontSlug(slugify(event.target.value))}
                  placeholder="joyce-style"
                  className="ml-2 min-w-0 flex-1 outline-none"
                />
              </div>
            </label>
          </>
        ) : null}
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {step === "phone" ? (
          <button
            type="button"
            disabled={disabled || loading || !phone.trim()}
            onClick={requestOtp}
            className="rounded-full bg-[#1B7A4A] px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Sending code..." : "Send verification code"}
          </button>
        ) : null}

        {step === "otp" ? (
          <button
            type="button"
            disabled={disabled || loading || otp.length < 4}
            onClick={verifyOtp}
            className="rounded-full bg-[#1B7A4A] px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Checking code..." : "Verify code"}
          </button>
        ) : null}

        {step === "profile" ? (
          <button
            type="button"
            disabled={
              disabled ||
              loading ||
              !businessName.trim() ||
              !storefrontSlug.trim()
            }
            onClick={saveProfile}
            className="rounded-full bg-[#1B7A4A] px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? "Saving profile..." : "Create storefront"}
          </button>
        ) : null}
      </div>
    </div>
  );
}

function normalizeRwandaPhone(phone: string) {
  const digits = phone.replace(/\D/g, "");

  if (digits.startsWith("250")) {
    return `+${digits}`;
  }

  if (digits.startsWith("0")) {
    return `+250${digits.slice(1)}`;
  }

  return `+250${digits}`;
}

function slugify(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
