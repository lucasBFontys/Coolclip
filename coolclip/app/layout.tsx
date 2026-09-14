import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
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

export const viewport: Viewport = {
  themeColor: "#6E8F7E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://coolclip.nl"),
  title: {
    default: "CoolClip | De klembare mini-airco voor backpackers & avonturiers",
    template: "%s | CoolClip",
  },
  description:
    "Blijf koel in broeierige hostels, lange nachtbussen en benauwde tenten met CoolClip. De compacte, klembare mini-koeler met 8 uur batterijduur en fluisterstille werking (<35dB).",
  keywords: [
    "CoolClip",
    "mini airco backpacken",
    "klembare koeler",
    "reiskoeler",
    "draagbare ventilator hostel",
    "nachtbus koeling",
    "patagonia style outdoor gear",
    "backpacking gadget",
  ],
  authors: [{ name: "CoolClip Outdoor Gear" }],
  creator: "CoolClip",
  publisher: "CoolClip",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CoolClip — For Backpackers & Adventurers",
    description:
      "Directe verkoeling op je gear. 8 uur batterij, heavy-duty clip en fluisterstil (<35dB). Gebouwd voor tropische hostels en lange reizen.",
    url: "https://coolclip.nl",
    siteName: "CoolClip",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CoolClip mini-airco geklemd op een backpack rugzak",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CoolClip | Klembare mini-airco voor backpackers",
    description:
      "Directe verkoeling op je gear. 8 uur batterij & fluisterstil (<35dB). Unieke koeler voor hostels, bussen en tenten.",
    images: ["/og-image.jpg"],
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
      className={`${spaceGrotesk.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-[#F4F3ED] text-[#1A1A1A] font-sans">
        {children}
      </body>
    </html>
  );
}
