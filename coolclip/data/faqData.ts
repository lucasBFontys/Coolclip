export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: "faq-1",
    question: "Hoe lang gaat de batterij van CoolClip mee op één laadbeurt?",
    answer:
      "CoolClip beschikt over een 4000 mAh lithium-ion batterij. Op de Eco Breeze stand gaat de batterij tot wel 8 uur mee — precies genoeg voor een volledige nacht in het hostel. Op de Turbo Chill stand levert hij 3 uur maximale koeling. Opladen duurt slechts 90 minuten via de meegeleverde USB-C kabel (en kan prima via je powerbank).",
  },
  {
    id: "faq-2",
    question: "Is CoolClip geschikt en toegestaan in het vliegtuig (handbagage)?",
    answer:
      "Ja! CoolClip voldoet volledig aan de IATA-richtlijnen voor lithiumbatterijen onder de 100Wh. Je mag CoolClip zonder problemen meenemen in je handbagage of dagrugzak tijdens al je vluchten.",
  },
  {
    id: "faq-3",
    question: "Hoe krachtig is de klem op verschillende oppervlakken (stapelbed, rugzak, tent)?",
    answer:
      "De heavy-duty klem is gemaakt van slagvast recycled polymer met een rubberized anti-slip binnenlaag. Hij heeft een flexibele spanwijdte tot 45 mm en klemt rotsvast op houten en stalen stapelbed frames, dikke rugzak schouderbanden, tafelranden en tentstokken.",
  },
  {
    id: "faq-4",
    question: "Maakt CoolClip veel geluid als ik in een hostel slaapzaal lig?",
    answer:
      "Nee, absoluut niet. CoolClip produceert op de laagste stand minder dan 35 dB geluid (stiller dan een zacht gefluister). De borstelloze motor en aerodynamische bladen zorgen voor een constante, rustgevende luchtstroom zonder dat je kamergenoten er last van hebben.",
  },
  {
    id: "faq-5",
    question: "Is CoolClip waterbestendig tegen regen en zweet tijdens het hiken?",
    answer:
      "Ja, CoolClip is IPX4 gecertificeerd spatwaterdicht. Dit betekent dat hij bestand is tegen heftige zweetdruppels, een onverwachte tropische regenbui of opsattend water tijdens het varen. We raden af om hem volledig onder water te dompelen.",
  },
  {
    id: "faq-6",
    question: "Wanneer wordt mijn pre-order van CoolClip geleverd?",
    answer:
      "De eerste pre-order batch wordt verwacht geleverd te worden vlak voor de zomer van 2026. Je ontvangt direct na je bestelling een track & trace uitnodiging en regelmatige voortgangsupdates over het productieproces.",
  },
];
