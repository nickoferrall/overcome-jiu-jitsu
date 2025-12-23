import { Metadata } from "next"
import { HomeContent } from "@/components/home-content"

export const metadata: Metadata = {
  title: "Our Instructors - Overcome Jiu Jitsu | Bentonville, Arkansas",
  description:
    "Meet the world champion instructors at Overcome Jiu Jitsu. Professor Italo and Thamires are dedicated to teaching authentic Brazilian Jiu Jitsu to students of all levels.",
  keywords: [
    "Overcome Jiu Jitsu instructors",
    "Professor Italo",
    "Bentonville BJJ instructors",
    "world champion BJJ",
    "BJJ coaches Bentonville",
  ],
  alternates: {
    canonical: "https://overcomejiujitsu.com/team",
  },
}

export default function TeamPage() {
  return <HomeContent scrollTo="team" />
}

