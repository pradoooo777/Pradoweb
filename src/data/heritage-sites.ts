export interface HeritageSite {
  id: string;
  name: string;
  location: string;
  description: string;
  imageUrl: string;
  category: string;
  level: number;
  xp: number;
  rarity: "Common" | "Rare" | "Epic" | "Legendary";
  highlights: string[];
  bestTime: string;
  travelTip: string;
}

export const heritageSites: HeritageSite[] = [
  {
    id: "hundred-islands",
    name: "Hundred Islands National Park",
    location: "Alaminos, Pangasinan",
    description:
      "A cluster of 124 limestone islets offering island hopping, snorkeling, and pristine beaches across Lingayen Gulf.",
    imageUrl: "/images/hundred-islands.svg",
    category: "Natural Heritage",
    level: 1,
    xp: 250,
    rarity: "Legendary",
    highlights: [
      "Island-hopping across limestone islets in Lingayen Gulf",
      "Snorkeling and kayaking around clear coastal waters",
      "Sunrise views from Governor Island lookout points",
    ],
    bestTime: "November to May, when seas are calmer",
    travelTip: "Start early from Lucap Wharf in Alaminos to catch the first boat trips.",
  },
  {
    id: "bolinao-lighthouse",
    name: "Cape Bolinao Lighthouse",
    location: "Bolinao, Pangasinan",
    description:
      "One of the tallest and oldest lighthouses in the Philippines, guiding mariners since 1905 along the West Philippine Sea.",
    imageUrl: "/images/bolinao-lighthouse.svg",
    category: "Historic Landmark",
    level: 2,
    xp: 180,
    rarity: "Epic",
    highlights: [
      "Historic 1905 lighthouse overlooking the West Philippine Sea",
      "Panoramic Cape Bolinao views after a short uphill walk",
      "Nearby rock formations and coastal heritage stops",
    ],
    bestTime: "Late afternoon for cooler weather and golden-hour photos",
    travelTip: "Pair the lighthouse visit with Bolinao's beaches and the Enchanted Cave.",
  },
  {
    id: "balungao-hot-spring",
    name: "Balungao Hot Spring",
    location: "Balungao, Pangasinan",
    description:
      "A rejuvenating geothermal spring nestled at the foot of Balungao Hill, popular for wellness and nature retreats.",
    imageUrl: "/images/balungao-hot-spring.svg",
    category: "Wellness & Nature",
    level: 3,
    xp: 120,
    rarity: "Rare",
    highlights: [
      "Mineral-rich hot spring pools for rest and recovery",
      "Hillside scenery at the foot of Balungao Hill",
      "A quieter inland counterpoint to Pangasinan's coast",
    ],
    bestTime: "Weekday mornings for a calmer soak",
    travelTip: "Bring swimwear and allow extra time if combining with a hill hike.",
  },
];

export function getHeritageSite(id: string) {
  return heritageSites.find((site) => site.id === id);
}
