"use client"

import { useState } from "react"
import { BookingModal } from "./booking-modal"

export function Schedule() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const schedule = {
    Monday: [
      { time: "6:00 AM - 7:00 AM", class: "Fundamentals" },
      { time: "11:00 AM - 12:00 PM", class: "Fundamentals" },
      { time: "5:30 PM - 6:30 PM", class: "Junior (~9+)" },
      { time: "5:30 PM - 6:30 PM", class: "Pee-Wee (~7+)" },
      { time: "6:30 PM - 7:30 PM", class: "Beginners (Curriculum) White Belt Only" },
      { time: "6:30 PM - 7:30 PM", class: "Advanced Gi" },
    ],
    Tuesday: [
      { time: "6:00 AM - 7:00 AM", class: "No Gi" },
      { time: "11:00 AM - 12:00 PM", class: "Beginners (Curriculum) All Belts Welcome" },
      { time: "4:20 PM - 5:20 PM", class: "Junior (~9+)" },
      { time: "4:20 PM - 5:20 PM", class: "Pee-Wee (~7+)" },
      { time: "4:20 PM - 5:00 PM", class: "Little Ninja (4-5)" },
      { time: "5:00 PM - 5:50 PM", class: "Mighty-Mite (5-7)" },
      { time: "5:30 PM - 6:30 PM", class: "Teen (~13+)" },
      { time: "6:00 PM - 7:00 PM", class: "Women-Only Class" },
      { time: "6:30 PM - 7:30 PM", class: "Drills/Rolls (3 Stripes+)" },
    ],
    Wednesday: [
      { time: "11:00 AM - 12:00 PM", class: "No Gi" },
      { time: "5:30 PM - 6:30 PM", class: "Junior (~9+)" },
      { time: "5:30 PM - 6:30 PM", class: "Pee-Wee (~7+)" },
      { time: "6:30 PM - 7:30 PM", class: "Beginners (Curriculum) White Belt Only" },
      { time: "6:30 PM - 7:30 PM", class: "No Gi" },
    ],
    Thursday: [
      { time: "6:00 AM - 7:00 AM", class: "Fundamentals" },
      { time: "11:00 AM - 12:00 PM", class: "Beginners (Curriculum) All Belts Welcome" },
      { time: "4:20 PM - 5:20 PM", class: "Pee-Wee (~7+)" },
      { time: "4:20 PM - 5:20 PM", class: "Junior (~9+)" },
      { time: "4:20 PM - 5:00 PM", class: "Little Ninja (4-5)" },
      { time: "5:00 PM - 5:50 PM", class: "Mighty-Mite (5-7)" },
      { time: "5:30 PM - 6:30 PM", class: "Teen (~13+)" },
      { time: "6:00 PM - 7:00 PM", class: "Women-Only Class" },
      { time: "6:30 PM - 7:30 PM", class: "Live Rolls (3 Stripes+)" },
    ],
    Friday: [
      { time: "6:00 AM - 7:00 AM", class: "No Gi" },
      { time: "11:00 AM - 12:00 PM", class: "Fundamentals" },
      { time: "5:00 PM - 6:00 PM", class: "Wrestling (~7+) Coach Josh Rivers" },
      { time: "5:00 PM - 6:00 PM", class: "Beginners (Curriculum) All Belts Welcome" },
    ],
    Saturday: [
      { time: "10:00 AM - 11:00 AM", class: "Teen (~13+)" },
      { time: "10:00 AM - 11:00 AM", class: "Fundamentals" },
      { time: "11:00 AM - 12:00 PM", class: "Open Mat (Members Only)" },
    ],
    Sunday: [],
  }

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  return (
    <section id="schedule" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Class Schedule</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            View our weekly class schedule and find the perfect time to train at Overcome Jiu Jitsu
          </p>
        </div>

        <div className="overflow-x-auto border-2 border-slate-300 rounded-xl shadow-xl">
          <table className="w-full border-collapse bg-white overflow-hidden min-w-[1000px]">
            <thead>
              <tr className="bg-primary text-white">
                {days.map((day) => (
                  <th key={day} className="px-3 py-4 text-center font-semibold text-sm uppercase tracking-wider border-r border-primary-foreground/20 last:border-r-0">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {Array.from({ length: Math.max(...Object.values(schedule).map((s) => s.length)) }).map((_, rowIndex) => (
                <tr key={rowIndex} className="border-b border-slate-200 hover:bg-slate-50">
                  {days.map((day) => {
                    const daySchedule = schedule[day as keyof typeof schedule]
                    const slot = daySchedule[rowIndex]
                    return (
                      <td key={`${day}-${rowIndex}`} className="px-3 py-2 text-sm border-r border-slate-200 last:border-r-0 align-top">
                        {slot ? (
                          <div 
                            onClick={() => setIsModalOpen(true)}
                            className="cursor-pointer hover:bg-primary/10 p-2 rounded transition-colors"
                          >
                            <div className="font-semibold text-primary text-xs">{slot.time}</div>
                            <div className="text-foreground text-sm mt-1">{slot.class}</div>
                          </div>
                        ) : day === "Sunday" && rowIndex === 0 ? (
                          <div className="p-2 text-muted-foreground text-sm italic">No classes</div>
                        ) : (
                          <div className="h-12"></div>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Schedule subject to change. Contact us for the most up-to-date information.
        </p>
      </div>

      <BookingModal open={isModalOpen} onOpenChange={setIsModalOpen} offerText="Request More Info" />
    </section>
  )
}
