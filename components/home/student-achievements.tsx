"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import { MultiItemCarousel } from "@/components/ui/carousel"
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
      "Lớp học của thầy Huy Anh đã giúp anh rất nhiều vì có rất ít trung tâm có thể giúp anh luyện Speaking IELTS hiệu quả như vậy. Kỹ năng Speaking được thầy củng cố bằng cách tạo mọi điều kiện và môi trường để có thể tương tác trực tiếp với thầy.",
  },
  {
    name: "Nguyễn Mai Phương",
    image: "https://i.imgur.com/aI9fJaK.jpg",
    score: "IELTS 8.0",
    university: "8.0 IELTS Speaking",
    feedback:
      "Thầy Huy Anh là một người thầy có kiến thức sâu rộng, truyền cảm hứng, và luôn tạo cảm giác thoải mái khi học. Thầy không chỉ là người đồng hành giúp chị luyện tập chăm chỉ, mà còn hướng dẫn cách diễn đạt hay, bổ sung nhiều từ vựng mới, tuy khó nhưng cực kỳ hiệu quả. Nhờ đó, chị bứt phá đạt 8.0 sau 2 tháng ôn luyện.",
  },
  {
    name: "Trần Văn Hùng",
    image: "/placeholder.svg?height=300&width=300",
    score: "IELTS 8.0",
    university: "Đại học Harvard",
    feedback:
      "Sau 6 tháng học tại InterLanguage, đi��m IELTS của tôi đã tăng từ 6.0 lên 8.0. Phương pháp giảng dạy tại đây rất hiệu quả và phù hợp với từng học viên.",
  },
  {
    name: "Lê Thị Hương",
    image: "/placeholder.svg?height=300&width=300",
    score: "IELTS 7.0",
    university: "Đại học Melbourne",
    feedback:
      "Khóa học Business English tại InterLanguage đã giúp tôi tự tin hơn trong các cuộc họp và thuyết trình bằng tiếng Anh. Đây là một khoản đầu tư xứng đáng cho sự nghiệp của tôi.",
  },
]

// Sửa lại phần hiển thị bảng vàng thành tích để hiển thị 4 người cùng một lúc
export default function StudentAchievements() {
  const isMobile = useMobile()
  const [itemsPerView, setItemsPerView] = useState(4) // Mặc định hiển thị 4 người

  useEffect(() => {
    if (isMobile) {
      setItemsPerView(1)
    } else if (window.innerWidth < 1024) {
      setItemsPerView(2)
    } else {
      setItemsPerView(4) // Hiển thị 4 người trên màn hình lớn
    }
  }, [isMobile])

  const studentCards = featuredStudents.map((student, index) => (
    <Card
      key={index}
      className="overflow-hidden border-0 shadow-lg h-full px-2 transition-all duration-300 hover:shadow-xl"
    >
      <div className="relative">
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            src={student.image || "/placeholder.svg"}
            alt={student.name}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
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

        <div className="mt-16">
          {isMobile ? (
            // Trên mobile vẫn dùng carousel
            <MultiItemCarousel items={studentCards} itemsPerView={itemsPerView} autoPlay={true} interval={6000} />
          ) : (
            // Trên desktop hiển thị grid
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{studentCards}</div>
          )}
        </div>
      </div>
    </section>
  )
}
