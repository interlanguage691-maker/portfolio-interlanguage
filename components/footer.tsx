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
              <Link href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">Facebook</span>
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">Youtube</span>
                <Youtube className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" className="text-white hover:text-gray-200">
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </Link>
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
                <span className="text-sm">691 Hoàng Hoa Thám, Vĩnh Phúc, Ba Đình, Hà Nội</span>
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
