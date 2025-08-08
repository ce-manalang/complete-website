'use client';

import { usePosts, useProducts, useSiteSettings } from '@/hooks/use-datocms';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Loader2, RefreshCw } from 'lucide-react';

export function DatoCMSExample() {
  const { data: posts, loading: postsLoading, error: postsError, refetch: refetchPosts } = usePosts();
  const { data: products, loading: productsLoading, error: productsError, refetch: refetchProducts } = useProducts();
  const { data: settings, loading: settingsLoading, error: settingsError, refetch: refetchSettings } = useSiteSettings();

  if (postsLoading || productsLoading || settingsLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <Loader2 className="h-8 w-8 animate-spin" />
        <span className="ml-2">Loading content from DatoCMS...</span>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Site Settings */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Site Settings
            <Button variant="outline" size="sm" onClick={refetchSettings}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {settingsError ? (
            <p className="text-red-500">Error: {settingsError}</p>
          ) : settings ? (
            <div className="space-y-2">
              <p><strong>Site Name:</strong> {settings.siteName}</p>
              <p><strong>Description:</strong> {settings.siteDescription}</p>
              {settings.contactInfo?.email && (
                <p><strong>Email:</strong> {settings.contactInfo.email}</p>
              )}
            </div>
          ) : (
            <p>No site settings found</p>
          )}
        </CardContent>
      </Card>

      {/* Blog Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Blog Posts
            <Button variant="outline" size="sm" onClick={refetchPosts}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {postsError ? (
            <p className="text-red-500">Error: {postsError}</p>
          ) : posts && posts.length > 0 ? (
            <div className="space-y-4">
              {posts.map((post: any) => (
                <div key={post.id} className="border rounded-lg p-4">
                  <h3 className="font-semibold">{post.title}</h3>
                  {post.excerpt && (
                    <p className="text-gray-600 mt-2">{post.excerpt}</p>
                  )}
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex gap-2 mt-2">
                      {post.tags.map((tag: string) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>No blog posts found</p>
          )}
        </CardContent>
      </Card>

      {/* Products */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Products
            <Button variant="outline" size="sm" onClick={refetchProducts}>
              <RefreshCw className="h-4 w-4 mr-2" />
              Refresh
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {productsError ? (
            <p className="text-red-500">Error: {productsError}</p>
          ) : products && products.products && products.products.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products.products.map((product: any) => (
                <div key={product.id} className="border rounded-lg p-4">
                  <h3 className="font-semibold">{product.name}</h3>
                  <p className="text-gray-600 mt-1">{product.description}</p>
                  <p className="font-bold mt-2">${product.price}</p>
                  <div className="flex items-center mt-2">
                    <div className="flex items-center mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating || 0)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating || 0} ({product.reviews || 0})
                    </span>
                  </div>
                  <Badge variant="secondary" className="mt-2">
                    {product.category}
                  </Badge>
                </div>
              ))}
            </div>
          ) : (
            <p>No products found</p>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
