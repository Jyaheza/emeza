insert into sellers (
  id,
  phone_number,
  whatsapp_number,
  momo_number,
  business_name,
  storefront_slug,
  city,
  tagline,
  description,
  response_time_label,
  rating_label,
  fulfilled_orders_label,
  momo_verified
) values (
  '11111111-1111-4111-8111-111111111111',
  '+250788375200',
  '+250788375200',
  '+250788375200',
  'Joyce Style',
  'joyce-style',
  'Kigali',
  'Fashion you can order on WhatsApp and confirm when it arrives.',
  'Shop trusted Kigali fashion with payment protection built in. Emeza holds your money until you confirm that your order has arrived as promised.',
  'Replies in under 10 minutes',
  '4.9/5 confirmed buyers',
  '312 protected orders',
  true
) on conflict (id) do nothing;

insert into products (
  id,
  seller_id,
  title,
  description,
  price_rwf,
  category,
  product_type,
  delivery_estimate,
  stock_note,
  is_active
) values
(
  '22222222-2222-4222-8222-222222222221',
  '11111111-1111-4111-8111-111111111111',
  'Leather tote',
  'Structured everyday bag in deep earth tones. Designed for workdays, weekends, and gift orders.',
  48000,
  'Fashion',
  'physical_good',
  'Delivery in 1-2 days',
  '6 left this week',
  true
),
(
  '22222222-2222-4222-8222-222222222222',
  '11111111-1111-4111-8111-111111111111',
  'Weekend set',
  'Two-piece drop for city errands, brunch, and event-ready styling with an easy tailored fit.',
  72000,
  'Limited drop',
  'physical_good',
  'Delivery in 1-3 days',
  'Low stock',
  true
),
(
  '22222222-2222-4222-8222-222222222223',
  '11111111-1111-4111-8111-111111111111',
  'Low-top sneakers',
  'Clean neutral pair made for daily wear and easy delivery across Kigali with protected checkout.',
  64000,
  'Physical good',
  'physical_good',
  'Same-day moto available',
  'Ready to ship',
  true
) on conflict (id) do nothing;
