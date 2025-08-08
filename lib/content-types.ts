// Content type interfaces for DatoCMS
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featuredImage?: {
    url: string;
    alt?: string;
  };
  author?: string;
  publishDate: string;
  tags?: string[];
  seo?: {
    title?: string;
    description?: string;
    image?: string;
  };
}

export interface Product {
  id: string;
  name: string;
  _status: string;
  _firstPublishedAt: string;
  price: number;
  rating: number;
  reviews: number;
  category: string;
  description: string;
  features: string[];
  image: {
    alt: string;
    url: string;
  };
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  content: string;
  seo?: {
    title?: string;
    description?: string;
    image?: string;
  };
}

export interface NavigationItem {
  id: string;
  label: string;
  url: string;
  children?: NavigationItem[];
}

export interface SiteSettings {
  siteName: string;
  siteDescription: string;
  logo?: {
    url: string;
    alt?: string;
  };
  favicon?: {
    url: string;
  };
  socialLinks?: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
  contactInfo?: {
    email?: string;
    phone?: string;
    address?: string;
  };
}
