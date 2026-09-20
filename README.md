# CoolClip - Website

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![Google Antigravity](https://img.shields.io/badge/Google_Antigravity-4285F4?style=for-the-badge&logo=google&logoColor=white)

Een moderne, responsive productwebsite voor **CoolClip** — een klembare mini-airco/koeler voor backpackers en avontuurlijke reizigers. Ontwikkeld met **Next.js** en **Tailwind CSS**, gebouwd met behulp van **Google Antigravity**.

## Projectbeschrijving

Dit project is de officiële productwebsite van CoolClip, ontwikkeld als onderdeel van een minor Digital Marketing. Doel van de site is bezoekers te overtuigen van de meerwaarde van CoolClip via een heldere merkpositionering, feitelijke productinformatie en een sterke visuele identiteit, opgebouwd volgens het AIDA-model en onderbouwd met de 7 overtuigingsprincipes van Cialdini.

De site bevat de volgende hoofdonderdelen:

* **Hero:** Sterke propositie met tagline "Jouw verkoeling, waar je ook gaat" en productvisual
* **Probleem/herkenning:** Herkenbare situaties van oververhitting tijdens het reizen
* **Hoe het werkt:** Uitleg van het clip-systeem, batterijduur en geluidsniveau
* **Gebruikssituaties:** Hostel, bus/trein, onderweg
* **Specificaties:** Feitelijke productdata (gewicht, dB, batterijduur, waterbestendigheid)
* **Social proof:** Testimonials van (toekomstige) gebruikers
* **FAQ:** Veelgestelde vragen, geoptimaliseerd voor zoekmachines én AI-antwoordmachines (AEO)

## Live demo

De website is live te bekijken via Vercel:
🔗 [https://coolclip.vercel.app](https://coolclip.vercel.app) *(placeholder — bijwerken zodra gedeployed)*

## Merkidentiteit

| Element | Waarde |
|---|---|
| Merknaam | CoolClip |
| Tagline | Jouw verkoeling, waar je ook gaat |
| Primaire kleur | Sage green `#6E8F7E` |
| Secundaire kleur | Warm beige `#C8C1AE` |
| Achtergrond | Off-white `#F4F3ED` |
| Tekstkleur | Near-black `#1A1A1A` |
| Koppen-font | Space Grotesk |
| Body-font | Inter |
| Accentfont | Space Mono (labels, specificaties, badges) |
| Logo | Witte "C"-wordmark met sneeuwvlok-icoon |

## Technische stack

* **Framework:** Next.js 14 (App Router)
* **Taal:** TypeScript
* **Styling:** Tailwind CSS
* **UI-componenten:** shadcn/ui (accordion, buttons)
* **Functionaliteit:** React 18
* **Hosting:** Vercel (automatische deploy vanaf `main`)

## Gebruik van Google Antigravity

Bij de ontwikkeling is Google Antigravity ingezet om de starter-versie en latere iteraties van de site op te zetten, op basis van een voorafgaande benchmarkanalyse van 8 referentiewebsites (o.a. YETI, Patagonia, Cotopaxi, Nomatic). De volledige prompts die hiervoor zijn gebruikt, inclusief merkrichtlijnen, kleurenpalet, overtuigingsprincipes en SEO/AEO-eisen, zijn te vinden in [prompts.md](./prompts.md).

### Voorbeelden van gebruikte prompt-onderdelen

* Rolinstructie: "Je bent een award-winnende senior webdeveloper en UI/UX-designer..."
* Merkrichtlijnen: kleurenpalet, typografie, logo-specificatie
* Verwerking van de 7 overtuigingsprincipes van Cialdini
* SEO- en AEO-eisen (structured data, `llms.txt`, citeerbare zinnen per sectie)

## Navigatie

* `/` – Homepagina met alle kernsecties (one-pager opzet, zie toelichting hieronder)

*Toelichting structuurkeuze: er is gekozen voor een one-pager omdat CoolClip momenteel één product voert met een lineaire funnel. De route-structuur in `/app` is zo opgezet dat uitbreiding naar losse productpagina's of een bloguitgave later eenvoudig te realiseren is.*

## Installatie en ontwikkeling

1. **Clone de repository**

```bash
git clone https://github.com/lucasBFontys/Coolclip.git
cd Coolclip
```

2. **Installeer dependencies**

```bash
npm install
```

3. **Start de development server**

```bash
npm run dev
```

4. **Open in je browser**
   [http://localhost:3000](http://localhost:3000)

## Scripts

| Script | Beschrijving |
| --- | --- |
| `npm run dev` | Start de development server |
| `npm run build` | Bouw de productieversie |
| `npm start` | Start de productieversie |
| `npm run lint` | Voer ESLint uit |

## Mappenstructuur

```
.
├── app/                # Pagina's en routes (Next.js App Router)
├── components/         # Herbruikbare componenten (Hero, Specs, FAQ, etc.)
├── public/             # Afbeeldingen, logo (SVG) en placeholders
├── styles/             # Tailwind configuratie
├── prompts.md          # Gebruikte Antigravity-prompts
└── ...                 # Overige Next.js bestanden
```

## SEO & AEO

* Metadata API per sectie/pagina (title, description, canonical)
* Open Graph en Twitter Card tags
* JSON-LD structured data: Product schema en FAQPage schema
* `llms.txt` in de root met een feitelijke productsamenvatting voor AI-crawlers
* Elke sectie opent met een directe, citeerbare antwoordzin

## Placeholder content

Deze versie van de site gebruikt placeholder-afbeeldingen voor productfoto's en sfeerbeelden. Deze zijn herkenbaar via de alt-tekst (bijvoorbeeld `PLACEHOLDER: CoolClip clip aan rugzak in hostel-setting`) en dienen vervangen te worden door echte productfotografie voor livegang. Het logo zelf is **geen** placeholder.

## Veelgestelde vragen (FAQ)

### De site start niet na `npm install`

Controleer of je Node.js v18+ gebruikt. Verwijder eventueel `node_modules` en probeer opnieuw:

```bash
rm -rf node_modules
npm install
```

### Ik krijg een "repo already exists"-foutmelding bij het pushen naar GitHub

Gebruik niet de "Publish Branch"-knop (die maakt altijd een nieuwe repo aan). Koppel in plaats daarvan handmatig via:

```bash
git remote add origin https://github.com/lucasBFontys/Coolclip.git
git push -u origin main
```

## Changelog

### v1.0.0 – Starter-versie

* Basisstructuur opgezet in Next.js met App Router
* Kernonderdelen: hero, probleemherkenning, hoe-het-werkt, gebruikssituaties, specificaties, FAQ, CTA
* Merkidentiteit (kleuren, typografie) geïmplementeerd volgens brandguide
* Gekoppeld aan GitHub voor versiebeheer

### v2.0.0 – Benchmark-gebaseerde uitbreiding

* Ontwerprichting aangescherpt op basis van benchmarkanalyse van 8 referentiewebsites
* Statistiekenbalk en testimonial-sectie toegevoegd
* Logo (C + sneeuwvlok) en tagline "Jouw verkoeling, waar je ook gaat" geïntegreerd
* Accentfont (Space Mono) toegevoegd voor labels en specificaties
* De 7 overtuigingsprincipes van Cialdini concreet verwerkt in de site
* SEO- en AEO-optimalisatie (structured data, `llms.txt`)
* Strategische keuze onderbouwd voor one-pager versus multi-page opzet

## Licentie

MIT-licentie – vrij te gebruiken en aan te passen.
