"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AnimationWrapper from "@/components/animation-wrapper";

export default function WelcomeSection() {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Bên trái: Text */}
          <AnimationWrapper animation="fade-up">
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
                <span className="block">Unfold your better self</span>
                <span className="block text-[#64A162]">with InterLanguage</span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-gray-600">
                Trung tâm tiếng Anh InterLanguage đồng hành cùng bạn biến việc học tiếng Anh không còn là "cuộc chiến
                đơn độc" mà trở thành hành trình khám phá và khẳng định chính mình.
              </p>
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
                <Button asChild size="lg" className="bg-[#64A162] hover:bg-[#548652] hover-lift">
                  <Link href="/courses">Khám phá khóa học</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="hover-lift">
                  <Link href="/contact">Liên hệ tư vấn</Link>
                </Button>
              </div>
            </div>
          </AnimationWrapper>

          {/* Bên phải: Ảnh */}
          <AnimationWrapper animation="fade-in" delay={300}>
            <div
              className="relative mx-auto w-full px-4 overflow-hidden rounded-xl aspect-[16/9]
                max-w-[400px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[700px] 2xl:max-w-[800px]
                h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] xl:h-[400px]
                stars-container"
            >
              <div className="relative w-full h-full animate-float-image">
                <Image
                  src="https://i.imgur.com/xooNcWN.png"
                  alt="welcome"
                  width={800}
                  height={800}
                  className="w-full h-full object-cover hover:brightness-90 transition rounded-xl"
                  priority
                />
              </div>

              {/* Shapes */}
              <div className="absolute inset-0 shapes-animation pointer-events-none">
                <div className="shape shape-1 shape-circle bg-[#ffee64]" />
                <div className="shape shape-2 shape-square bg-[#9ddaec]" />
                <div className="shape shape-3 shape-triangle border-b-[20px] border-b-[#fca7b3] border-x-[10px] border-transparent" />
                <div className="shape shape-4 shape-circle bg-[#fc8a3d]" />

                <div
                  className="shape shape-square bg-[#64a162]"
                  style={{ top: "58%", left: "10%", animationDelay: "2s" }}
                />
                <div
                  className="shape shape-triangle border-b-[20px] border-b-[#ffee64] border-x-[10px] border-transparent"
                  style={{ top: "12%", right: "18%", animationDelay: "3.5s" }}
                />
                <div
                  className="shape shape-circle bg-[#9ddaec]"
                  style={{ top: "38%", right: "14%", animationDelay: "5s" }}
                />
                <div
                  className="shape shape-square bg-[#fca7b3]"
                  style={{ top: "80%", right: "25%", animationDelay: "6s" }}
                />
                <div
                  className="shape shape-circle bg-[#fc8a3d]"
                  style={{ top: "18%", left: "35%", animationDelay: "4s" }}
                />
                <div
                  className="shape shape-triangle border-b-[20px] border-b-[#64a162] border-x-[10px] border-transparent"
                  style={{ top: "72%", left: "28%", animationDelay: "7s" }}
                />
              </div>
            </div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
