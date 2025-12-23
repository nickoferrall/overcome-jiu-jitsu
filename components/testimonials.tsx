"use client"

import { Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    text: "Awesome BJJ training facility! Professor Italo is a world champion competitor. He explains everything step by step. It's a great facility for beginners since they have separate classes which was important to me.",
    author: "Jeff Cotter",
    source: "google",
  },
  {
    text: "This is a great place to train as there are no egos in this gym. Everyone is there to not only learn BJJ but to help each other learn as well. Coach Italo goes out of his way to make sure each student understands the techniques.",
    author: "Jeff Bingham",
    source: "google",
  },
  {
    text: "Beginning with my first trial class, the instructors and students welcomed me into the group. Everyone has been extremely friendly and encouraging. The instructors knew my name from the first day and made me feel like part of the family.",
    author: "Wesley Steven Gordon",
    source: "google",
  },
  {
    text: "If you're looking to train with the best BJJ instructor in NWA and get into shape, this is where you need to be. Professor Italo is a consummate professional in what he teaches, and his record speaks for itself.",
    author: "Retro Maniac",
    source: "google",
  },
  {
    text: "In the time I have been training under Professor Italo, I have learned more than any other academy. It is very apparent that Italo and Thamires love BJJ, teaching, and their students. Love is the theme here.",
    author: "Mike Rice",
    source: "google",
  },
  {
    text: "Perfect facility with an awesome group of people to train with. Italo and Thamires are incredible professors. Extremely welcoming community, so come try this place out! You will not regret your decision.",
    author: "Jeremy Ramirez",
    source: "google",
  },
]

export function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">What Our Students Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a welcoming community where everyone helps each other learn and grow in Brazilian Jiu Jitsu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-100/60 via-slate-50/40 to-emerald-100/50 p-[2px] transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                hoveredIndex !== null && hoveredIndex !== index ? "blur-[2px] opacity-60" : ""
              }`}
            >
              <div className="relative h-full bg-white rounded-3xl p-8 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  {testimonial.source === "google" && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground opacity-60">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
                      </svg>
                      <span>Google</span>
                    </div>
                  )}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <p className="font-bold text-foreground text-sm">— {testimonial.author}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
