"use client"

import { useRef } from "react"
import Image from "next/image"

interface SectionHeaderProps {
  title?: string
  subtitle?: string
  backgroundImage: string
}

export default function SectionHeader({
  title,
  subtitle,
  backgroundImage,
}: SectionHeaderProps) {
  const headerRef = useRef<HTMLDivElement>(null)

  return (
    <section ref={headerRef} className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt="Section background"
          fill
          className="object-cover object-[center_top]"
          priority
        />
      </div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10">
        {title && (
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] leading-snug">
            {title}
          </h1>
        )}
        {subtitle && (
          <p className="mt-4 text-sm sm:text-lg md:text-xl text-white max-w-[90%] sm:max-w-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.4)]">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  )
}
