import React from 'react'

interface AvatarProps extends React.SVGProps<SVGSVGElement> {
  index: number
}

export default function Avatar({ index, className = '', ...props }: AvatarProps) {
  const i = index % 10

  // 10 custom, luxury traveler avatar illustrations with unique linear gradients and styled assets
  switch (i) {
    case 0: // Paris / Schengen Traveler: Cap, sunglasses, turtleneck
      return (
        <svg viewBox="0 0 100 100" className={className} {...props}>
          <defs>
            <linearGradient id="av-grad-0" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e1b4b" />
              <stop offset="100%" stopColor="#4f46e5" />
            </linearGradient>
            <linearGradient id="av-skin-0" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fed7aa" />
              <stop offset="100%" stopColor="#fdba74" />
            </linearGradient>
            <linearGradient id="av-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffd966" />
              <stop offset="100%" stopColor="#c7982c" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#av-grad-0)" />
          {/* Shadow behind head */}
          <circle cx="50" cy="46" r="18" fill="#000" opacity="0.15" />
          {/* Head & Neck */}
          <rect x="43" y="55" width="14" height="15" fill="url(#av-skin-0)" />
          <circle cx="50" cy="44" r="18" fill="url(#av-skin-0)" />
          {/* Sleek Cap */}
          <path d="M32 38c0-10 8-15 18-15s18 5 18 15H32z" fill="#0f172a" />
          <path d="M48 23c6 0 18 3 22 7l-4 3H48V23z" fill="url(#av-gold)" />
          {/* Reflective Sunglasses */}
          <rect x="35" y="39" width="13" height="7" rx="1.5" fill="#111827" />
          <rect x="52" y="39" width="13" height="7" rx="1.5" fill="#111827" />
          <line x1="48" y1="42" x2="52" y2="42" stroke="#111827" strokeWidth="2" />
          <path d="M37 40h4v2h-4zM54 40h4v2h-4z" fill="#fff" opacity="0.3" />
          {/* Minimalist Smile */}
          <path d="M46 51q4 3 8 0" stroke="#7c2d12" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Turtleneck Shirt */}
          <path d="M26 76c6-9 16-10 24-10s18 1 24 10v14H26V76z" fill="#0f172a" />
          <rect x="40" y="66" width="20" height="6" fill="#1e293b" rx="1" />
        </svg>
      )
    case 1: // London traveler: Beanie, scarf, and cute smile
      return (
        <svg viewBox="0 0 100 100" className={className} {...props}>
          <defs>
            <linearGradient id="av-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#065f46" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
            <linearGradient id="av-skin-1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffedd5" />
              <stop offset="100%" stopColor="#fed7aa" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#av-grad-1)" />
          {/* Head & Neck */}
          <rect x="44" y="55" width="12" height="15" fill="url(#av-skin-1)" />
          <circle cx="50" cy="45" r="17" fill="url(#av-skin-1)" />
          {/* Beanie Hat */}
          <path d="M33 40c0-11 7-17 17-17s17 6 17 17H33z" fill="#f97316" />
          <circle cx="50" cy="21" r="4.5" fill="#fff" />
          {/* Eyes */}
          <circle cx="44" cy="43" r="2" fill="#1e293b" />
          <circle cx="56" cy="43" r="2" fill="#1e293b" />
          {/* Cute Rosy Cheeks */}
          <circle cx="39" cy="47" r="2.5" fill="#f43f5e" opacity="0.6" />
          <circle cx="61" cy="47" r="2.5" fill="#f43f5e" opacity="0.6" />
          <path d="M45 50q5 4 10 0" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Trench Coat & Scarf */}
          <path d="M26 76c6-9 16-10 24-10s18 1 24 10v14H26V76z" fill="#78350f" />
          <path d="M38 66h24v8H38z" fill="#f97316" rx="2" />
        </svg>
      )
    case 2: // Tokyo explorer: Sunhat, glasses, explorer vest
      return (
        <svg viewBox="0 0 100 100" className={className} {...props}>
          <defs>
            <linearGradient id="av-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7c2d12" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
            <linearGradient id="av-skin-2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffedd5" />
              <stop offset="100%" stopColor="#fcd34d" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#av-grad-2)" />
          {/* Head & Neck */}
          <rect x="43" y="55" width="14" height="15" fill="url(#av-skin-2)" />
          <circle cx="50" cy="44" r="18" fill="url(#av-skin-2)" />
          {/* Explorer Hat */}
          <path d="M32 34c2-8 8-11 18-11s16 3 18 11H32z" fill="#f8fafc" />
          <ellipse cx="50" cy="34" rx="23" ry="3.5" fill="#cbd5e1" />
          {/* Designer Round Glasses */}
          <circle cx="41" cy="42" r="5.5" stroke="#0f172a" strokeWidth="2" fill="none" />
          <circle cx="59" cy="42" r="5.5" stroke="#0f172a" strokeWidth="2" fill="none" />
          <line x1="46" y1="42" x2="54" y2="42" stroke="#0f172a" strokeWidth="2" />
          {/* Smile */}
          <path d="M45 52q5 3 10 0" stroke="#7c2d12" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Explorer Vest */}
          <path d="M25 75c7-9 16-11 25-11s18 2 25 11v15H25V75z" fill="#15803d" />
          {/* Vest Straps */}
          <rect x="36" y="64" width="6" height="26" fill="#166534" />
          <rect x="58" y="64" width="6" height="26" fill="#166534" />
        </svg>
      )
    case 3: // Music Festival traveler: Curly hair, blue headphones
      return (
        <svg viewBox="0 0 100 100" className={className} {...props}>
          <defs>
            <linearGradient id="av-grad-3" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#db2777" />
              <stop offset="100%" stopColor="#7c3aed" />
            </linearGradient>
            <linearGradient id="av-skin-3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fff7ed" />
              <stop offset="100%" stopColor="#fed7aa" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#av-grad-3)" />
          {/* Hair back */}
          <circle cx="35" cy="35" r="9" fill="#111827" />
          <circle cx="65" cy="35" r="9" fill="#111827" />
          <circle cx="50" cy="28" r="11" fill="#111827" />
          {/* Head & Neck */}
          <rect x="44" y="56" width="12" height="15" fill="url(#av-skin-3)" />
          <circle cx="50" cy="45" r="17" fill="url(#av-skin-3)" />
          {/* Headset Arc */}
          <path d="M30 38c0-12 10-18 20-18s20 6 20 18" fill="none" stroke="#60a5fa" strokeWidth="4.5" />
          <rect x="27" y="37" width="7" height="14" rx="3.5" fill="#3b82f6" />
          <rect x="66" y="37" width="7" height="14" rx="3.5" fill="#3b82f6" />
          {/* Eyes */}
          <circle cx="43" cy="45" r="2" fill="#111827" />
          <circle cx="57" cy="45" r="2" fill="#111827" />
          {/* Smile */}
          <path d="M46 51q4 3 8 0" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Bright Yellow Jacket */}
          <path d="M27 75c5-8 15-9 23-9s18 1 23 7v17H27V75z" fill="#facc15" />
        </svg>
      )
    case 4: // Dubai Business Traveler: Headscarf & classy sunglasses
      return (
        <svg viewBox="0 0 100 100" className={className} {...props}>
          <defs>
            <linearGradient id="av-grad-4" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e3a8a" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
            <linearGradient id="av-skin-4" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffedd5" />
              <stop offset="100%" stopColor="#fed7aa" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#av-grad-4)" />
          {/* Head & Neck */}
          <rect x="43" y="55" width="14" height="15" fill="url(#av-skin-4)" />
          <circle cx="50" cy="44" r="18" fill="url(#av-skin-4)" />
          {/* Headscarf draped */}
          <path d="M29 42c0-12 9-20 21-20s21 8 21 20c0 9-4 17-9 21L50 53 37 63c-5-4-9-12-9-21z" fill="#f8fafc" />
          <circle cx="50" cy="22" r="3.5" fill="#e2e8f0" />
          {/* Sunglasses */}
          <path d="M37 42h10v5s-2 3-5 3-5-3-5-3zM53 42h10v5s-2 3-5 3-5-3-5-3z" fill="#0f172a" />
          <line x1="47" y1="43" x2="53" y2="43" stroke="#0f172a" strokeWidth="2.5" />
          {/* Smile */}
          <path d="M46 52q4 2.5 8 0" stroke="#7c2d12" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Suit Jacket */}
          <path d="M26 76c6-9 16-10 24-10s18 1 24 10v14H26V76z" fill="#0c4a6e" />
        </svg>
      )
    case 5: // Backpacker: Reverse cap & camera strap
      return (
        <svg viewBox="0 0 100 100" className={className} {...props}>
          <defs>
            <linearGradient id="av-grad-5" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9a3412" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
            <linearGradient id="av-skin-5" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffedd5" />
              <stop offset="100%" stopColor="#fdba74" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#av-grad-5)" />
          {/* Neck & Face */}
          <rect x="43" y="54" width="14" height="16" fill="url(#av-skin-5)" />
          <circle cx="50" cy="43" r="17.5" fill="url(#av-skin-5)" />
          {/* Cap backwards */}
          <path d="M33 38c0-10 8-15 18-15s18 5 18 15H33z" fill="#0284c7" />
          <rect x="61" y="34" width="11" height="3.5" fill="#0369a1" rx="1" />
          {/* Sunglasses on Cap */}
          <rect x="39" y="27" width="9" height="5.5" fill="#111827" rx="1" />
          <rect x="52" y="27" width="9" height="5.5" fill="#111827" rx="1" />
          {/* Eyes */}
          <circle cx="44" cy="44" r="2" fill="#1e293b" />
          <circle cx="56" cy="44" r="2" fill="#1e293b" />
          {/* Smile */}
          <path d="M46 51q4 3 8 0" stroke="#7c2d12" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Camera Strap */}
          <path d="M25 75c7-9 16-10 25-10s18 1 25 10v15H25V75z" fill="#475569" />
          <line x1="30" y1="65" x2="70" y2="85" stroke="#111827" strokeWidth="4" />
        </svg>
      )
    case 6: // Digital Nomad: Round glasses, stylish beard
      return (
        <svg viewBox="0 0 100 100" className={className} {...props}>
          <defs>
            <linearGradient id="av-grad-6" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#475569" />
            </linearGradient>
            <linearGradient id="av-skin-6" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fcd34d" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#av-grad-6)" />
          {/* Neck & Head */}
          <rect x="44" y="56" width="12" height="15" fill="url(#av-skin-6)" />
          <circle cx="50" cy="44" r="18" fill="url(#av-skin-6)" />
          {/* Hair */}
          <path d="M32 35c2-8 8-12 18-12s16 4 18 12v4H32v-4z" fill="#451a03" />
          {/* Beard */}
          <path d="M34 46c0 10 7 18 16 18s16-8 16-18H34z" fill="#451a03" />
          <circle cx="50" cy="46" r="13.5" fill="url(#av-skin-6)" />
          {/* Round Glasses */}
          <circle cx="42" cy="43" r="5.5" stroke="#1e293b" strokeWidth="2.5" fill="none" />
          <circle cx="58" cy="43" r="5.5" stroke="#1e293b" strokeWidth="2.5" fill="none" />
          <line x1="48" y1="43" x2="52" y2="43" stroke="#1e293b" strokeWidth="2" />
          {/* Smile */}
          <path d="M46 51q4 3 8 0" stroke="#451a03" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Denim Jacket */}
          <path d="M26 76c6-9 16-10 24-10s18 1 24 10v14H26V76z" fill="#1e3a8a" />
        </svg>
      )
    case 7: // Summer Resort Girl: Wide hat, hair buns
      return (
        <svg viewBox="0 0 100 100" className={className} {...props}>
          <defs>
            <linearGradient id="av-grad-7" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#ffd966" />
            </linearGradient>
            <linearGradient id="av-skin-7" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fffbeb" />
              <stop offset="100%" stopColor="#fef3c7" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#av-grad-7)" />
          {/* Hair buns */}
          <circle cx="31" cy="31" r="8" fill="#ea580c" />
          <circle cx="69" cy="31" r="8" fill="#ea580c" />
          {/* Head & Neck */}
          <rect x="44" y="55" width="12" height="15" fill="url(#av-skin-7)" />
          <circle cx="50" cy="45" r="17.5" fill="url(#av-skin-7)" />
          {/* Straw Hat */}
          <path d="M32 38c2-6 8-10 18-10s16 4 18 10" fill="none" stroke="#d97706" strokeWidth="4" />
          <ellipse cx="50" cy="38" rx="23" ry="3" fill="#ea580c" />
          {/* Eyes */}
          <path d="M40 45q2-2 4 0" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M56 45q2-2 4 0" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Smile */}
          <path d="M45 51q5 4 10 0" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" fill="none" />
          {/* Emerald Summer Top */}
          <path d="M27 75c5-8 15-9 23-9s18 1 23 7v17H27V75z" fill="#0f766e" />
        </svg>
      )
    case 8: // Alpine/Ski Traveler: Winter beanie, high-tech goggles
      return (
        <svg viewBox="0 0 100 100" className={className} {...props}>
          <defs>
            <linearGradient id="av-grad-8" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0891b2" />
              <stop offset="100%" stopColor="#083344" />
            </linearGradient>
            <linearGradient id="av-skin-8" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fed7aa" />
              <stop offset="100%" stopColor="#fdba74" />
            </linearGradient>
            <linearGradient id="av-goggle" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#f43f5e" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#av-grad-8)" />
          {/* Head & Neck */}
          <rect x="43" y="54" width="14" height="20" fill="url(#av-skin-8)" />
          <circle cx="50" cy="44" r="17.5" fill="url(#av-skin-8)" />
          {/* Puffy Winter Beanie */}
          <path d="M31 38c0-12 8-16 19-16s19 4 19 16H31z" fill="#e11d48" />
          {/* Colorful Ski Goggles */}
          <rect x="34" y="36" width="32" height="9" rx="3.5" fill="url(#av-goggle)" stroke="#0f172a" strokeWidth="2" />
          <line x1="39" y1="40" x2="57" y2="40" stroke="#fff" strokeWidth="1.5" opacity="0.6" />
          {/* Smile */}
          <path d="M46 51q4 3 8 0" stroke="#7c2d12" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Giant puffer jacket */}
          <path d="M23 74c5-8 15-10 27-10s22 2 27 10v16H23V74z" fill="#0f172a" />
          <circle cx="50" cy="74" r="3" fill="#e11d48" />
        </svg>
      )
    case 9: // Happy winking city traveler
      return (
        <svg viewBox="0 0 100 100" className={className} {...props}>
          <defs>
            <linearGradient id="av-grad-9" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#be123c" />
              <stop offset="100%" stopColor="#e11d48" />
            </linearGradient>
            <linearGradient id="av-skin-9" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#fff7ed" />
              <stop offset="100%" stopColor="#fed7aa" />
            </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="50" fill="url(#av-grad-9)" />
          {/* Head & Neck */}
          <rect x="43" y="55" width="14" height="20" fill="url(#av-skin-9)" />
          <circle cx="50" cy="44" r="18" fill="url(#av-skin-9)" />
          {/* Sleek Hair swoosh */}
          <path d="M31 38c0-10 8-16 19-16s19 6 19 16" fill="none" stroke="#78350f" strokeWidth="5.5" strokeLinecap="round" />
          {/* Wink Eyes */}
          <path d="M38 44q3-2.5 6 0" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M53 44q2 2.5 4 0" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Smile */}
          <path d="M44 51q6 4 12 0" stroke="#1e293b" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          {/* Red Casual Shirt */}
          <path d="M26 76c6-9 16-10 24-10s18 1 24 10v14H26V76z" fill="#0f172a" />
          <path d="M50 66v20" stroke="#e11d48" strokeWidth="2" />
        </svg>
      )
    default:
      return null
  }
}
