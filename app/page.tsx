import { ArrowRight, Palette, Wrench, Zap, Shield, Star } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import About from "@/components/About"
import Footer from "@/components/Footer"


export default function HomePage() {
  const services = [
    {
      icon: <Palette className="h-8 w-8" />,
      title: "LED Neon Signs",
      description: "Light up your brand with vibrant, custom LED neon designs.",
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Acrylic Signage",
      description: "Sleek, durable, and stunning — acrylic signs that leave a lasting impression.",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Office Solutions",
      description: "Transform your workspace with professional office signage that speaks success.",
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Digital Printing",
      description: "High-impact digital prints that bring your vision to life with precision and color.",
    },
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
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
          //  backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          backgroundImage: "url('/assets/hero-image.png')",

          }}
        ></div>
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <div className="mb-6">
            <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-full text-lg font-semibold mb-4">
              15+ Years of Excellence
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Premium Signage Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Transform your business with custom signage that captures attention and drives results. From design to
            installation, we deliver excellence every step of the way.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

          {/* About page in the landing page  */}
      <About />

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
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

          <div className="text-center mt-12">
            <Link href="/services">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">View All Services</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
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

      {/* Footer */}
      <Footer />
    </div>
  )
}
