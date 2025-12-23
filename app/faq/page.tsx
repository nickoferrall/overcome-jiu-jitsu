import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "FAQ - Overcome Jiu Jitsu | Bentonville, Arkansas",
  description:
    "Frequently asked questions about Overcome Jiu Jitsu in Bentonville, AR. Learn about BJJ programs, free trial classes, Gi vs No Gi, and more.",
  alternates: {
    canonical: "https://overcomejiujitsu.com/faq",
  },
  openGraph: {
    title: "FAQ - Overcome Jiu Jitsu | Bentonville, Arkansas",
    description:
      "Frequently asked questions about Overcome Jiu Jitsu in Bentonville, AR. Learn about BJJ programs, free trial classes, Gi vs No Gi, and more.",
    url: "https://overcomejiujitsu.com/faq",
    images: ["https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/8897/Overcome-Bjj-249850.jpg"],
  },
};

export default function FAQPage() {
  return <HomeContent scrollTo="faq" />;
}
