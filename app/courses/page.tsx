import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, Users, Award, GraduationCap, Brain } from "lucide-react"
import SectionHeader from "@/components/section-header"
import AnimationWrapper from "@/components/animation-wrapper"

export default function CoursesPage() {
  const courseCategories = [
    {
      id: "middle-school",
      title: "Tiếng Anh Trung Học Cơ Sở",
      icon: <GraduationCap className="h-8 w-8 text-[#64A162]" />,
      description:
        "Các khóa học tiếng Anh dành cho học sinh trung học cơ sở từ lớp 6 đến lớp 9, giúp các em xây dựng nền tảng tiếng Anh vững chắc và chuẩn bị cho các kỳ thi quan trọng.",
      courses: [
        {
          id: "grade-6",
          title: "Tiếng Anh Lớp 6",
          description:
            "Khóa học tiếng Anh dành cho học sinh lớp 6, tập trung vào việc xây dựng nền tảng ngữ pháp và từ vựng cơ bản.",
          level: "Sơ cấp",
          duration: "24 buổi/khóa (tổng 2 khóa)",
          price: "7,500,000 VNĐ/khóa",
          target: "Nền tảng vững chắc",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          id: "grade-7",
          title: "Tiếng Anh Lớp 7",
          description:
            "Khóa học tiếng Anh dành cho học sinh lớp 7, phát triển kỹ năng nghe, nói, đọc, viết và chuẩn bị cho các bài kiểm tra.",
          level: "Sơ cấp - Trung cấp",
          duration: "24 buổi/khóa (tổng 2 khóa)",
          price: "7,500,000 VNĐ/khóa",
          target: "Phát triển toàn diện",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          id: "grade-8",
          title: "Tiếng Anh Lớp 8",
          description:
            "Khóa học tiếng Anh dành cho học sinh lớp 8, nâng cao kỹ năng giao tiếp và chuẩn bị cho các kỳ thi quan trọng.",
          level: "Trung cấp",
          duration: "24 buổi/khóa (tổng 2 khóa)",
          price: "7,500,000 VNĐ/khóa",
          target: "Nâng cao kỹ năng",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          id: "grade-9",
          title: "Tiếng Anh Lớp 9",
          description:
            "Khóa học tiếng Anh dành cho học sinh lớp 9, ôn tập và chuẩn bị cho kỳ thi vào lớp 10 và các kỳ thi tiếng Anh quốc tế.",
          level: "Trung cấp - Cao cấp",
          duration: "ôn thi vào 10",
          price: "Đóng theo tháng",
          target: "Sẵn sàng thi cử",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    {
      id: "ielts",
      title: "Khóa học IELTS theo cấp độ",
      icon: <GraduationCap className="h-8 w-8 text-[#64A162]" />,
      description:
        "Các khóa học IELTS được thiết kế theo từng cấp độ, giúp học viên tiến bộ từng bước và đạt được mục tiêu điểm số mong muốn.",
      courses: [
        {
          id: "ielts-foundation",
          title: "IELTS Foundation",
          description:
            "Khóa học xây dựng nền tảng vững chắc cho IELTS, tập trung vào các kỹ năng cơ bản và chiến lược làm bài.",
          level: "Sơ cấp",
          duration: "26 buổi/khóa",
          price: "7,500,000 VNĐ/khóa",
          target: "IELTS 5.5",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          id: "ielts-intermediate",
          title: "IELTS Intermediate",
          description:
            "Khóa học IELTS trung cấp, nâng cao kỹ năng và chiến lược làm bài thi, phù hợp cho người đã có nền tảng.",
          level: "Trung cấp",
          duration: "28 buổi/khóa",
          price: "8,500,000 VNĐ",
          target: "IELTS 6.5",
          image: "/placeholder.svg?height=400&width=600",
        },
        {
          id: "ielts-advanced",
          title: "IELTS Advanced",
          description:
            "Khóa học IELTS cao cấp, hoàn thiện kỹ năng và chiến lược làm bài thi, dành cho người muốn đạt điểm cao.",
          level: "Cao cấp",
          duration: "30 buổi/khóa",
          price: "9,500,000 VNĐ",
          target: "IELTS 7.5",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
    {
      id: "soft-skills",
      title: "Kỹ năng mềm",
      icon: <Brain className="h-8 w-8 text-[#64A162]" />,
      description:
        "Các khóa học kỹ năng mềm giúp học viên phát triển toàn diện, không chỉ về ngôn ngữ mà còn về tư duy và kỹ năng sống.",
      courses: [
        {
          id: "critical-thinking",
          title: "Tư duy phản biện - Công dân toàn cầu",
          description:
            "Khóa học phát triển tư duy phản biện và kỹ năng công dân toàn cầu, giúp học viên sẵn sàng cho thế giới hiện đại.",
          level: "Tất cả trình độ",
          duration: "20 buổi/khóa",
          price: "8,000,000 VNĐ/khóa",
          target: "Phát triển tư duy",
          image: "/placeholder.svg?height=400&width=600",
        },
      ],
    },
  ]

  return (
    <div className="flex flex-col">
      <SectionHeader backgroundImage="/image/bannerkhoahoc.png" />

      {/* Course Categories */}
      <section className="py-8 sm:py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="middle-school" className="w-full">
            {/* Tabs list */}
            <TabsList className="mb-6 sm:mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
              {courseCategories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 rounded-lg py-2 sm:py-3 px-2 sm:px-4 text-xs sm:text-sm md:text-base font-medium bg-white border border-gray-300 hover:bg-gray-100 transition-all duration-300 hover-lift data-[state=active]:bg-[#64A162] data-[state=active]:text-white"
                >
                  {category.icon}
                  <span className="truncate text-center">{category.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>
            <br></br>

            {/* <div className="py-5"></div> */}
            {/* Tabs content */}
            {courseCategories.map((category) => (
              <TabsContent key={category.id} value={category.id}>
                <AnimationWrapper animation="fade-up">
                  <div className="mb-6 sm:mb-8">
                    <div className="mt-8 sm:mt-10 md:mt-12">
                      <h2 className="mt-24 lg:mt-0 text-xl sm:text-2xl font-bold text-[#64A162]">
                        {category.title}
                      </h2>

                      <p className="mt-2 text-gray-600 text-sm sm:text-base">{category.description}</p>
                    </div>
                  </div>

                </AnimationWrapper>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {category.courses.map((course, index) => (
                    <AnimationWrapper key={course.id} animation="fade-up" delay={index * 100}>
                      <Card className="overflow-hidden border-0 shadow-md hover-lift transition-all hover:bg-[#ffee64]/20">
                        {/* Image */}
                        <div className="relative aspect-video w-full">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            fill
                            className="object-cover hover-bright transition-all"
                          />
                        </div>

                        {/* Course Info */}
                        <CardContent className="p-4 sm:p-6">
                          <h3 className="text-lg sm:text-xl font-bold">{course.title}</h3>
                          <p className="mt-2 text-gray-600 text-sm">{course.description}</p>

                          {/* Course Details */}
                          <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4 text-[#64A162]" />
                              <span>{course.duration}</span>
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-1 h-4 w-4 text-[#64A162]" />
                              <span>{course.level}</span>
                            </div>
                            <div className="flex items-center">
                              <Award className="mr-1 h-4 w-4 text-[#64A162]" />
                              <span>{course.target}</span>
                            </div>
                            <div className="flex items-center font-semibold text-[#64A162]">
                              {course.price}
                            </div>
                          </div>

                          {/* View Details Button */}
                          <div className="mt-6">
                            <Button asChild className="w-full bg-[#64A162] hover:bg-[#548652] hover-lift text-sm sm:text-base">
                              <Link href={`/courses/${course.id}`}>Xem chi tiết</Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </AnimationWrapper>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>

  )
}
