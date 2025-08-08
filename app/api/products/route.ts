import { NextResponse } from 'next/server';
import { executeGraphQLQuery } from '@/lib/datocms';
import type { Product } from '@/lib/content-types';

const PRODUCTS_QUERY = `
  query {
    allProducts {
      id
      name
      _status
      _firstPublishedAt
      price
      rating
      reviews
      category
      description
      features
      image {
        alt
        url
      }
    }
    _allProductsMeta {
      count
    }
  }
`;

export async function GET() {
  try {
    // Fetch products from DatoCMS using GraphQL
    const response = await executeGraphQLQuery(PRODUCTS_QUERY);
    
    // Transform the data to match our Product interface
    const transformedProducts: Product[] = response.allProducts.map((product: any) => ({
      id: product.id,
      name: product.name,
      _status: product._status,
      _firstPublishedAt: product._firstPublishedAt,
      price: product.price,
      rating: product.rating,
      reviews: product.reviews,
      category: product.category,
      description: product.description,
      features: Array.isArray(product.features) ? product.features : [],
      image: product.image ? {
        alt: product.image.alt,
        url: product.image.url,
      } : {
        alt: product.name,
        url: '/placeholder.svg?height=300&width=400',
      },
    }));

    return NextResponse.json({
      products: transformedProducts,
      meta: response._allProductsMeta,
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}
