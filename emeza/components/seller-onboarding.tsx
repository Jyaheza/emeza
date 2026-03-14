"use client";

import { startTransition, useMemo, useState } from "react";

import { useLanguage } from "@/components/language-provider";
import { getMarketingContent, sellerThemes } from "@/lib/app-data";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

type FlowStep = "phone" | "otp" | "shop" | "theme" | "customize" | "done";

export function SellerOnboarding() {
  const supabase = createBrowserSupabaseClient();
  const { copy, language } = useLanguage();
  const marketingContent = getMarketingContent(language);
  const [step, setStep] = useState<FlowStep>("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [storefrontSlug, setStorefrontSlug] = useState("");
  const [bio, setBio] = useState("");
  const [category, setCategory] = useState("fashion");
  const [instagramHandle, setInstagramHandle] = useState("");
  const [tiktokHandle, setTiktokHandle] = useState("");
  const [selectedThemeId, setSelectedThemeId] = useState("isoko");
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const disabled = !supabase;
  const normalizedPhone = normalizeRwandaPhone(phone);
  const currentTheme =
    marketingContent.sellerThemes.find((theme) => theme.id === selectedThemeId) ??
    marketingContent.sellerThemes[0];
  const currentThemeVisual =
    sellerThemes.find((theme) => theme.id === selectedThemeId) ?? sellerThemes[0];

  const steps = useMemo(
    () =>
      language === "rw"
        ? [
            "Telefoni",
            "Code",
            "Shop",
            "Vibe",
            "Customize",
            "Byarangiye",
          ]
        : ["Phone", "Code", "Shop", "Vibe", "Customize", "Live"],
    [language],
  );

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
      setMessage(copy.sellerOnboarding.otpSent);
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

      setStep("shop");
      setMessage(copy.sellerOnboarding.phoneVerified);
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
        setError(copy.sellerOnboarding.sessionExpired);
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
        setError(payload.error ?? copy.sellerOnboarding.profileFailed);
        return;
      }

      setStep("done");
      setMessage(copy.sellerOnboarding.accountReady);
    });
  }

  function nextAfterShop() {
    if (!businessName.trim() || !storefrontSlug.trim()) return;
    setStep("theme");
  }

  function nextAfterTheme() {
    setStep("customize");
  }

  return (
    <div className="rounded-[2rem] border border-[#1B7A4A]/10 bg-white p-6 shadow-[0_24px_80px_rgba(13,59,36,0.08)]">
      <div className="grid gap-2">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#1B7A4A]">
          {copy.sellerOnboarding.kicker}
        </p>
        <h2 className="text-3xl font-bold text-[#0D3B24]">
          {copy.sellerOnboarding.title}
        </h2>
        <p className="text-sm leading-7 text-slate-600">
          {copy.sellerOnboarding.description}
        </p>
      </div>

      <div className="mt-6 grid grid-cols-6 gap-2">
        {steps.map((label, index) => {
          const currentIndex = flowStepIndex(step);

          return (
            <div key={label} className="grid gap-2">
              <div
                className={`h-1.5 rounded-full ${
                  index < currentIndex
                    ? "bg-[#81c784]"
                    : index === currentIndex
                      ? "bg-[#2e7d32]"
                      : "bg-[#e8e6e1]"
                }`}
              />
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#918a7e]">
                {label}
              </p>
            </div>
          );
        })}
      </div>

      {disabled ? (
        <div className="mt-5 rounded-2xl bg-[#fff4f1] px-4 py-3 text-sm text-[#9b3a24]">
          {copy.sellerOnboarding.missingConfig}
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

      {step === "phone" ? (
        <div className="mt-6 grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[#0D3B24]">
              {copy.sellerOnboarding.phoneLabel}
            </span>
            <input
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder={copy.sellerOnboarding.phonePlaceholder}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1B7A4A]"
            />
          </label>
          <button
            type="button"
            disabled={disabled || loading || !phone.trim()}
            onClick={requestOtp}
            className="w-fit rounded-full bg-[#1B7A4A] px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading ? copy.sellerOnboarding.sending : copy.sellerOnboarding.sendCode}
          </button>
        </div>
      ) : null}

      {step === "otp" ? (
        <div className="mt-6 grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[#0D3B24]">
              {copy.sellerOnboarding.otpLabel}
            </span>
            <input
              value={otp}
              onChange={(event) => setOtp(event.target.value)}
              placeholder={copy.sellerOnboarding.otpPlaceholder}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1B7A4A]"
            />
          </label>
          <button
            type="button"
            disabled={disabled || loading || otp.length < 4}
            onClick={verifyOtp}
            className="w-fit rounded-full bg-[#1B7A4A] px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {loading
              ? copy.sellerOnboarding.verifying
              : copy.sellerOnboarding.verifyCode}
          </button>
        </div>
      ) : null}

      {step === "shop" ? (
        <div className="mt-6 grid gap-4">
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[#0D3B24]">
              {copy.sellerOnboarding.businessLabel}
            </span>
            <input
              value={businessName}
              onChange={(event) => {
                setBusinessName(event.target.value);
                if (!storefrontSlug) {
                  setStorefrontSlug(slugify(event.target.value));
                }
              }}
              placeholder={copy.sellerOnboarding.businessPlaceholder}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1B7A4A]"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-semibold text-[#0D3B24]">
              {copy.sellerOnboarding.slugLabel}
            </span>
            <div className="flex items-center rounded-2xl border border-slate-200 px-4 py-3">
              <span className="text-sm text-slate-500">
                {copy.sellerOnboarding.slugPrefix}
              </span>
              <input
                value={storefrontSlug}
                onChange={(event) => setStorefrontSlug(slugify(event.target.value))}
                placeholder={copy.sellerOnboarding.slugPlaceholder}
                className="ml-2 min-w-0 flex-1 outline-none"
              />
            </div>
          </label>
          <div className="rounded-[24px] bg-[#fafaf8] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#918a7e]">
              {language === "rw" ? "Link ya storefront" : "Storefront link"}
            </p>
            <p className="mt-2 font-mono text-[#121110]">
              {copy.sellerOnboarding.slugPrefix}
              {storefrontSlug || "your-shop"}
            </p>
          </div>
          <button
            type="button"
            disabled={!businessName.trim() || !storefrontSlug.trim()}
            onClick={nextAfterShop}
            className="w-fit rounded-full bg-[#1B7A4A] px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {language === "rw" ? "Komeza" : "Continue"}
          </button>
        </div>
      ) : null}

      {step === "theme" ? (
        <div className="mt-6 grid gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {marketingContent.sellerThemes.map((theme, index) => (
              <button
                key={theme.id}
                type="button"
                onClick={() => setSelectedThemeId(theme.id)}
                className={`rounded-[24px] border p-4 text-left ${
                  selectedThemeId === theme.id
                    ? "border-[#2e7d32] bg-[#f0f7f3]"
                    : "border-black/10 bg-white"
                }`}
              >
                <div
                  className={`h-28 rounded-[18px] bg-gradient-to-br ${sellerThemes[index].accent}`}
                />
                <p className="mt-4 text-lg font-semibold text-[#121110]">
                  {theme.name}
                </p>
                <p className="mt-1 text-sm text-[#6b6358]">{theme.vibe}</p>
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={nextAfterTheme}
            className="w-fit rounded-full bg-[#1B7A4A] px-5 py-3 text-sm font-semibold text-white"
          >
            {language === "rw"
              ? `Komeza na ${currentTheme.name}`
              : `Continue with ${currentTheme.name}`}
          </button>
        </div>
      ) : null}

      {step === "customize" ? (
        <div className="mt-6 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-4">
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#0D3B24]">
                {language === "rw" ? "Bio / tagline" : "Bio / tagline"}
              </span>
              <textarea
                rows={4}
                value={bio}
                onChange={(event) => setBio(event.target.value)}
                placeholder={
                  language === "rw"
                    ? "Andika amagambo make agaragaza ubucuruzi bwawe"
                    : "Add a short line that tells buyers what you sell"
                }
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1B7A4A]"
              />
            </label>
            <div className="grid gap-2">
              <span className="text-sm font-semibold text-[#0D3B24]">
                {language === "rw" ? "Icyiciro cya shop" : "Shop category"}
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  ["fashion", language === "rw" ? "Fashion" : "Fashion"],
                  ["beauty", language === "rw" ? "Beauty" : "Beauty"],
                  ["home", language === "rw" ? "Home" : "Home"],
                  ["other", language === "rw" ? "Other" : "Other"],
                ].map(([value, label]) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setCategory(value)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold ${
                      category === value
                        ? "bg-[#1B7A4A] text-white"
                        : "bg-[#f3f2ef] text-[#504a41]"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#0D3B24]">
                Instagram
              </span>
              <input
                value={instagramHandle}
                onChange={(event) => setInstagramHandle(event.target.value)}
                placeholder="@emeza"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1B7A4A]"
              />
            </label>
            <label className="grid gap-2">
              <span className="text-sm font-semibold text-[#0D3B24]">TikTok</span>
              <input
                value={tiktokHandle}
                onChange={(event) => setTiktokHandle(event.target.value)}
                placeholder="@emeza"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-[#1B7A4A]"
              />
            </label>
            <button
              type="button"
              disabled={
                disabled ||
                loading ||
                !businessName.trim() ||
                !storefrontSlug.trim()
              }
              onClick={saveProfile}
              className="w-fit rounded-full bg-[#1B7A4A] px-5 py-3 text-sm font-semibold text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading
                ? copy.sellerOnboarding.saving
                : language === "rw"
                  ? "Fungura storefront"
                  : "Launch storefront"}
            </button>
          </div>

          <div
            className={`rounded-[28px] bg-gradient-to-br ${currentThemeVisual.accent} p-5 text-white shadow-[0_24px_80px_rgba(18,17,16,0.12)]`}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              {language === "rw" ? "Live preview" : "Live preview"}
            </p>
            <div className="mt-4 rounded-[24px] bg-white/14 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/85 text-lg font-semibold text-[#121110]">
                  {(businessName || "E").charAt(0)}
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">
                    {businessName || copy.sellerOnboarding.businessPlaceholder}
                  </p>
                  <p className="text-sm text-white/74">
                    {bio ||
                      (language === "rw"
                        ? "Ubucuruzi bwawe buzagaragara hano"
                        : "Your storefront bio appears here")}
                  </p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-[18px] bg-white/85 p-3 text-[#121110]">
                  <div className="h-16 rounded-[14px] bg-[#f4d2b8]" />
                  <p className="mt-2 text-sm font-semibold">Ankara Dress</p>
                  <p className="mt-1 text-xs text-[#6b6358]">RWF 25,000</p>
                </div>
                <div className="rounded-[18px] bg-white/85 p-3 text-[#121110]">
                  <div className="h-16 rounded-[14px] bg-[#d8e5d1]" />
                  <p className="mt-2 text-sm font-semibold">Basket Bag</p>
                  <p className="mt-1 text-xs text-[#6b6358]">RWF 18,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}

      {step === "done" ? (
        <div className="mt-6 rounded-[28px] bg-[#fafaf8] p-6 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fffde7] text-3xl">
            🎉
          </div>
          <h3 className="mt-5 text-3xl font-semibold text-[#121110]">
            {language === "rw" ? "Storefront yawe yiteguye" : "Your storefront is live"}
          </h3>
          <p className="mt-3 text-sm leading-7 text-[#6b6358]">
            {copy.sellerOnboarding.slugPrefix}
            {storefrontSlug}
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <a
              href={`https://wa.me/?text=${encodeURIComponent(
                `${copy.sellerOnboarding.slugPrefix}${storefrontSlug}`,
              )}`}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white"
            >
              {language === "rw" ? "Sangiza kuri WhatsApp" : "Share on WhatsApp"}
            </a>
            <button className="rounded-full border border-black/10 px-5 py-3 text-sm font-semibold text-[#1b5e20]">
              {language === "rw" ? "Koporora link" : "Copy link"}
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

function flowStepIndex(step: FlowStep) {
  return ["phone", "otp", "shop", "theme", "customize", "done"].indexOf(step);
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
