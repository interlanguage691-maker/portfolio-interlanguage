"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button"; // điều chỉnh lại đúng path Button bạn đang dùng nhé

export default function CallToAction() {
  return (
    <section className="bg-[#64A162]/10 py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">
          Sẵn sàng để bắt đầu hành trình học tiếng Anh của bạn?
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Đăng ký ngay hôm nay để nhận tư vấn miễn phí và bắt đầu hành trình chinh phục tiếng Anh cùng InterLanguage.
        </p>
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg" className="bg-[#64A162] hover:bg-[#548652]">
            <Link href="/contact">Đăng ký ngay</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
