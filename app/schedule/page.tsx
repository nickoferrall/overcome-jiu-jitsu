import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Class Schedule - Overcome Jiu Jitsu | Bentonville, Arkansas",
  description:
    "View the weekly class schedule at Overcome Jiu Jitsu in Bentonville, AR. Kids BJJ, Adult BJJ, Women-Only classes, No Gi, Fundamentals, and more. Find the perfect time to train.",
  alternates: {
    canonical: "https://overcomejiujitsu.com/schedule",
  },
  openGraph: {
    title: "Class Schedule - Overcome Jiu Jitsu | Bentonville, Arkansas",
    description:
      "View the weekly class schedule at Overcome Jiu Jitsu in Bentonville, AR. Kids BJJ, Adult BJJ, Women-Only classes, No Gi, Fundamentals, and more.",
    url: "https://overcomejiujitsu.com/schedule",
    images: ["https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/8897/Overcome-Bjj-249850.jpg"],
  },
};

export default function SchedulePage() {
  return <HomeContent scrollTo="schedule" />;
}

