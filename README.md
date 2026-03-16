# Media Club Website

A professional, creative showcase website for your school's Media Club, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Home Page**: Dynamic hero section with animations, featured videos, designs, and latest news
- **Videos**: Filterable gallery of promotional videos, interviews, and other content
- **Designs**: Portfolio showcase of graphic designs and creative work
- **Merchandise**: Product catalog featuring apparel and 3D printed items
- **News**: Blog-style feed with club achievements and announcements
- **About**: Mission statement, values, and team information
- **Contact**: Contact form and club information

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)

## Getting Started

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

Build the optimized production version:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Customization

### Update Content

Edit the JSON files in the `data/` directory:
- `videos.json` - Add/edit video content
- `designs.json` - Add/edit design portfolio items
- `merch.json` - Add/edit merchandise products
- `news.json` - Add/edit news articles

### Add Images

Place your images in the `public/images/` directory and reference them in the JSON files:
```json
{
  "imageUrl": "/images/your-image.jpg"
}
```

### Update Colors

The site uses a purple/pink gradient theme. To change colors, edit the Tailwind classes in the components.

### Update Contact Information

Edit the contact details in `app/contact/page.tsx` and `components/layout/Footer.tsx`.

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Other Platforms

This is a standard Next.js app and can be deployed to any platform that supports Node.js applications.

## Project Structure

```
media-club-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout with header/footer
│   ├── page.tsx           # Home page
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── designs/           # Designs gallery page
│   ├── merch/             # Merchandise page
│   ├── news/              # News feed page
│   └── videos/            # Videos gallery page
├── components/            # React components
│   ├── home/             # Home page components
│   ├── layout/           # Header and Footer
│   └── ui/               # UI components
├── data/                 # JSON data files
├── lib/                  # Utilities and types
└── public/               # Static assets
```
