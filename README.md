# BRATDE STORE

**THE FUTURE IS BRATDE.**

A modern, futuristic digital store and music platform with premium design and comprehensive admin capabilities.

## Features

### 🛍️ Store
- Product catalog with multiple categories
- Product management (images, videos, specifications)
- Shopping cart and checkout
- Coming Soon products with countdown
- Favorites system
- Advanced search and filtering
- Real-time price updates

### 🎵 Music Platform
- Music playlist system
- Built-in music player with queue
- Persistent mini-player
- Full-screen player
- Playlist management
- Song management

### 👨‍💼 Admin Panel
- Secure authentication with 2FA
- Product management (CRUD operations)
- Category management
- Playlist and song management
- Banner and announcement management
- Price management
- Analytics and audit logs
- Security settings

### 👥 User Features
- User authentication (Email, Password, Google OAuth)
- User profiles with avatars
- Order history
- Favorites management
- Responsive design (Mobile, Tablet, Desktop)
- Cart persistence

## Tech Stack

- **Frontend**: React 18, Vite, Tailwind CSS
- **State Management**: Zustand
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Backend**: Supabase (Auth, Database, Storage, Real-time)
- **Styling**: Custom Glassmorphism Design System

## Getting Started

### Prerequisites
- Node.js 16+
- npm or yarn
- Supabase account

### Installation

1. Clone the repository
```bash
git clone https://github.com/bagzhan743-spec/arcode.git
cd arcode
```

2. Install dependencies
```bash
npm install
```

3. Create `.env.local` file with Supabase credentials
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_key
VITE_ADMIN_EMAIL=admin@bratdestore.com
VITE_API_URL=http://localhost:3000
```

4. Set up Supabase database
```bash
# Use the SQL schema in supabase/schema.sql
```

5. Start development server
```bash
npm run dev
```

The app will open at `http://localhost:3000`

## Project Structure

```
src/
├── components/
│   ├── common/              # Navbar, Footer, etc
│   ├── home/                # Homepage sections
│   ├── store/               # Store components
│   ├── music/               # Music player
│   ├── admin/               # Admin components
│   └── auth/                # Auth forms
├── pages/
│   ├── Home.jsx
│   ├── Store.jsx
│   ├── ProductDetail.jsx
│   ├── Music.jsx
│   ├── Cart.jsx
│   ├── admin/
│   └── ...
├── layouts/
│   ├── Layout.jsx           # User layout
│   └── AdminLayout.jsx      # Admin layout
├── hooks/                   # Custom React hooks
├── stores/                  # Zustand stores
├── services/                # API services
├── context/                 # Context API
├── styles/
│   └── index.css           # Global styles
└── App.jsx
```

## Key Features in Detail

### Store Features
- **Product Categories**: Unlimited categories managed by admin
- **Product Status**: Available, Out of Stock, Coming Soon, Hidden, Archived
- **Product Details**: Name, Description, Images, Videos, Price, Sale Price, SKU, Specifications, Tags
- **Coming Soon**: Special display with optional release date and countdown
- **Search & Filter**: Global search with category and price filters

### Music Features
- **Playlists**: Create and manage unlimited playlists
- **Music Player**: Play, pause, next, previous, shuffle, repeat
- **Queue Management**: Add songs to queue
- **Persistent Player**: Music continues playing across pages
- **Mini Player**: Bottom bar player while browsing
- **Full Screen Player**: Immersive music experience

### Admin Panel
- **Dashboard**: Overview of sales, users, products
- **Product Management**: Create, edit, delete, duplicate products
- **Price Management**: Set regular and sale prices
- **Playlist Management**: Create playlists and add songs
- **Banner Management**: Create promotional banners
- **Security**: Change password, 2FA, login history

## Admin Access

1. Navigate to `/admin/login`
2. Enter admin email and password
3. Access dashboard at `/admin/dashboard`

### Setting Up First Admin Account

Use Supabase Auth to create the admin user, then add a row to `admin_users` table with the user_id.

## Database Schema

### Core Tables
- `users` - User accounts (handled by Supabase Auth)
- `profiles` - User profiles
- `products` - Product catalog
- `product_categories` - Product categories
- `product_images` - Product images
- `product_videos` - Product videos
- `songs` - Music catalog
- `playlists` - Music playlists
- `playlist_songs` - Playlist contents
- `cart` - Shopping cart items
- `favorites` - User favorites
- `orders` - Customer orders
- `order_items` - Order line items
- `banners` - Promotional banners
- `announcements` - Site announcements
- `admin_users` - Admin user accounts
- `audit_logs` - Activity logs

## Security Features

- ✅ Row Level Security (RLS)
- ✅ Supabase Authentication
- ✅ Protected admin routes
- ✅ Role-based access control
- ✅ Secure file uploads to cloud storage
- ✅ Input validation and sanitization
- ✅ Audit logging
- ✅ Password encryption
- ✅ Session management
- ✅ 2FA support

## Design System

### Color Palette
- Primary: `#00ff88` (BRATDE Accent)
- Dark Background: `#0a0e27`
- Darker Background: `#050810`

### Components
- Glassmorphism cards
- Smooth animations
- Responsive grid layouts
- Micro-interactions
- Premium typography

## Performance

- Fast page loads with Vite
- Code splitting and lazy loading
- Optimized images and videos
- Efficient state management
- Real-time updates with Supabase subscriptions

## Deployment

### Build for Production
```bash
npm run build
```

### Deploy to Vercel
```bash
vercel deploy
```

## Environment Variables

```env
# Supabase
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key

# Admin
VITE_ADMIN_EMAIL=admin@bratdestore.com

# API
VITE_API_URL=https://your-api.com
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

MIT

## Support

For support, email support@bratdestore.com

---

**BRATDE STORE** - The Future is Here 🚀
