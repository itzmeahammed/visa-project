import type { Post } from '../data/posts'

// Deterministic destination imagery per post: match the title/slug to a place,
// fall back to rotating general travel shots.
export const u = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=60`

const imageRules: [RegExp, string][] = [
  [/schengen|france|paris|europe/i, u('1502602898657-3e91760cbb34')],
  [/\buk\b|london|british/i, u('1513635269975-59663e0ac1ad')],
  [/\bus\b|b1|b2|america|united states/i, u('1496442226666-8d4d0e62e6e9')],
  [/japan|tokyo/i, u('1493976040374-85c8e12f0c0e')],
  [/nomad|remote|digital/i, u('1507525428034-b723cf961d3e')],
  [/passport|renewal|biometric/i, u('1436491865332-7a61a109cc05')],
  [/turkey|türkiye|istanbul/i, u('1541432901042-2d8bd64b4a9b')],
]

const fallbackImages = [
  u('1488646953014-85cb44e25828'),
  u('1469854523086-cc02fe5d8800'),
  u('1464822759023-fed622ff2c3b'),
  u('1467269204594-9661b134dd2b'),
  u('1506744038136-46273834b3fb'),
]

export function coverFor(post: Post, i = 0) {
  const hay = `${post.title} ${post.slug} ${post.tag}`
  for (const [re, img] of imageRules) if (re.test(hay)) return img
  return fallbackImages[i % fallbackImages.length]
}

export function readingTime(post: Post) {
  const words = post.body.join(' ').split(/\s+/).length
  return Math.max(2, Math.round(words / 180))
}
