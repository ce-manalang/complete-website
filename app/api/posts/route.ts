import { NextResponse } from 'next/server';
import { datocmsClient } from '@/lib/datocms';
import type { BlogPost } from '@/lib/content-types';

export async function GET() {
  try {
    // Fetch blog posts from DatoCMS
    // Note: Replace 'blog_post' with your actual model API identifier
    const posts = await datocmsClient.items.list({
      filter: {
        type: 'blog_post', // Change this to match your DatoCMS model
      },
      fields: [
        'id',
        'title',
        'slug',
        'excerpt',
        'content',
        'featured_image',
        'author',
        'publish_date',
        'tags',
        'seo_title',
        'seo_description',
        'seo_image',
      ],
    });

    // Transform the data to match our BlogPost interface
    const transformedPosts: BlogPost[] = posts.map((post: any) => ({
      id: post.id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      featuredImage: post.featured_image ? {
        url: post.featured_image.url,
        alt: post.featured_image.alt,
      } : undefined,
      author: post.author,
      publishDate: post.publish_date,
      tags: post.tags,
      seo: {
        title: post.seo_title,
        description: post.seo_description,
        image: post.seo_image?.url,
      },
    }));

    return NextResponse.json(transformedPosts);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    );
  }
}
