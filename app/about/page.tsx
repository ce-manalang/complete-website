import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Target, Award, Heart } from 'lucide-react'
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
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
                  About Our Company
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Learn about our mission, values, and the passionate team behind our innovative solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Story</h2>
                  <p className="text-gray-600 md:text-lg">
                    Founded in 2020, our company began with a simple mission: to create innovative solutions that help businesses thrive in the digital age. What started as a small team of passionate entrepreneurs has grown into a trusted partner for companies worldwide.
                  </p>
                  <p className="text-gray-600 md:text-lg">
                    We believe that technology should empower people and businesses to achieve their full potential. That's why we focus on creating user-friendly, efficient, and scalable solutions that make a real difference in our customers' lives.
                  </p>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=400&width=600"
                width="600"
                height="400"
                alt="Our team"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Values</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  These core values guide everything we do and shape how we interact with our customers, partners, and each other.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Card>
                <CardHeader>
                  <Target className="h-12 w-12 text-blue-600" />
                  <CardTitle>Innovation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We constantly push boundaries and explore new technologies to deliver cutting-edge solutions that stay ahead of the curve.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Heart className="h-12 w-12 text-red-600" />
                  <CardTitle>Customer Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Our customers are at the heart of everything we do. We listen, understand, and deliver solutions that exceed expectations.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Award className="h-12 w-12 text-green-600" />
                  <CardTitle>Excellence</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We maintain the highest standards in everything we do, from product development to customer service and support.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-12 w-12 text-purple-600" />
                  <CardTitle>Collaboration</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    We believe in the power of teamwork and partnership, both within our organization and with our valued clients.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our diverse team of experts brings together years of experience and a shared passion for innovation.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader className="text-center">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    width="150"
                    height="150"
                    alt="CEO"
                    className="mx-auto rounded-full"
                  />
                  <CardTitle>Sarah Johnson</CardTitle>
                  <CardDescription>Chief Executive Officer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm text-gray-600">
                    With over 15 years of experience in technology and business strategy, Sarah leads our vision for innovation and growth.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    width="150"
                    height="150"
                    alt="CTO"
                    className="mx-auto rounded-full"
                  />
                  <CardTitle>Michael Chen</CardTitle>
                  <CardDescription>Chief Technology Officer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm text-gray-600">
                    Michael oversees our technical strategy and ensures our products meet the highest standards of quality and performance.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="text-center">
                  <Image
                    src="/placeholder.svg?height=150&width=150"
                    width="150"
                    height="150"
                    alt="Head of Design"
                    className="mx-auto rounded-full"
                  />
                  <CardTitle>Emily Rodriguez</CardTitle>
                  <CardDescription>Head of Design</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-center text-sm text-gray-600">
                    Emily leads our design team in creating beautiful, intuitive user experiences that delight our customers.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
