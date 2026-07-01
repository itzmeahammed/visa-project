import { Link } from 'react-router-dom'
import { Page } from '../components/PageShell'

export default function NotFound() {
  return (
    <Page>
      <section className="grid min-h-[70vh] place-items-center bg-paper px-5 pt-32 text-center">
        <div>
          <div
            aria-hidden="true"
            className="font-serif text-[clamp(5rem,18vw,12rem)] italic leading-none text-green-deep"
          >
            404
          </div>
          <h1 className="mt-2 text-2xl font-bold">This route doesn’t have a visa.</h1>
          <p className="mx-auto mt-3 max-w-sm text-muted">
            The page you’re looking for has moved or never existed. Let’s get you
            back on the map.
          </p>
          <Link
            to="/"
            className="mt-7 inline-flex rounded-pill bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-green-deep focus:outline-none focus-visible:ring-2 focus-visible:ring-ink focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
          >
            <span aria-hidden="true">←</span> Back home
          </Link>
        </div>
      </section>
    </Page>
  )
}
