import { Metadata } from "next";
import { HomeContent } from "@/components/home-content";

export const metadata: Metadata = {
  title: "Contact Us - Overcome Jiu Jitsu | Bentonville, Arkansas",
  description:
    "Contact Overcome Jiu Jitsu in Bentonville, AR. Get directions, phone number, and email. Visit us at 3600 Southwest Regional Airport Blvd. Free trial class available.",
  alternates: {
    canonical: "https://overcomejiujitsu.com/contact",
  },
  openGraph: {
    title: "Contact Us - Overcome Jiu Jitsu | Bentonville, Arkansas",
    description:
      "Contact Overcome Jiu Jitsu in Bentonville, AR. Get directions, phone number, and email. Visit us at 3600 Southwest Regional Airport Blvd. Free trial class available.",
    url: "https://overcomejiujitsu.com/contact",
    images: ["https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/8897/Overcome-Bjj-249850.jpg"],
  },
};

export default function ContactPage() {
  return <HomeContent scrollTo="facility" />;
}
