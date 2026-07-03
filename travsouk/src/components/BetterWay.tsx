import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const row1 = [
  { name: 'France', flag: '🇫🇷' },
  { name: 'Italy', flag: '🇮🇹' },
  { name: 'Spain', flag: '🇪🇸' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'UK', flag: '🇬🇧' },
  { name: 'France', flag: '🇫🇷' },
  { name: 'Italy', flag: '🇮🇹' },
  { name: 'Spain', flag: '🇪🇸' },
  { name: 'Germany', flag: '🇩🇪' },
  { name: 'UK', flag: '🇬🇧' }
]

const row2 = [
  { name: 'Japan', flag: '🇯🇵' },
  { name: 'China', flag: '🇨🇳' },
  { name: 'Thailand', flag: '🇹🇭' },
  { name: 'Vietnam', flag: '🇻🇳' },
  { name: 'India', flag: '🇮🇳' },
  { name: 'Japan', flag: '🇯🇵' },
  { name: 'China', flag: '🇨🇳' },
  { name: 'Thailand', flag: '🇹🇭' },
  { name: 'Vietnam', flag: '🇻🇳' },
  { name: 'India', flag: '🇮🇳' }
]

const row3 = [
  { name: 'USA', flag: '🇺🇸' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'Brazil', flag: '🇧🇷' },
  { name: 'Mexico', flag: '🇲🇽' },
  { name: 'Argentina', flag: '🇦🇷' },
  { name: 'USA', flag: '🇺🇸' },
  { name: 'Canada', flag: '🇨🇦' },
  { name: 'Brazil', flag: '🇧🇷' },
  { name: 'Mexico', flag: '🇲🇽' },
  { name: 'Argentina', flag: '🇦🇷' }
]

export default function BetterWay() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="py-20 bg-[#fdfcfb] relative overflow-hidden border-t border-cloud/30">
      {/* Subtle ambient light leaks */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-green/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-green/5 blur-[120px] rounded-full pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-5 md:px-8">
        {/* Headline */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="reveal inline-block px-4 py-1 text-[10px] font-bold uppercase tracking-[0.2em] bg-[#fdf7eb] border border-[#c7982c]/20 rounded-full text-green mb-3">
            Congratulations!
          </span>
          <h2 className="reveal text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-ink leading-[1.08] lg:px-4">
            You just found the <span className="accent text-green">better way</span> of getting your visa done.
          </h2>
        </div>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1: Visa Updates with Float Notifications Widget */}
          <div className="reveal bg-white rounded-3xl p-2 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-cloud/40 hover:shadow-[0_20px_50px_rgba(199,152,44,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            <div className="h-64 rounded-2xl overflow-hidden mb-6 bg-[#fdf7eb]/30 border border-[#c7982c]/5 relative flex flex-col justify-center px-5 py-6 gap-3">
              
              {/* Floating notification bubble 1 */}
              <div className="p-3 bg-white/95 rounded-2xl shadow-sm border border-cloud/30 flex gap-3 transform -translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-status/10 flex items-center justify-center text-status text-sm">
                  🔔
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-ink">Schengen slots open</span>
                  <span className="text-[10px] text-muted mt-0.5">Urgent slots for Italy and France available now.</span>
                </div>
              </div>

              {/* Floating notification bubble 2 */}
              <div className="p-3 bg-white/95 rounded-2xl shadow-sm border border-cloud/30 flex gap-3 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-green/10 flex items-center justify-center text-green text-sm">
                  💡
                </span>
                <div className="flex flex-col text-left">
                  <span className="text-xs font-bold text-ink">Japan eVisa online</span>
                  <span className="text-[10px] text-muted mt-0.5">Streamlined submission live for GCC residents.</span>
                </div>
              </div>

              {/* Background accent ring */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <svg viewBox="0 0 64 64" className="w-44 h-44 text-[#c7982c]/20" fill="none" stroke="currentColor" strokeWidth="1">
                  <circle cx="32" cy="32" r="26" />
                  <circle cx="32" cy="32" r="16" strokeDasharray="3 3" />
                </svg>
              </div>
            </div>
            <div className="px-5 pb-6 space-y-2">
              <Link to="/news">
                <h3 className="text-lg font-bold hover:text-green text-ink flex items-center gap-1.5 transition-colors cursor-pointer">
                  Visa Updates{' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right inline-block w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </h3>
              </Link>
              <p className="text-muted leading-relaxed text-xs">
                Catch up on the latest visa rules and travel updates from around the world.
              </p>
            </div>
          </div>

          {/* Card 2: Assisted Countries with flag marquee tags */}
          <div className="reveal bg-white rounded-3xl p-2 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-cloud/40 hover:shadow-[0_20px_50px_rgba(199,152,44,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            <div className="h-64 rounded-2xl overflow-hidden mb-6 bg-gradient-to-b from-[#fdfcfb]/10 to-[#fdf7eb]/30 border border-[#c7982c]/5 relative flex flex-col justify-between py-8 select-none pointer-events-none">
              
              {/* Row 1 */}
              <div className="flex whitespace-nowrap overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                <div className="flex gap-3.5 animate-marquee">
                  {row1.map((c, i) => (
                    <span key={i} className="text-xs font-semibold bg-white text-ink border border-cloud/30 px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                      <span>{c.flag}</span>
                      <span>{c.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex whitespace-nowrap overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                <div className="flex gap-3.5 animate-marquee [animation-direction:reverse]">
                  {row2.map((c, i) => (
                    <span key={i} className="text-xs font-semibold bg-white text-ink border border-cloud/30 px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                      <span>{c.flag}</span>
                      <span>{c.name}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex whitespace-nowrap overflow-hidden" style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}>
                <div className="flex gap-3.5 animate-marquee">
                  {row3.map((c, i) => (
                    <span key={i} className="text-xs font-semibold bg-white text-ink border border-cloud/30 px-3.5 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                      <span>{c.flag}</span>
                      <span>{c.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-5 pb-6 space-y-2">
              <Link to="/country">
                <h3 className="text-lg font-bold hover:text-green text-ink flex items-center gap-1.5 transition-colors cursor-pointer">
                  Assisted Countries{' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right inline-block w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </h3>
              </Link>
              <p className="text-muted leading-relaxed text-xs">
                Explore the countries we assist with and their visa guidelines.
              </p>
            </div>
          </div>

          {/* Card 3: Practical Reads with Mock Featured Article */}
          <div className="reveal bg-white rounded-3xl p-2 shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-cloud/40 hover:shadow-[0_20px_50px_rgba(199,152,44,0.08)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group">
            <div className="h-64 rounded-2xl overflow-hidden mb-6 bg-[#fdf7eb]/30 border border-[#c7982c]/5 relative flex items-center justify-center p-5">
              
              {/* Featured article preview */}
              <div className="p-4 bg-white/95 rounded-2xl shadow-md border border-cloud/30 w-full text-left relative z-10 transform translate-y-1 group-hover:translate-y-0 transition-all duration-500 ease-out flex flex-col justify-between h-40">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold text-green bg-green/5 border border-[#c7982c]/10 rounded px-1.5 py-0.5 tracking-wider uppercase">Guide</span>
                    <span className="text-[9px] font-semibold text-muted">3 min read</span>
                  </div>
                  <h4 className="text-xs font-bold text-ink mt-2.5 leading-snug line-clamp-2">
                    How to prepare your bank statements for Schengen visa applications.
                  </h4>
                </div>
                
                <div className="flex items-center gap-2 border-t border-cloud/30 pt-2.5">
                  <div className="w-5 h-5 rounded-full bg-green/20 flex items-center justify-center text-[10px] font-black text-green-deep">✍️</div>
                  <span className="text-[9px] font-bold text-muted uppercase tracking-wider">By Concierge Manager</span>
                </div>
              </div>

              {/* Decorative Notebook widget */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-10">
                <svg viewBox="0 0 64 64" className="w-40 h-40 text-black" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="14" y="10" width="36" height="44" rx="3" />
                  <line x1="20" y1="20" x2="44" y2="20" />
                  <line x1="20" y1="30" x2="44" y2="30" />
                  <line x1="20" y1="40" x2="36" y2="40" />
                </svg>
              </div>
            </div>
            <div className="px-5 pb-6 space-y-2">
              <Link to="/blog">
                <h3 className="text-lg font-bold hover:text-green text-ink flex items-center gap-1.5 transition-colors cursor-pointer">
                  Practical Reads{' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right inline-block w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </h3>
              </Link>
              <p className="text-muted leading-relaxed text-xs">
                Stay informed with the visa insights and travel guides and expert tips.
              </p>
            </div>
          </div>
        </div>

        {/* Start Application Button */}
        <div className="reveal mt-16 flex justify-center">
          <a
            href="#apply"
            className="group/btn relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#0c0c0d] px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-102 hover:shadow-[0_10px_35px_rgba(0,0,0,0.18)] cursor-pointer border border-white/5"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Application
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
