import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Testimonials - Overcome Jiu Jitsu | Bentonville, Arkansas",
  description:
    "Read testimonials from Overcome Jiu Jitsu students in Bentonville, AR. See what students have to say about training with world champion instructors in an ego-free environment.",
  openGraph: {
    title: "Testimonials - Overcome Jiu Jitsu | Bentonville, Arkansas",
    description:
      "Read testimonials from Overcome Jiu Jitsu students in Bentonville, AR. See what students have to say about training with world champion instructors in an ego-free environment.",
    url: "https://overcomejiujitsu.com/testimonials",
    images: ["https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/8897/Overcome-Bjj-249850.jpg"],
  },
};

export default function TestimonialsPage() {
  return <HomeContent scrollTo="testimonials" />;
}
