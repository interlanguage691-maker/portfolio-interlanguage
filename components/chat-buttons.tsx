"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export default function ChatButtons() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 flex flex-col space-y-2">
          <Button
            onClick={() => window.open("https://zalo.me/3049360342546110101", "_blank")}
            className="rounded-full bg-blue-500 p-3 hover:bg-blue-600"
            size="icon"
            aria-label="Chat on Zalo"
          >
            <div className="flex h-6 w-6 items-center justify-center">
              <span className="text-xs font-bold text-white">Zalo</span>
            </div>
          </Button>
          <Button
            onClick={() => window.open("https://m.me/TiengAnhThayHuyAnh", "_blank")}
            className="rounded-full bg-[#0084FF] p-3 hover:bg-[#0077e6]"
            size="icon"
            aria-label="Chat on Messenger"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 800 800"
              width="24"
              height="24"
              fill="white"
              className="h-6 w-6"
            >
              <path d="M400 0C174.7 0 0 165.1 0 388c0 116.6 47.8 217.4 125.6 287 6.5 5.8 10.5 14 10.7 22.8l2.2 71.2a32 32 0 0 0 44.9 28.3l79.4-35c6.7-3 14.3-3.5 21.4-1.6 36.5 10 75.3 15.4 115.8 15.4 225.3 0 400-165.1 400-388S625.3 0 400 0zm-199 371l137 129c15 14 39 14 53-1l93-97-19-17-74 78c-15 14-39 14-53-1l-118-111 19-19zm-24-105l74-78c15-14 39-14 53 1l118 111-19 19-74-78c-15-14-39-14-53 1l-118 111-19-19 38-68zm432 105l-137 129c-15 14-39 14-53-1l-93-97 19-17 74 78c15 14 39 14 53-1l118-111 19 19z" />
            </svg>
          </Button>
        </div>
      )}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-full bg-[#64A162] p-4 hover:bg-[#548652]"
        size="icon"
        aria-label="Open chat options"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </div>
  )
}
