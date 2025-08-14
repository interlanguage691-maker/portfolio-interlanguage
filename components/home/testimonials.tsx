import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";
import AnimationWrapper from "../animation-wrapper";

const testimonials = [
  {
    name: "Nguyễn Văn A",
    role: "Học viên IELTS",
    image: "/testimonial-1.jpg",
    content:
      "Sau 6 tháng học tại InterLanguage, tôi đã đạt được band điểm IELTS 7.0. Phương pháp giảng dạy rất hiệu quả, giáo viên nhiệt tình và luôn sẵn sàng hỗ trợ.",
    rating: 5,
  },
  {
    name: "Trần Thị B",
    role: "Học viên TOEIC",
    image: "/testimonial-2.jpg",
    content:
      "Môi trường học tập tại InterLanguage rất chuyên nghiệp. Tôi đã cải thiện đáng kể kỹ năng nghe và nói tiếng Anh sau khóa học.",
    rating: 5,
  },
  {
    name: "Lê Văn C",
    role: "Học viên Giao tiếp",
    image: "/testimonial-3.jpg",
    content:
      "Tôi rất hài lòng với chất lượng giảng dạy tại InterLanguage. Giáo viên có phương pháp dạy sáng tạo, giúp học viên tiếp thu kiến thức dễ dàng.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <AnimationWrapper animation="fade-up">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Học viên nói gì về chúng tôi
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Những phản hồi chân thực từ học viên đã và đang theo học tại InterLanguage
            </p>
          </div>
        </AnimationWrapper>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimationWrapper key={index} animation="fade-up" delay={index * 100}>
              <Card className="h-full border-0 shadow-md transition-all duration-300 hover:shadow-lg">
                <CardContent className="flex h-full flex-col p-6">
                  <div className="mb-4 flex items-center">
                    <div className="relative mr-4 h-12 w-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mb-4 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600">{testimonial.content}</p>
                </CardContent>
              </Card>
            </AnimationWrapper>
          ))}
        </div>
      </div>
    </section>
  );
} 