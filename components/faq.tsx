"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "What programs does Overcome Jiu Jitsu offer?",
    answer:
      "Overcome Jiu Jitsu offers Kids BJJ, Adult BJJ (both Gi and No Gi), Women-Only BJJ classes, and Private BJJ Training. We have separate classes for beginners and advanced students to ensure everyone learns at the appropriate level.",
  },
  {
    question: "Do I need experience to start training?",
    answer:
      "No experience necessary! We welcome complete beginners and have separate classes specifically designed for those new to Brazilian Jiu Jitsu. Our world champion instructors explain everything step by step, making it easy for anyone to get started.",
  },
  {
    question: "What is the difference between Gi and No Gi BJJ?",
    answer:
      "Gi BJJ is traditional Brazilian Jiu Jitsu practiced while wearing a kimono (gi), which allows for grips on the uniform. No Gi BJJ is practiced without the gi, focusing more on body control and modern submission grappling techniques. We offer both at Overcome Jiu Jitsu.",
  },
  {
    question: "Do you offer a free trial class?",
    answer:
      "Yes! We offer free trial classes so you can experience our training before committing. Come try a class and see why Overcome Jiu Jitsu is the best BJJ academy in Bentonville. Contact us to schedule your free trial.",
  },
  {
    question: "What makes Overcome Jiu Jitsu different?",
    answer:
      "We have world champion instructors like Professor Italo, separate classes for beginners, and an ego-free environment where everyone helps each other learn. Our welcoming community and step-by-step instruction make it perfect for students of all levels.",
  },
  {
    question: "Can I tour the facility before joining?",
    answer:
      "Absolutely! We encourage everyone to stop by and take a tour of our facility. We would love to meet you and show you our awesome training space and instructors. Contact us to schedule a visit and see why Overcome Jiu Jitsu is Bentonville's premier BJJ academy.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get answers to common questions about Overcome Jiu Jitsu
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-200 via-slate-100 to-emerald-100 p-[2px] transition-all duration-300 hover:shadow-lg"
            >
              <div className="bg-white rounded-2xl">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-secondary/20 transition-colors rounded-2xl"
                >
                  <span className="text-lg font-bold text-foreground pr-8">{faq.question}</span>
                  <ChevronDown
                    className={`h-6 w-6 text-primary flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-8 pb-6 text-muted-foreground leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
