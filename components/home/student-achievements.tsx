"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useEffect, useState } from "react"
import { useMobile } from "@/hooks/use-mobile"

// Dữ liệu mẫu cho học viên tiêu biểu
const featuredStudents = [
  {
    name: "Hoàng Vũ Hải",
    image: "https://i.imgur.com/aUatpJt.jpg",
    score: "IELTS 8.0",
    university: "9.0 IELTS Speaking",
    feedback:
      "Với sự hướng dẫn của thầy Huy Anh, anh đã cải thiện kỹ năng Speaking IELTS một cách hiệu quả. Lớp học của thầy tạo môi trường tương tác trực tiếp, giúp anh tự tin hơn khi giao tiếp.",
  },
  {
    name: "Nguyễn Mai Phương",
    image: "https://i.imgur.com/aI9fJaK.jpg",
    score: "IELTS 8.0",
    university: "8.0 IELTS Speaking",
    feedback:
      "Thầy Huy Anh có kiến thức sâu rộng, truyền cảm hứng và giúp người học thoải mái. Thầy đã hướng dẫn cách diễn đạt và bổ sung từ vựng hiệu quả, giúp bạn đạt 8.0 chỉ sau 2 tháng.",
  },
  // {
  //   name: "Trần Văn Hùng",
  //   image: "/placeholder.svg?height=300&width=300",
  //   score: "IELTS 8.0",
  //   university: "Đại học Harvard",
  //   feedback:
  //     "Sau 6 tháng học tại InterLanguage, điểm IELTS của tôi đã tăng từ 6.0 lên 8.0. Phương pháp giảng dạy tại đây rất hiệu quả và phù hợp với từng học viên.",
  // },
  // {
  //   name: "Lê Thị Hương",
  //   image: "/placeholder.svg?height=300&width=300",
  //   score: "IELTS 7.0",
  //   university: "Đại học Melbourne",
  //   feedback:
  //     "Khóa học Business English tại InterLanguage đã giúp tôi tự tin hơn trong các cuộc họp và thuyết trình bằng tiếng Anh. Đây là một khoản đầu tư xứng đáng cho sự nghiệp của tôi.",
  // },
  // {
  //   name: "Phạm Đức Minh",
  //   image: "/placeholder.svg?height=300&width=300",
  //   score: "IELTS 7.5",
  //   university: "Đại học Oxford",
  //   feedback:
  //     "InterLanguage không chỉ dạy tiếng Anh mà còn truyền cảm hứng học tập. Tôi đã học được cách tư duy phản biện và kỹ năng giao tiếp quốc tế.",
  // },
  // {
  //   name: "Vũ Thị Lan Anh",
  //   image: "/placeholder.svg?height=300&width=300",
  //   score: "IELTS 8.5",
  //   university: "Đại học Cambridge",
  //   feedback:
  //     "Với sự hỗ trợ của các giáo viên tại InterLanguage, tôi đã đạt được mục tiêu IELTS 8.5. Phương pháp học tập cá nhân hóa thực sự hiệu quả.",
  // },
]

export default function StudentAchievements() {
  const isMobile = useMobile()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (isMobile) {
      setItemsPerView(1)
    } else if (window.innerWidth < 768) {
      setItemsPerView(2)
    } else if (window.innerWidth < 1024) {
      setItemsPerView(3)
    } else {
      setItemsPerView(4)
    }
  }, [isMobile])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % Math.max(1, featuredStudents.length - itemsPerView + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, itemsPerView, featuredStudents.length])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, featuredStudents.length - itemsPerView + 1))
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, featuredStudents.length - itemsPerView) : prev - 1
    )
    setIsAutoPlaying(false)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  const maxIndex = Math.max(0, featuredStudents.length - itemsPerView)

  const studentCards = featuredStudents.map((student, index) => (
    <Card
      key={index}
      className="overflow-hidden border-0 shadow-lg h-full transition-all duration-500 hover:shadow-xl hover:scale-105"
    >
      <div className="relative">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={student.image || "/placeholder.svg"}
            alt={student.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{student.name}</h3>
            <div className="flex items-center rounded-full bg-[#64A162] px-3 py-1 text-sm font-bold">
              <Star className="mr-1 h-4 w-4" />
              {student.score}
            </div>
          </div>
          <p className="text-sm text-gray-200">{student.university}</p>
        </div>
      </div>
      <CardContent className="p-6">
        <blockquote className="border-l-4 border-[#64A162] pl-4 italic text-gray-600">"{student.feedback}"</blockquote>
      </CardContent>
    </Card>
  ))

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-[#f5f9f5]">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Bảng vàng thành tích</h2>
          <p className="mt-4 text-lg text-gray-600">
            Những học viên tiêu biểu đã đạt thành tích xuất sắc và thành công trong hành trình học tập tại InterLanguage
          </p>
        </div>

        <div className="mt-16 relative">
          {/* Slider Container */}
          <div className="relative overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out gap-6"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
                width: `${(featuredStudents.length / itemsPerView) * 100}%`
              }}
            >
              {studentCards}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg text-gray-600 transition-all hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg text-gray-600 transition-all hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: maxIndex + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-[#64A162] w-8' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
