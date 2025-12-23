import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Overcome Jiu Jitsu | Best Brazilian Jiu Jitsu Training in Bentonville, Arkansas",
  description:
    "Get the best authentic Brazilian Jiu Jitsu training in Bentonville, AR. World champion instructors teach Kids BJJ, Adult BJJ, Women-Only BJJ, and Private Training. Free trial class available.",
  keywords: [
    "Overcome Jiu Jitsu",
    "Bentonville BJJ",
    "Brazilian Jiu Jitsu Bentonville",
    "BJJ classes Bentonville",
    "Kids BJJ Bentonville",
    "Adult BJJ Bentonville",
    "Women BJJ Bentonville",
    "Jiu Jitsu training Arkansas",
    "BJJ gym Bentonville",
    "martial arts Bentonville",
    "Professor Italo",
    "Bentonville Arkansas Jiu Jitsu",
  ],
  authors: [{ name: "Overcome Jiu Jitsu" }],
  creator: "Overcome Jiu Jitsu",
  publisher: "Overcome Jiu Jitsu",
  metadataBase: new URL("https://overcomejiujitsu.com"),
  alternates: {
    canonical: "https://overcomejiujitsu.com",
  },
  openGraph: {
    title: "Overcome Jiu Jitsu | Best Brazilian Jiu Jitsu Training in Bentonville, Arkansas",
    description:
      "Get the best authentic Brazilian Jiu Jitsu training in Bentonville, AR. World champion instructors teach Kids BJJ, Adult BJJ, Women-Only BJJ, and Private Training.",
    url: "https://overcomejiujitsu.com",
    siteName: "Overcome Jiu Jitsu",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/8897/Get-the-Best-Authentic-Brazilian-Jiu-Jitsu-Training-in-Location-249819.jpg",
        width: 1200,
        height: 630,
        alt: "Overcome Jiu Jitsu training facility in Bentonville, Arkansas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Overcome Jiu Jitsu | Best Brazilian Jiu Jitsu Training in Bentonville, Arkansas",
    description:
      "Get the best authentic Brazilian Jiu Jitsu training in Bentonville, AR. World champion instructors teach Kids BJJ, Adult BJJ, Women-Only BJJ, and Private Training.",
    images: ["https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/8897/Get-the-Best-Authentic-Brazilian-Jiu-Jitsu-Training-in-Location-249819.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {},
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SportsActivityLocation",
  name: "Overcome Jiu Jitsu",
  image: "https://res.cloudinary.com/display97/image/upload/q_auto,fl_lossy,f_auto/8897/Overcome-Bjj-249850.jpg",
  "@id": "https://overcomejiujitsu.com",
  url: "https://overcomejiujitsu.com",
  telephone: "+1-479-800-2550",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3600 Southwest Regional Airport Blvd",
    addressLocality: "Bentonville",
    addressRegion: "AR",
    postalCode: "72712",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.3367733,
    longitude: -94.2526732,
  },
  sameAs: [
    "https://www.facebook.com/overcomebjj",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "50",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "BJJ Programs & Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kids BJJ",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Adult BJJ",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Women-Only BJJ",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Private BJJ Training",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://overcomejiujitsu.com" />
        <meta name="geo.region" content="US-AR" />
        <meta name="geo.placename" content="Bentonville" />
        <meta name="geo.position" content="36.3367733;-94.2526732" />
        <meta name="ICBM" content="36.3367733, -94.2526732" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
