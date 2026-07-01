import React from 'react'
import { BRAND } from '../data'
import Avatar from './Avatars'

const chips = [
  '1M+ Travelers Checked',
  '25k+ Visas Secured',
  '75+ Destinations',
  'Fast & Flexible',
  'Safe & Secure',
  '4.9/5 Rating',
]

function ChipMarquee() {
  const row = [...chips, ...chips, ...chips]
  return (
    <div
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 20%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 90%, transparent)',
      }}
      className="jsx-590e6b7fa3a07cb5 max-w-[500px] bg-[#fdfcfb] overflow-hidden rounded-full py-1 relative z-10"
    >
      <div className="jsx-590e6b7fa3a07cb5 flex gap-4 w-max animate-marquee">
        {row.map((c, i) => (
          <div
            key={i}
            className="jsx-590e6b7fa3a07cb5 px-5 py-1 -tracking-[0.05em] bg-white rounded-full text-sm font-semibold text-slate-800 whitespace-nowrap border border-white/50 flex items-center gap-2"
          >
            {c}
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative bg-[#fdfcfb] overflow-hidden pt-28 md:pt-36 pb-12 lg:pt-0 lg:pb-0 min-h-[auto] lg:min-h-[110vh] flex items-center justify-center">
      {/* Background decoration on desktop */}
      <div className="hidden lg:block absolute top-0 right-0 h-full w-[45%] z-0">
        <img
          alt="Website Element"
          className="object-fit object-right"
          style={{
            position: 'absolute',
            height: '100%',
            width: '100%',
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            color: 'transparent',
          }}
          src="/home/website-element.webp"
        />
      </div>

      <div className="w-full px-4 md:px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-7xl items-center">
        {/* Left Column - Headline & Brand Copy */}
        <div className="relative z-30 animate-fadeIn lg:col-span-7">
          <div className="relative bg-transparent pl-2 text-left space-y-6">
            
            {/* Tagline Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green/10 border border-green/20 text-xs font-bold text-green-deep tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-green animate-pulse"></span>
              ★ Dubai's Premium Visa Concierge
            </div>

            {/* Headline */}
            <h1 className="text-[2.75rem] sm:text-5xl lg:text-[4.8rem] font-extrabold leading-[1.05] -tracking-[0.04em] text-black">
              Consider your
              <br />
              visa{' '}
              <i className="font-serif italic tracking-[-0.08em] text-green-deep">
                problems
              </i>
              <br />
              halfway solved.
            </h1>

            {/* Subheadline */}
            <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-[540px]">
              Go anywhere you dream of while we handle the paperwork. We book the embassy slots, verify files, and manage the queues.
            </p>

            {/* Value Proposition Points */}
            <div className="space-y-3 pt-2">
              {[
                'Direct Embassy Queue Bypass & Booking',
                'Secure Home or Office Document Pickup in Dubai',
                '100% Complete & Verified Application Files',
              ].map((text, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm font-semibold text-gray-800">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-glow text-green shrink-0 text-xs">
                    ✓
                  </span>
                  <span>{text}</span>
                </div>
              ))}
            </div>

            {/* Button Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 w-full">
              <a
                className="group/button relative inline-flex items-center overflow-hidden px-8 py-4 font-bold transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-black/20 cursor-pointer justify-center bg-black hover:bg-gray-800 text-white rounded-full text-base w-full sm:w-auto min-w-[200px]"
                href="https://visa-eligibility.visaguy.ae/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-base font-semibold text-center w-full">
                    Check Visa Eligibility
                  </span>
                </span>
                <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                  <div className="relative h-full w-10 bg-white/30"></div>
                </div>
              </a>

              <a
                className="group flex items-center justify-start gap-2 bg-white rounded-full py-2 px-1 pr-5 shadow-sm border border-5 border-gray-100 hover:shadow-md transition-all w-full sm:w-auto text-left"
                href={`https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=Hi%20TRAVSOUK%2C%20could%20you%20tell%20me%20more%20about%20your%20services%3F`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="relative w-10 h-10 ml-1 rounded-full overflow-hidden bg-gray-200 shrink-0">
                  <img
                    alt="Profile"
                    className="object-cover"
                    style={{
                      position: 'absolute',
                      height: '100%',
                      width: '100%',
                      left: 0,
                      top: 0,
                      right: 0,
                      bottom: 0,
                      color: 'transparent',
                    }}
                    src="/user-avatar.webp"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold leading-tight text-black">
                    Chat with Visa Expert
                  </span>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-green animate-pulse"></span>
                    <span className="text-sm font-medium text-gray-800">Available now</span>
                  </div>
                </div>
              </a>
            </div>

            {/* Chips Marquee */}
            <div className="pt-6">
              <ChipMarquee />
            </div>

          </div>
        </div>

        {/* Right Column - Luxury Glass Application Card Form */}
        <div className="relative z-40 w-full flex justify-center lg:justify-end lg:col-span-5 mt-4 lg:mt-0">
          <div className="relative group rounded-3xl p-[1px] bg-gradient-to-b from-white/20 to-white/10 shadow-2xl backdrop-blur-xl w-full max-w-md mx-auto lg:ml-auto lg:mr-0 z-20 animate-fadeIn border border-black/5">
            {/* Background decoration on mobile inside card */}
            <div className="block lg:hidden absolute top-0 -right-6 h-[80vh] w-full z-0 rotate-[-90deg] pointer-events-none">
              <img
                alt="Website Element"
                className="object-cover object-right"
                style={{
                  position: 'absolute',
                  height: '100%',
                  width: '100%',
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  color: 'transparent',
                }}
                src="/home/website-element.webp"
              />
            </div>
            
            <div className="absolute inset-0 rounded-3xl bg-white/90 backdrop-blur-xl"></div>
            
            <div className="relative p-8 space-y-6">
              <div className="text-center space-y-1">
                <h3 className="text-2xl font-extrabold text-black">Where do you want to go?</h3>
                <p className="text-gray-500 text-sm">Start your travel Visa application</p>
              </div>

              <form className="flex flex-col min-h-[340px]" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-4 animate-fadeIn">
                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-black pl-1">
                      Name
                    </label>
                    <input
                      autoComplete="name"
                      required
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 text-sm text-black outline-none focus:border-green focus:ring-4 focus:ring-green/10 transition-all placeholder:text-black/60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-black pl-1">
                      Email
                    </label>
                    <input
                      autoComplete="email"
                      required
                      type="email"
                      name="email"
                      placeholder="your@email.com"
                      className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 text-sm text-black outline-none focus:border-green focus:ring-4 focus:ring-green/10 transition-all placeholder:text-black/60"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[11px] uppercase tracking-wider font-semibold text-black pl-1">
                      Phone Number
                    </label>
                    <input
                      autoComplete="tel"
                      required
                      type="tel"
                      name="phone"
                      placeholder="050 123 4567"
                      className="w-full bg-black/5 border border-black/10 rounded-xl px-4 py-3 text-sm text-black outline-none focus:border-green focus:ring-4 focus:ring-green/10 transition-all placeholder:text-black/60"
                    />
                  </div>
                </div>

                <div className="flex gap-3 pt-6 lg:pt-8">
                  <button
                    type="submit"
                    className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-full bg-black px-8 py-3.5 text-base font-bold text-white transition-all duration-300 ease-in-out hover:shadow-md hover:shadow-black/30 cursor-pointer flex-1"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <span className="flex text-lg items-center gap-2">
                        Start Application
                        <svg
                          aria-hidden="true"
                          className="lucide lucide-arrow-right w-5 h-5 transition-transform group-hover/button:translate-x-1"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                    </span>
                    <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
                      <div className="relative h-full w-10 bg-white/30"></div>
                    </div>
                  </button>
                </div>
              </form>

              <p className="text-[10px] text-black/60 text-center leading-normal px-4">
                By applying, you agree to our{' '}
                <a className="underline hover:text-black transition-colors" href="/terms-conditions/">
                  terms of service
                </a>{' '}
                and{' '}
                <a className="underline hover:text-black transition-colors" href="/privacy-policy/">
                  privacy policy
                </a>
                .
              </p>

              {/* Reviews Footer */}
              <div className="border-t border-black/10 pt-4">
                <div className="flex items-center justify-center gap-4">
                  <div className="flex -space-x-3 flex-shrink-0">
                    {[4, 5, 6, 7].map((index) => (
                      <Avatar
                        key={index}
                        index={index}
                        className="h-9 w-9 rounded-full border-2 border-white shadow-sm"
                      />
                    ))}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-1 mb-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          aria-hidden="true"
                          className="lucide lucide-star w-3 h-3 fill-[#c7982c] text-[#c7982c]"
                          fill="none"
                          height="24"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                        </svg>
                      ))}
                      <span className="text-black font-bold text-sm ml-1">4.9</span>
                    </div>
                    <p className="text-xs text-black/80 font-medium">1500+ Google Reviews</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top & Bottom Gradient Masks to fade sections smoothly */}
      <div className="absolute top-0 left-0 w-full h-24 md:h-28 bg-gradient-to-b from-[#fdfcfb] via-[#fdfcfb]/60 to-transparent z-20 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-28 bg-gradient-to-t from-[#fdfcfb] via-[#fdfcfb]/60 to-transparent z-20 pointer-events-none"></div>
    </section>
  )
}
