"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Phone, MapPin, Facebook, Instagram, Youtube, Twitter } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation"
import { BookingModal } from "./booking-modal"

const navItems = [
  { href: "/programs", label: "Programs", scrollTo: "programs" },
  { href: "/schedule", label: "Schedule", scrollTo: "schedule" },
  { href: "/team", label: "Team", scrollTo: "team" },
  { href: "/reviews", label: "Reviews", scrollTo: "testimonials" },
  { href: "/faq", label: "FAQ", scrollTo: "faq" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  const isHomePage = pathname === "/" || navItems.some(item => item.href === pathname)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const openModal = () => {
    setIsModalOpen(true)
    setIsMenuOpen(false)
  }

  const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    e.preventDefault()
    setIsMenuOpen(false)
    
    const section = document.getElementById(item.scrollTo)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
      window.history.pushState({}, "", item.href)
    } else {
      router.push(item.href)
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg" 
          : "bg-white/90 backdrop-blur-sm"
      }`}
    >
      <div className="border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-10 text-sm">
            <div className="flex items-center gap-2 text-slate-600">
              <MapPin className="h-4 w-4" />
              <span className="hidden sm:inline">3600 Southwest Regional Airport Blvd, Bentonville, AR 72712</span>
              <span className="sm:hidden">Bentonville, AR</span>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="tel:4798002550"
                className="flex items-center gap-2 text-slate-600 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>(479) 800-2550</span>
              </a>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.facebook.com/overcomebjj"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="https://www.instagram.com/overcomebjj/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="https://www.google.com/maps/place/Overcome+Brazilian+jiu-jitsu+school/@36.3367733,-94.2526732,15z/data=!4m6!3m5!1s0x87c90f9a57d24cdf:0x24cbc936baccb6a7!8m2!3d36.3367733!4d-94.2526732!16s%2Fg%2F11nmrg99k8?entry=ttu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-primary transition-colors"
                  aria-label="Google Maps"
                >
                  <MapPin className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/overcome-logo.png"
              alt="Overcome Jiu Jitsu"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-sm font-medium text-slate-700 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button onClick={openModal} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Request More Info
            </Button>
          </nav>

          <button
            className="lg:hidden text-slate-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden pb-6 flex flex-col gap-4 bg-white/95 backdrop-blur-md rounded-lg p-4 -mx-2 shadow-lg border border-slate-200">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item)}
                className="text-sm font-medium text-slate-700 hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Button onClick={openModal} className="bg-primary hover:bg-primary/90 text-primary-foreground w-full">
              Request More Info
            </Button>
          </nav>
        )}
      </div>

      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} offerText="Request More Information" />
    </header>
  )
}
