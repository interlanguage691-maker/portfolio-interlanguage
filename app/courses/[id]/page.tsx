"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Clock, Award, Calendar, Target, Users, GraduationCap, Brain } from "lucide-react"
import { coursesData } from "@/data/courses"

export default function CourseDetailPage({ params }: { params: { id: string } }) {
  const courseId = params.id
  const course = coursesData[courseId]

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    currentLevel: "",
    preferredTime: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setIsSubmitting(false)
      setSubmitted(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        currentLevel: "",
        preferredTime: "",
        message: "",
      })
    }, 1500)
  }

  // Find related courses (from the same category)
  const getRelatedCourses = () => {
    if (!course) return []

    return Object.entries(coursesData)
      .filter(([id, c]) => id !== courseId && c.category === course.category)
      .slice(0, 3)
      .map(([id, c]) => ({ id, ...c }))
  }

  if (!course) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Không tìm thấy khóa học</h1>
        <p className="mt-4">Khóa học bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.</p>
        <Button asChild className="mt-8 bg-[#64A162] hover:bg-[#548652]">
          <Link href="/courses">Quay lại danh sách khóa học</Link>
        </Button>
      </div>
    )
  }

  // Đảm bảo các mảng tồn tại, nếu không thì tạo mảng rỗng
  const objectives = course.objectives || []
  const benefits = course.benefits || []
  const relatedCourses = getRelatedCourses()

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative">
        <div className="relative h-[300px] w-full overflow-hidden md:h-[400px]">
          <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center text-white">
            <div className="flex justify-center mb-4">
              {course.category === "middle-school" && <GraduationCap className="h-12 w-12 text-[#64A162]" />}
              {course.category === "ielts" && <Award className="h-12 w-12 text-[#64A162]" />}
              {course.category === "soft-skills" && <Brain className="h-12 w-12 text-[#64A162]" />}
            </div>
            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">{course.title}</h1>
            <p className="mx-auto mt-4 max-w-3xl text-lg">{course.description}</p>
          </div>
        </div>
      </section>

      {/* Course Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
                  <TabsTrigger value="overview">Tổng quan</TabsTrigger>
                  <TabsTrigger value="objectives">Mục tiêu</TabsTrigger>
                  <TabsTrigger value="benefits">Lợi ích</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold">Tổng quan khóa học</h2>
                      <p className="mt-4 text-gray-600">{course.description}</p>

                      <div className="mt-8 grid gap-6 sm:grid-cols-2">
                        <div className="flex items-start">
                          <Target className="mr-3 h-6 w-6 flex-shrink-0 text-[#64A162]" />
                          <div>
                            <h3 className="font-semibold">Đối tượng học viên</h3>
                            <p className="mt-1 text-gray-600">{course.targetLearners}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Clock className="mr-3 h-6 w-6 flex-shrink-0 text-[#64A162]" />
                          <div>
                            <h3 className="font-semibold">Thời lượng</h3>
                            <p className="mt-1 text-gray-600">{course.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Calendar className="mr-3 h-6 w-6 flex-shrink-0 text-[#64A162]" />
                          <div>
                            <h3 className="font-semibold">Số buổi học</h3>
                            <p className="mt-1 text-gray-600">{course.sessionsPerWeek}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Award className="mr-3 h-6 w-6 flex-shrink-0 text-[#64A162]" />
                          <div>
                            <h3 className="font-semibold">Mục tiêu đầu ra</h3>
                            <p className="mt-1 text-gray-600">{course.target}</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Users className="mr-3 h-6 w-6 flex-shrink-0 text-[#64A162]" />
                          <div>
                            <h3 className="font-semibold">Trình độ</h3>
                            <p className="mt-1 text-gray-600">{course.level}</p>
                          </div>
                        </div>
                        <div className="flex items-start font-semibold text-[#64A162]">
                          <div className="mr-3">Học phí:</div>
                          <div>{course.price}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="objectives" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold">Mục tiêu học tập</h2>
                      <p className="mt-4 text-gray-600">
                        Sau khi hoàn thành khóa học {course.title}, học viên sẽ có khả năng:
                      </p>

                      <div className="mt-6 space-y-4">
                        {objectives.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-[#64A162]" />
                            <p>{item}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="benefits" className="mt-6">
                  <Card>
                    <CardContent className="p-6">
                      <h2 className="text-2xl font-bold">Lợi ích học viên</h2>
                      <p className="mt-4 text-gray-600">
                        Khi tham gia khóa học {course.title} tại InterLanguage, bạn sẽ nhận được:
                      </p>

                      <div className="mt-6 space-y-4">
                        {benefits.map((item, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="mr-3 h-6 w-6 flex-shrink-0 text-[#64A162]" />
                            <p>{item}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Registration Form */}
            <div>
              <Card className="sticky top-24 border-0 shadow-md" style={{ backgroundColor: "#FFEE64" }}>
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold text-gray-800">Đăng ký test trình độ</h2>
                  <p className="mt-2 text-gray-700">
                    Đăng ký test trình độ miễn phí để được tư vấn lộ trình học tập phù hợp với khóa học {course.title}.
                  </p>

                  {submitted ? (
                    <div className="mt-6 rounded-lg bg-green-50 p-4 text-green-700">
                      <h3 className="font-semibold">Đăng ký thành công!</h3>
                      <p className="mt-2">
                        Cảm ơn bạn đã đăng ký test trình độ. Chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ để xác nhận
                        lịch test.
                      </p>
                      <Button
                        className="mt-4 w-full bg-[#64A162] hover:bg-[#548652]"
                        onClick={() => setSubmitted(false)}
                      >
                        Đăng ký lại
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-gray-700">
                          Họ và tên
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Nhập họ và tên của bạn"
                          required
                          className="bg-white/80"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-gray-700">
                          Email
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Nhập email của bạn"
                          required
                          className="bg-white/80"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-gray-700">
                          Số điện thoại
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Nhập số điện thoại của bạn"
                          required
                          className="bg-white/80"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="currentLevel" className="text-gray-700">
                          Trình độ hiện tại
                        </Label>
                        <Select
                          onValueChange={(value) => handleSelectChange("currentLevel", value)}
                          value={formData.currentLevel}
                        >
                          <SelectTrigger id="currentLevel" className="bg-white/80">
                            <SelectValue placeholder="Chọn trình độ hiện tại" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Sơ cấp (Mới bắt đầu)</SelectItem>
                            <SelectItem value="elementary">Sơ cấp (Có chút kiến thức)</SelectItem>
                            <SelectItem value="pre-intermediate">Tiền trung cấp</SelectItem>
                            <SelectItem value="intermediate">Trung cấp</SelectItem>
                            <SelectItem value="upper-intermediate">Trên trung cấp</SelectItem>
                            <SelectItem value="advanced">Cao cấp</SelectItem>
                            <SelectItem value="unknown">Chưa rõ (cần test)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="preferredTime" className="text-gray-700">
                          Thời gian test mong muốn
                        </Label>
                        <Select
                          onValueChange={(value) => handleSelectChange("preferredTime", value)}
                          value={formData.preferredTime}
                        >
                          <SelectTrigger id="preferredTime" className="bg-white/80">
                            <SelectValue placeholder="Chọn thời gian phù hợp" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="weekday-morning">Ngày thường - Buổi sáng</SelectItem>
                            <SelectItem value="weekday-afternoon">Ngày thường - Buổi chiều</SelectItem>
                            <SelectItem value="weekday-evening">Ngày thường - Buổi tối</SelectItem>
                            <SelectItem value="weekend-morning">Cuối tuần - Buổi sáng</SelectItem>
                            <SelectItem value="weekend-afternoon">Cuối tuần - Buổi chiều</SelectItem>
                            <SelectItem value="weekend-evening">Cuối tuần - Buổi tối</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-700">
                          Lời nhắn
                        </Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Nhập lời nhắn hoặc câu hỏi của bạn"
                          rows={3}
                          className="bg-white/80"
                        />
                      </div>

                      <Button type="submit" className="w-full bg-[#64A162] hover:bg-[#548652]" disabled={isSubmitting}>
                        {isSubmitting ? "Đang xử lý..." : "Đăng ký test trình độ"}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Related Courses */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold">Khóa học liên quan</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedCourses.map((relatedCourse) => (
              <Card key={relatedCourse.id} className="overflow-hidden border-0 shadow-md">
                <div className="relative aspect-video w-full">
                  <Image
                    src={relatedCourse.image || "/placeholder.svg"}
                    alt={relatedCourse.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{relatedCourse.title}</h3>
                  <p className="mt-2 line-clamp-2 text-gray-600">{relatedCourse.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-semibold text-[#64A162]">{relatedCourse.price}</span>
                    <span>{relatedCourse.duration}</span>
                  </div>
                  <Button asChild className="mt-4 w-full bg-[#64A162] hover:bg-[#548652]">
                    <Link href={`/courses/${relatedCourse.id}`}>Xem chi tiết</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
