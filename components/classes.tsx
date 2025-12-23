"use client"

import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

const programs = [
  {
    title: "Kids BJJ",
    description:
      "Our team at Overcome Jiu Jitsu is proud to bring high-quality Kids Martial Arts training to Bentonville. Our classes teach the fundamentals of Jiu Jitsu while also instilling strong core values, leadership skills, and discipline.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/w_600,h_425/8897/Kids-Excerpt-249823.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Our Kids BJJ program is designed to help children develop physical skills, mental discipline, and character. We create a safe, supportive environment where kids can learn and grow.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Program Benefits:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Fundamentals:</strong> Learn proper technique and form from the start</li>
            <li><strong>Character Development:</strong> Build respect, discipline, and confidence</li>
            <li><strong>Physical Fitness:</strong> Improve coordination, strength, and flexibility</li>
            <li><strong>Social Skills:</strong> Make friends and learn to work as a team</li>
            <li><strong>Age-Appropriate:</strong> Classes designed specifically for children</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Adult BJJ",
    description:
      "Our team at Overcome Jiu Jitsu is proud to provide the highest-quality Jiu Jitsu training in Bentonville. We are proud to offer Gi and No Gi Brazilian Jiu Jitsu, and we continue to work every day to help our students achieve their goals.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/w_600,h_425/8897/Adult-Excerpt-249828.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Our Adult BJJ program welcomes students of all skill levels, from complete beginners to advanced practitioners. Train with world champion instructors in a supportive, ego-free environment.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Training Includes:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Gi Training:</strong> Traditional Brazilian Jiu Jitsu with the kimono</li>
            <li><strong>No Gi Training:</strong> Modern submission grappling without the gi</li>
            <li><strong>World Champion Instructors:</strong> Learn from Professor Italo and expert coaches</li>
            <li><strong>All Skill Levels:</strong> Separate classes for beginners and advanced students</li>
            <li><strong>Competition Training:</strong> Optional preparation for tournaments</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Women-Only BJJ",
    description:
      "Build your skills one step at a time in our Women's Brazilian Jiu Jitsu Classes. We're proud to help women train with confidence and comfort and get the most out of every workout.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/w_600,h_425/8897/Womens-Excerpt-249836.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Our Women-Only BJJ classes provide a comfortable, supportive environment for women to learn Brazilian Jiu Jitsu. Whether you're looking for self-defense skills, fitness, or competition training, we have a program for you.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Class Benefits:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Comfortable Environment:</strong> Train with other women in a supportive setting</li>
            <li><strong>Self-Defense:</strong> Learn practical techniques for real-world situations</li>
            <li><strong>Fitness:</strong> Full-body workout that builds strength and endurance</li>
            <li><strong>Confidence:</strong> Develop mental and physical confidence</li>
            <li><strong>All Levels Welcome:</strong> Beginners and experienced practitioners welcome</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Private BJJ Training",
    description:
      "Get the most out of every session by enrolling in our Private Training. We offer one-on-one training sessions by appointment, which will allow you to create a personalized training routine with one of our world champion instructors.",
    image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/w_600,h_425/8897/Private-Training-Excerpt-249840.jpg",
    objectPosition: "center",
    fullDescription: (
      <div className="space-y-4">
        <p className="text-muted-foreground">
          Private training sessions offer personalized attention and customized instruction tailored to your specific goals. Work one-on-one with our world champion instructors to accelerate your progress.
        </p>
        <div className="space-y-3">
          <h4 className="font-semibold text-foreground">Private Training Benefits:</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><strong>Personalized Instruction:</strong> Focus on your specific goals and needs</li>
            <li><strong>Flexible Scheduling:</strong> Book sessions at times that work for you</li>
            <li><strong>Faster Progress:</strong> Individual attention accelerates learning</li>
            <li><strong>World Champion Coaches:</strong> Learn from Professor Italo and expert instructors</li>
            <li><strong>Customized Curriculum:</strong> Training plan designed specifically for you</li>
          </ul>
        </div>
      </div>
    ),
  },
]

export function Classes() {
  const [selectedProgram, setSelectedProgram] = useState<(typeof programs)[0] | null>(null)

  const scrollToForm = () => {
    const form = document.getElementById("lead-form")
    if (form) {
      form.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="programs" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Programs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Authentic Brazilian Jiu Jitsu training for all ages and skill levels. World champion instructors teaching the fundamentals and advanced techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {programs.map((program, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-100 p-[2px] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative h-full bg-white rounded-3xl overflow-hidden flex flex-col">
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    style={{ objectPosition: program.objectPosition || "center" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-3xl font-bold text-white drop-shadow-lg">{program.title}</h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                    {program.description}
                  </p>
                  <Button
                    onClick={() => setSelectedProgram(program)}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group/btn mt-auto cursor-pointer"
                  >
                    Learn More
                    <Info className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-100 via-emerald-50 to-slate-100 p-12 shadow-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-sm font-medium mb-6">
              <Info className="h-4 w-4" />
              Take a Tour
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Experience Overcome Jiu Jitsu</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
              Please stop by and take a tour! We would love to meet you and show you our awesome facility. Try a free trial class and experience authentic Brazilian Jiu Jitsu training with world champion instructors.
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
              <Button
                onClick={scrollToForm}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
              >
                Request More Info
              </Button>
              <p className="text-sm text-muted-foreground">Programs for all ages • Free trial class available</p>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={!!selectedProgram} onOpenChange={() => setSelectedProgram(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">{selectedProgram?.title}</DialogTitle>
            <div className="text-base leading-relaxed pt-4">{selectedProgram?.fullDescription}</div>
          </DialogHeader>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              onClick={() => {
                setSelectedProgram(null)
                scrollToForm()
              }}
              className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground cursor-pointer"
            >
              Get Started
            </Button>
            <Button onClick={() => setSelectedProgram(null)} variant="outline" className="flex-1 cursor-pointer">
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
