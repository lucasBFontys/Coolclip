/**
 * ============================================================================
 * STRATEGISCHE ARCHITECTUURBESLISSING: ONE-PAGER VS MULTI-PAGE
 * ============================================================================
 * Voor CoolClip (momenteel 1 flagship product) is gekozen voor een
 * HYBRIDE MULTI-PAGE READY ONE-PAGER ARCHITECTUUR:
 * 
 * 1. direct-to-consumer conversie: Een lineaire, hoog-converterende landing page op '/'
 *    met de volledige trechter (geïnspireerd op YETI productpagina's en Nomatic landing pages).
 * 2. schaalbaarheid naar de toekomst: Opgebouwd met een modulaire Next.js 14 App Router
 *    structuur en gescheiden datamodellen (/data), waardoor het project in de toekomst
 *    moeiteloos uitgebreid kan worden met sub-routes (/storie, /packlist, /products/coolclip-pro)
 *    zonder bestaande code te herstructureren.
 * ============================================================================
 */

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProductShowcase from "../components/ProductShowcase";
import HeatCheckQuiz from "../components/HeatCheckQuiz";
import ProblemSection from "../components/ProblemSection";
import UseCases from "../components/UseCases";
import BrandStory from "../components/BrandStory";
import SpecsSection from "../components/SpecsSection";
import PacklistLeadMagnet from "../components/PacklistLeadMagnet";
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
      "https://coolclip.nl/product-showcase.jpg"
    ],
    description:
      "CoolClip is de klembare 185g mini-airco voor backpackers die 8 uur lang ijskoele lucht levert in snikhete hostels, bussen en tenten. Jouw verkoeling, waar je ook gaat.",
    sku: "COOLCLIP-V2-RUGGED",
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
      ratingValue: "4.9",
      reviewCount: "1400",
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
    <div className="flex flex-col min-h-screen bg-[#F7F6F0] text-[#121815]">
      
      {/* Inject JSON-LD Structured Data for Google & AI Search Engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Ambient Nature Video Hero Section */}
        <Hero />

        {/* Product Kit Showcase Section (Uploaded Flat-Lay Bundle Photo) */}
        <ProductShowcase />

        {/* Cialdini #2: Commitment & Consistency Quiz */}
        <HeatCheckQuiz />

        {/* Problem Recognition */}
        <ProblemSection />

        {/* YETI Benchmark: Use Cases Activity Filter */}
        <UseCases />

        {/* Patagonia / Cotopaxi Style Brand Story (Cialdini #5 Liking & #7 Unity) */}
        <BrandStory />

        {/* Sage Outdoor & Nomatic Benchmark Specs + Comparison Table (Cialdini #4 Authority) */}
        <SpecsSection />

        {/* Cialdini #1: Reciprocity Packlist Lead Magnet Download */}
        <PacklistLeadMagnet />

        {/* Cialdini #3: Social Proof Testimonials */}
        <SocialProof />

        {/* Cialdini #6: Scarcity Pre-Order CTA Teaser */}
        <CtaTeaser />

        {/* FAQ Section */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}
