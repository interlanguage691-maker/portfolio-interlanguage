"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Giới thiệu", href: "/about" },
  { name: "Khóa học", href: "/courses" },
  { name: "Blog", href: "/blog" },
  { name: "Liên hệ", href: "/contact" },
]

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/90 shadow-md backdrop-blur" : "bg-white/70 backdrop-blur-sm"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image src="https://i.imgur.com/euFks9G.png" alt="Logo" width={40} height={40} className="object-contain" />
            <span className="ml-2 text-lg font-bold text-[#64A162]">InterLanguage</span>
          </Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-sm font-semibold transition-colors",
                pathname === item.href ? "text-[#64A162]" : "text-gray-700 hover:text-[#64A162]"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Button desktop */}
        <div className="hidden lg:flex">
          <Button className="bg-[#64A162] hover:bg-[#548652]">Đăng ký ngay</Button>
        </div>

        {/* Mobile hamburger */}
        <div className="flex lg:hidden">
          <button onClick={() => setMobileMenuOpen(true)} className="text-gray-700">
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          {/* Overlay nền mờ */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer menu bên phải */}
          <div className="fixed top-0 bottom-0 right-0 z-50 w-80 max-w-full h-screen bg-white shadow-lg flex flex-col p-6">
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="flex items-center" onClick={() => setMobileMenuOpen(false)}>
                <div className="relative h-8 w-8 mr-2">
                  <Image
                    src="https://i.imgur.com/euFks9G.png"
                    alt="InterLanguage Logo"
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <span className="text-base font-semibold text-[#64A162]">InterLanguage</span>
              </Link>
              <button
                type="button"
                className="p-2 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Danh sách menu */}
            <div className="flex flex-col space-y-4 mb-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-base font-semibold",
                    pathname === item.href ? "text-[#64A162]" : "text-gray-900 hover:text-[#64A162]",
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Nút đăng ký ngay nằm dưới menu */}
            <Button className="w-full bg-[#64A162] hover:bg-[#548652]">
              Đăng ký ngay
            </Button>
          </div>
        </>
      )}




    </header>
  )
}
