import { Users, GraduationCap, Shield, Target } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Kids BJJ",
    description: "High-quality Kids Martial Arts training in Bentonville. Our classes teach the fundamentals of Jiu Jitsu while instilling strong core values, leadership skills, and discipline.",
  },
  {
    icon: Users,
    title: "Adult BJJ",
    description: "The highest-quality Jiu Jitsu training in Bentonville. We offer Gi and No Gi Brazilian Jiu Jitsu, and we continue to work every day to help our students achieve their goals.",
  },
  {
    icon: Shield,
    title: "Women-Only BJJ",
    description: "Build your skills one step at a time in our Women's Brazilian Jiu Jitsu Classes. We're proud to help women train with confidence and comfort and get the most out of every workout.",
  },
  {
    icon: Target,
    title: "Private BJJ Training",
    description: "Get the most out of every session by enrolling in our Private Training. We offer one-on-one training sessions by appointment, which will allow you to create a personalized training routine with one of our world champion instructors.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-primary">Programs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Authentic Brazilian Jiu Jitsu training for all ages and skill levels. World champion instructors teaching the fundamentals and advanced techniques.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-8"
              >
                <div
                  className="absolute inset-0 opacity-[0.02]"
                  style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, rgb(0 0 0) 1px, transparent 0)`,
                    backgroundSize: "32px 32px",
                  }}
                />

                <div className="relative z-10">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{feature.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
