import { Page } from '../components/PageShell'
import Hero from '../components/Hero'
import Destinations from '../components/Destinations'
import BetterWay from '../components/BetterWay'
import FAQ from '../components/FAQ'
import { CtaBand } from '../components/Footer'
import {
  Media,
  Features,
  TrackRecord,
  Premium,
  Reviews,
  Testimonials,
  Doorstep,
  Articles,
  TravelRingSection,
} from '../components/Sections'

export default function Home() {
  return (
    <Page>
      <Hero />
      <Media />
      <BetterWay />
      <TravelRingSection />
      <Destinations />
      <Features />
      <TrackRecord />
      <Premium />
      <Reviews />
      <Testimonials />
      <Doorstep />
      <Articles />
      <FAQ />
      <CtaBand />
    </Page>
  )
}
