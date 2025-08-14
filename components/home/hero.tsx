import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnimationWrapper from "../animation-wrapper";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#64A162]/5 to-transparent" />
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-16 sm:py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Column - Content */}
          <AnimationWrapper animation="fade-right">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Học tiếng Anh</span>
                <span className="block text-[#64A162]">Hiệu quả - Tiết kiệm</span>
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 sm:mt-8 lg:mx-0">
                Khám phá phương pháp học tiếng Anh hiện đại, cá nhân hóa với đội ngũ giảng viên chất lượng cao và lộ trình học tập tối ưu.
              </p>
              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <Link href="/courses">
                    <span>Khám phá khóa học</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full sm:w-auto" asChild>
                  <Link href="/contact">
                    <span>Tư vấn miễn phí</span>
                  </Link>
                </Button>
              </div>
            </div>
          </AnimationWrapper>

          {/* Right Column - Image */}
          <AnimationWrapper animation="fade-left">
            <div className="relative mx-auto max-w-2xl lg:mx-0">
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl shadow-2xl">
                <Image
                  src="/hero-image.jpg"
                  alt="Học viên InterLanguage"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-lg font-semibold">Hơn 1000+ học viên đã thành công</p>
                  <p className="mt-2 text-sm opacity-90">Cùng trải nghiệm phương pháp học tiếng Anh hiệu quả</p>
                </div>
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
} 