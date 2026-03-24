# AGENTS.md

This document provides guidelines for agents operating in the Knightvision Media Club website repository.

## Project Overview

A Next.js 16 website for a school media club featuring videos, photos, merchandise, and news. Built with React 19, TypeScript, Tailwind CSS v4, and Framer Motion for animations.

## Build/Lint/Test Commands

```bash
# Development
npm run dev          # Start dev server at http://localhost:3000

# Production
npm run build        # Build for production
npm run start        # Start production server

# Linting
npm run lint         # Run ESLint
```

**Note:** This project has no test suite. Do not add test infrastructure unless explicitly requested.

### Running a Single Test (if tests exist)
Tests are not currently configured. If needed, install Vitest and use:
```bash
npx vitest run src/path/to/test.file.ts
```

## Tech Stack

- **Framework:** Next.js 16.1.4 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4 (CSS-first configuration with `@theme`)
- **Animation:** Framer Motion 12
- **Icons:** Lucide React
- **Fonts:** Next.js Font (Inter via `next/font/google`)

## Code Style Guidelines

### TypeScript

- Use strict TypeScript with `strict: true` enabled (tsconfig.json)
- Define shared types in `lib/types.ts`
- Use interfaces for object shapes, type aliases for unions/primitives
- Avoid `any` - use `unknown` when type is uncertain

```typescript
// Good
interface Video {
  id: string;
  title: string;
  category: 'promo' | 'interview' | 'other';
}

// Avoid
const video: any = fetchVideo();
```

### Imports

Order imports in each file:
1. React/Next.js built-ins (`React`, `next/link`, etc.)
2. Third-party libraries (`framer-motion`, `lucide-react`)
3. Internal imports (`@/components/*`, `@/lib/*`, `@/app/*`)
4. Relative imports (`./component`, `../utils`)
5. Type imports use `import type { TypeName }`

```typescript
// Example component imports
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Header from '@/components/layout/Header';
import { Video, Photo } from '@/lib/types';
```

### File Naming

- React components: `PascalCase.tsx` (e.g., `FeaturedMedia.tsx`)
- Utility files: `camelCase.ts` (e.g., `utils.ts`)
- Route pages: `page.tsx` inside route folders
- Layouts: `layout.tsx`

### Component Structure

```typescript
'use client';  // Add only if component uses client features (hooks, browser APIs)

import { motion } from 'framer-motion';
import { Icon } from 'lucide-react';
import Link from 'next/link';

interface ComponentProps {
  title: string;
  items: Item[];
}

export default function Component({ title, items }: ComponentProps) {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4">
        {/* Content */}
      </div>
    </section>
  );
}
```

### Styling Conventions

- Use Tailwind CSS utility classes exclusively
- Use CSS custom properties for theme colors (defined in `app/globals.css`)
- Custom colors available: `bg-primary`, `text-gold`, `border-gold`, `bg-gold`
- Gold color: `#e2bd00` / `--color-gold`
- Dark background: `#0a0a0a` / `--color-primary`
- Prefer Tailwind's `@apply` or inline classes over custom CSS

```tsx
// Good
<div className="bg-primary text-gold border-gold">

// Avoid
<div style={{ backgroundColor: '#0a0a0a', color: '#e2bd00' }}>
```

### Client vs Server Components

- Add `'use client';` directive only when necessary (hooks, browser APIs, event handlers)
- Server components are default in Next.js App Router
- Components using `useState`, `useEffect`, event handlers need `'use client'`

### Error Handling

- Use TypeScript types to prevent runtime errors
- Validate props with default values when appropriate
- Handle optional properties with optional chaining: `item?.property`

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `FeaturedMedia` |
| Functions | camelCase | `handleClick` |
| Constants | camelCase | `maxItems` |
| Interfaces | PascalCase | `Video`, `NewsItem` |
| CSS classes | kebab-case | `bg-primary`, `text-gold` |

### Path Aliases

Use `@/` to reference project root:
```typescript
import Header from '@/components/layout/Header';
import { Video } from '@/lib/types';
import videosData from '@/data/videos.json';
```

## Project Structure

```
app/                    # Next.js App Router pages
  about/page.tsx
  contact/page.tsx
  layout.tsx           # Root layout
  merch/page.tsx
  news/page.tsx
  page.tsx            # Home page
  photos/page.tsx
  videos/page.tsx
  globals.css         # Tailwind config + CSS variables

components/
  home/
    FeaturedMedia.tsx
    Hero.tsx
    RecentNews.tsx
  layout/
    Header.tsx
    Footer.tsx

lib/
  types.ts            # Shared TypeScript interfaces

data/
  videos.json
  photos.json
  news.json
  merch.json

public/images/        # Static images (logo.png, hero images, etc.)
```

## Important Notes

1. **No Comments Policy:** Do not add explanatory comments to code unless explicitly requested by the user.

2. **JSON Data:** Content is stored in `/data/*.json` files and imported directly. No API routes exist.

3. **Images:** Place static images in `public/images/`. Use Next.js `<Image>` component with proper `alt` text and `priority` for above-fold images.

4. **Accessibility:** Always include meaningful `alt` text for images. Use semantic HTML elements.

5. **External Links:** Use `target="_blank" rel="noopener noreferrer"` for external links.

6. **ESLint:** The project uses `eslint-config-next` with TypeScript rules. Run `npm run lint` before committing.
