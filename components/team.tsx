"use client"

import Image from "next/image"
import { useState } from "react"

const teamMembers = [
  {
    name: "Italo Lins",
    role: "Professor",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/8897/Italo-Lins-290845.jpeg.jpeg",
    bio: "Italo Lins is a professional Brazilian Jiu-Jitsu competitor in the black belt division, having been taught by Master Julio Cesar – leader and founder of the Grappling Fight Team. World champion competitor and head instructor at Overcome Jiu Jitsu.",
  },
  {
    name: "Thamires Aquino",
    role: "Professor",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/8897/Thamires-Aquino-290844.jpeg.jpeg",
    bio: "Thamires Aquino is a Brazilian jiu-jitsu black belt under Master Júlio César Pereira and one of the top female competitors of her generation. Competing for GF Team, she is passionate about BJJ, teaching, and students.",
  },
]

export function Team() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="team" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Meet Our <span className="text-primary">Instructors</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            World champion instructors dedicated to helping you learn authentic Brazilian Jiu Jitsu in a supportive, ego-free environment
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-100 p-[2px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 w-full sm:w-80 ${
                hoveredIndex !== null && hoveredIndex !== index ? "blur-[1px] opacity-70" : ""
              }`}
            >
              <div className="relative h-full bg-white rounded-3xl overflow-hidden">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white/90 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
