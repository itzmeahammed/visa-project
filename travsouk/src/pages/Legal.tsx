import { PageHeader, Page } from '../components/PageShell'
import { BRAND } from '../data'

const content: Record<string, { eyebrow: string; title: string; sections: { h: string; p: string }[] }> = {
  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    sections: [
      { h: 'What we collect', p: 'We collect the information you give us to process a visa application — such as your name, contact details, passport and travel information — and basic analytics about how you use this website.' },
      { h: 'How we use it', p: 'Your information is used solely to assess eligibility, prepare and submit your application, and keep you updated. We never sell your data.' },
      { h: 'Who we share it with', p: 'We share documents only with the relevant consulates, visa centres and service partners strictly necessary to process your application.' },
      { h: 'Your rights', p: 'You can ask us to access, correct or delete your personal data at any time by emailing us.' },
      { h: 'Contact', p: `Questions about your data? Email ${BRAND.email}.` },
    ],
  },
  terms: {
    eyebrow: 'Legal',
    title: 'Terms & Conditions',
    sections: [
      { h: 'Our service', p: 'Travsouk provides visa assistance and document handling. We are not a government body and cannot guarantee the outcome of any application, which is decided solely by the relevant authority.' },
      { h: 'Your responsibilities', p: 'You agree to provide accurate, complete and genuine information and documents. False information may lead to refusal for which Travsouk is not responsible.' },
      { h: 'Fees', p: 'Our service fee is separate from government and visa-centre fees. Fees are agreed before we begin and explained in full.' },
      { h: 'Refunds', p: 'Where we mis-handle a file through our own error, our service-fee refund policy applies. Government and third-party fees are non-refundable.' },
      { h: 'Contact', p: `Questions about these terms? Email ${BRAND.email}.` },
    ],
  },
}

export default function Legal({ kind }: { kind: 'privacy' | 'terms' }) {
  const c = content[kind]
  return (
    <Page>
      <PageHeader eyebrow={c.eyebrow} title={c.title} sub="Last updated June 2026." />
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-5 pb-24 md:px-8">
          <div className="space-y-8">
            {c.sections.map((s) => (
              <div key={s.h}>
                <h2 className="text-xl font-bold">{s.h}</h2>
                <p className="mt-2 text-muted">{s.p}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Page>
  )
}
