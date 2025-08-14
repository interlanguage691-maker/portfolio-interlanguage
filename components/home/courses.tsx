import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ArrowRight, Clock, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimationWrapper from "../animation-wrapper";

const courses = [
  {
    title: "IELTS Foundation",
    description: "Khóa học dành cho người mới bắt đầu, xây dựng nền tảng vững chắc cho kỳ thi IELTS",
    image: "/course-1.jpg",
    duration: "3 tháng",
    students: "10-15 học viên",
    price: "5.000.000đ",
  },
  {
    title: "IELTS Advanced",
    description: "Nâng cao kỹ năng và chiến thuật làm bài để đạt band điểm 7.0+",
    image: "/course-2.jpg",
    duration: "3 tháng",
    students: "8-12 học viên",
    price: "6.500.000đ",
  },
  {
    title: "TOEIC 4 Kỹ năng",
    description: "Phát triển toàn diện 4 kỹ năng Nghe - Nói - Đọc - Viết cho kỳ thi TOEIC",
    image: "/course-3.jpg",
    duration: "2.5 tháng",
    students: "12-15 học viên",
    price: "4.500.000đ",
  },
];

export default function Courses() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <AnimationWrapper animation="fade-up">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Khóa học nổi bật</h2>
            <p className="mt-4 text-lg text-gray-600">
              Khám phá các khóa học chất lượng cao được thiết kế đặc biệt cho mục tiêu của bạn
            </p>
          </div>
        </AnimationWrapper>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {courses.map((course, index) => (
            <AnimationWrapper key={index} animation="fade-up" delay={index * 100}>
              <Card className="h-full overflow-hidden border-0 shadow-md transition-all duration-300 hover:shadow-lg">
                <div className="relative aspect-video w-full">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <h3 className="text-xl font-bold text-gray-900">{course.title}</h3>
                  <p className="mt-2 text-gray-600">{course.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="mr-2 h-4 w-4" />
                      <span>Thời lượng: {course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="mr-2 h-4 w-4" />
                      <span>Sĩ số: {course.students}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                  <div className="text-xl font-bold text-[#64A162]">{course.price}</div>
                  <Button className="w-full" asChild>
                    <Link href="/courses">
                      <span>Đăng ký ngay</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimationWrapper>
          ))}
        </div>

        <AnimationWrapper animation="fade-up" delay={300}>
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" asChild>
              <Link href="/courses">
                <span>Xem tất cả khóa học</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  );
} 