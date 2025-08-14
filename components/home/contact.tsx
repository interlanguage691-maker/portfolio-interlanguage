import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import AnimationWrapper from "../animation-wrapper";

export default function Contact() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <AnimationWrapper animation="fade-up">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Liên hệ với chúng tôi</h2>
            <p className="mt-4 text-lg text-gray-600">
              Bạn có câu hỏi hoặc cần tư vấn? Hãy để lại thông tin, chúng tôi sẽ liên hệ lại ngay!
            </p>
          </div>
        </AnimationWrapper>

        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-12">
          {/* Contact Information */}
          <AnimationWrapper animation="fade-right">
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="mr-4 h-6 w-6 text-[#64A162]" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Địa chỉ</h3>
                  <p className="mt-1 text-gray-600">
                    123 Đường ABC, Phường XYZ, Quận 1, TP.HCM
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="mr-4 h-6 w-6 text-[#64A162]" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Điện thoại</h3>
                  <p className="mt-1 text-gray-600">(028) 1234 5678</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="mr-4 h-6 w-6 text-[#64A162]" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                  <p className="mt-1 text-gray-600">info@interlanguage.edu.vn</p>
                </div>
              </div>
            </div>
          </AnimationWrapper>

          {/* Contact Form */}
          <AnimationWrapper animation="fade-left">
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Họ và tên
                  </label>
                  <Input
                    id="name"
                    type="text"
                    className="mt-1"
                    placeholder="Nhập họ và tên của bạn"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Số điện thoại
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    className="mt-1"
                    placeholder="Nhập số điện thoại của bạn"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  className="mt-1"
                  placeholder="Nhập email của bạn"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Nội dung
                </label>
                <Textarea
                  id="message"
                  className="mt-1"
                  rows={4}
                  placeholder="Nhập nội dung tin nhắn của bạn"
                />
              </div>
              <Button className="w-full" size="lg">
                <span>Gửi tin nhắn</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
} 