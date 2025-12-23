import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "About Us - Overcome Jiu Jitsu | Bentonville, Arkansas",
  description:
    "Learn about Overcome Jiu Jitsu in Bentonville, AR. World champion instructors teaching authentic Brazilian Jiu Jitsu to students of all ages and skill levels.",
  alternates: {
    canonical: "https://overcomejiujitsu.com/about",
  },
  openGraph: {
    title: "About Us - Overcome Jiu Jitsu | Bentonville, Arkansas",
    description:
      "Learn about Overcome Jiu Jitsu in Bentonville, AR. World champion instructors teaching authentic Brazilian Jiu Jitsu to students of all ages and skill levels.",
    url: "https://overcomejiujitsu.com/about",
    images: ["https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/8897/Overcome-Bjj-249850.jpg"],
  },
};

export default function AboutPage() {
  return <HomeContent scrollTo="facility" />;
}
