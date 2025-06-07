import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import Footer from "@/components/Footer"


export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-red-100 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with premium signage? Get in touch with our expert team today.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <div className="mb-12">
                <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-sm text-sm font-bold mb-6">
                  <div className="w-1 h-6 bg-white mr-3"></div>
                  CONTACT INFORMATION
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">LOCATE US</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-red-600 mr-4 mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-gray-700 font-medium">Warehouse No. 5,</p>
                        <p className="text-gray-700">Ajman, United Arab Emirates</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-6 w-6 text-red-600 mr-4" />
                      <span className="text-gray-700">0562043494</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-red-600 mr-4" />
                    <div>
                      <p className="text-gray-700">General: yaqoor123@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-6 w-6 text-red-600 mr-4" />
                    <div>
                      <p className="text-gray-700">Admin: patrick_a_f@yahoo.com</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Business Hours</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-red-600 mr-3" />
                      <span>Monday - Saturday: 8:00 AM - 6:00 PM</span>
                    </div>

                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-red-600 mr-3" />
                      <span>Sunday: Closed</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-gray-900">Follow Us</h4>
                  <div className="flex space-x-4">
                    <Button size="icon" variant="outline" className="hover:bg-red-50">
                      <Facebook className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-red-50">
                      <Instagram className="h-5 w-5" />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-red-50">
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="mb-12">
                <div className="inline-flex items-center bg-red-600 text-white px-4 py-2 rounded-sm text-sm font-bold mb-6">
                  <div className="w-1 h-6 bg-white mr-3"></div>
                  MAKE AN ENQUIRY
                </div>
              </div>

              <Card className="shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Your name <span className="text-red-500">*</span>
                      </label>
                      <Input id="name" type="text" required className="w-full" />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Your email <span className="text-red-500">*</span>
                      </label>
                      <Input id="email" type="email" required className="w-full" />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Your Phone Number <span className="text-red-500">*</span>
                      </label>
                      <Input id="phone" type="tel" required className="w-full" />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <Input id="subject" type="text" required className="w-full" />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Your message (optional)
                      </label>
                      <Textarea
                        id="message"
                        rows={6}
                        placeholder="Tell us about your signage needs..."
                        className="w-full"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white py-3 text-lg font-semibold"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">Visit our showroom and workshop</p>
          </div>

          <div className="bg-gray-300 h-96 rounded-lg flex items-center justify-center">
            <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
          </div>
        </div>
      </section>  
      <Footer />
    </div>
  )
}
