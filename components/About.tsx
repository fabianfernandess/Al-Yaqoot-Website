import Image from "next/image"
import { Award, Users, Target, Heart } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Quality Excellence",
      description: "We never compromise on quality, ensuring every sign meets our high standards."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Customer First",
      description: "Your vision is our priority. We work closely with you from concept to completion."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Precision & Detail",
      description: "Every project receives meticulous attention to detail and precision craftsmanship."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Passion Driven",
      description: "We're passionate about helping businesses shine with impactful signage solutions."
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative h-96 lg:h-[650px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                // src="/placeholder.svg?height=500&width=600"
                src="/assets/about_landing.jpeg?height=500&width=600"
                alt="Our signage workshop and team"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 bg-red-600 text-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm opacity-90">Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <span className="inline-block bg-red-100 text-red-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                About Al Yaqoot
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Crafting Visual Excellence for Over 15 Years
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are a premier signage company dedicated to transforming businesses through innovative and 
                high-quality visual solutions. Our journey began with a simple mission: to help businesses 
                stand out and make lasting impressions.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                From small local shops to large corporations, we've partnered with hundreds of clients to 
                bring their visions to life. Our expertise spans across LED neon signs, acrylic displays, 
                digital printing, and comprehensive office solutions.
              </p>
            </div>

            {/* Mission Statement */}
            <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-red-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700 italic">
                "To empower businesses with exceptional signage solutions that not only capture attention 
                but also drive meaningful engagement and lasting success."
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="text-red-600 mt-1">{value.icon}</div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">{value.title}</h4>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}