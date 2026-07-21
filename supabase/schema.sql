-- Enable Extensions
create extension if not exists "uuid-ossp";
create extension if not exists "pg_trgm";

-- Profiles Table
create table public.profiles (
  id uuid primary key references auth.users on delete cascade,
  username text unique,
  full_name text,
  avatar_url text,
  bio text,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Admin Users Table
create table public.admin_users (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users on delete cascade,
  email text not null unique,
  role text default 'admin',
  created_at timestamp with time zone default timezone('utc'::text, now()),
  unique(user_id)
);

-- Product Categories
create table public.product_categories (
  id uuid primary key default uuid_generate_v4(),
  name text not null unique,
  description text,
  icon text,
  order_index integer,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Products
create table public.products (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  slug text unique,
  description text,
  short_description text,
  price decimal(10, 2) not null,
  sale_price decimal(10, 2),
  currency text default 'USD',
  category_id uuid references product_categories on delete set null,
  sku text unique,
  status text default 'available', -- available, out_of_stock, coming_soon, hidden, archived
  stock_quantity integer default 0,
  release_date date,
  rating decimal(3, 2),
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now()),
  created_by uuid references auth.users on delete set null
);

-- Product Images
create table public.product_images (
  id uuid primary key default uuid_generate_v4(),
  product_id uuid not null references products on delete cascade,
  image_url text not null,
  alt_text text,
  order_index integer,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Product Videos
create table public.product_videos (
  id uuid primary key default uuid_generate_v4(),
  product_id uuid not null references products on delete cascade,
  video_url text not null,
  title text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Product Specifications
create table public.product_specifications (
  id uuid primary key default uuid_generate_v4(),
  product_id uuid not null references products on delete cascade,
  key text not null,
  value text not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Product Tags
create table public.product_tags (
  id uuid primary key default uuid_generate_v4(),
  product_id uuid not null references products on delete cascade,
  tag text not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Songs
create table public.songs (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  artist text not null,
  album text,
  genre text,
  cover_url text,
  audio_url text not null,
  duration integer, -- in seconds
  published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now()),
  created_by uuid references auth.users on delete set null
);

-- Playlists
create table public.playlists (
  id uuid primary key default uuid_generate_v4(),
  name text not null,
  description text,
  cover_image text,
  creator text,
  genre text,
  published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now()),
  created_by uuid references auth.users on delete set null
);

-- Playlist Songs (Junction Table)
create table public.playlist_songs (
  id uuid primary key default uuid_generate_v4(),
  playlist_id uuid not null references playlists on delete cascade,
  song_id uuid not null references songs on delete cascade,
  order_index integer,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  unique(playlist_id, song_id)
);

-- Cart
create table public.cart (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users on delete cascade,
  product_id uuid not null references products on delete cascade,
  quantity integer default 1,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now()),
  unique(user_id, product_id)
);

-- Favorites
create table public.favorites (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users on delete cascade,
  type text not null, -- product, song, playlist
  item_id uuid not null,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  unique(user_id, type, item_id)
);

-- Orders
create table public.orders (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid not null references auth.users on delete cascade,
  total decimal(10, 2) not null,
  status text default 'pending', -- pending, completed, cancelled, refunded
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Order Items
create table public.order_items (
  id uuid primary key default uuid_generate_v4(),
  order_id uuid not null references orders on delete cascade,
  product_id uuid not null references products,
  quantity integer not null,
  price decimal(10, 2) not null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Price History
create table public.price_history (
  id uuid primary key default uuid_generate_v4(),
  product_id uuid not null references products on delete cascade,
  old_price decimal(10, 2),
  new_price decimal(10, 2),
  old_sale_price decimal(10, 2),
  new_sale_price decimal(10, 2),
  changed_by uuid references auth.users on delete set null,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Banners
create table public.banners (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  description text,
  image_url text,
  video_url text,
  button_text text,
  button_link text,
  start_date date,
  end_date date,
  published boolean default false,
  order_index integer,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now()),
  created_by uuid references auth.users on delete set null
);

-- Announcements
create table public.announcements (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  content text not null,
  type text, -- news, announcement, release, music
  image_url text,
  published boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now()),
  created_by uuid references auth.users on delete set null
);

-- Audit Logs
create table public.audit_logs (
  id uuid primary key default uuid_generate_v4(),
  user_id uuid references auth.users on delete set null,
  action text not null,
  table_name text,
  record_id uuid,
  changes jsonb,
  ip_address text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Row Level Security
alter table profiles enable row level security;
alter table products enable row level security;
alter table songs enable row level security;
alter table playlists enable row level security;
alter table cart enable row level security;
alter table favorites enable row level security;
alter table orders enable row level security;
alter table order_items enable row level security;
alter table admin_users enable row level security;

-- Policies
create policy "Users can view all profiles"
  on profiles for select
  using (true);

create policy "Users can update their own profile"
  on profiles for update
  using (auth.uid() = id);

create policy "Public can view published products"
  on products for select
  using (status != 'hidden');

create policy "Users can view their cart"
  on cart for select
  using (auth.uid() = user_id);

create policy "Users can manage their cart"
  on cart for insert, update, delete
  using (auth.uid() = user_id);

create policy "Users can view their favorites"
  on favorites for select
  using (auth.uid() = user_id);

create policy "Users can manage their favorites"
  on favorites for insert, delete
  using (auth.uid() = user_id);

create policy "Users can view their orders"
  on orders for select
  using (auth.uid() = user_id);

create policy "Users can insert their orders"
  on orders for insert
  using (auth.uid() = user_id);

create policy "Only admins can view admin users"
  on admin_users for select
  using (exists(select 1 from admin_users where user_id = auth.uid()));

-- Indexes
create index idx_products_category on products(category_id);
create index idx_products_status on products(status);
create index idx_products_slug on products(slug);
create index idx_cart_user on cart(user_id);
create index idx_favorites_user on favorites(user_id);
create index idx_orders_user on orders(user_id);
create index idx_playlists_published on playlists(published);
create index idx_songs_published on songs(published);
create index idx_audit_logs_user on audit_logs(user_id);
create index idx_audit_logs_created on audit_logs(created_at);
