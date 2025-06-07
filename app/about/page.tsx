import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Award, Users, Clock, CheckCircle } from "lucide-react"
import Footer from "@/components/Footer"


export default function AboutPage() {
  const achievements = [
    { icon: <Award className="h-8 w-8" />, title: "Industry recognized", description: "Industry recognized excellence" },
    { icon: <Users className="h-8 w-8" />, title: "500+ Clients", description: "Trusted by businesses" },
    { icon: <Clock className="h-8 w-8" />, title: "15+ Years", description: "Of proven experience" },
    { icon: <CheckCircle className="h-8 w-8" />, title: "Quality Assured", description: "Premium materials only" },
  ]

  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content - Left Side */}
            <div>
              <div className="mb-6">
                <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-sm text-sm font-bold mb-4">
                  <div className="w-1 h-6 bg-white mr-3"></div>
                  ABOUT Al Yaqoot 
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="text-6xl font-bold text-red-600 mr-4">15+</div>
                  <div className="text-2xl font-semibold text-gray-800">Years of Excellence</div>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                A leading and trusted signage service provider, with years of successful experience.
                Signs made from neon and other illuminated materials, such as metal, plastic, and LED signs, are our
                specialty. We have remained in the vanguard as a leading manufacturer of premier advertising sources,
                meant to create brand definitions for your brand and its promotions.
              </p>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We have provided our customers with supreme quality signage products and services backed by outstanding
                technology and excellent service. Our sterling signage services will highlight your company and will
                proliferate visibility and brand image.
              </p>
            </div>

            {/* Image - Right Side */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                {/* need to insert the image  */}
                <Image
                src="./assets/about.jpeg"  
                alt="Al Yaqoot Office Interior"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-red-600 mb-4 flex justify-center">{achievement.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide innovative, high-quality signage solutions that help businesses communicate effectively with
                their customers. We strive to exceed expectations through superior craftsmanship, cutting-edge
                technology, and exceptional customer service.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading signage company recognized for our creativity, reliability, and commitment to
                excellence. We aim to transform how businesses connect with their audiences through impactful visual
                communication solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Al Yaqoot?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We combine experience, innovation, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
              <p className="text-gray-600">
                We use only the finest materials and latest technology to ensure durability and visual impact.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Our skilled professionals bring creativity and technical expertise to every project.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Timely Delivery</h3>
              <p className="text-gray-600">We respect deadlines and ensure your signage is ready when you need it.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
