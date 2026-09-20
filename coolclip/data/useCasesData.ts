export interface UseCaseItem {
  id: string;
  category: "all" | "hostel" | "transport" | "trekking" | "camping";
  categoryLabel: string;
  title: string;
  location: string;
  description: string;
  stat: string;
  image: string;
}

export const useCasesData: UseCaseItem[] = [
  {
    id: "usecase-1",
    category: "hostel",
    categoryLabel: "Hostels & Slaapzalen",
    title: "Klem direct aan je stapelbed",
    location: "Bangkok, Thailand — Dorm 4B",
    description:
      "Staat de hostel airco op 26°C of piept de plafondventilator zachtjes zonder effect? Klem CoolClip aan het frame van je stapelbed en richt de ijskoele bries direct op je kussen.",
    stat: "Veldtest: 8 uur continu koeling bij 34°C kamertemperatuur",
    image: "https://placehold.co/800x600/1A1A1A/C8C1AE/png?text=CoolClip+Clamped+To+Hostel+Bunk+Bed",
  },
  {
    id: "usecase-2",
    category: "transport",
    categoryLabel: "Nachtbussen & Treinen",
    title: "Overleef 14-uur sleeper bussen",
    location: "Ha Giang naar Hanoi — Sleeper Bus",
    description:
      "Ramen kunnen niet open en de bus-airco valt halverwege de nacht uit. CoolClip klemt op de stoelleuning of opbergzak voor je en houdt je fris zonder hinderlijk geluid.",
    stat: "Handbagage goedgekeurd op alle airline vluchten",
    image: "https://placehold.co/800x600/1A1A1A/C8C1AE/png?text=CoolClip+In+Sleeper+Bus+Seat",
  },
  {
    id: "usecase-3",
    category: "trekking",
    categoryLabel: "Trekking & Tropen",
    title: "Schouderband ventilatie op de trail",
    location: "Sapa Rijstvelden & Jungle Hike",
    description:
      "Tijdens zware klimtochten in hoge luchtvochtigheid klem je CoolClip op de schouderband van je rugzak. Richt de luchtstroom naar je nek voor directe afkoeling.",
    stat: "IPX4 spatwaterdicht tegen zweet & tropische regen",
    image: "https://placehold.co/800x600/1A1A1A/C8C1AE/png?text=CoolClip+On+Backpack+Shoulder+Strap",
  },
  {
    id: "usecase-4",
    category: "camping",
    categoryLabel: "Festivals & Camping",
    title: "Geen sauna-effect meer in je tent",
    location: "Zuid-Frankrijk / Festivalterrein",
    description:
      "Zodra de ochtendzon op je tent brandt, verandert deze in een sauna. Klem CoolClip in het noklusje van de binnentent om de hete lucht direct af te voeren.",
    stat: "Ultralicht 185g gewicht belast tentdoek niet",
    image: "https://placehold.co/800x600/1A1A1A/C8C1AE/png?text=CoolClip+Hanging+In+Tent+Nook",
  },
];
