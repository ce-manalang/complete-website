import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Check, ArrowLeft, Shield, Zap, Users, HeadphonesIcon } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { notFound } from "next/navigation"

const products = [
  {
    id: 1,
    name: "Business Pro Suite",
    description: "Complete business management solution with CRM, project management, and analytics.",
    longDescription: "Our Business Pro Suite is a comprehensive solution designed to streamline your entire business operation. From customer relationship management to project tracking and detailed analytics, this all-in-one platform helps you manage every aspect of your business efficiently.",
    price: "$99/month",
    rating: 4.8,
    reviews: 124,
    category: "Business Software",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Advanced CRM with lead tracking",
      "Project management with Gantt charts",
      "Real-time analytics and reporting",
      "Team collaboration tools",
      "Document management system",
      "Mobile app access",
      "API integrations",
      "24/7 customer support"
    ],
    benefits: [
      "Increase productivity by 40%",
      "Reduce operational costs",
      "Improve customer satisfaction",
      "Streamline workflows"
    ],
    specifications: {
      "Users": "Unlimited",
      "Storage": "1TB",
      "Integrations": "50+",
      "Support": "24/7",
      "Mobile App": "iOS & Android",
      "API Access": "Full REST API"
    }
  },
  {
    id: 2,
    name: "Marketing Automation Tool",
    description: "Streamline your marketing campaigns with automated workflows and detailed insights.",
    longDescription: "Transform your marketing efforts with our powerful automation platform. Create sophisticated campaigns, nurture leads automatically, and gain deep insights into your marketing performance with advanced analytics and reporting tools.",
    price: "$79/month",
    rating: 4.6,
    reviews: 89,
    category: "Marketing",
    image: "/placeholder.svg?height=400&width=600",
    features: [
      "Email campaign automation",
      "Social media scheduling",
      "Lead scoring and nurturing",
      "A/B testing capabilities",
      "Landing page builder",
      "Analytics and reporting",
      "CRM integration",
      "Multi-channel campaigns"
    ],
    benefits: [
      "Increase lead conversion by 35%",
      "Save 20+ hours per week",
      "Improve email open rates",
      "Better ROI tracking"
    ],
    specifications: {
      "Contacts": "50,000",
      "Emails/month": "Unlimited",
      "Landing Pages": "Unlimited",
      "A/B Tests": "Unlimited",
      "Integrations": "100+",
      "Support": "Business hours"
    }
  }
]

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find(p => p.id === parseInt(params.id))
  
  if (!product) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1">
        {/* Breadcrumb */}
        <section className="w-full py-6 border-b">
          <div className="container px-4 md:px-6">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Link href="/products" className="hover:text-blue-600 flex items-center">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Products
              </Link>
              <span>/</span>
              <span>{product.name}</span>
            </div>
          </div>
        </section>

        {/* Product Hero */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <Badge variant="secondary">{product.category}</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {product.name}
                </h1>
                <p className="text-xl text-gray-600">
                  {product.longDescription}
                </p>
                
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? 'fill-yellow-400 text-yellow-400'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-gray-600">
                    {product.rating} ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex items-center space-x-4">
                  <div>
                    <p className="text-3xl font-bold">{product.price}</p>
                    <p className="text-gray-600">per month</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button size="lg">Start Free Trial</Button>
                    <Button variant="outline" size="lg" asChild>
                      <Link href="/contact">Contact Sales</Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              <Image
                src={product.image || "/placeholder.svg"}
                width="600"
                height="400"
                alt={product.name}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="w-full py-12 md:py-24 bg-gray-50">
          <div className="container px-4 md:px-6">
            <Tabs defaultValue="features" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="features">Features</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="specs">Specifications</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>
              
              <TabsContent value="features" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Key Features</CardTitle>
                    <CardDescription>
                      Everything you need to succeed, built into one powerful platform.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Check className="h-5 w-5 text-green-600" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="benefits" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Business Benefits</CardTitle>
                    <CardDescription>
                      See the real impact on your business with measurable results.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6 md:grid-cols-2">
                      {product.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="rounded-full bg-blue-100 p-2">
                            <Zap className="h-4 w-4 text-blue-600" />
                          </div>
                          <div>
                            <p className="font-medium">{benefit}</p>
                            <p className="text-sm text-gray-600 mt-1">
                              Proven results from our customer success stories and case studies.
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="specs" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Technical Specifications</CardTitle>
                    <CardDescription>
                      Detailed technical information and system requirements.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-medium">{key}</span>
                          <span className="text-gray-600">{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="support" className="mt-6">
                <div className="grid gap-6 md:grid-cols-3">
                  <Card>
                    <CardHeader className="text-center">
                      <HeadphonesIcon className="h-12 w-12 mx-auto text-blue-600" />
                      <CardTitle>24/7 Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        Round-the-clock technical support via chat, email, and phone.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="text-center">
                      <Users className="h-12 w-12 mx-auto text-green-600" />
                      <CardTitle>Onboarding</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        Dedicated onboarding specialist to help you get started quickly.
                      </CardDescription>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardHeader className="text-center">
                      <Shield className="h-12 w-12 mx-auto text-purple-600" />
                      <CardTitle>Training</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-center">
                        Comprehensive training materials and live webinars for your team.
                      </CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[600px] text-gray-600 md:text-xl/relaxed">
                  Join thousands of satisfied customers who have transformed their business with {product.name}.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg">Start Free Trial</Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">Schedule Demo</Link>
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
