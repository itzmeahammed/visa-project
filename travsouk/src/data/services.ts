// Service / visa-type pages. Original Travsouk copy.

export interface Service {
  slug: string
  label: string
  eyebrow: string
  title: string
  intro: string
  points: { h: string; p: string }[]
  steps: string[]
}

export const services: Service[] = [
  {
    slug: 'tourist-visas',
    label: 'Tourist visas',
    eyebrow: 'Leisure travel',
    title: 'Tourist visas, handled the easy way.',
    intro:
      'From a weekend in Europe to a month across Asia, we build a clean tourist-visa file around your trip — and submit it for you.',
    points: [
      { h: 'Any destination', p: 'Schengen, UK, USA and 70+ more — one team for every stamp on your bucket list.' },
      { h: 'Itinerary & insurance', p: 'We help with bookings, cover and the supporting documents consulates expect.' },
      { h: 'Clear timelines', p: 'You’ll always know where your application stands and what happens next.' },
    ],
    steps: ['Free eligibility check', 'Document collection & review', 'Appointment & submission', 'Decision & collection'],
  },
  {
    slug: 'corporate-visa',
    label: 'Corporate & business',
    eyebrow: 'For companies',
    title: 'Corporate visa services for busy teams.',
    intro:
      'Move your people across borders without the admin. Travsouk manages business visas at scale, with one point of contact for your whole team.',
    points: [
      { h: 'Bulk & recurring', p: 'Handle dozens of applications with consolidated reporting and invoicing.' },
      { h: 'Doorstep collection', p: 'We collect and return documents at your office anywhere in the UAE.' },
      { h: 'Priority routes', p: 'Express appointments and priority processing where the consulate allows.' },
    ],
    steps: ['Account setup', 'Traveler onboarding', 'Document handling', 'Submission & tracking'],
  },
  {
    slug: 'schengen-visa',
    label: 'Schengen visas',
    eyebrow: 'Europe',
    title: 'Schengen visas from the UAE, done right.',
    intro:
      'One visa, 29 countries. We pick the correct consulate, build a complete file and book your biometrics — so your European trip starts stress-free.',
    points: [
      { h: 'Right country, first time', p: 'We file with the correct member state based on your itinerary and main destination.' },
      { h: 'Multiple-entry strategy', p: 'Where you qualify, we aim for longer-validity, multiple-entry visas.' },
      { h: 'Refusal recovery', p: 'Refused before? We rebuild the file and address the exact reason for refusal.' },
    ],
    steps: ['Eligibility & consulate choice', 'Document build', 'Biometrics appointment', 'Submission & decision'],
  },
  {
    slug: 'students-visa',
    label: 'Student visas',
    eyebrow: 'Study abroad',
    title: 'Student visas for your next chapter.',
    intro:
      'Accepted into a university abroad? We turn the visa step into the easy part — with guidance tailored to your destination and course.',
    points: [
      { h: 'Destination experts', p: 'UK, Canada and Europe study routes, mapped to your offer letter.' },
      { h: 'Financial documentation', p: 'We help structure funds and sponsorship the way visa officers expect.' },
      { h: 'Interview prep', p: 'Mock sessions so you walk in calm and ready.' },
    ],
    steps: ['Offer & eligibility review', 'Financial documentation', 'Application & submission', 'Decision & pre-departure'],
  },
]

export const getService = (slug: string) => services.find((s) => s.slug === slug)
