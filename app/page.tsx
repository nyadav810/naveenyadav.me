import { Section } from './components'
import { PREVIOUS_EMPLOYERS, SKILLS } from './constants'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between p-24">
      <h1 className="text-6xl">Naveen Yadav</h1>
      <Section
        title="Previous Employers"
        entries={PREVIOUS_EMPLOYERS}
      ></Section>
      <Section title="Skills" entries={SKILLS}></Section>
      <Section title="Contact"></Section>
    </main>
  )
}
