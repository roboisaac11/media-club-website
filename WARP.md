# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Commands

### Development
```powershell
npm run dev      # Start development server on http://localhost:3000
npm run build    # Build production bundle
npm start        # Start production server (requires build first)
npm run lint     # Run ESLint
```

## Architecture

### Framework & Routing
This is a **Next.js 14 App Router** project with TypeScript. All routes are file-system based in `app/`:
- `app/page.tsx` - Home page (/)
- `app/videos/page.tsx` - Videos gallery (/videos)
- `app/designs/page.tsx` - Designs portfolio (/designs)
- `app/merch/page.tsx` - Merchandise catalog (/merch)
- `app/news/page.tsx` - News feed (/news)
- `app/about/page.tsx` - About page (/about)
- `app/contact/page.tsx` - Contact page (/contact)

The root layout (`app/layout.tsx`) wraps all pages with the Header and Footer components.

### Data Flow Pattern
The site uses a **JSON-based static content system** (not a CMS or database):
1. All content is stored as JSON files in `data/` directory
2. JSON files are imported directly in page components using module imports
3. Data is typed using interfaces from `lib/types.ts`
4. Example: `import videosData from '@/data/videos.json'` then cast to `Video[]`

**Content Files:**
- `data/videos.json` - Video content with categories (promo, interview, other)
- `data/designs.json` - Design portfolio items
- `data/merch.json` - Merchandise products (types: apparel, 3d-print, accessory)
- `data/news.json` - News articles with featured flag

### Type System
All data types are centralized in `lib/types.ts`:
- `Video` - includes category, thumbnail, videoUrl, featured flag
- `Design` - includes category, imageUrl, featured flag
- `MerchItem` - includes type (apparel/3d-print/accessory), price, availability
- `NewsItem` - includes excerpt, content, author, featured flag
- `TeamMember` - includes role, bio, social links

### Component Structure
**Layout components** (`components/layout/`):
- `Header.tsx` - Fixed header with mobile menu using Framer Motion, purple/pink gradient theme
- `Footer.tsx` - Site footer

**Home page components** (`components/home/`):
- `Hero.tsx` - Animated hero section
- `FeaturedMedia.tsx` - Displays featured videos and designs
- `RecentNews.tsx` - Shows recent news items

### Styling & Animation
- **Tailwind CSS 4** for all styling (using `@tailwindcss/postcss`)
- **Color scheme**: Purple-to-pink gradient (`from-purple-600 to-pink-600`)
- **Framer Motion** for animations (AnimatePresence, motion components)
- **Lucide React** for icons
- **Inter font** from Google Fonts via `next/font`

### Path Aliasing
TypeScript path alias `@/*` maps to root directory:
```typescript
import Header from '@/components/layout/Header'
import { Video } from '@/lib/types'
import videosData from '@/data/videos.json'
```

## Content Updates

### Adding/Editing Content
1. Edit the appropriate JSON file in `data/` directory
2. Ensure data matches the TypeScript interface in `lib/types.ts`
3. Set `featured: true` for items to appear on home page
4. Reference images using `/images/` path (stored in `public/images/`)

### Adding New Routes
1. Create new directory in `app/` with `page.tsx`
2. Add route to `navItems` array in `components/layout/Header.tsx` (line 8-16)
3. Update both desktop and mobile navigation

## Deployment
The project is designed for **Vercel deployment** (standard Next.js deployment). No special configuration needed in `next.config.ts`.
