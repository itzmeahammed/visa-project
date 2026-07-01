// Original Travsouk editorial content. Each post has a short body used by the
// article template — written for Travsouk, not sourced from any other site.

export interface Post {
  slug: string
  kind: 'blog' | 'news'
  tag: string
  date: string
  title: string
  excerpt: string
  body: string[]
}

const lorem = (topic: string): string[] => [
  `If you’re planning ${topic} from the UAE, the single most important thing is a complete, consistent file. Most delays and refusals come down to missing documents or details that don’t line up — not bad luck.`,
  `At Travsouk we start every application with an eligibility check, then build the document list around your specific profile: your residency, travel history, employment and the purpose of the trip. Nothing generic, nothing copy-pasted.`,
  `Below is a plain-English walkthrough of what to expect, how long it typically takes, and the small things that quietly make a big difference to your approval odds.`,
  `Have a question about your own case? Message a Travsouk advisor on WhatsApp — we usually reply within the hour, seven days a week. Yalla, let’s get you moving.`,
]

export const posts: Post[] = [
  {
    slug: 'schengen-visa-from-the-uae-2026-guide',
    kind: 'blog',
    tag: 'Guides',
    date: 'Jun 26, 2026',
    title: 'Schengen visa from the UAE: the 2026 plain-English guide',
    excerpt: 'Everything a UAE resident needs to apply for a Schengen visa in 2026 — documents, timing and the mistakes to avoid.',
    body: lorem('a Schengen trip'),
  },
  {
    slug: 'uk-visitor-visa-from-dubai',
    kind: 'blog',
    tag: 'How-to',
    date: 'Jun 18, 2026',
    title: 'UK visitor visa from Dubai: documents, timing and tips',
    excerpt: 'How to build a strong UK standard visitor application from the UAE, and when to use the priority service.',
    body: lorem('a UK visit'),
  },
  {
    slug: 'us-b1-b2-from-the-uae',
    kind: 'blog',
    tag: 'Guides',
    date: 'Jun 09, 2026',
    title: 'US B1/B2 from the UAE: how to prepare for the interview',
    excerpt: 'A calm, practical walkthrough of the DS-160, appointment and interview for UAE applicants.',
    body: lorem('a US visit'),
  },
  {
    slug: 'digital-nomad-visas-for-uae-residents',
    kind: 'blog',
    tag: 'Travel tips',
    date: 'May 30, 2026',
    title: 'Digital nomad visas worth considering as a UAE resident',
    excerpt: 'A look at the remote-work visa options that pair well with a UAE base.',
    body: lorem('a remote-work move'),
  },
  {
    slug: 'japan-evisa-from-the-uae',
    kind: 'blog',
    tag: 'How-to',
    date: 'May 21, 2026',
    title: 'Japan eVisa from the UAE: what you need and how long it takes',
    excerpt: 'The Japan eVisa process explained for UAE residents, step by step.',
    body: lorem('a trip to Japan'),
  },
  {
    slug: 'passport-renewal-in-dubai',
    kind: 'blog',
    tag: 'Guides',
    date: 'May 12, 2026',
    title: 'Renewing your passport in Dubai: what to bring',
    excerpt: 'A general checklist for passport renewal appointments while you’re based in the UAE.',
    body: lorem('a passport renewal'),
  },

  {
    slug: 'travsouk-launches-eligibility-checker',
    kind: 'news',
    tag: 'Company',
    date: 'Jun 20, 2026',
    title: 'Travsouk launches a free visa eligibility checker',
    excerpt: 'Travelers can now get an instant read on their best visa options before they apply.',
    body: lorem('your eligibility'),
  },
  {
    slug: 'schengen-digital-entry-rules-2026',
    kind: 'news',
    tag: 'Updates',
    date: 'Jun 05, 2026',
    title: 'Schengen 2026: what the new digital entry rules mean for UAE travelers',
    excerpt: 'A short briefing on the latest Schengen entry changes and how they affect applications from the UAE.',
    body: lorem('a Schengen trip'),
  },
  {
    slug: 'uk-eta-explained',
    kind: 'news',
    tag: 'Updates',
    date: 'May 28, 2026',
    title: 'UK ETA vs UK visa: the key difference for UAE travelers',
    excerpt: 'When you need an ETA, when you need a full visa, and how to tell them apart.',
    body: lorem('a UK trip'),
  },
  {
    slug: 'japan-visa-fee-changes',
    kind: 'news',
    tag: 'Updates',
    date: 'May 15, 2026',
    title: 'Japan to adjust visa fees — what travelers should know',
    excerpt: 'A quick note on upcoming Japan visa fee changes and timing your application.',
    body: lorem('a trip to Japan'),
  },
]

export const blogPosts = posts.filter((p) => p.kind === 'blog')
export const newsPosts = posts.filter((p) => p.kind === 'news')
export const getPost = (slug: string) => posts.find((p) => p.slug === slug)
