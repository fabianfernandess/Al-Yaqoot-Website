"use client"

import { useState, useEffect } from "react"
import { Menu, Phone } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"


export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "About Us", href: "/about" },
  ]

  const isActive = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    // <nav
    //   className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    //     scrolled
    //       ? "bg-white/80 backdrop-blur-md border-b border-white/20 shadow-lg"
    //       : "bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm"
    //   }`}
    // >

    //navbar glass effect
    <nav
  className={`fixed top-0 w-full z-50 transition-all duration-300 ${
    scrolled
      ? "bg-white/60 backdrop-blur-md border-b border-white/20 shadow-lg"
      : "bg-white/100 "
  }`}
>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
              <Link href="/">
               <Image src="/assets/logo.png" alt="Logo" width={170} height={100} />
              </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-3 py-2 text-sm transition-all duration-200 ${
                  isActive(item.href)
                    ? "font-bold text-red-600 border-b-2 border-red-600"
                    : "font-medium text-gray-700 hover:text-red-00"
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link href="/contact">
              <Button className="bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-full">
                <Phone className="h-4 w-4 mr-2" />
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-white/95 backdrop-blur-md">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`px-3 py-2 text-lg transition-colors ${
                        isActive(item.href)
                          ? "font-bold text-red-600"
                          : "font-medium text-gray-700 hover:text-red-600"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link href="/contact" className="mt-4">
                    <Button className="bg-black hover:bg-gray-800 text-white w-full">
                      <Phone className="h-4 w-4 mr-2" />
                      Contact
                    </Button>
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
