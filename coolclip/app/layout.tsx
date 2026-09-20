import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  themeColor: "#6E8F7E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://coolclip.nl"),
  title: {
    default: "CoolClip | Jouw verkoeling, waar je ook gaat",
    template: "%s | CoolClip",
  },
  description:
    "CoolClip is de klembare mini-airco voor backpackers en avontuurlijke reizigers. Jouw verkoeling, waar je ook gaat: 8 uur batterij, heavy-duty klem en fluisterstil (<35dB) voor hostels, bussen en tenten.",
  keywords: [
    "CoolClip",
    "Jouw verkoeling waar je ook gaat",
    "klembare mini airco",
    "backpacking airco",
    "draagbare koeler hostel",
    "reiskoeler nachtbus",
    "patagonia style outdoor gear",
    "yeti outdoor koeler",
  ],
  authors: [{ name: "CoolClip Outdoor Gear" }],
  creator: "CoolClip",
  publisher: "CoolClip Outdoor Gear",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CoolClip — Jouw verkoeling, waar je ook gaat",
    description:
      "De klembare mini-airco voor backpackers & avonturiers. 8 uur batterij, heavy-duty clip en fluisterstil (<35dB). Gebouwd voor tropische hostels en lange reizen.",
    url: "https://coolclip.nl",
    siteName: "CoolClip",
    images: [
      {
        url: "https://placehold.co/1200x630/1A1A1A/FFFFFF/png?text=CoolClip+Product+In+Action+Backpack+Hostel",
        width: 1200,
        height: 630,
        alt: "CoolClip klembare mini-airco op rugzak en hostel stapelbed",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoolClip | Jouw verkoeling, waar je ook gaat",
    description:
      "Directe verkoeling op je gear. 8 uur batterij & fluisterstil (<35dB). Unieke klemkoeler voor hostels, bussen en tenten.",
    images: ["https://placehold.co/1200x630/1A1A1A/FFFFFF/png?text=CoolClip+Product+In+Action"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="nl"
      className={`${spaceGrotesk.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F4F3ED] text-[#1A1A1A] font-sans">
        {children}
      </body>
    </html>
  );
}
