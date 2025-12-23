import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Programs - Overcome Jiu Jitsu | Kids BJJ, Adult BJJ, Women-Only BJJ | Bentonville",
  description:
    "Explore BJJ programs at Overcome Jiu Jitsu in Bentonville, AR. Kids BJJ, Adult BJJ (Gi & No Gi), Women-Only BJJ, and Private Training. Free trial class available.",
  alternates: {
    canonical: "https://overcomejiujitsu.com/programs",
  },
  openGraph: {
    title: "Programs - Overcome Jiu Jitsu | Kids BJJ, Adult BJJ, Women-Only BJJ | Bentonville",
    description:
      "Explore BJJ programs at Overcome Jiu Jitsu in Bentonville, AR. Kids BJJ, Adult BJJ (Gi & No Gi), Women-Only BJJ, and Private Training. Free trial class available.",
    url: "https://overcomejiujitsu.com/programs",
    images: ["https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/8897/Overcome-Bjj-249850.jpg"],
  },
};

export default function ProgramsPage() {
  return <HomeContent scrollTo="programs" />;
}
