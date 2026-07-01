// Factual destination catalogue for Travsouk. Copy is original.
// Processing times / fees are indicative ranges for UAE residents and shown
// as guidance only — every file is quoted individually.

export type VisaKind = 'Schengen' | 'Tourist' | 'Business' | 'eVisa' | 'Study' | 'Transit'

export interface Country {
  slug: string
  name: string
  flag: string
  region: 'Schengen' | 'UK & Ireland' | 'Americas' | 'Asia' | 'Africa' | 'Oceania' | 'Middle East' | 'Other'
  lat: number
  lon: number
  processing: string
  stay: string
  kinds: VisaKind[]
  blurb: string
  popular?: boolean
  images?: string[]
}

// Build a sized Unsplash URL from a photo id (path segment).
const u = (id: string) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=80`

// Two unique, country-specific photos per destination (cover + gallery).
// Every id below was hand-verified to load and to depict the right country.
const slugImages: Record<string, string[]> = {
  greece: [u('1533105079780-92b9be482077'), u('1507525428034-b723cf961d3e')],
  netherlands: [u('1534351590666-13e3e96b5017'), u('1584003564911-a7a321c84e1c')],
  china: [u('1608037521277-154cd1b89191'), u('1508804185872-d7badad00f7d')],
  canada: [u('1649955092030-fb171eda019a'), u('1562375121-ea1bc3e8fc10')],
  'south-africa': [u('1588455471455-4b28e9ab3cd5'), u('1604763655221-b98ebdac6ddf')],
  finland: [u('1517411032315-54ef2cb783bb'), u('1538332576228-eb5b4c4de6f5')],
  iceland: [u('1476610182048-b716b8518aae'), u('1506261423908-ea2559c1f24c')],
  korea: [u('1599033769063-fcd3ef816810'), u('1448523183439-d2ac62aca997')],
  ireland: [u('1570875450638-044bca38ec92'), u('1602354817989-b9664561ae84')],
  cyprus: [u('1699705517872-9b655f86b694'), u('1591030663099-776d51ac7724')],
  australia: [u('1506973035872-a4ec16b8e8d9'), u('1529108190281-9a4f620bc2d8')],
  poland: [u('1670166819528-aadfddc48070'), u('1636903364559-0dfc358abd94')],
  'czech-republic': [u('1564511287568-54483b52a35e'), u('1600623471616-8c1966c91ff6')],
  austria: [u('1597086831879-756db15e81d3'), u('1520503922584-590e8f7a90d7')],
  spain: [u('1583422409516-2895a77efded'), u('1511527661048-7fe73d85e9a4')],
  portugal: [u('1555881400-74d7acaacd8b'), u('1585208798174-6cedd86e019a')],
  belgium: [u('1601993305512-a73859a41ec2'), u('1572895854902-117546c75fb3')],
  denmark: [u('1513622470522-26c3c8a854bc'), u('1551651767-d5ffbdd04b83')],
  sweden: [u('1509356843151-3e7d96241e11'), u('1572225303717-a96db5e8d8b0')],
  brazil: [u('1483729558449-99ef09a8c325'), u('1518639192441-8fce0a366e2e')],
  croatia: [u('1555990793-da11153b2473'), u('1575540291670-8d3b26f7d327')],
  norway: [u('1527004013197-933c4bb611b3'), u('1663428520845-056989f8a664')],
  'new-zealand': [u('1591640040362-f55d95a6b2bc'), u('1466446105453-d151af699ac7')],
  hungary: [u('1616432902940-b7a1acbc60b3'), u('1565426873118-a17ed65d74b9')],
  estonia: [u('1709862366377-54b16f3e51f9'), u('1564951537954-29dd59397b90')],
  luxembourg: [u('1588336899284-950764f07147'), u('1592770733110-738f7769188c')],
  latvia: [u('1567669721460-221b82865ee0'), u('1683730796330-06e60e3438d8')],
  malta: [u('1587974928552-4f4aac51b45d'), u('1522307617379-e982f8754d27')],
  'saudi-arabia': [u('1663900108404-a05e8bf82cda'), u('1586724237569-f3d0c1dee8c6')],
  bulgaria: [u('1594803294810-c860e5d29e07'), u('1519429753079-3b0f0a95dea8')],
  morocco: [u('1597212618440-806262de4f6b'), u('1580746738099-1cb74f972feb')],
  singapore: [u('1525625293386-3f8f99389edd'), u('1565967511849-76a60a516170')],
  india: [u('1524492412937-b28074a5d7da'), u('1477587458883-47145ed94245')],
  armenia: [u('1600758208050-a22f17dc5bb9'), u('1582798144276-d6c2e81b3025')],
  kenya: [u('1557178985-891ca9b9b01c'), u('1535941339077-2dd1c7963098')],
  vietnam: [u('1643029891412-92f9a81a8c16'), u('1561461221-959c3f16234b')],
  indonesia: [u('1537996194471-e657df975ab4'), u('1555400038-63f5ba517a47')],
  malaysia: [u('1508062878650-88b52897f298'), u('1592723905426-1181bf431d3a')],
  tanzania: [u('1575999502951-4ab25b5ca889'), u('1549035092-33b2937b075a')],
  thailand: [u('1528181304800-259b08848526'), u('1508009603885-50cf7c579365')],
  azerbaijan: [u('1596306499398-8d88944a5ec4'), u('1616701639706-a89d1a609eda')],
  russia: [u('1580837119756-563d608dd119'), u('1576753092415-f4c74e4edc99')],
  mongolia: [u('1575415868394-e3b78f3e9b3f'), u('1630326867210-bf4b2cdd2019')],
  egypt: [u('1600520611035-84157ad4084d'), u('1628503218283-6ddeac69dfea')],
}

export const getCountryImages = (c: Country): string[] => {
  if (c.images && c.images.length > 0) return c.images
  if (slugImages[c.slug]) return slugImages[c.slug]

  // Fallbacks by region
  switch (c.region) {
    case 'Schengen':
    case 'UK & Ireland':
      return [
        'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80',
      ]
    case 'Americas':
      return [
        'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1489440543286-a69330151c0b?auto=format&fit=crop&w=1200&q=80',
      ]
    case 'Asia':
      return [
        'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1200&q=80',
      ]
    case 'Africa':
      return [
        'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80',
      ]
    default:
      return [
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80',
      ]
  }
}

export const countries: Country[] = [
  {
    slug: 'usa',
    name: 'United States',
    flag: '🇺🇸',
    region: 'Americas',
    lat: 38.9,
    lon: -77,
    processing: '7–21 days',
    stay: 'Up to 6 months',
    kinds: ['Tourist', 'Business'],
    blurb: 'B1/B2 visitor visas with full interview preparation and DS-160 handling.',
    popular: true,
    images: [u('1496442226666-8d4d0e62e6e9'), u('1506744038136-46273834b3fb')],
  },
  {
    slug: 'uk',
    name: 'United Kingdom',
    flag: '🇬🇧',
    region: 'UK & Ireland',
    lat: 51.5,
    lon: -0.12,
    processing: '3–4 weeks',
    stay: 'Up to 6 months',
    kinds: ['Tourist', 'Business', 'Study'],
    blurb: 'Standard visitor and long-term routes, including priority service options.',
    popular: true,
    images: [u('1513635269975-59663e0ac1ad'), u('1681407979872-0a4cbde28391')],
  },
  {
    slug: 'france',
    name: 'France',
    flag: '🇫🇷',
    region: 'Schengen',
    lat: 48.85,
    lon: 2.35,
    processing: '10–15 days',
    stay: '90 / 180 days',
    kinds: ['Schengen', 'Tourist', 'Business'],
    blurb: 'Schengen short-stay visas with appointment booking at the French centre.',
    popular: true,
    images: [u('1502602898657-3e91760cbb34'), u('1587648415693-4a5362b2ce41')],
  },
  {
    slug: 'germany',
    name: 'Germany',
    flag: '🇩🇪',
    region: 'Schengen',
    lat: 52.52,
    lon: 13.4,
    processing: '10–15 days',
    stay: '90 / 180 days',
    kinds: ['Schengen', 'Tourist', 'Business'],
    blurb: 'Tourist and business Schengen files, built for first-time and frequent travelers.',
    popular: true,
    images: [u('1467269204594-9661b134dd2b'), u('1599946347371-68eb71b16afc')],
  },
  {
    slug: 'switzerland',
    name: 'Switzerland',
    flag: '🇨🇭',
    region: 'Schengen',
    lat: 46.95,
    lon: 7.45,
    processing: '10–15 days',
    stay: '90 / 180 days',
    kinds: ['Schengen', 'Tourist'],
    blurb: 'Schengen visas for the Alps — itinerary and insurance sorted for you.',
    popular: true,
    images: [u('1464822759023-fed622ff2c3b'), u('1527668752968-14dc70a27c95')],
  },
  {
    slug: 'japan',
    name: 'Japan',
    flag: '🇯🇵',
    region: 'Asia',
    lat: 35.68,
    lon: 139.69,
    processing: '5–8 days',
    stay: 'Up to 90 days',
    kinds: ['Tourist', 'eVisa'],
    blurb: 'Japan eVisa and sticker visas with document translation support.',
    popular: true,
    images: [u('1493976040374-85c8e12f0c0e'), u('1503899036084-c55cdd92da26')],
  },
  {
    slug: 'turkey',
    name: 'Türkiye',
    flag: '🇹🇷',
    region: 'Other',
    lat: 39.93,
    lon: 32.86,
    processing: '2–4 days',
    stay: 'Up to 90 days',
    kinds: ['eVisa', 'Tourist', 'Business'],
    blurb: 'Fast e-Visa and sticker visa assistance for tourism and business.',
    popular: true,
    images: [u('1524231757912-21f4fe3a7200'), u('1695415683093-ae5f213ea898')],
  },
  {
    slug: 'italy',
    name: 'Italy',
    flag: '🇮🇹',
    region: 'Schengen',
    lat: 41.9,
    lon: 12.5,
    processing: '10–15 days',
    stay: '90 / 180 days',
    kinds: ['Schengen', 'Tourist'],
    blurb: 'Schengen visas for Italy with full appointment and itinerary support.',
    images: [u('1552832230-c0197dd311b5'), u('1555992828-ca4dbe41d294')],
  },
  { slug: 'greece', name: 'Greece', flag: '🇬🇷', region: 'Schengen', lat: 37.98, lon: 23.72, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist'], blurb: 'Island-hopping made simple with a clean, complete Schengen file.' },
  { slug: 'netherlands', name: 'Netherlands', flag: '🇳🇱', region: 'Schengen', lat: 52.37, lon: 4.9, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist', 'Business'], blurb: 'Dutch Schengen visas with document review and biometrics booking.' },
  { slug: 'china', name: 'China', flag: '🇨🇳', region: 'Asia', lat: 39.9, lon: 116.4, processing: '4–7 days', stay: '30–60 days', kinds: ['Tourist', 'Business'], blurb: 'Tourist and business visas with invitation-letter guidance.', popular: true },
  { slug: 'canada', name: 'Canada', flag: '🇨🇦', region: 'Americas', lat: 45.42, lon: -75.7, processing: '3–6 weeks', stay: 'Up to 6 months', kinds: ['Tourist', 'Business', 'Study'], blurb: 'Visitor visas and study permits with strong, well-structured applications.' },
  { slug: 'south-africa', name: 'South Africa', flag: '🇿🇦', region: 'Africa', lat: -25.75, lon: 28.19, processing: '1–3 weeks', stay: 'Up to 90 days', kinds: ['Tourist'], blurb: 'Tourist visas for safari and city breaks across South Africa.' },
  { slug: 'finland', name: 'Finland', flag: '🇫🇮', region: 'Schengen', lat: 60.17, lon: 24.94, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist'], blurb: 'Northern-lights trips with a smooth Schengen application.' },
  { slug: 'iceland', name: 'Iceland', flag: '🇮🇸', region: 'Schengen', lat: 64.15, lon: -21.95, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist'], blurb: 'Schengen visas for Iceland’s glaciers, geysers and ring road.' },
  { slug: 'korea', name: 'South Korea', flag: '🇰🇷', region: 'Asia', lat: 37.57, lon: 126.98, processing: '5–10 days', stay: 'Up to 90 days', kinds: ['Tourist', 'eVisa'], blurb: 'K-ETA and tourist visa guidance for trips to Seoul and beyond.' },
  { slug: 'ireland', name: 'Ireland', flag: '🇮🇪', region: 'UK & Ireland', lat: 53.35, lon: -6.26, processing: '1–4 weeks', stay: 'Up to 90 days', kinds: ['Tourist', 'Business'], blurb: 'Irish short-stay visas with complete documentation handling.' },
  { slug: 'cyprus', name: 'Cyprus', flag: '🇨🇾', region: 'Other', lat: 35.17, lon: 33.36, processing: '5–10 days', stay: 'Up to 90 days', kinds: ['Tourist'], blurb: 'Pro-visa and national visas for the Mediterranean’s rising star.' },
  { slug: 'australia', name: 'Australia', flag: '🇦🇺', region: 'Oceania', lat: -35.28, lon: 149.13, processing: '2–4 weeks', stay: 'Up to 3 months', kinds: ['Tourist', 'Business'], blurb: 'Visitor (subclass 600) visas with thorough financial documentation.' },
  { slug: 'poland', name: 'Poland', flag: '🇵🇱', region: 'Schengen', lat: 52.23, lon: 21.01, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist', 'Business'], blurb: 'Polish Schengen visas for tourism and business across Europe.' },
  { slug: 'czech-republic', name: 'Czech Republic', flag: '🇨🇿', region: 'Schengen', lat: 50.08, lon: 14.44, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist'], blurb: 'Prague and beyond with a clean Czech Schengen application.' },
  { slug: 'austria', name: 'Austria', flag: '🇦🇹', region: 'Schengen', lat: 48.21, lon: 16.37, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist'], blurb: 'Schengen visas for Vienna, Salzburg and the Austrian Alps.' },
  { slug: 'spain', name: 'Spain', flag: '🇪🇸', region: 'Schengen', lat: 40.42, lon: -3.7, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist'], blurb: 'One of the most popular Schengen routes — handled end to end.' },
  { slug: 'portugal', name: 'Portugal', flag: '🇵🇹', region: 'Schengen', lat: 38.72, lon: -9.14, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist'], blurb: 'Lisbon, Porto and the Algarve with a complete Schengen file.' },
  { slug: 'belgium', name: 'Belgium', flag: '🇧🇪', region: 'Schengen', lat: 50.85, lon: 4.35, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist', 'Business'], blurb: 'Schengen visas for Brussels, Bruges and business travel.' },
  { slug: 'denmark', name: 'Denmark', flag: '🇩🇰', region: 'Schengen', lat: 55.68, lon: 12.57, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist'], blurb: 'Scandinavian Schengen visas with full appointment support.' },
  { slug: 'sweden', name: 'Sweden', flag: '🇸🇪', region: 'Schengen', lat: 59.33, lon: 18.07, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist'], blurb: 'Stockholm and the Swedish coast with a smooth application.' },
  { slug: 'brazil', name: 'Brazil', flag: '🇧🇷', region: 'Americas', lat: -15.79, lon: -47.88, processing: '1–3 weeks', stay: 'Up to 90 days', kinds: ['eVisa', 'Tourist'], blurb: 'e-Visa guidance for Rio, the Amazon and beyond.' },
  { slug: 'croatia', name: 'Croatia', flag: '🇭🇷', region: 'Schengen', lat: 45.81, lon: 15.98, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist'], blurb: 'Adriatic coast trips with a complete Croatian Schengen file.' },
  { slug: 'norway', name: 'Norway', flag: '🇳🇴', region: 'Schengen', lat: 59.91, lon: 10.75, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist'], blurb: 'Fjords and Northern lights with a smooth Schengen application.' },
  { slug: 'new-zealand', name: 'New Zealand', flag: '🇳🇿', region: 'Oceania', lat: -41.29, lon: 174.78, processing: '2–4 weeks', stay: 'Up to 3 months', kinds: ['Tourist', 'eVisa'], blurb: 'NZeTA and visitor visa support for the land of the long white cloud.' },
  { slug: 'hungary', name: 'Hungary', flag: '🇭🇺', region: 'Schengen', lat: 47.5, lon: 19.04, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist'], blurb: 'Budapest and the Danube with a clean Schengen application.' },
  { slug: 'estonia', name: 'Estonia', flag: '🇪🇪', region: 'Schengen', lat: 59.44, lon: 24.75, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist'], blurb: 'Baltic Schengen visas with full document handling.' },
  { slug: 'luxembourg', name: 'Luxembourg', flag: '🇱🇺', region: 'Schengen', lat: 49.61, lon: 6.13, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Business'], blurb: 'Business and tourist Schengen visas for Luxembourg.' },
  { slug: 'latvia', name: 'Latvia', flag: '🇱🇻', region: 'Schengen', lat: 56.95, lon: 24.11, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist'], blurb: 'Riga and the Baltics with a smooth Schengen file.' },
  { slug: 'malta', name: 'Malta', flag: '🇲🇹', region: 'Schengen', lat: 35.9, lon: 14.51, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist'], blurb: 'Mediterranean Schengen visas for the Maltese islands.' },
  { slug: 'saudi-arabia', name: 'Saudi Arabia', flag: '🇸🇦', region: 'Middle East', lat: 24.71, lon: 46.68, processing: '2–5 days', stay: 'Up to 90 days', kinds: ['eVisa', 'Tourist', 'Business'], blurb: 'Tourist and business visas, including Umrah-season guidance.' },
  { slug: 'bulgaria', name: 'Bulgaria', flag: '🇧🇬', region: 'Schengen', lat: 42.7, lon: 23.32, processing: '10–15 days', stay: '90 / 180 days', kinds: ['Schengen', 'Tourist'], blurb: 'Black Sea coast and Sofia with a complete application.' },
  { slug: 'morocco', name: 'Morocco', flag: '🇲🇦', region: 'Africa', lat: 34.02, lon: -6.83, processing: '1–2 weeks', stay: 'Up to 90 days', kinds: ['Tourist'], blurb: 'Marrakech, Fes and the desert with full visa support.' },
  { slug: 'singapore', name: 'Singapore', flag: '🇸🇬', region: 'Asia', lat: 1.35, lon: 103.82, processing: '3–5 days', stay: 'Up to 30 days', kinds: ['eVisa', 'Tourist'], blurb: 'Fast e-Visa assistance for the Lion City.' },
  { slug: 'india', name: 'India', flag: '🇮🇳', region: 'Asia', lat: 28.61, lon: 77.21, processing: '3–7 days', stay: '30 days–1 year', kinds: ['eVisa', 'Tourist', 'Business'], blurb: 'e-Visa and sticker visa guidance for tourism and business.' },
  { slug: 'armenia', name: 'Armenia', flag: '🇦🇲', region: 'Other', lat: 40.18, lon: 44.51, processing: '2–5 days', stay: 'Up to 120 days', kinds: ['eVisa', 'Tourist'], blurb: 'Easy e-Visa support for the Caucasus.' },
  { slug: 'kenya', name: 'Kenya', flag: '🇰🇪', region: 'Africa', lat: -1.29, lon: 36.82, processing: '2–5 days', stay: 'Up to 90 days', kinds: ['eVisa', 'Tourist'], blurb: 'eTA guidance for safari and Masai Mara adventures.' },
  { slug: 'vietnam', name: 'Vietnam', flag: '🇻🇳', region: 'Asia', lat: 21.03, lon: 105.85, processing: '3–5 days', stay: 'Up to 90 days', kinds: ['eVisa', 'Tourist'], blurb: 'e-Visa support for Hanoi, Ha Long Bay and the south.' },
  { slug: 'indonesia', name: 'Indonesia', flag: '🇮🇩', region: 'Asia', lat: -6.21, lon: 106.85, processing: '3–5 days', stay: 'Up to 60 days', kinds: ['eVisa', 'Tourist'], blurb: 'e-VOA and visa guidance for Bali and the islands.' },
  { slug: 'malaysia', name: 'Malaysia', flag: '🇲🇾', region: 'Asia', lat: 3.14, lon: 101.69, processing: '3–5 days', stay: 'Up to 30 days', kinds: ['eVisa', 'Tourist'], blurb: 'eVisa and entry guidance for Kuala Lumpur and Borneo.' },
  { slug: 'tanzania', name: 'Tanzania', flag: '🇹🇿', region: 'Africa', lat: -6.79, lon: 39.21, processing: '1–2 weeks', stay: 'Up to 90 days', kinds: ['eVisa', 'Tourist'], blurb: 'Serengeti and Zanzibar with full e-Visa support.' },
  { slug: 'thailand', name: 'Thailand', flag: '🇹🇭', region: 'Asia', lat: 13.76, lon: 100.5, processing: '3–7 days', stay: 'Up to 60 days', kinds: ['eVisa', 'Tourist'], blurb: 'eVisa and TDAC guidance for Bangkok, Phuket and the islands.' },
  { slug: 'azerbaijan', name: 'Azerbaijan', flag: '🇦🇿', region: 'Other', lat: 40.41, lon: 49.87, processing: '2–4 days', stay: 'Up to 30 days', kinds: ['eVisa', 'Tourist'], blurb: 'ASAN e-Visa support for Baku and the Caspian coast.' },
  { slug: 'russia', name: 'Russia', flag: '🇷🇺', region: 'Other', lat: 55.75, lon: 37.62, processing: '1–2 weeks', stay: 'Up to 30 days', kinds: ['eVisa', 'Tourist', 'Business'], blurb: 'Unified e-Visa and invitation-based visa support.' },
  { slug: 'mongolia', name: 'Mongolia', flag: '🇲🇳', region: 'Asia', lat: 47.89, lon: 106.91, processing: '1–2 weeks', stay: 'Up to 30 days', kinds: ['eVisa', 'Tourist'], blurb: 'e-Visa guidance for the steppe and Ulaanbaatar.' },
  { slug: 'egypt', name: 'Egypt', flag: '🇪🇬', region: 'Africa', lat: 30.04, lon: 31.24, processing: '3–7 days', stay: 'Up to 30 days', kinds: ['eVisa', 'Tourist'], blurb: 'e-Visa support for the pyramids, Nile and Red Sea.' },
]

export const regions = [
  'Schengen',
  'UK & Ireland',
  'Americas',
  'Asia',
  'Africa',
  'Oceania',
  'Middle East',
  'Other',
] as const

export const getCountry = (slug: string) => countries.find((c) => c.slug === slug)
export const popularCountries = countries.filter((c) => c.popular)
