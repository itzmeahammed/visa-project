import React from 'react'

/**
 * TRAVSOUK logo — an ink seal ringed in fine gold. Inside, a pointed souk
 * archway (the gateway) with a gold paper plane ascending through it and a
 * dotted flight trail. Beside it, the TRAVSOUK wordmark with a letterspaced
 * concierge subline.
 */
export default function Logo({
  className = '',
  wordmark = true,
}: {
  className?: string
  wordmark?: boolean
}) {
  return (
    <span className={`flex items-center gap-2.5 group cursor-pointer select-none ${className}`}>
      {/* Ink seal with gold ring */}
      <span className="relative grid h-10 w-10 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-b from-[#23201b] to-[#0d0d0e] shadow-[0_4px_14px_rgba(15,15,16,0.28)] ring-1 ring-[#c7982c]/60 transition-all duration-300 group-hover:shadow-[0_6px_18px_rgba(199,152,44,0.35)] group-hover:ring-[#dfb046]">
        <svg viewBox="0 0 48 48" className="relative h-10 w-10 transition-transform duration-500 ease-out group-hover:scale-[1.05]" aria-hidden="true">
          <defs>
            <linearGradient id="ts-gold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdf3d0" />
              <stop offset="45%" stopColor="#dfb046" />
              <stop offset="100%" stopColor="#a9791a" />
            </linearGradient>
            <linearGradient id="ts-gold-soft" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#f4dfa0" />
              <stop offset="100%" stopColor="#c7982c" />
            </linearGradient>
          </defs>

          {/* Fine inner ring */}
          <circle cx="24" cy="24" r="20" fill="none" stroke="url(#ts-gold)" strokeWidth="1" strokeOpacity="0.9" />
          <circle cx="24" cy="24" r="17.6" fill="none" stroke="#fdf3d0" strokeWidth="0.4" strokeOpacity="0.35" />

          {/* Souk archway — pointed Arabian arch */}
          <path
            d="M15 36 L15 24 C15 17.5 18.5 13.6 24 11 C29.5 13.6 33 17.5 33 24 L33 36"
            fill="none"
            stroke="url(#ts-gold-soft)"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          {/* Arch threshold */}
          <line x1="12.5" y1="36" x2="35.5" y2="36" stroke="url(#ts-gold-soft)" strokeWidth="1.4" strokeLinecap="round" />

          {/* Dotted flight trail sweeping up through the arch */}
          <path
            d="M16.5 32.5 C 19 27.5, 22 24.5, 27.5 21.5"
            fill="none"
            stroke="#fdf3d0"
            strokeWidth="1"
            strokeLinecap="round"
            strokeDasharray="0.2 2.6"
            strokeOpacity="0.85"
          />

          {/* Paper plane ascending through the arch */}
          <g transform="translate(24.2 12.4) rotate(38) scale(0.44)">
            <path
              d="M14.5 21.7a.5.5 0 0 0 .94-.02l6.5-19a.5.5 0 0 0-.64-.64l-19 6.5a.5.5 0 0 0-.02.94l7.93 3.18a2 2 0 0 1 1.11 1.11z"
              fill="url(#ts-gold)"
            />
          </g>

          {/* Guiding star */}
          <path d="M33.6 13.2 l0.7 1.7 1.7 0.7 -1.7 0.7 -0.7 1.7 -0.7 -1.7 -1.7 -0.7 1.7 -0.7 Z" fill="#fdf3d0" opacity="0.9" />
        </svg>
      </span>

      {wordmark && (
        <span className="flex flex-col justify-center leading-none select-none">
          <span className="flex items-baseline text-[1.18rem] font-black -tracking-[0.02em]">
            <span className="text-ink">TRAV</span>
            <span className="text-green transition-colors duration-300 group-hover:text-green-light">SOUK</span>
          </span>
          <span className="mt-[3px] text-[6.5px] font-bold uppercase tracking-[0.32em] text-ink/45">
            Visa &amp; Travel Concierge
          </span>
        </span>
      )}
    </span>
  )
}
