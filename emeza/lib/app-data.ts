type SocialIconKind = "facebook" | "instagram" | "x";
type LanguageKey = "rw" | "en";

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/contact", label: "Contact" },
  { href: "/sell", label: "For sellers" },
];

export const heroStats = [
  { label: "Protected orders", value: "12.4K" },
  { label: "Average release time", value: "48 hrs" },
  { label: "Seller payout fee", value: "2%" },
];

export const sellerThemes = [
  {
    id: "urugo",
    accent: "from-[#21412a] to-[#112419]",
  },
  {
    id: "isoko",
    accent: "from-[#d8703f] to-[#8f401c]",
  },
  {
    id: "umutuzo",
    accent: "from-[#d8e2c9] to-[#708164]",
  },
];

export const faqItems = [
  {
    question: "When does the seller get paid?",
    answer:
      "The seller gets paid after the buyer confirms receipt, or after the review window ends for eligible physical goods.",
  },
  {
    question: "Do buyers need an account?",
    answer:
      "No. Buyers can open the seller link, choose a product, and move into the protected flow without a full account setup.",
  },
  {
    question: "What happens if something goes wrong?",
    answer:
      "If an order does not arrive or does not match what was promised, the buyer can report an issue before release and Emeza freezes the payout state.",
  },
  {
    question: "Does Emeza replace WhatsApp?",
    answer:
      "No. Emeza works alongside WhatsApp. Sellers keep the conversation and use Emeza for trust, payment protection, and order visibility.",
  },
];

export const reviews = [
  {
    name: "Aline M.",
    role: "Buyer, Kigali",
    quote:
      "The biggest difference is peace of mind. I could finally pay for an order online without feeling like I was gambling.",
  },
  {
    name: "Eric N.",
    role: "Seller, Musanze",
    quote:
      "When buyers see that payment is protected, they stop asking the same trust questions and move faster.",
  },
  {
    name: "Claudine K.",
    role: "Buyer, Huye",
    quote:
      "The storefront felt clean, simple, and familiar. It made the whole deal feel more serious and more safe.",
  },
];

export const partners = [
  { name: "MTN MoMo", detail: "Collections and payout behavior" },
  { name: "Flutterwave", detail: "Payment infrastructure layer" },
  { name: "Linktree", detail: "Storefront sharing behavior inspiration" },
];

export const pricingTiers = [
  {
    name: "Starter",
    price: "Free",
    description: "For early sellers getting their first protected orders.",
    features: [
      "Storefront link",
      "Protected order flow",
      "Basic order tracking",
    ],
  },
  {
    name: "Growth",
    price: "2% per protected payment",
    description: "For sellers actively using Emeza to convert buyer trust.",
    features: [
      "Buyer protection messaging",
      "Payout tracking",
      "Order confirmation flow",
    ],
  },
  {
    name: "Premium",
    price: "RWF 5,000 to 10,000 / month",
    description: "Planned for advanced tools once the MVP trust loop is working.",
    features: [
      "Priority support",
      "Verified seller signals",
      "Analytics and catalog upgrades",
    ],
  },
];

export const socialLinks = [
  {
    label: "Facebook",
    handle: "@emeza",
    icon: "facebook" as SocialIconKind,
    href: "https://facebook.com/emeza",
  },
  {
    label: "Instagram",
    handle: "@emeza",
    icon: "instagram" as SocialIconKind,
    href: "https://instagram.com/emeza",
  },
  {
    label: "X",
    handle: "@emeza",
    icon: "x" as SocialIconKind,
    href: "https://x.com/emeza",
  },
];

export const sellerMetrics = [
  { label: "Protected sales", value: "RWF 3.4M", change: "+14% this week" },
  { label: "Pending payout", value: "RWF 221K", change: "2 orders waiting" },
  { label: "Confirmed rate", value: "96%", change: "Buyer trust is strong" },
];

export const dashboardOrders = [
  {
    id: "ord-ankara",
    buyer: "Aline M.",
    product: "Leather tote",
    amount: "RWF 48,000",
    status: "Payment held",
    timeline: [
      { label: "Buyer paid", time: "Today, 2:30 PM", state: "done" },
      { label: "Seller preparing order", time: "Now", state: "current" },
      { label: "Buyer confirms receipt", time: "Waiting", state: "pending" },
      { label: "Payout delivered", time: "Waiting", state: "pending" },
    ],
  },
  {
    id: "ord-weekend",
    buyer: "Eric N.",
    product: "Weekend set",
    amount: "RWF 72,000",
    status: "Buyer confirmed",
    timeline: [
      { label: "Buyer paid", time: "Yesterday", state: "done" },
      { label: "Seller delivered", time: "Yesterday", state: "done" },
      { label: "Buyer confirmed", time: "Today, 9:10 AM", state: "current" },
      { label: "Payout delivered", time: "Processing", state: "pending" },
    ],
  },
  {
    id: "ord-sneakers",
    buyer: "Claudine K.",
    product: "Low-top sneakers",
    amount: "RWF 64,000",
    status: "Ready for delivery",
    timeline: [
      { label: "Buyer paid", time: "Today, 11:05 AM", state: "done" },
      { label: "Seller preparing order", time: "Packed", state: "current" },
      { label: "Buyer confirms receipt", time: "Waiting", state: "pending" },
      { label: "Payout delivered", time: "Waiting", state: "pending" },
    ],
  },
];

export const products = [
  {
    id: "prod-tote",
    name: "Leather tote",
    price: "RWF 48,000",
    status: "Available",
    icon: "Bag",
  },
  {
    id: "prod-weekend",
    name: "Weekend set",
    price: "RWF 72,000",
    status: "Low stock",
    icon: "Set",
  },
  {
    id: "prod-sneakers",
    name: "Low-top sneakers",
    price: "RWF 64,000",
    status: "Available",
    icon: "Run",
  },
  {
    id: "prod-wrap",
    name: "Kitenge wrap",
    price: "RWF 12,000",
    status: "Hidden",
    icon: "Wrap",
  },
];

export const earningsRows = [
  {
    title: "Leather tote",
    detail: "Released today",
    amount: "+48,000",
    tone: "success",
  },
  {
    title: "Weekend set",
    detail: "Processing payout",
    amount: "+72,000",
    tone: "warning",
  },
  {
    title: "Low-top sneakers",
    detail: "Waiting for buyer confirmation",
    amount: "+64,000",
    tone: "neutral",
  },
];

export const legalSections = [
  {
    title: "Using Emeza",
    body: "Emeza is a payment protection layer for social commerce. Buyers and sellers are expected to use accurate product information and communicate honestly during fulfillment.",
  },
  {
    title: "Payment release",
    body: "For physical goods, payment is released after buyer confirmation or after the review window ends, unless a dispute is opened.",
  },
  {
    title: "Disputes",
    body: "If goods do not arrive or do not match what was promised, the buyer can open a dispute before release. Emeza will freeze the payout state while reviewing the issue.",
  },
];

const marketingContent = {
  en: {
    sellerThemes: [
      {
        id: "urugo",
        name: "Urugo",
        vibe: "A calm, welcoming storefront with a grounded and trustworthy feel.",
        cardTitle: "Feels like home",
        cardDescription:
          "Built for sellers who want a warm, polished presence with soft light, clear product framing, and instant trust.",
        chips: ["Warm", "Trusted", "Quietly premium"],
      },
      {
        id: "isoko",
        name: "Isoko",
        vibe: "Lively market energy with warm color and products that speak fast.",
        cardTitle: "Bold market energy",
        cardDescription:
          "Made for sellers who want a vivid storefront that feels active, visible, and ready to turn attention into conversation.",
        chips: ["Energetic", "Eye-catching", "Fast-moving"],
      },
      {
        id: "umutuzo",
        name: "Umutuzo",
        vibe: "Open, minimal composition that gives the product space to breathe.",
        cardTitle: "Calm and clean",
        cardDescription:
          "Best for brands that want an airy, modern look where the product itself stays front and center.",
        chips: ["Clean", "Open", "Product-first"],
      },
    ],
    heroStats: [
      { label: "Protected orders", value: "12.4K" },
      { label: "Average release time", value: "48 hrs" },
      { label: "Seller payout fee", value: "2%" },
    ],
    faqItems: [
      {
        question: "When does the seller get paid?",
        answer:
          "The seller gets paid after the buyer confirms receipt, or after the review window ends for eligible physical goods.",
      },
      {
        question: "Do buyers need an account?",
        answer:
          "No. Buyers can open the seller link, choose a product, and move into the protected flow without a full account setup.",
      },
      {
        question: "What happens if something goes wrong?",
        answer:
          "If an order does not arrive or does not match what was promised, the buyer can report an issue before release and Emeza freezes the payout state.",
      },
      {
        question: "Does Emeza replace WhatsApp?",
        answer:
          "No. Emeza works alongside WhatsApp. Sellers keep the conversation and use Emeza for trust, payment protection, and order visibility.",
      },
    ],
    reviews: [
      {
        name: "Aline M.",
        role: "Buyer, Kigali",
        quote:
          "The biggest difference is peace of mind. I could finally pay for an order online without feeling like I was gambling.",
      },
      {
        name: "Eric N.",
        role: "Seller, Musanze",
        quote:
          "When buyers see that payment is protected, they stop asking the same trust questions and move faster.",
      },
      {
        name: "Claudine K.",
        role: "Buyer, Huye",
        quote:
          "The storefront felt clean, simple, and familiar. It made the whole deal feel more serious and more safe.",
      },
    ],
    partners: [
      { name: "MTN MoMo", detail: "Collections and payout behavior" },
      { name: "Flutterwave", detail: "Payment infrastructure layer" },
      { name: "Linktree", detail: "Storefront sharing behavior inspiration" },
    ],
    pricingTiers: [
      {
        name: "Starter",
        price: "Free",
        description: "For early sellers getting their first protected orders.",
        features: [
          "Storefront link",
          "Protected order flow",
          "Basic order tracking",
        ],
      },
      {
        name: "Growth",
        price: "2% per protected payment",
        description: "For sellers actively using Emeza to convert buyer trust.",
        features: [
          "Buyer protection messaging",
          "Payout tracking",
          "Order confirmation flow",
        ],
      },
      {
        name: "Premium",
        price: "RWF 5,000 to 10,000 / month",
        description:
          "Planned for advanced tools once the MVP trust loop is working.",
        features: [
          "Priority support",
          "Verified seller signals",
          "Analytics and catalog upgrades",
        ],
      },
    ],
  },
  rw: {
    sellerThemes: [
      {
        id: "urugo",
        name: "Urugo",
        vibe: "Isura ituje, itanga ikaze kandi yizewe ku muntu ugura.",
        cardTitle: "Nko mu rugo",
        cardDescription:
          "Bikwibutsa ahantu hateguwe neza, hafite umucyo woroshye n'ibicuruzwa byerekanywe mu buryo busobanutse.",
        chips: ["Yitondewe", "Icyizere", "Ubwiza buciye bugufi"],
      },
      {
        id: "isoko",
        name: "Isoko",
        vibe: "Imbaraga z'isoko, amabara ashyushye n'ibicuruzwa bivuga ako kanya.",
        cardTitle: "Isoko rifite imbaraga",
        cardDescription:
          "Ribereye umucuruzi ushaka storefront ifite ubuzima, igaragara vuba kandi ikurura abakiliya.",
        chips: ["Ubuzima", "Ikurura amaso", "Yoroshye gukoresha"],
      },
      {
        id: "umutuzo",
        name: "Umutuzo",
        vibe: "Imiterere yoroshye, ifunguye kandi iha ibicuruzwa umwanya wo kwigaragaza.",
        cardTitle: "Umutuzo n'ubwiza",
        cardDescription:
          "Ni style ibereye brand zishaka isura isukuye, ifunguye kandi isobanutse ku buryo bwihuse.",
        chips: ["Isukuye", "Ifunguye", "Igaragaza igicuruzwa"],
      },
    ],
    heroStats: [
      { label: "Orders zirinzwe", value: "12.4K" },
      { label: "Igihe payout isohokeramo", value: "48 hrs" },
      { label: "Amafaranga ya service", value: "2%" },
    ],
    faqItems: [
      {
        question: "Ni ryari umucuruzi ahabwa amafaranga?",
        answer:
          "Amafaranga arekurwa nyuma y'uko umuguzi yemeje ko order yamugezeho, cyangwa igihe cyo gusuzuma kirangiye ku bicuruzwa byemewe.",
      },
      {
        question: "Ese umuguzi agomba kubanza gufungura konti?",
        answer:
          "Oya. Umuguzi ashobora gufungura link y'umucuruzi, agahitamo igicuruzwa, agahita yinjira mu rugendo rwo kugura rurinzwe.",
      },
      {
        question: "Bigenda bite habaye ikibazo?",
        answer:
          "Iyo order itageze cyangwa itandukanye n'iyasezeranyijwe, umuguzi ashobora gutanga ikibazo mbere yo kurekura amafaranga, maze Emeza igahagarika payout ikabanza kugikurikirana.",
      },
      {
        question: "Ese Emeza isimbura WhatsApp?",
        answer:
          "Oya. Emeza ikorana na WhatsApp. Umucuruzi akomeza ikiganiro n'umukiliya, Emeza igatanga icyizere, kurinda ubwishyu no gukurikirana order.",
      },
    ],
    reviews: [
      {
        name: "Aline M.",
        role: "Umuguzi, Kigali",
        quote:
          "Icyo nabonye mbere ni umutuzo. Nabashije kwishyura online ntumva ko ndi gushyira amafaranga mu mahirwe.",
      },
      {
        name: "Eric N.",
        role: "Umucuruzi, Musanze",
        quote:
          "Abaguzi babonye ko amafaranga arinzwe, bahita bagabanya ibibazo byo kutizera kandi bagafata icyemezo vuba.",
      },
      {
        name: "Claudine K.",
        role: "Umuguzi, Huye",
        quote:
          "Storefront yasaga neza, yoroshye kandi imenyerewe. Byatumye deal yose isa n'ikozwe mu buryo bufatika kandi bwizewe.",
      },
    ],
    partners: [
      { name: "MTN MoMo", detail: "Kwakira no kohereza ubwishyu" },
      { name: "Flutterwave", detail: "Igice cy'ibikorwaremezo by'ubwishyu" },
      { name: "Linktree", detail: "Uburyo bwo gusangiza storefront bwaduhaye icyerekezo" },
    ],
    pricingTiers: [
      {
        name: "Starter",
        price: "Ubuntu",
        description:
          "Ku bacuruzi batangiye kwakira protected orders zabo za mbere.",
        features: [
          "Link ya storefront",
          "Uburyo bwo kugura burinzwe",
          "Gukurikirana order by'ibanze",
        ],
      },
      {
        name: "Growth",
        price: "2% kuri buri bwishyu burinzwe",
        description:
          "Ku mucuruzi ukoresha Emeza buri gihe kugira ngo yongere icyizere cy'abaguzi.",
        features: [
          "Ubutumwa busobanura buyer protection",
          "Gukurikirana payout",
          "Kwemeza order igeze",
        ],
      },
      {
        name: "Premium",
        price: "RWF 5,000 kugeza 10,000 / ukwezi",
        description:
          "Yateganyirijwe ibikoresho byisumbuyeho nyuma y'uko trust loop ya MVP ihagaze neza.",
        features: [
          "Ubufasha bwihuse",
          "Ibimenyetso by'umucuruzi wemejwe",
          "Analytics na upgrades za katalogi",
        ],
      },
    ],
  },
} as const;

export function getMarketingContent(language: LanguageKey) {
  return marketingContent[language];
}
