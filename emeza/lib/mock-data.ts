export type Product = {
  id: string;
  title: string;
  description: string;
  price: string;
  priceRwf: number;
  categoryLabel: string;
  deliveryEstimate: string;
  stockNote: string;
};

export type Storefront = {
  id: string;
  slug: string;
  businessName: string;
  headline: string;
  description: string;
  supportPhone: string;
  whatsappHref: string;
  city: string;
  responseTime: string;
  rating: string;
  fulfilledOrders: string;
  products: Product[];
};

export const sellerStorefronts: Storefront[] = [
  {
    id: "11111111-1111-4111-8111-111111111111",
    slug: "joyce-style",
    businessName: "Joyce Style",
    headline: "Fashion you can order on WhatsApp and confirm when it arrives.",
    description:
      "Shop trusted Kigali fashion with payment protection built in. Emeza holds your money until you confirm that your order has arrived as promised.",
    supportPhone: "0788 375 200",
    whatsappHref: "https://wa.me/250788375200",
    city: "Kigali",
    responseTime: "Replies in under 10 minutes",
    rating: "4.9/5 confirmed buyers",
    fulfilledOrders: "312 protected orders",
    products: [
      {
        id: "22222222-2222-4222-8222-222222222221",
        title: "Leather tote",
        description:
          "Structured everyday bag in deep earth tones. Designed for workdays, weekends, and gift orders.",
        price: "RWF 48,000",
        priceRwf: 48000,
        categoryLabel: "Fashion",
        deliveryEstimate: "Delivery in 1-2 days",
        stockNote: "6 left this week",
      },
      {
        id: "22222222-2222-4222-8222-222222222222",
        title: "Weekend set",
        description:
          "Two-piece drop for city errands, brunch, and event-ready styling with an easy tailored fit.",
        price: "RWF 72,000",
        priceRwf: 72000,
        categoryLabel: "Limited drop",
        deliveryEstimate: "Delivery in 1-3 days",
        stockNote: "Low stock",
      },
      {
        id: "22222222-2222-4222-8222-222222222223",
        title: "Low-top sneakers",
        description:
          "Clean neutral pair made for daily wear and easy delivery across Kigali with protected checkout.",
        price: "RWF 64,000",
        priceRwf: 64000,
        categoryLabel: "Physical good",
        deliveryEstimate: "Same-day moto available",
        stockNote: "Ready to ship",
      },
    ],
  },
];

export function getMockStorefrontBySlug(slug: string) {
  return sellerStorefronts.find((storefront) => storefront.slug === slug);
}
