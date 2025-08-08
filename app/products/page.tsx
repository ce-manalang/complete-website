'use client';

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight, Loader2 } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { useProducts } from "@/hooks/use-datocms"

export default function ProductsPage() {
  const { data, loading, error } = useProducts();

  if (loading) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <Loader2 className="h-8 w-8 animate-spin" />
            <span>Loading products from DatoCMS...</span>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600 mb-2">Error Loading Products</h2>
            <p className="text-gray-600">{error}</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const products = data?.products || [];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-blue-50 to-indigo-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Our Products
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Discover our comprehensive suite of business solutions designed to help you succeed.
                </p>
                {data?.meta && (
                  <p className="text-sm text-gray-500">
                    {data.meta.count} products available
                  </p>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            {products.length === 0 ? (
              <div className="text-center py-12">
                <h2 className="text-2xl font-bold mb-2">No Products Found</h2>
                <p className="text-gray-600">No products are currently available.</p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product: any) => (
                <Card key={product.id} className="flex flex-col">
                  <CardHeader className="p-0">
                    <Image
                      src={product.image?.url || "/placeholder.svg"}
                      width="400"
                      height="300"
                      alt={product.name}
                      className="aspect-video w-full rounded-t-lg object-cover"
                    />
                  </CardHeader>
                  <CardContent className="flex-1 p-6">
                    <div className="space-y-2">
                      <Badge variant="secondary">{product.category}</Badge>
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <CardDescription>{product.description}</CardDescription>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(product.rating || 0)
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {product.rating || 0} ({product.reviews || 0} reviews)
                        </span>
                      </div>
                      
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-gray-600">Key Features:</p>
                        <ul className="text-sm text-gray-600">
                          {Array.isArray(product.features) && product.features.length > 0 ? (
                            product.features.slice(0, 2).map((feature: string, index: number) => (
                              <li key={index}>• {feature}</li>
                            ))
                          ) : (
                            <li className="text-gray-400">No features listed</li>
                          )}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <div>
                        <p className="text-2xl font-bold">${product.price}</p>
                        <p className="text-sm text-gray-600">per month</p>
                      </div>
                      <Button asChild>
                        <Link href={`/products/${product.id}`}>
                          View Details <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Need Help Choosing?</h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our team of experts is here to help you find the perfect solution for your business needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" asChild>
                  <Link href="/contact">Contact Sales</Link>
                </Button>
                <Button variant="outline" size="lg">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
