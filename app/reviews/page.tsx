import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Reviews & Testimonials - Overcome Jiu Jitsu | Bentonville, Arkansas",
  description:
    "Read reviews and testimonials from Overcome Jiu Jitsu students in Bentonville, AR. See what our community has to say about training with world champion instructors.",
  alternates: {
    canonical: "https://overcomejiujitsu.com/reviews",
  },
  openGraph: {
    title: "Reviews & Testimonials - Overcome Jiu Jitsu | Bentonville, Arkansas",
    description:
      "Read reviews and testimonials from Overcome Jiu Jitsu students in Bentonville, AR. See what our community has to say about training with world champion instructors.",
    url: "https://overcomejiujitsu.com/reviews",
    images: ["https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/8897/Overcome-Bjj-249850.jpg"],
  },
};

export default function ReviewsPage() {
  return <HomeContent scrollTo="testimonials" />;
}
