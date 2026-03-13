create extension if not exists "pgcrypto";

create table if not exists sellers (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique,
  phone_number varchar(20) unique not null,
  whatsapp_number varchar(20),
  momo_number varchar(20),
  business_name varchar(100) not null,
  storefront_slug varchar(60) unique not null,
  city varchar(80) default 'Kigali',
  tagline text,
  description text,
  response_time_label varchar(120) default 'Replies in under 15 minutes',
  rating_label varchar(120) default 'Trusted by confirmed buyers',
  fulfilled_orders_label varchar(120) default 'Protected orders enabled',
  momo_verified boolean default false,
  flw_subaccount_id varchar(120),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists products (
  id uuid primary key default gen_random_uuid(),
  seller_id uuid not null references sellers(id) on delete cascade,
  title varchar(150) not null,
  description text,
  price_rwf integer not null check (price_rwf > 0),
  photo_url text,
  category varchar(80) default 'Physical good',
  product_type varchar(50) default 'physical_good',
  delivery_estimate varchar(120),
  stock_note varchar(120),
  is_active boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists buyer_sessions (
  id uuid primary key default gen_random_uuid(),
  phone_hash varchar(64) unique not null,
  first_seen_at timestamptz default now(),
  order_count integer default 0,
  dispute_count integer default 0,
  last_active_at timestamptz default now()
);

create table if not exists orders (
  id uuid primary key default gen_random_uuid(),
  seller_id uuid not null references sellers(id) on delete cascade,
  product_id uuid not null references products(id) on delete restrict,
  buyer_phone_hash varchar(64) not null,
  buyer_phone_last4 varchar(4),
  buyer_name varchar(120),
  quantity integer not null default 1,
  total_amount_rwf integer not null,
  status varchar(50) not null default 'payment_pending',
  order_token uuid unique not null default gen_random_uuid(),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists escrow_transactions (
  id uuid primary key default gen_random_uuid(),
  order_id uuid unique not null references orders(id) on delete cascade,
  amount_rwf integer not null,
  fee_rwf integer not null,
  seller_receives_rwf integer not null,
  flutterwave_transaction_id varchar(100) unique,
  flutterwave_tx_ref varchar(100) unique,
  status varchar(50) not null default 'payment_pending',
  payment_received_at timestamptz,
  auto_release_due_at timestamptz,
  release_triggered_at timestamptz,
  released_at timestamptz,
  auto_released boolean default false,
  dispute_status varchar(50),
  dispute_reason text,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

create table if not exists payouts (
  id uuid primary key default gen_random_uuid(),
  escrow_id uuid not null references escrow_transactions(id) on delete cascade,
  seller_id uuid not null references sellers(id) on delete cascade,
  amount_rwf integer not null,
  status varchar(50) not null default 'pending',
  flutterwave_disbursement_id varchar(120),
  created_at timestamptz default now(),
  sent_at timestamptz
);
