"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { BookingModal } from "./booking-modal"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/8897/Get-the-Best-Authentic-Brazilian-Jiu-Jitsu-Training-in-Location-249819.jpg"
          alt="Overcome Jiu Jitsu training facility in Bentonville, Arkansas"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="container relative z-10 px-4 pt-32 pb-20">
        <div className="max-w-4xl">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight drop-shadow-lg">
            Get the Best Authentic Brazilian Jiu Jitsu Training in Bentonville
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-10 max-w-2xl leading-relaxed drop-shadow-md">
            Immerse Yourself in Martial Arts with Overcome Jiu Jitsu. World champion instructors teaching Kids BJJ, Adult BJJ, Women-Only BJJ, and Private Training.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Request More Info
            </Button>
          </div>
        </div>
      </div>

      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} offerText="Request More Info" />
    </section>
  )
}
