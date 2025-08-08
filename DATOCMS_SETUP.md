# DatoCMS Integration Setup Guide

This guide will help you set up DatoCMS integration with your Next.js project.

## Prerequisites

- Node.js installed on your system
- A DatoCMS account and project
- Your DatoCMS API token (you already have this: `5a8da5107051ef6f1de67c6c2bf1c1`)

## Step 1: Install Dependencies

No additional dependencies are required! This integration uses the native `fetch` API to communicate with DatoCMS's GraphQL Content Delivery API.

## Step 2: Environment Configuration

Create a `.env.local` file in your project root and add your DatoCMS API token:

```env
# DatoCMS Configuration
NEXT_PUBLIC_DATOCMS_API_TOKEN=5a8da5107051ef6f1de67c6c2bf1c1
DATOCMS_API_TOKEN=5a8da5107051ef6f1de67c6c2bf1c1
```

## Step 3: DatoCMS Project Setup

1. Go to your DatoCMS project dashboard
2. Create the following content models:

### Blog Post Model
- **API Identifier**: `blog_post`
- **Fields**:
  - `title` (Text, required)
  - `slug` (Slug, required)
  - `excerpt` (Text, optional)
  - `content` (Rich text, required)
  - `featured_image` (Image, optional)
  - `author` (Text, optional)
  - `publish_date` (Date, required)
  - `tags` (Multiple links, optional)
  - `seo_title` (Text, optional)
  - `seo_description` (Text, optional)
  - `seo_image` (Image, optional)

### Product Model
- **API Identifier**: `product`
- **Fields**:
  - `name` (Text, required)
  - `description` (Rich text, required)
  - `price` (Number, required)
  - `rating` (Number, optional)
  - `reviews` (Number, optional)
  - `category` (Text, required)
  - `features` (Multiple links, optional)
  - `image` (Image, optional)

### Site Settings Model
- **API Identifier**: `site_settings`
- **Fields**:
  - `site_name` (Text, required)
  - `site_description` (Text, required)
  - `logo` (Image, optional)
  - `favicon` (Image, optional)
  - `social_links` (JSON, optional)
  - `contact_info` (JSON, optional)

## Step 4: Test the Integration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Visit `http://localhost:3000/api/posts` to test the posts API
3. Visit `http://localhost:3000/api/products` to test the products API (uses GraphQL)
4. Visit `http://localhost:3000/api/settings` to test the settings API
5. Visit `http://localhost:3000/products` to see the products page with DatoCMS data

## Step 5: Use in Components

The project includes a custom hook for easy data fetching:

```tsx
import { usePosts, useProducts, useSiteSettings } from '@/hooks/use-datocms';

function MyComponent() {
  const { data: posts, loading, error } = usePosts();
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      {posts?.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.excerpt}</p>
        </div>
      ))}
    </div>
  );
}
```

## Step 6: Example Component

Check out the `components/datocms-example.tsx` file for a complete example of how to use the DatoCMS integration.

## API Routes Available

- `/api/posts` - Fetch all blog posts
- `/api/products` - Fetch all products
- `/api/settings` - Fetch site settings

## Customization

### Adding New Content Types

1. Create the content model in DatoCMS
2. Add the TypeScript interface in `lib/content-types.ts`
3. Create an API route in `app/api/`
4. Add a custom hook in `hooks/use-datocms.ts`

### Modifying Existing Models

Update the field names in the API routes to match your DatoCMS model field API identifiers.

## Troubleshooting

### Common Issues

1. **API Token Not Working**: Make sure your API token has the correct permissions in DatoCMS
2. **Model Not Found**: Verify the API identifier matches exactly between your code and DatoCMS
3. **Field Names**: Ensure field names in the API routes match the DatoCMS field API identifiers

### Debug Mode

Add this to your `.env.local` for more detailed error messages:

```env
DEBUG=datocms:*
```

## Next Steps

1. Create content in your DatoCMS project
2. Customize the content models to match your needs
3. Update the TypeScript interfaces to match your models
4. Build your components using the provided hooks and API routes
5. Ship it

## Resources

- [DatoCMS Documentation](https://www.datocms.com/docs/)
- [DatoCMS JavaScript SDK](https://github.com/datocms/js-datocms-client)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
