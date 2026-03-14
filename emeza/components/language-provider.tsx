"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type AppLanguage = "rw" | "en";

export type AppCopy = {
  nav: {
    home: string;
    howItWorks: string;
    contact: string;
    forSellers: string;
    dashboard: string;
    startDeal: string;
  };
  footer: {
    description: string;
    terms: string;
    privacy: string;
    contact: string;
    howItWorks: string;
  };
  home: {
    kicker: string;
    title: string;
    description: string;
    startDeal: string;
    browseShop: string;
    trustTitle: string;
    trustItems: string[];
    productStructure: string;
    productItems: string[];
    storefrontKicker: string;
    storefrontTitle: string;
    storefrontLink: string;
    reviewsKicker: string;
    reviewsTitle: string;
    partnersKicker: string;
    partnersTitle: string;
    follow: string;
    pricingKicker: string;
    pricingTitle: string;
    faqKicker: string;
    faqTitle: string;
  };
  howItWorks: {
    kicker: string;
    title: string;
    steps: { title: string; body: string }[];
    cta: string;
  };
  contact: {
    kicker: string;
    title: string;
  };
  legal: {
    termsKicker: string;
    termsTitle: string;
    privacyKicker: string;
    privacyTitle: string;
    privacyItems: string[];
  };
  sell: {
    kicker: string;
    title: string;
    description: string;
    dashboard: string;
    storefront: string;
  };
  sellerOnboarding: {
    kicker: string;
    title: string;
    description: string;
    missingConfig: string;
    otpSent: string;
    phoneVerified: string;
    accountReady: string;
    sessionExpired: string;
    profileFailed: string;
    phoneLabel: string;
    otpLabel: string;
    businessLabel: string;
    slugLabel: string;
    phonePlaceholder: string;
    otpPlaceholder: string;
    businessPlaceholder: string;
    slugPrefix: string;
    slugPlaceholder: string;
    sendCode: string;
    sending: string;
    verifyCode: string;
    verifying: string;
    createStorefront: string;
    saving: string;
  };
  storefront: {
    whatsapp: string;
    startDeal: string;
    city: string;
    responseTime: string;
    trustSignal: string;
    trackRecord: string;
    protectedItems: string[];
    buyProtected: string;
    trackOrder: string;
  };
  deal: {
    title: string;
    description: string;
    still: string;
    backHome: string;
    browseStorefront: string;
  };
  dashboard: {
    sellerApp: string;
    viewStorefront: string;
    startDeal: string;
    overview: string;
    orders: string;
    products: string;
    earnings: string;
    settings: string;
    overviewTitle: string;
    overviewDescription: string;
    recentOrders: string;
    attention: string;
    ordersTitle: string;
    ordersDescription: string;
    productTitle: string;
    productDescription: string;
    addProduct: string;
    earningsTitle: string;
    earningsDescription: string;
    totalEarned: string;
    pendingPayout: string;
    settingsTitle: string;
    settingsDescription: string;
    verifyMomo: string;
    verifyMomoTitle: string;
    verifyMomoDescription: string;
    verifyMomoButton: string;
    newProductTitle: string;
    newProductDescription: string;
    addPhotos: string;
    productName: string;
    productDescriptionLabel: string;
    priceLabel: string;
    categoryLabel: string;
  };
  admin: {
    kicker: string;
    title: string;
  };
  tracking: {
    kicker: string;
    title: string;
    trackingToken: string;
    steps: string[];
    stepHint: string;
    confirm: string;
    report: string;
  };
};

const copyByLanguage: Record<AppLanguage, AppCopy> = {
  en: {
    nav: {
      home: "Home",
      howItWorks: "How it works",
      contact: "Contact",
      forSellers: "For sellers",
      dashboard: "Dashboard",
      startDeal: "Start a safe deal",
    },
    footer: {
      description:
        "A payment protection layer for social commerce in Rwanda. Buyers confirm first. Sellers get paid with confidence.",
      terms: "Terms",
      privacy: "Privacy",
      contact: "Contact",
      howItWorks: "How it works",
    },
    home: {
      kicker: "Gura udatinya",
      title: "Safe deals for the way Rwanda already shops online.",
      description:
        "Emeza protects mobile money payments for social commerce. Buyers confirm first. Sellers get paid after delivery, not before.",
      startDeal: "Start a safe deal",
      browseShop: "Browse a sample shop",
      trustTitle: "Why buyers trust Emeza",
      trustItems: [
        "Payment stays protected until the buyer confirms receipt.",
        "If something goes wrong, the payout is frozen while the issue is reviewed.",
        "The seller still keeps the WhatsApp relationship and storefront link they already use.",
      ],
      productStructure: "Product structure",
      productItems: [
        "Landing pages that explain trust fast",
        "Seller onboarding with storefront themes",
        "Buyer storefronts, tracking, disputes, and payouts",
      ],
      storefrontKicker: "Storefront vibes",
      storefrontTitle:
        "Choose a storefront that feels close, warm, and trustworthy",
      storefrontLink: "Open seller onboarding",
      reviewsKicker: "Reviews",
      reviewsTitle: "What people should feel when using Emeza",
      partnersKicker: "Partners and channels",
      partnersTitle: "Built around the tools people already trust",
      follow: "Follow Emeza",
      pricingKicker: "Pricing",
      pricingTitle: "Start free, pay for protected growth",
      faqKicker: "FAQ",
      faqTitle: "Questions buyers and sellers will ask first",
    },
    howItWorks: {
      kicker: "How Emeza works",
      title: "A safer way to buy through social commerce",
      steps: [
        {
          title: "Seller shares a storefront",
          body: "The seller keeps using WhatsApp, Instagram, or TikTok and shares one Emeza link.",
        },
        {
          title: "Buyer starts a safe deal",
          body: "The buyer chooses the product and enters the protected checkout flow.",
        },
        {
          title: "Payment is held",
          body: "Emeza records the payment state and waits for delivery confirmation.",
        },
        {
          title: "Buyer confirms receipt",
          body: "Once the item arrives as promised, the buyer confirms and the payout moves.",
        },
      ],
      cta: "Start a safe deal",
    },
    contact: {
      kicker: "Contact",
      title: "Talk to the Emeza team",
    },
    legal: {
      termsKicker: "Terms of use",
      termsTitle: "Terms",
      privacyKicker: "Privacy",
      privacyTitle: "Privacy policy",
      privacyItems: [
        "We only collect the data needed to run protected orders.",
        "Buyer phone numbers should be stored and handled carefully.",
        "Seller payout details are used only for payment release and support.",
      ],
    },
    sell: {
      kicker: "Seller onboarding",
      title: "Launch a trusted storefront in minutes.",
      description:
        "Build a storefront, share it on WhatsApp and Instagram, and let buyers pay through a protected flow that feels safe from the first tap.",
      dashboard: "View seller app",
      storefront: "View storefront",
    },
    sellerOnboarding: {
      kicker: "Seller onboarding",
      title: "Open your protected storefront",
      description:
        "Verify your phone, claim your storefront, and start receiving protected payments through Emeza.",
      missingConfig:
        "Add NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY, and SUPABASE_SERVICE_ROLE_KEY to enable seller auth.",
      otpSent: "We sent a code to your phone.",
      phoneVerified: "Phone verified. Finish your seller profile.",
      accountReady: "Your seller account is ready.",
      sessionExpired: "Your session expired. Please request a new code.",
      profileFailed: "Profile could not be saved.",
      phoneLabel: "Phone number",
      otpLabel: "OTP code",
      businessLabel: "Business name",
      slugLabel: "Storefront link",
      phonePlaceholder: "0788 123 456",
      otpPlaceholder: "123456",
      businessPlaceholder: "Joyce Style",
      slugPrefix: "emeza.me/",
      slugPlaceholder: "joyce-style",
      sendCode: "Send verification code",
      sending: "Sending code...",
      verifyCode: "Verify code",
      verifying: "Checking code...",
      createStorefront: "Create storefront",
      saving: "Saving profile...",
    },
    storefront: {
      whatsapp: "Message on WhatsApp",
      startDeal: "Start a safe deal",
      city: "City",
      responseTime: "Response time",
      trustSignal: "Trust signal",
      trackRecord: "Track record",
      protectedItems: [
        "Payment is protected until buyer confirmation.",
        "If a delivery issue happens, the buyer can open a dispute.",
        "For physical goods, payment auto-releases after the review window.",
      ],
      buyProtected: "Buy with protection",
      trackOrder: "Track order",
    },
    deal: {
      title: "Start a safe deal",
      description:
        "The full deal-start flow is designed and linked into the app, but the live transactional experience is still under development. We can connect this screen to the payment workflow next.",
      still: "Still Under Development",
      backHome: "Back home",
      browseStorefront: "Browse storefront",
    },
    dashboard: {
      sellerApp: "Emeza seller app",
      viewStorefront: "View storefront",
      startDeal: "Start safe deal",
      overview: "Overview",
      orders: "Orders",
      products: "Products",
      earnings: "Earnings",
      settings: "Settings",
      overviewTitle: "Seller dashboard",
      overviewDescription:
        "Monitor protected payments, order status, and payout progress from one clean workspace.",
      recentOrders: "Recent orders",
      attention: "What needs your attention",
      ordersTitle: "Orders",
      ordersDescription:
        "Track each protected order from payment held to final payout.",
      productTitle: "Products",
      productDescription:
        "Manage your storefront catalog, visibility, and featured items.",
      addProduct: "Add product",
      earningsTitle: "Earnings",
      earningsDescription:
        "See released payouts, pending funds, and payout progress in one view.",
      totalEarned: "Total earned",
      pendingPayout: "Pending payout",
      settingsTitle: "Settings",
      settingsDescription:
        "Manage storefront identity, payout details, language, and support.",
      verifyMomo: "Verify MoMo number",
      verifyMomoTitle: "Verify MoMo",
      verifyMomoDescription:
        "This screen prepares the payout verification flow for the seller app.",
      verifyMomoButton: "Verify number",
      newProductTitle: "New product",
      newProductDescription:
        "A responsive product form for building out the seller catalog flow.",
      addPhotos: "Add photos",
      productName: "Product name",
      productDescriptionLabel: "Description",
      priceLabel: "Price (RWF)",
      categoryLabel: "Category",
    },
    admin: {
      kicker: "Admin",
      title: "Platform operations",
    },
    tracking: {
      kicker: "Order tracking",
      title: "Follow your order",
      trackingToken: "Tracking token",
      steps: [
        "Payment received",
        "Seller preparing order",
        "Waiting for delivery confirmation",
        "Payout release",
      ],
      stepHint: "Status timeline placeholder for the full tracking view.",
      confirm: "Confirm in app",
      report: "Report a problem",
    },
  },
  rw: {
    nav: {
      home: "Ahabanza",
      howItWorks: "Uko bikora",
      contact: "Tuvugishe",
      forSellers: "Ku bacuruzi",
      dashboard: "Imbonerahamwe",
      startDeal: "Tangira deal itekanye",
    },
    footer: {
      description:
        "Emeza ni urwego rurinda ubwishyu mu bucuruzi bwo kuri internet mu Rwanda. Umuguzi abanza kwemeza, umucuruzi agahabwa amafaranga yizeye.",
      terms: "Amategeko",
      privacy: "Amakuru bwite",
      contact: "Tuvugishe",
      howItWorks: "Uko bikora",
    },
    home: {
      kicker: "Gura udatinya",
      title:
        "Deal zitekanye zijyanye n'uburyo Abanyarwanda basanzwe baguriramo online.",
      description:
        "Emeza irinda ubwishyu bwa mobile money mu bucuruzi bwo ku mbuga nkoranyambaga. Umuguzi abanza kwemeza, umucuruzi agahembwa nyuma y'uko ibintu bigeze.",
      startDeal: "Tangira deal itekanye",
      browseShop: "Reba shop y'icyitegererezo",
      trustTitle: "Impamvu abantu bizera Emeza",
      trustItems: [
        "Amafaranga arindwa kugeza umuguzi yemeje ko ibintu byageze.",
        "Iyo habaye ikibazo, payout irahagarikwa ikibazo kigakurikiranwa.",
        "Umucuruzi agumana WhatsApp n'uburyo bwe bwo kuganiriza abakiliya.",
      ],
      productStructure: "Ibice by'ibanze",
      productItems: [
        "Paji zisobanura icyizere mu buryo bwihuse",
        "Onboarding y'umucuruzi ifite vibes za storefront",
        "Storefront, tracking, dispute na payout z'umuguzi",
      ],
      storefrontKicker: "Imisusire ya storefront",
      storefrontTitle:
        "Hitamo storefront isa neza, ishyushye kandi itanga icyizere",
      storefrontLink: "Fungura onboarding y'umucuruzi",
      reviewsKicker: "Ibyo abantu bavuga",
      reviewsTitle: "Ibyo abakoresha bumva bakoresha Emeza",
      partnersKicker: "Abafatanyabikorwa n'imiyoboro",
      partnersTitle: "Yubakiye ku bikoresho abantu basanzwe bizeye",
      follow: "Kurikira Emeza",
      pricingKicker: "Ibiciro",
      pricingTitle: "Tangira ubuntu, ukure wishyura ku byishyuwe birinzwe",
      faqKicker: "Ibibazo bikunze kubazwa",
      faqTitle: "Ibibazo umuguzi n'umucuruzi babanza kubaza",
    },
    howItWorks: {
      kicker: "Uko Emeza ikora",
      title: "Uburyo bwizewe bwo kugura mu bucuruzi bwo ku mbuga nkoranyambaga",
      steps: [
        {
          title: "Umucuruzi asangiza abantu storefront",
          body: "Umucuruzi akomeza gukoresha WhatsApp, Instagram cyangwa TikTok, agasangiza abantu link imwe ya Emeza.",
        },
        {
          title: "Umuguzi atangiza deal itekanye",
          body: "Umuguzi ahitamo igicuruzwa akinjira mu nzira y'ubwishyu burinzwe.",
        },
        {
          title: "Ubwishyu burabikwa",
          body: "Emeza ibika status y'ubwishyu igategereza ko delivery yemezwa.",
        },
        {
          title: "Umuguzi aremeza ko byageze",
          body: "Iyo ibintu bigeze neza nk'uko byasezeranyijwe, umuguzi aremeza payout ikagenda.",
        },
      ],
      cta: "Tangira deal itekanye",
    },
    contact: {
      kicker: "Tuvugishe",
      title: "Vugana n'ikipe ya Emeza",
    },
    legal: {
      termsKicker: "Amategeko yo gukoresha",
      termsTitle: "Amategeko",
      privacyKicker: "Amakuru bwite",
      privacyTitle: "Politiki y'amakuru bwite",
      privacyItems: [
        "Dufata amakuru dukenera gusa kugira ngo protected orders zikore.",
        "Nimero za telefoni z'abaguzi zigomba kubikwa neza kandi zikitonderwa.",
        "Amakuru ya payout y'umucuruzi akoreshwa gusa mu kurekura amafaranga no gutanga ubufasha.",
      ],
    },
    sell: {
      kicker: "Onboarding y'umucuruzi",
      title: "Tangiza storefront yizewe mu minota mike.",
      description:
        "Kubaka storefront, kuyisangiza abantu kuri WhatsApp na Instagram, no kwakira ubwishyu burinzwe bituma abakiliya batangira bizeye kuva ku ntambwe ya mbere.",
      dashboard: "Reba app y'umucuruzi",
      storefront: "Reba storefront",
    },
    sellerOnboarding: {
      kicker: "Onboarding y'umucuruzi",
      title: "Fungura storefront yawe irinzwe",
      description:
        "Emeza nimero yawe, hitamo storefront yawe, hanyuma utangire kwakira ubwishyu burinzwe kuri Emeza.",
      missingConfig:
        "Shyiramo NEXT_PUBLIC_SUPABASE_URL, NEXT_PUBLIC_SUPABASE_ANON_KEY na SUPABASE_SERVICE_ROLE_KEY kugira ngo seller auth ikore.",
      otpSent: "Tukohereje code kuri telefoni yawe.",
      phoneVerified: "Telefoni yemejwe. Soza amakuru ya storefront yawe.",
      accountReady: "Konti yawe y'umucuruzi iriteguye.",
      sessionExpired: "Session yawe yarangiye. Saba code nshya.",
      profileFailed: "Amakuru ya profile ntiyabashije kubikwa.",
      phoneLabel: "Nimero ya telefoni",
      otpLabel: "Code ya OTP",
      businessLabel: "Izina ry'ubucuruzi",
      slugLabel: "Link ya storefront",
      phonePlaceholder: "0788 123 456",
      otpPlaceholder: "123456",
      businessPlaceholder: "Joyce Style",
      slugPrefix: "emeza.me/",
      slugPlaceholder: "joyce-style",
      sendCode: "Ohereza code yo kwemeza",
      sending: "Code irimo koherezwa...",
      verifyCode: "Emeza code",
      verifying: "Irimo kugenzurwa...",
      createStorefront: "Fungura storefront",
      saving: "Profile irimo kubikwa...",
    },
    storefront: {
      whatsapp: "Vugisha umucuruzi kuri WhatsApp",
      startDeal: "Tangira deal itekanye",
      city: "Umujyi",
      responseTime: "Igihe asubiriza",
      trustSignal: "Ikimenyetso cy'icyizere",
      trackRecord: "Ibyo amaze gukora",
      protectedItems: [
        "Amafaranga arindwa kugeza umuguzi yemeye ko byageze.",
        "Iyo habaye ikibazo cya delivery, umuguzi ashobora gutanga dispute.",
        "Ku bicuruzwa bifatika, ubwishyu burekurwa nyuma y'igihe cyo gusuzuma.",
      ],
      buyProtected: "Gura mu buryo burinzwe",
      trackOrder: "Kurikirana order",
    },
    deal: {
      title: "Tangira deal itekanye",
      description:
        "Uru rugendo rwo gutangiza deal rwarateguwe kandi rwahujwe n'app, ariko uburyo nyirizina bwo gukora transaction buracyari mu iterambere.",
      still: "Biracyari mu iterambere",
      backHome: "Subira ahabanza",
      browseStorefront: "Reba storefront",
    },
    dashboard: {
      sellerApp: "App ya Emeza y'umucuruzi",
      viewStorefront: "Reba storefront",
      startDeal: "Tangira deal itekanye",
      overview: "Incamake",
      orders: "Ama-order",
      products: "Ibicuruzwa",
      earnings: "Ibyinjiye",
      settings: "Igenamiterere",
      overviewTitle: "Imbonerahamwe y'umucuruzi",
      overviewDescription:
        "Kurikirana ubwishyu burinzwe, uko order ihagaze n'iterambere rya payout ahantu hamwe.",
      recentOrders: "Ama-order aheruka",
      attention: "Ibyo ugomba kwitaho",
      ordersTitle: "Ama-order",
      ordersDescription:
        "Kurikirana protected orders kuva ku bwishyu bwabitswe kugeza payout irangiye.",
      productTitle: "Ibicuruzwa",
      productDescription:
        "Genzura katalogi ya storefront yawe, ibigaragara n'ibishyirwa imbere.",
      addProduct: "Ongeraho igicuruzwa",
      earningsTitle: "Ibyinjiye",
      earningsDescription:
        "Reba payout zarangiye, amafaranga agitegerejwe n'aho payout igeze.",
      totalEarned: "Amafaranga yinjiye",
      pendingPayout: "Payout igitegerejwe",
      settingsTitle: "Igenamiterere",
      settingsDescription:
        "Genzura isura ya storefront, amakuru ya payout, ururimi n'ubufasha.",
      verifyMomo: "Emeza nimero ya MoMo",
      verifyMomoTitle: "Emeza MoMo",
      verifyMomoDescription:
        "Aha ni ho umucuruzi yemeza nimero ya MoMo izajya yoherezwaho payout.",
      verifyMomoButton: "Emeza nimero",
      newProductTitle: "Igicuruzwa gishya",
      newProductDescription:
        "Ifishi yoroshye kandi igaragara neza kuri mobile na desktop yo kongera igicuruzwa gishya.",
      addPhotos: "Ongeraho amafoto",
      productName: "Izina ry'igicuruzwa",
      productDescriptionLabel: "Ibisobanuro",
      priceLabel: "Igiciro (RWF)",
      categoryLabel: "Icyiciro",
    },
    admin: {
      kicker: "Admin",
      title: "Imikorere ya platform",
    },
    tracking: {
      kicker: "Gukurikirana order",
      title: "Kurikirana order yawe",
      trackingToken: "Tracking token",
      steps: [
        "Ubwishyu bwakiriwe",
        "Umucuruzi ari gutegura order",
        "Hategerejwe kwemeza delivery",
        "Kurekura payout",
      ],
      stepHint: "Aha ni ah'icyitegererezo cya timeline ya tracking y'uzuye.",
      confirm: "Emeza muri app",
      report: "Tanga ikibazo",
    },
  },
};

type LanguageContextValue = {
  language: AppLanguage;
  setLanguage: (language: AppLanguage) => void;
  copy: AppCopy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<AppLanguage>(() => {
    if (typeof window === "undefined") {
      return "rw";
    }

    const stored = window.localStorage.getItem("emeza-language");
    return stored === "rw" || stored === "en" ? stored : "rw";
  });

  useEffect(() => {
    window.localStorage.setItem("emeza-language", language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      copy: copyByLanguage[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}
