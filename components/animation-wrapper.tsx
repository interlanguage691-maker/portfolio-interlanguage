"use client"

import { useRef, useEffect, useState, type ReactNode } from "react"

interface AnimationWrapperProps {
  children: ReactNode
  className?: string
  animation?: "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "zoom-in"
  delay?: number
  threshold?: number
}

export default function AnimationWrapper({
  children,
  className = "",
  animation = "fade-up",
  delay = 0,
  threshold = 0.1,
}: AnimationWrapperProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      {
        threshold,
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  const getAnimationClass = () => {
    switch (animation) {
      case "fade-up":
        return isVisible ? "animate-fade-up" : "opacity-0 translate-y-10"
      case "fade-in":
        return isVisible ? "animate-fade-in" : "opacity-0"
      case "slide-in-left":
        return isVisible ? "animate-slide-in-left" : "opacity-0 -translate-x-10"
      case "slide-in-right":
        return isVisible ? "animate-slide-in-right" : "opacity-0 translate-x-10"
      case "zoom-in":
        return isVisible ? "animate-zoom-in" : "opacity-0 scale-95"
      default:
        return isVisible ? "animate-fade-up" : "opacity-0 translate-y-10"
    }
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${getAnimationClass()} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
