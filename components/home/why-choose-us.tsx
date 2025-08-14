import { Card, CardContent } from "@/components/ui/card"
import { Check, GraduationCap, Users, BookOpen, Clock } from "lucide-react"
import AnimationWrapper from "@/components/animation-wrapper"

const features = [
  {
    icon: <GraduationCap className="h-6 w-6 text-[#64A162]" />,
    title: "Giảng viên chất lượng",
    description: "Đội ngũ giảng viên có trình độ cao, nhiều năm kinh nghiệm giảng dạy",
  },
  {
    icon: <Users className="h-6 w-6 text-[#64A162]" />,
    title: "Lớp học nhỏ",
    description: "Sĩ số lớp học tối ưu, đảm bảo tương tác và hỗ trợ tốt nhất cho học viên",
  },
  {
    icon: <Clock className="h-6 w-6 text-[#64A162]" />,
    title: "Linh hoạt thời gian",
    description: "Lịch học đa dạng, phù hợp với mọi đối tượng học viên",
  },
  {
    icon: <BookOpen className="h-6 w-6 text-[#64A162]" />,
    title: "Giáo trình chuẩn",
    description: "Giáo trình được biên soạn kỹ lưỡng, cập nhật thường xuyên",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <AnimationWrapper animation="fade-up">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tại sao chọn InterLanguage?
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Chúng tôi cam kết mang đến trải nghiệm học tiếng Anh khác biệt cho học viên với những ưu điểm vượt trội.
            </p>
          </div>
        </AnimationWrapper>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-8">
          {features.map((feature, index) => (
            <AnimationWrapper key={index} animation="fade-up" delay={index * 100}>
              <Card className="h-full border-0 shadow-md transition-all duration-300 hover:shadow-lg">
                <CardContent className="flex h-full flex-col items-center p-6 text-center">
                  <div className="mb-4 rounded-full bg-[#64A162]/10 p-3">{feature.icon}</div>
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            </AnimationWrapper>
          ))}
        </div>

        <AnimationWrapper animation="fade-up" delay={400}>
          <div className="mt-12 rounded-xl bg-[#64A162]/10 p-6 sm:mt-16 sm:p-8">
            <h3 className="text-2xl font-bold text-gray-900">Cam kết của chúng tôi</h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Đa dạng quy mô lớp học theo nhu cầu của học viên",
                "Đánh giá trình độ, tư vấn lộ trình và học thử miễn phí",
                "Đồng hành cùng học viên 24/7 trong từng giai đoạn",
                "Bảo đảm đầu ra với chính sách học lại miễn phí",
                "Môi trường học tập hiện đại, thân thiện",
                "Hệ thống online homework theo dõi tiến độ học tập và hỗ trợ kịp thời",
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <Check className="mr-2 h-5 w-5 flex-shrink-0 text-[#64A162]" />
                  <span className="text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  )
}
