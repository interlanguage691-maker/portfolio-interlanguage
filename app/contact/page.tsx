"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import Image from "next/image"
import SectionHeader from "@/components/section-header"
import AnimationWrapper from "@/components/animation-wrapper"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, course: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Cảm ơn bạn đã gửi thông tin. Chúng mình sẽ liên hệ với bạn sớm nhất có thể!")
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      message: "",
    })
  }

  return (
    <div className="flex flex-col">
      <SectionHeader backgroundImage="/image/anhnencontact.png" />

      {/* Contact Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AnimationWrapper animation="fade-up">
              <Card className="border-0 shadow-md hover-lift">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-[#64A162]/10 p-3">
                    <MapPin className="h-6 w-6 text-[#64A162]" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Địa chỉ</h3>
                  <p className="text-gray-600">691 Hoàng Hoa Thám, Vĩnh Phúc, Ba Đình, Hà Nội</p>
                </CardContent>
              </Card>
            </AnimationWrapper>

            <AnimationWrapper animation="fade-up" delay={100}>
              <Card className="border-0 shadow-md hover-lift">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-[#fca7b3]/10 p-3">
                    <Phone className="h-6 w-6 text-[#fca7b3]" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Điện thoại</h3>
                  <p className="text-gray-600">085 980 1133</p>
                </CardContent>
              </Card>
            </AnimationWrapper>

            <AnimationWrapper animation="fade-up" delay={200}>
              <Card className="border-0 shadow-md hover-lift">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-[#fc8a3d]/10 p-3">
                    <Mail className="h-6 w-6 text-[#fc8a3d]" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Email</h3>
                  <p className="text-gray-600">interlanguage691@gmail.com</p>
                </CardContent>
              </Card>
            </AnimationWrapper>

            <AnimationWrapper animation="fade-up" delay={300}>
              <Card className="border-0 shadow-md hover-lift">
                <CardContent className="flex flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-[#9ddaec]/10 p-3">
                    <Clock className="h-6 w-6 text-[#9ddaec]" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold">Giờ làm việc</h3>
                  <p className="text-gray-600">Thứ Hai - Thứ Sáu: 9:00 - 17:00</p>
                </CardContent>
              </Card>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      {/* Map and Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimationWrapper animation="fade-up">
            <div className="overflow-hidden rounded-xl shadow-lg flex flex-col lg:flex-row">
              {/* Map */}
              <div className="relative lg:w-1/2">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.0080661466404!2d105.80774550847534!3d21.04725705102608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab1839ef8549%3A0x3f429745164d9ae5!2zNjkxIMSQLiBIb8OgbmcgSG9hIFRow6FtLCBWxKluaCBQaMO6LCBCYSDEkMOsbmgsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2sus!4v1755173952264!5m2!1svi!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="InterLanguage - 691 Hoàng Hoa Thám, Ba Đình, Hà Nội"
                ></iframe>
              </div>

              {/* Registration Form */}
              <div className="lg:w-1/2" style={{ backgroundColor: "#9ddaec" }}>
                <div className="p-6 h-full">
                  <h2 className="mb-6 text-2xl font-bold">
                    Hãy để lại lời nhắn, chúng mình sẽ liên hệ với bạn ngay ^^{" "}
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Họ và tên</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Nhập họ và tên của bạn"
                        required
                      />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Nhập email của bạn"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Số điện thoại</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Nhập số điện thoại của bạn"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="course">Khóa học quan tâm</Label>
                      <Select onValueChange={handleSelectChange} value={formData.course}>
                        <SelectTrigger id="course">
                          <SelectValue placeholder="Chọn khóa học" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ielts-academic">Tiếng Anh THCS</SelectItem>
                          <SelectItem value="ielts-general">IELTS theo cấp độ</SelectItem>
                          <SelectItem value="conversational-english">Khóa Kỹ năng mềm</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Lời nhắn</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Bạn có câu hỏi và lời nhắn gì cho chúng mình không?"
                        rows={4}
                      />
                    </div>

                    <Button type="submit" className="w-full bg-[#64a162] hover:bg-[#548652] hover-lift">
                      Gửi thông tin
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </section>
    </div>
  )
}
