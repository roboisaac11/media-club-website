export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  category: 'promo' | 'interview' | 'other';
  date: string;
  duration?: string;
  featured?: boolean;
}

export interface Design {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  date: string;
  featured?: boolean;
}

export interface MerchItem {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  type: 'apparel' | '3d-print' | 'accessory';
  price?: string;
  available: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  imageUrl?: string;
  featured?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl?: string;
  social?: {
    instagram?: string;
    twitter?: string;
    portfolio?: string;
  };
}
