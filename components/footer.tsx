import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Youtube, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#64A162] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">InterLanguage</h3>
            <p className="mt-4 text-sm">
              Trung tâm Tiếng Anh InterLanguage - Nơi bạn học tiếng Anh hiệu quả và thực tiễn.
            </p>
            <div className="mt-6 flex space-x-4">
              <Link target="_blank" href="https://www.facebook.com/TiengAnhThayHuyAnh/" className="text-white hover:text-gray-200">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              {/* <Link href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link> */}
              {/* <Link href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">Youtube</span>
                <Youtube className="h-6 w-6" />
              </Link> */}
              <Link target="_blank" href="https://www.tiktok.com/@interlanguage691?_t=ZS-8ys2OIvx9MX&_r=1" className="text-white hover:text-gray-200">
                <span className="sr-only">Tiktok</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.7-1.35 3.9-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </Link>
              {/* <Link href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link> */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Liên kết nhanh</h3>
            <ul className="mt-4 space-y-2">
              {[
                { text: "Trang chủ", href: "/" },
                { text: "Giới thiệu", href: "/about" },
                { text: "Khóa học", href: "/courses" },
                { text: "Blog", href: "/blog" },
                { text: "Liên hệ", href: "/contact" },
              ].map((item) => (
                <li key={item.text}>
                  <Link href={item.href} className="text-sm hover:underline">
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Liên hệ</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0" />
                <span className="text-sm">691 Hoàng Hoa Thám, Ba Đình, Hà Nội</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                <span className="text-sm">0859801133</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                <span className="text-sm">interlanguage691@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Đăng ký nhận tin</h3>
            <p className="mt-4 text-sm">
              Đăng ký để nhận thông tin về khóa học mới và ưu đãi đặc biệt từ InterLanguage.
            </p>
            <form className="mt-4">
              <div className="flex max-w-md flex-col space-y-2">
                <Input
                  type="email"
                  placeholder="Email của bạn"
                  className="border-white bg-white/10 text-white placeholder:text-white/60"
                />
                <Button type="submit" className="bg-white text-[#64A162] hover:bg-white/90">
                  Đăng ký
                </Button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm">© {new Date().getFullYear()} InterLanguage. Tất cả các quyền được bảo lưu.</p>
        </div>
      </div>
    </footer>
  )
}
