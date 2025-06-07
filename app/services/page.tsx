import { Zap, Palette, Building, Printer, Brush, Home, Sun } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"


export default function ServicesPage() {
  const services = [
    {
      icon: <Zap className="h-12 w-12" />,
      title: "LED Neon Signs",
      description: "Light up your brand with vibrant, custom LED neon designs.",
      features: ["Energy Efficient", "Weather Resistant", "Custom Colors", "Long Lasting"],
    },
    {
      icon: <Palette className="h-12 w-12" />,
      title: "Acrylic Signage Boards",
      description: "Sleek, durable, and stunning — acrylic signs that leave a lasting impression.",
      features: ["Crystal Clear", "UV Resistant", "Lightweight", "Versatile Design"],
    },
    {
      icon: <Building className="h-12 w-12" />,
      title: "Office Signage Solutions",
      description: "Elevate your workspace with professional office signage.",
      features: ["Professional Look", "Brand Consistency", "Wayfinding", "Custom Layouts"],
    },
    {
      icon: <Printer className="h-12 w-12" />,
      title: "Digital Printing Services",
      description: "High-impact digital prints that bring your vision to life with precision and color.",
      features: ["High Resolution", "Vibrant Colors", "Multiple Materials", "Quick Turnaround"],
    },
    {
      icon: <Brush className="h-12 w-12" />,
      title: "Branding and Visual",
      description: "Shape powerful brand stories through striking signage and design.",
      features: ["Brand Strategy", "Logo Design", "Color Schemes", "Visual Guidelines"],
    },
    {
      icon: <Home className="h-12 w-12" />,
      title: "Indoor Signage",
      description: "Enhance interiors with smart, stylish signage crafted for every space.",
      features: ["Space Optimization", "Interior Design", "Directional Signs", "Decorative Elements"],
    },
    {
      icon: <Sun className="h-12 w-12" />,
      title: "Outdoor Signage",
      description: "Make your mark outdoors with bold, weatherproof signage built to impress.",
      features: ["Weather Resistant", "High Visibility", "Durable Materials", "24/7 Impact"],
    },
        {
      icon: <Sun className="h-12 w-12" />,
      title: "Outdoor Signage",
      description: "Make your mark outdoors with bold, weatherproof signage built to impress.",
      features: ["Weather Resistant", "High Visibility", "Durable Materials", "24/7 Impact"],
    },
        {
      icon: <Sun className="h-12 w-12" />,
      title: "Outdoor Signage",
      description: "Make your mark outdoors with bold, weatherproof signage built to impress.",
      features: ["Weather Resistant", "High Visibility", "Durable Materials", "24/7 Impact"],
    },
  ]

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive signage solutions tailored to your business needs. From concept to installation, we deliver
            excellence in every project.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="text-red-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <div className="w-2 h-2 bg-red-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link href="/contact">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white">Get Quote</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From initial consultation to final installation, we ensure a smooth and professional experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Consultation", description: "We discuss your needs and vision" },
              { step: "02", title: "Design", description: "Custom design creation and approval" },
              { step: "03", title: "Production", description: "High-quality manufacturing process" },
              { step: "04", title: "Installation", description: "Professional installation and setup" },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{process.title}</h3>
                <p className="text-gray-600">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your signage needs and create something amazing together
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-black-600 hover:bg-gray-100 px-8 py-3 text-lg font-semibold">
              Contact Us Today
            </Button> 
          </Link>
        </div>
      </section>
    </div>
  )
}
