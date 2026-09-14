import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProblemSection from "../components/ProblemSection";
import HowItWorks from "../components/HowItWorks";
import UseCases from "../components/UseCases";
import SpecsSection from "../components/SpecsSection";
import SocialProof from "../components/SocialProof";
import CtaTeaser from "../components/CtaTeaser";
import FaqSection from "../components/FaqSection";
import { faqData } from "../data/faqData";
import Footer from "../components/Footer";

export default function Home() {
  // Structured Data (JSON-LD): Product Schema
  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "CoolClip Mini Airco",
    image: [
      "https://coolclip.nl/og-image.jpg"
    ],
    description:
      "Compacte, klembare mini-airco voor backpackers en avontuurlijke reizigers met 8 uur batterijduur en fluisterstille werking (<35dB).",
    sku: "COOLCLIP-V1-RUGGED",
    brand: {
      "@type": "Brand",
      name: "CoolClip",
    },
    offers: {
      "@type": "Offer",
      url: "https://coolclip.nl/#pre-order",
      priceCurrency: "EUR",
      price: "49.95",
      priceValidUntil: "2026-12-31",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/PreOrder",
      seller: {
        "@type": "Organization",
        name: "CoolClip Outdoor Gear",
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "14",
    },
  };

  // Structured Data (JSON-LD): FAQPage Schema
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F4F3ED] text-[#1A1A1A]">
      
      {/* Inject JSON-LD Structured Data for Google Search SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Probleem / Herkenning */}
        <ProblemSection />

        {/* Section 3: Hoe het werkt */}
        <HowItWorks />

        {/* Section 4: Gebruikssituaties */}
        <UseCases />

        {/* Section 5: Specificaties */}
        <SpecsSection />

        {/* Section 6: Social Proof */}
        <SocialProof />

        {/* Section 7: CTA / Shop Teaser */}
        <CtaTeaser />

        {/* Section 8: FAQ */}
        <FaqSection />
      </main>

      {/* Section 9: Footer */}
      <Footer />

    </div>
  );
}
