"use client"

import { useState } from "react"
import { Menu, Phone, Mail, MapPin, Star, Palette, Wrench, Zap, Shield, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"


import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Homepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Custom Design",
      description: "Unique signage designs tailored to your brand and vision",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Installation",
      description: "Professional installation services with attention to detail",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "LED Solutions",
      description: "Energy-efficient LED signage for maximum visibility",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Maintenance",
      description: "Ongoing maintenance and repair services for your signage",
    },
  ]

  const portfolioItems = [
    { id: 1, title: "Restaurant Storefront", category: "Retail" },
    { id: 2, title: "Corporate Building", category: "Corporate" },
    { id: 3, title: "Shopping Mall Directory", category: "Wayfinding" },
    { id: 4, title: "Hotel Lobby Sign", category: "Hospitality" },
    { id: 5, title: "Medical Center", category: "Healthcare" },
    { id: 6, title: "School Campus", category: "Education" },
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Johnson's Restaurant",
      rating: 5,
      text: "Exceptional quality and service. Our new storefront sign has increased foot traffic significantly!",
    },
    {
      name: "Mike Chen",
      company: "Tech Solutions Inc.",
      rating: 5,
      text: "Professional team that delivered exactly what we envisioned. Highly recommend their services.",
    },
    {
      name: "Lisa Rodriguez",
      company: "Downtown Medical",
      rating: 5,
      text: "From design to installation, everything was handled perfectly. Great attention to detail.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-2xl font-bold text-gray-900">
                Al Yaqoot
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  href="#home"
                  className="text-gray-900 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </Link>
                <Link
                  href="#services"
                  className="text-gray-600 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="#portfolio"
                  className="text-gray-600 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  href="#about"
                  className="text-gray-600 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About Us
                </Link>
                <Link
                  href="#contact"
                  className="text-gray-600 hover:text-red-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right">
                  <div className="flex flex-col space-y-4 mt-8">
                    <Link href="#home" className="text-gray-900 hover:text-red-600 px-3 py-2 text-lg font-medium">
                      Home
                    </Link>
                    <Link
                      href="#services"
                      className="text-gray-600 hover:text-red-600 px-3 py-2 text-lg font-medium"
                    >
                      Services
                    </Link>
                    <Link
                      href="#portfolio"
                      className="text-gray-600 hover:text-red-600 px-3 py-2 text-lg font-medium"
                    >
                      Portfolio
                    </Link>
                    <Link href="#about" className="text-gray-600 hover:text-red-600 px-3 py-2 text-lg font-medium">
                      About Us
                    </Link>
                    <Link href="#contact" className="text-gray-600 hover:text-red-600 px-3 py-2 text-lg font-medium">
                      Contact
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center">
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>

  {/* Background image */}
  <div
    className="absolute inset-0 bg-cover bg-center bg-no-repeat"
    style={{
      backgroundImage: "url('/assets/hero-image.png')",
    }}
  ></div>

  {/* Foreground content */}
  <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">Premium Signage Solutions</h1>
    <p className="text-xl md:text-2xl mb-8 text-gray-200">
      Transform your business with custom signage that captures attention and drives results.
    </p>
    <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
      Get a Quote
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  </div>
</section>


      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We offer comprehensive signage solutions to meet all your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-red-600 mb-4 flex justify-center">{service.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our recent projects and see the quality of our work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={`/placeholder.svg?height=300&width=400`}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-200">{item.category}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to start your signage project? Contact us for a free consultation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-gray-600">+971 5606374</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-gray-600">info@al-yaqoot.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-red-600 mr-3" />
                  <span className="text-gray-600">Ajman industrial area, Ajman</span>
                </div>
              </div>

              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-900">Business Hours</h4>
                <div className="space-y-2 text-gray-600">
                  <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input id="firstName" type="text" required />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" type="text" required />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" required />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <Input id="phone" type="tel" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details
                  </label>
                  <Textarea id="message" rows={4} placeholder="Tell us about your signage needs..." />
                </div>

                <Button type="submit" className="w-full bg-orange-600 hover:bg-orange-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">Al Yaqoot</h3>
              <p className="text-gray-400 mb-4">
                Your trusted partner for premium signage solutions. We bring your vision to life with quality
                craftsmanship and exceptional service.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#home" className="hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#portfolio" className="hover:text-white transition-colors">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Custom Design</li>
                <li>Installation</li>
                <li>LED Solutions</li>
                <li>Maintenance</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Al Yaqoot Pro. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
