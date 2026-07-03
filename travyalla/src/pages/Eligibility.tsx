import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Page } from '../components/PageShell'
import { BRAND } from '../data'

const ease = [0.22, 1, 0.36, 1] as const

/* ------------------------------------------------------------------ */
/* Assessment script — fully local, no API                             */
/* ------------------------------------------------------------------ */

const COUNTRIES = [
  'United States', 'United Kingdom', 'France', 'Germany', 'Italy', 'Spain',
  'Switzerland', 'Netherlands', 'Belgium', 'Austria', 'Greece', 'Portugal',
  'Sweden', 'Norway', 'Denmark', 'Finland', 'Ireland', 'Poland', 'Czech Republic',
  'Hungary', 'Canada', 'Australia', 'New Zealand', 'Japan', 'China', 'South Korea',
  'Singapore', 'Malaysia', 'Thailand', 'Vietnam', 'Indonesia', 'Philippines',
  'India', 'Pakistan', 'Bangladesh', 'Sri Lanka', 'Nepal', 'Türkiye', 'Georgia',
  'Azerbaijan', 'Armenia', 'Russia', 'Ukraine', 'Egypt', 'Morocco', 'South Africa',
  'Kenya', 'Nigeria', 'Brazil', 'Argentina', 'Mexico', 'United Arab Emirates',
  'Saudi Arabia', 'Qatar', 'Kuwait', 'Bahrain', 'Oman', 'Jordan', 'Lebanon', 'Iran',
]

type QuestionType = 'text' | 'phone' | 'options' | 'country'

interface Question {
  id: string
  dimension: 'TRV' | 'PSP' | 'TRH' | 'JOB' | 'RSK' | null
  tag: string
  bot: string[]
  type: QuestionType
  options?: string[]
  placeholder?: string
}

const QUESTIONS: Question[] = [
  {
    id: 'name',
    dimension: null,
    tag: 'Full Name',
    bot: ['Marhaba! 👋 I’m your Travsouk eligibility assistant.', 'Let’s begin your assessment — what’s your full name?'],
    type: 'text',
    placeholder: 'Type your full name…',
  },
  {
    id: 'phone',
    dimension: null,
    tag: 'Mobile Number',
    bot: ['Nice to meet you, {name}! We’ll need a way to reach you.', 'What’s your mobile number? (WhatsApp preferred)'],
    type: 'phone',
    placeholder: '+971 50 123 4567',
  },
  {
    id: 'destination',
    dimension: 'TRV',
    tag: 'Destination',
    bot: ['Perfect. Now for the fun part —', 'Where are you planning to travel?'],
    type: 'country',
    placeholder: 'Search a country…',
  },
  {
    id: 'purpose',
    dimension: 'TRV',
    tag: 'Purpose of Travel',
    bot: ['{destination} — excellent choice. ✈️', 'What’s the primary purpose of your trip?'],
    type: 'options',
    options: ['Tourism', 'Business', 'Family visit', 'Study'],
  },
  {
    id: 'nationality',
    dimension: 'PSP',
    tag: 'Your Nationality',
    bot: ['Running a quick passport strength analysis…', 'Which passport do you hold?'],
    type: 'country',
    placeholder: 'Search your nationality…',
  },
  {
    id: 'residency',
    dimension: 'PSP',
    tag: 'UAE Residency',
    bot: ['Residency verification —', 'Do you have a valid UAE residence visa?'],
    type: 'options',
    options: ['Yes', 'No'],
  },
  {
    id: 'history',
    dimension: 'TRH',
    tag: 'Travel History',
    bot: ['Let’s look at your travel history.', 'Have you travelled abroad before, or held a major visa? (USA / UK / Schengen / Canada / Australia)'],
    type: 'options',
    options: ['Yes', 'No'],
  },
  {
    id: 'employment',
    dimension: 'JOB',
    tag: 'Current Status',
    bot: ['Almost there — employment check.', 'What’s your current employment status?'],
    type: 'options',
    options: ['Employed', 'Business Owner', 'Freelancer', 'Not working'],
  },
  {
    id: 'bank',
    dimension: 'JOB',
    tag: 'Bank Statements',
    bot: ['Financial documentation review —', 'Do you maintain bank statements above AED 10,000?'],
    type: 'options',
    options: ['Yes', 'No'],
  },
  {
    id: 'salary',
    dimension: 'JOB',
    tag: 'Monthly Income',
    bot: ['And your monthly income range?'],
    type: 'options',
    options: ['Below AED 5,000', 'AED 5,000 – 15,000', 'AED 15,000+'],
  },
  {
    id: 'rejection',
    dimension: 'RSK',
    tag: 'Rejection History',
    bot: ['Last one — risk assessment.', 'Have you faced a USA / UK / Schengen visa rejection in the last 6 months?'],
    type: 'options',
    options: ['Yes', 'No'],
  },
]

const DIMENSIONS = [
  { key: 'TRV', label: 'Travel' },
  { key: 'PSP', label: 'Passport' },
  { key: 'TRH', label: 'History' },
  { key: 'JOB', label: 'Profile' },
  { key: 'RSK', label: 'Risk' },
] as const

function computeScore(a: Record<string, string>) {
  let score = 58
  if (a.residency === 'Yes') score += 9
  if (a.history === 'Yes') score += 10
  if (a.bank === 'Yes') score += 7
  if (a.salary === 'AED 15,000+') score += 9
  else if (a.salary === 'AED 5,000 – 15,000') score += 6
  if (a.employment === 'Employed' || a.employment === 'Business Owner') score += 6
  else if (a.employment === 'Freelancer') score += 3
  if (a.rejection === 'Yes') score -= 14
  return Math.max(48, Math.min(96, score))
}

function verdictFor(score: number) {
  if (score >= 80)
    return { title: 'Strong Eligibility', note: 'Your profile demonstrates strong qualification signals across all key dimensions.' }
  if (score >= 65)
    return { title: 'Good Eligibility', note: 'Your profile qualifies — a well-built file will maximise your approval odds.' }
  return { title: 'Specialist Review Advised', note: 'Your profile has potential — our specialists know exactly how to strengthen files like yours.' }
}

/* ------------------------------------------------------------------ */
/* Chat primitives                                                     */
/* ------------------------------------------------------------------ */

type Message = { role: 'bot' | 'user'; text: string }

function BotAvatar() {
  return (
    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-gradient-to-b from-[#23201b] to-[#0d0d0e] ring-1 ring-green/50 text-green-light text-[11px]">
      ✦
    </span>
  )
}

function TypingDots() {
  return (
    <div className="flex items-center gap-1 px-4 py-3">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-green-deep/60"
          animate={{ y: [0, -4, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function Eligibility() {
  const [started, setStarted] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [qIdx, setQIdx] = useState(-1)
  const [typing, setTyping] = useState(false)
  const [inputVisible, setInputVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [countryQuery, setCountryQuery] = useState('')
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [phase, setPhase] = useState<'chat' | 'analyzing' | 'result'>('chat')
  const scrollRef = useRef<HTMLDivElement>(null)
  const timeouts = useRef<number[]>([])

  const question = qIdx >= 0 && qIdx < QUESTIONS.length ? QUESTIONS[qIdx] : null

  useEffect(() => () => timeouts.current.forEach(clearTimeout), [])

  // Keep chat pinned to the latest message
  useEffect(() => {
    const el = scrollRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  }, [messages, typing, inputVisible, phase])

  const later = (fn: () => void, ms: number) => {
    timeouts.current.push(window.setTimeout(fn, ms))
  }

  const interpolate = (text: string, a: Record<string, string>) =>
    text
      .replace('{name}', (a.name ?? '').split(' ')[0] || 'traveller')
      .replace('{destination}', a.destination ?? '')

  const askQuestion = (idx: number, a: Record<string, string>) => {
    const q = QUESTIONS[idx]
    setQIdx(idx)
    setInputVisible(false)
    q.bot.forEach((line, i) => {
      later(() => setTyping(true), i === 0 ? 150 : 150 + i * 850)
      later(() => {
        setTyping(false)
        setMessages((m) => [...m, { role: 'bot', text: interpolate(line, a) }])
        if (i === q.bot.length - 1) setInputVisible(true)
      }, 800 + i * 850)
    })
  }

  const begin = () => {
    setStarted(true)
    askQuestion(0, {})
  }

  const submitAnswer = (value: string) => {
    if (!question) return
    const next = { ...answers, [question.id]: value }
    setAnswers(next)
    setMessages((m) => [...m, { role: 'user', text: value }])
    setInputValue('')
    setCountryQuery('')
    setInputVisible(false)

    if (qIdx + 1 < QUESTIONS.length) {
      askQuestion(qIdx + 1, next)
    } else {
      later(() => setTyping(true), 250)
      later(() => {
        setTyping(false)
        setMessages((m) => [...m, { role: 'bot', text: `Shukran, ${(next.name ?? '').split(' ')[0]}! Analysing your profile across 5 dimensions…` }])
      }, 1000)
      later(() => setPhase('analyzing'), 1900)
      later(() => setPhase('result'), 4400)
    }
  }

  const filteredCountries = useMemo(() => {
    const q = countryQuery.trim().toLowerCase()
    const list = q ? COUNTRIES.filter((c) => c.toLowerCase().includes(q)) : COUNTRIES
    return list.slice(0, 8)
  }, [countryQuery])

  const score = computeScore(answers)
  const verdict = verdictFor(score)
  const answeredDims = new Set(
    QUESTIONS.slice(0, Math.max(qIdx, 0)).map((q) => q.dimension).filter(Boolean)
  )

  const whatsappHref = `https://wa.me/${BRAND.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(
    `Hi TRAVSOUK, I completed the eligibility assessment (${verdict.title}, score ${score}/100).\n\nName: ${answers.name}\nMobile: ${answers.phone}\nDestination: ${answers.destination}\nPurpose: ${answers.purpose}\nNationality: ${answers.nationality}\nUAE residency: ${answers.residency}\nTravel history: ${answers.history}\nEmployment: ${answers.employment}\nBank statements >10k: ${answers.bank}\nIncome: ${answers.salary}\nRecent rejection: ${answers.rejection}\n\nPlease help me start my application.`
  )}`

  const factorRows: [string, string][] = [
    ['Destination', answers.destination ?? '—'],
    ['Purpose', answers.purpose ?? '—'],
    ['Nationality', answers.nationality ?? '—'],
    ['UAE Residency', answers.residency === 'Yes' ? 'Confirmed' : answers.residency ?? '—'],
    ['Travel History', answers.history ?? '—'],
    ['Employment', answers.employment ?? '—'],
    ['Bank Statements', answers.bank === 'Yes' ? 'Above AED 10,000' : 'Below AED 10,000'],
    ['Income Range', answers.salary ?? '—'],
    ['Visa Rejection', answers.rejection === 'No' ? 'No rejection' : 'Recent rejection'],
  ]

  return (
    <Page>
      <section className="relative min-h-screen bg-paper overflow-hidden pt-28 md:pt-32 pb-20 flex items-start justify-center">
        <div className="pointer-events-none absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 right-[-10%] h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(199,152,44,0.13),transparent_65%)]" />
          <div className="absolute bottom-[-15%] left-[-10%] h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgba(199,152,44,0.08),transparent_65%)]" />
        </div>

        <div className="relative z-10 w-full max-w-2xl px-4 md:px-6">
          {/* Header */}
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-green-deep">
              <span className="h-px w-6 bg-green/50" aria-hidden="true" />
              AI Eligibility Assessment
              <span className="h-px w-6 bg-green/50" aria-hidden="true" />
            </span>
            <h1 className="mt-3 text-3xl md:text-[2.5rem] font-extrabold -tracking-[0.03em] text-ink leading-tight">
              Am I <span className="accent font-normal text-green-deep">eligible?</span>
            </h1>
          </div>

          {/* Assessment console */}
          <div className="relative rounded-[26px] bg-white shadow-[0_24px_60px_-18px_rgba(15,15,16,0.22)] border border-cloud overflow-hidden">
            {/* Console header */}
            <div className="bg-gradient-to-b from-[#23201b] to-[#0d0d0e] px-6 md:px-7 py-4 text-white flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="relative grid h-9 w-9 place-items-center rounded-full bg-white/5 ring-1 ring-green/50 text-green-light">
                  ✦
                  <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full bg-status ring-2 ring-[#0d0d0e]" />
                </span>
                <div>
                  <div className="text-sm font-bold leading-tight">Travsouk Assistant</div>
                  <div className="text-[10px] text-white/45 font-semibold tracking-wide uppercase">
                    {phase === 'result' ? 'Assessment complete' : started ? `Question ${Math.min(qIdx + 1, QUESTIONS.length)} of ${QUESTIONS.length}` : 'Online — ~60 seconds'}
                  </div>
                </div>
              </div>
              {/* Dimension chips */}
              <div className="hidden sm:flex items-center gap-1.5" aria-hidden="true">
                {DIMENSIONS.map((d) => (
                  <span
                    key={d.key}
                    className={`rounded-md px-2 py-1 text-[9px] font-black tracking-wider transition-colors duration-500 ${
                      phase !== 'chat' || answeredDims.has(d.key)
                        ? 'bg-green/20 text-green-light border border-green/40'
                        : 'bg-white/5 text-white/30 border border-white/10'
                    }`}
                  >
                    {d.key}
                  </span>
                ))}
              </div>
            </div>

            {/* Body */}
            {!started ? (
              <div className="px-7 py-14 text-center">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-green-glow border border-green/25 text-3xl">⬡</div>
                <h2 className="mt-5 text-xl font-extrabold text-ink">Chat Assessment</h2>
                <p className="mt-2 text-sm text-muted max-w-sm mx-auto leading-relaxed">
                  Answer a few quick questions. Our engine analyses your profile across five eligibility dimensions — no documents needed.
                </p>
                <button
                  type="button"
                  onClick={begin}
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-3.5 text-sm font-bold text-white ring-1 ring-green/40 transition-all duration-300 hover:bg-black hover:shadow-lg hover:shadow-green/20 hover:-translate-y-0.5"
                >
                  Begin Assessment <span aria-hidden="true">→</span>
                </button>
              </div>
            ) : phase === 'analyzing' ? (
              <div className="px-7 py-16 text-center">
                <motion.div
                  className="mx-auto h-16 w-16 rounded-full border-2 border-green/20 border-t-green"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  aria-hidden="true"
                />
                <h2 className="mt-6 text-lg font-extrabold text-ink">Analysing your profile…</h2>
                <div className="mt-4 space-y-2 max-w-xs mx-auto text-left">
                  {['Passport strength', 'Travel history', 'Financial profile', 'Risk factors'].map((t, i) => (
                    <motion.div
                      key={t}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.5 }}
                      className="flex items-center gap-2 text-xs font-semibold text-muted"
                    >
                      <span className="text-green">✓</span> {t}
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : phase === 'result' ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="px-6 md:px-8 py-8"
              >
                {/* Score ring */}
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-28 w-28">
                    <svg viewBox="0 0 100 100" className="h-full w-full -rotate-90">
                      <circle cx="50" cy="50" r="42" fill="none" stroke="#e5e2db" strokeWidth="8" />
                      <motion.circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="url(#score-grad)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={2 * Math.PI * 42}
                        initial={{ strokeDashoffset: 2 * Math.PI * 42 }}
                        animate={{ strokeDashoffset: 2 * Math.PI * 42 * (1 - score / 100) }}
                        transition={{ duration: 1.4, ease, delay: 0.3 }}
                      />
                      <defs>
                        <linearGradient id="score-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#dfb046" />
                          <stop offset="100%" stopColor="#8f6a1c" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 grid place-items-center rotate-0">
                      <div>
                        <div className="text-2xl font-black text-ink leading-none">{score}</div>
                        <div className="text-[9px] font-bold text-muted uppercase tracking-wider mt-0.5">/ 100</div>
                      </div>
                    </div>
                  </div>
                  <h2 className="mt-4 text-2xl font-extrabold text-ink -tracking-[0.02em]">{verdict.title}</h2>
                  <p className="mt-2 text-sm text-muted leading-relaxed max-w-md">{verdict.note}</p>
                </div>

                {/* Factor analysis */}
                <div className="mt-7 rounded-2xl border border-cloud bg-paper p-5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-deep">
                    Factor Analysis — {answers.name}
                  </div>
                  <dl className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-sm">
                    {factorRows.map(([k, v]) => (
                      <div key={k} className="flex items-baseline justify-between gap-3 border-b border-cloud/60 py-1.5">
                        <dt className="text-muted text-xs font-semibold">{k}</dt>
                        <dd className="font-bold text-ink text-xs text-right">{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>

                {/* Next step */}
                <div className="mt-5 rounded-2xl border border-green/25 bg-green-glow p-5">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-green-deep">Recommended next step</div>
                  <p className="mt-1.5 text-sm text-ink/80 font-medium">
                    {score >= 65
                      ? 'You’re recommended to proceed with your visa application immediately — your concierge will secure the earliest slot.'
                      : 'Talk to a specialist first — we’ll strengthen your file before submission to protect your approval odds.'}
                  </p>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-status px-7 py-3.5 text-sm font-bold text-white shadow-[0_12px_28px_-10px_rgba(22,196,106,0.7)] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Talk to our Visa Expert <span aria-hidden="true">→</span>
                  </a>
                  <Link
                    to="/contact"
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white ring-1 ring-green/30 hover:bg-black hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Book a consultation
                  </Link>
                </div>
                <p className="mt-4 text-center text-[10px] text-ink/40">
                  This automated check is indicative. Your concierge verifies everything before filing.
                </p>
              </motion.div>
            ) : (
              <>
                {/* Chat stream */}
                <div ref={scrollRef} className="h-[380px] md:h-[420px] overflow-y-auto px-5 md:px-6 py-6 space-y-4 bg-[#fbfaf7]">
                  {messages.map((m, i) =>
                    m.role === 'bot' ? (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="flex items-end gap-2.5"
                      >
                        <BotAvatar />
                        <div className="max-w-[80%] rounded-2xl rounded-bl-md bg-white border border-cloud px-4 py-3 text-sm text-ink/85 leading-relaxed shadow-sm">
                          {m.text}
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.35, ease }}
                        className="flex justify-end"
                      >
                        <div className="max-w-[80%] rounded-2xl rounded-br-md bg-gradient-to-b from-[#23201b] to-[#0d0d0e] px-4 py-3 text-sm text-white leading-relaxed ring-1 ring-green/30">
                          {m.text}
                        </div>
                      </motion.div>
                    )
                  )}
                  {typing && (
                    <div className="flex items-end gap-2.5">
                      <BotAvatar />
                      <div className="rounded-2xl rounded-bl-md bg-white border border-cloud shadow-sm">
                        <TypingDots />
                      </div>
                    </div>
                  )}

                  {/* Quick replies */}
                  {inputVisible && question?.type === 'options' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease, delay: 0.1 }}
                      className="flex flex-wrap gap-2 pl-11"
                    >
                      {question.options!.map((o) => (
                        <button
                          key={o}
                          type="button"
                          onClick={() => submitAnswer(o)}
                          className="rounded-full border border-green/40 bg-white px-5 py-2.5 text-sm font-bold text-ink hover:bg-green-glow hover:border-green hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                        >
                          {o}
                        </button>
                      ))}
                    </motion.div>
                  )}

                  {/* Country picker */}
                  {inputVisible && question?.type === 'country' && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, ease, delay: 0.1 }}
                      className="pl-11 space-y-2"
                    >
                      <input
                        type="text"
                        value={countryQuery}
                        onChange={(e) => setCountryQuery(e.target.value)}
                        placeholder={question.placeholder}
                        autoFocus
                        className="w-full max-w-xs bg-white border border-cloud rounded-xl px-4 py-2.5 text-sm text-ink outline-none focus:border-green focus:ring-4 focus:ring-green/10 transition-all placeholder:text-ink/35"
                      />
                      <div className="flex flex-wrap gap-2">
                        {filteredCountries.map((c) => (
                          <button
                            key={c}
                            type="button"
                            onClick={() => submitAnswer(c)}
                            className="rounded-full border border-cloud bg-white px-4 py-2 text-xs font-bold text-ink/80 hover:border-green hover:bg-green-glow hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
                          >
                            {c}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Composer for free-text questions */}
                <div className="border-t border-cloud bg-white px-4 md:px-5 py-4">
                  {inputVisible && (question?.type === 'text' || question?.type === 'phone') ? (
                    <form
                      className="flex items-center gap-3"
                      onSubmit={(e) => {
                        e.preventDefault()
                        const v = inputValue.trim()
                        const valid = question.type === 'phone' ? v.replace(/\D/g, '').length >= 9 : v.length >= 2
                        if (valid) submitAnswer(v)
                      }}
                    >
                      <input
                        type={question.type === 'phone' ? 'tel' : 'text'}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        placeholder={question.placeholder}
                        autoFocus
                        aria-label={question.tag}
                        className="flex-1 bg-paper border border-cloud rounded-full px-5 py-3 text-sm text-ink outline-none focus:border-green focus:ring-4 focus:ring-green/10 transition-all placeholder:text-ink/35"
                      />
                      <button
                        type="submit"
                        disabled={
                          question.type === 'phone'
                            ? inputValue.replace(/\D/g, '').length < 9
                            : inputValue.trim().length < 2
                        }
                        aria-label="Send answer"
                        className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-ink text-white ring-1 ring-green/40 transition-all duration-300 hover:bg-black disabled:opacity-35"
                      >
                        <svg viewBox="0 0 24 24" className="w-4 h-4 translate-x-[1px]" fill="currentColor" aria-hidden="true">
                          <path d="M14.5 21.7a.5.5 0 0 0 .94-.02l6.5-19a.5.5 0 0 0-.64-.64l-19 6.5a.5.5 0 0 0-.02.94l7.93 3.18a2 2 0 0 1 1.11 1.11z" />
                        </svg>
                      </button>
                    </form>
                  ) : (
                    <p className="text-center text-[11px] text-ink/35 font-medium py-1.5">
                      {typing ? 'Assistant is typing…' : 'Choose an option above to continue'}
                    </p>
                  )}
                </div>
              </>
            )}
          </div>

          <p className="mt-4 text-center text-[11px] text-ink/45">
            Automated assessment — please verify details with our visa agent. Free &amp; without obligation.
          </p>
        </div>
      </section>
    </Page>
  )
}
