"use client"

import React, { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface CarouselProps {
  images: {
    src: string
    alt: string
  }[]
  className?: string
  autoPlay?: boolean
  interval?: number
}

export function Carousel({ images, className, autoPlay = false, interval = 5000 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (autoPlay && images.length > 1) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
      }, interval)
    }
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [autoPlay, images.length, interval])

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className={cn("relative h-full w-full group", className)}>
      <div className="relative h-full w-full overflow-hidden rounded-lg">
        <div className="relative h-full w-full">
          <Image
            src={images[currentIndex].src || "/placeholder.svg"}
            alt={images[currentIndex].alt}
            fill
            className="object-cover transition-all duration-500 group-hover:scale-105"
          />
        </div>

        {/* Left Arrow */}
        <div className="absolute left-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/30 p-2 text-white opacity-0 transition-opacity duration-300 hover:bg-black/50 group-hover:opacity-100">
          <ChevronLeft onClick={goToPrevious} className="h-6 w-6" />
        </div>

        {/* Right Arrow */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-black/30 p-2 text-white opacity-0 transition-opacity duration-300 hover:bg-black/50 group-hover:opacity-100">
          <ChevronRight onClick={goToNext} className="h-6 w-6" />
        </div>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 transform space-x-2">
          {images.map((_, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 ${
                slideIndex === currentIndex ? "bg-white w-4" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export const MultiItemCarousel: React.FC<{
  items: React.ReactNode[]
  itemsPerView?: number
  className?: string
  autoPlay?: boolean
  interval?: number
}> = ({ items, itemsPerView = 3, className, autoPlay = false, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const totalItems = items.length
  const maxIndex = Math.max(0, totalItems - itemsPerView)

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (autoPlay && totalItems > itemsPerView) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex >= maxIndex ? 0 : prevIndex + 1))
      }, interval)
    }
    return () => {
      if (timer) clearInterval(timer)
    }
  }, [autoPlay, totalItems, itemsPerView, maxIndex, interval])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1))
  }

  // Adjust items per view based on screen size
  const getItemsToShow = () => {
    const visibleItems = items.slice(currentIndex, currentIndex + itemsPerView)
    return visibleItems
  }

  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(currentIndex * 100) / itemsPerView}%)` }}
        >
          {items.map((item, index) => (
            <div key={index} className={`w-full flex-shrink-0 px-2`} style={{ width: `${100 / itemsPerView}%` }}>
              {item}
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        {currentIndex > 0 && (
          <button
            onClick={goToPrevious}
            className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {currentIndex < maxIndex && (
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white transition-all hover:bg-black/50"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}

        {/* Indicators */}
        <div className="mt-4 flex justify-center space-x-2">
          {Array.from({ length: Math.min(maxIndex + 1, 5) }).map((_, index) => {
            // Calculate the actual index this dot represents
            const dotIndex = Math.min(index * Math.ceil(totalItems / 5), maxIndex)

            return (
              <div
                key={index}
                onClick={() => setCurrentIndex(dotIndex)}
                className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                  currentIndex >= dotIndex && currentIndex < (index + 1) * Math.ceil(totalItems / 5)
                    ? "w-4 bg-[#64A162]"
                    : "w-2 bg-gray-300"
                }`}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export const CarouselContent = React.Fragment
export const CarouselItem = React.Fragment
export const CarouselPrevious = () => null
export const CarouselNext = () => null
