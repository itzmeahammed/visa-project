import React from 'react'

/**
 * TRAVSOUK logo — a custom vector gold travel coin emblem featuring a high-end
 * concierge agent avatar. Next to it sits the svelte wordmark (TRAV in small
 * uppercase charcoal, SOUK in larger bold gold).
 */
export default function Logo({
  className = '',
  wordmark = true,
}: {
  className?: string
  wordmark?: boolean
}) {
  return (
    <span className={`flex items-center gap-2 group cursor-pointer select-none ${className}`}>
      {/* Gold Coin circular badge */}
      <span className="relative grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full bg-gradient-to-br from-[#fff3cf] via-[#dfb046] to-[#a9791a] shadow-[0_3px_10px_rgba(199,152,44,0.15)] border border-white/30 transition-all duration-300 group-hover:scale-102 group-hover:shadow-[0_5px_15px_rgba(199,152,44,0.22)]">
        {/* Soft gold glow */}
        <span className="absolute -right-2 -top-2 h-6 w-6 rounded-full bg-white/25 blur-sm" />

        <svg viewBox="0 0 32 32" className="relative h-6.5 w-6.5 transition-transform duration-500 ease-out group-hover:scale-[1.04]" aria-hidden="true">
          <defs>
            {/* Rich gradients */}
            <linearGradient id="ts-jacket" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1c1a17" />
              <stop offset="100%" stopColor="#0d0d0e" />
            </linearGradient>
            <linearGradient id="ts-skin" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffdcb8" />
              <stop offset="100%" stopColor="#f5bd8c" />
            </linearGradient>
            <linearGradient id="ts-gold-details" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fdf3d0" />
              <stop offset="100%" stopColor="#d5a83c" />
            </linearGradient>
          </defs>

          {/* Inner gold frame border */}
          <circle cx="16" cy="16" r="14.5" fill="none" stroke="#fff3cf" strokeWidth="0.65" strokeOpacity="0.45" />

          {/* Concierge Agent Suit Jacket */}
          <path
            d="M5.5 32 C 5.5 25.2, 26.5 25.2, 26.5 32 Z"
            fill="url(#ts-jacket)"
          />

          {/* Shirt collar (white V-shape) */}
          <path d="M12.5 25 L16 32 L19.5 25 Z" fill="#ffffff" />
          
          {/* Gold Tie */}
          <path d="M15.5 27 L16.5 27 L16 32 Z" fill="url(#ts-gold-details)" />

          {/* Skin (Face) */}
          <circle cx="16" cy="16.5" r="5.2" fill="url(#ts-skin)" />

          {/* Neat Hair cut */}
          <path
            d="M10.8 16.5 C 10.8 11.2, 21.2 11.2, 21.2 16.5 C 21.2 15.2, 19.8 13.8, 16 13.8 C 12.2 13.8, 10.8 15.2, 10.8 16.5"
            fill="#1c1a17"
          />

          {/* Neat Beard */}
          <path
            d="M10.8 16.5 C 10.8 22.8, 21.2 22.8, 21.2 16.5 L19.8 16.5 C 19.8 20.8, 12.2 20.8, 12.2 16.5 Z"
            fill="#1c1a17"
          />

          {/* Gold Spectacles */}
          <rect x="11.4" y="14.8" width="3.4" height="2.4" rx="0.6" fill="none" stroke="url(#ts-gold-details)" strokeWidth="0.8" />
          <rect x="17.2" y="14.8" width="3.4" height="2.4" rx="0.6" fill="none" stroke="url(#ts-gold-details)" strokeWidth="0.8" />
          <line x1="14.8" y1="15.8" x2="17.2" y2="15.8" stroke="url(#ts-gold-details)" strokeWidth="0.8" />
          <line x1="10.8" y1="15.8" x2="11.4" y2="15.8" stroke="url(#ts-gold-details)" strokeWidth="0.65" />
          <line x1="20.6" y1="15.8" x2="21.2" y2="15.8" stroke="url(#ts-gold-details)" strokeWidth="0.65" />
        </svg>

        {/* Live dot with active pulse glow */}
        <span className="absolute bottom-0.5 right-0.5 flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-status opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-status ring-1 ring-white"></span>
        </span>
      </span>
      {wordmark && (
        <span className="flex items-baseline select-none">
          <span className="text-[9px] font-bold text-ink/50 uppercase tracking-[0.2em] mr-1.5">TRAV</span>
          <span className="text-[1.12rem] font-black text-green uppercase tracking-[0.04em] transition-colors duration-300 group-hover:text-green-light">SOUK</span>
        </span>
      )}
    </span>
  )
}
