"use client";
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"

export default function PortfolioPage() {
  const categories = ["All", "LED Neon", "Acrylic", "Office", "Outdoor", "Indoor", "Digital Print"]

  const [selectedCategory, setSelectedCategory] = useState("All");

  const portfolioItems = [
    { id: 1, title: "Restaurant LED Neon Sign", category: "LED Neon", type: "Restaurant" },
    { id: 2, title: "Corporate Office Signage", category: "Office", type: "Corporate" },
    { id: 3, title: "Shopping Mall Directory", category: "Acrylic", type: "Retail" },
    { id: 4, title: "Hotel Exterior Sign", category: "Outdoor", type: "Hospitality" },
    { id: 5, title: "Medical Center Wayfinding", category: "Indoor", type: "Healthcare" },
    { id: 6, title: "School Campus Signs", category: "Outdoor", type: "Education" },
    { id: 7, title: "Retail Store Front", category: "LED Neon", type: "Retail" },
    { id: 8, title: "Office Reception Sign", category: "Acrylic", type: "Corporate" },
    { id: 9, title: "Restaurant Menu Board", category: "Digital Print", type: "Restaurant" },
    { id: 10, title: "Gym Interior Signage", category: "Indoor", type: "Fitness" },
    { id: 11, title: "Bank Branch Signage", category: "Office", type: "Financial" },
    { id: 12, title: "Apartment Complex Sign", category: "Outdoor", type: "Residential" },
  ]

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Portfolio</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our diverse range of signage projects. Each piece showcases our commitment to quality, creativity,
            and client satisfaction.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
<section className="py-8 bg-white sticky top-16 z-40 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant="outline"
              className={
                selectedCategory === category
                  ? "bg-red-500 text-white hover:bg-red-700"
                  : "hover:bg-orange-50"
              }
            >
              {category}
            </Button>
          ))}
        </div>
      </div>
    </section>

      {/* Portfolio Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {portfolioItems.map((item) => (
              <Card
                key={item.id}
                className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=${item.title}`}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="flex justify-between items-end">
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                          <p className="text-sm text-gray-200">{item.type}</p>
                        </div>
                        <span className="bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "500+", label: "Projects Completed" },
              { number: "15+", label: "Years Experience" },
              { number: "200+", label: "Happy Clients" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's create something amazing together. Contact us to discuss your signage needs.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-black-700 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
