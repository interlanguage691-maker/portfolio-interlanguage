import { partnersList } from "@/data/trrust-partner"
import Image from "next/image"

export default function TrustedPartners() {
  const partners =  partnersList

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Đối tác của chúng tôi</h2>
          <p className="mt-4 text-lg text-gray-600">
            InterLanguage tự hào hợp tác với các đơn vị uy tín trong và ngoài nước
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="relative h-20 w-40">
                <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} fill className="object-contain" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
