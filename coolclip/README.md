# CoolClip — Jouw verkoeling, waar je ook gaat

Version 2 of the **CoolClip** website built in Next.js 14 (App Router, TypeScript) with Tailwind CSS v4 and Google Fonts (`Space Grotesk`, `Inter`, `Space Mono`).

---

## 🏛️ STRATEGISCHE BESLISSING: ONE-PAGER VS MULTI-PAGE

Voor CoolClip (momenteel 1 flagship product) is gekozen voor een **HYBRIDE MULTI-PAGE READY ONE-PAGER ARCHITECTUUR**:

1. **Direct-to-consumer conversie**: Een lineaire, hoog-converterende landing page op `/` met de volledige trechter (geïnspireerd op YETI productpagina's en Nomatic landing pages).
2. **Schaalbaarheid naar de toekomst**: Opgebouwd met een modulaire Next.js 14 App Router structuur en gescheiden datamodellen (`/data`), waardoor het project in de toekomst moeiteloos uitgebreid kan worden met sub-routes (`/storie`, `/packlist`, `/products/coolclip-pro`) zonder bestaande code te herstructureren.

---

## 🎯 Merkidentiteit & Kleuren

- **Logo**: Witte of zwarte vetgedrukte "C" wordmark met een 6-puntige sneeuwvlok (`❄`) in de opening rechtsboven (zie [components/Logo.tsx](file:///c:/Users/lucas/OneDrive/Documents/DM%20Minnor/Coolclip/coolclip/components/Logo.tsx)).
- **Tagline**: *"Jouw verkoeling, waar je ook gaat"*
- **Kleurenpalet**:
  - `Sage Green` (primair): `#6E8F7E`
  - `Warm Beige` (secundair): `#C8C1AE`
  - `Off-White` (achtergrond): `#F4F3ED`
  - `Near-Black` (tekst/accenten): `#1A1A1A`
- **Typografie**:
  - `Space Grotesk` (Koppen)
  - `Inter` (Bodytekst)
  - `Space Mono` (Monospace accenten voor badges, specificaties & cijfers)

---

## 🌟 Benchmark-referenties (8 Merk-inspiraties)
1. **YETI**: Minimalistische presentatie & activiteit-filtering in de gebruikssituaties.
2. **Cotopaxi**: Speelse merkuitstraling en sterke verweving van merkverhaal.
3. **Patagonia**: Duurzaamheids- & reparatie-waarden door de hele site heen.
4. **Nomatic**: Strakke kleurscheiding, "no-fluff" tone-of-voice en ademruimte.
5. **H+I Adventures**: Statistiekenbalk met Space Mono cijfers direct onder de hero.
6. **Sage Outdoor Adventures**: Vertrouwenssignalen boven de vouw + vergelijkingstabel.
7. **Vita Travel**: Rustige editorial lay-out met veel witruimte.
8. **Oregon Outdoor Alliance**: Missie- & communitygedreven presentatie.

---

## 🧠 7 Cialdini Overtuigingsprincipes
1. **Wederkerigheid**: Gratis "Ultieme Backpacker Packlist 2026 (PDF)" download.
2. **Commitment & Consistentie**: Interactive "Tropen Hitte-check" quiz.
3. **Sociale Bewijskracht**: Verifieerbare backpacker quotes met locatietags.
4. **Autoriteit**: Technische specificatie- & vergelijkingstabel.
5. **Sympathie**: Oprichtersverhaal ("Geboren in een snikhete nachtbus in Ha Giang").
6. **Schaarste**: Batch #1 voorraad-ticker ("Nog 42 stuks beschikbaar").
7. **Eenheid**: `#CoolClipAdventurers` community positionering.

---

## 🚀 Dev Commands

```bash
# Start development server
npm run dev

# Build production bundle
npm run build
```
