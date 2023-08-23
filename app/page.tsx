import Image from 'next/image'
import { Section } from './components'

const previousEmployers = [
  {
    id: 0,
    name: 'Cruise',
  },
  {
    id: 1,
    name: 'Amazon Web Services',
  },
  {
    id: 2,
    name: 'Groupon',
  },
  {
    id: 3,
    name: 'Liberty Mutual',
  },
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl">Naveen Yadav</h1>
      <Section title="Previous Employers">
        {previousEmployers.map(({ id, name }) => (
          <Image
            key={id}
            src={`/images/${name}.jpg`}
            height={144}
            width={144}
            alt={name}
          />
        ))}
      </Section>
      <Section title="Skills"></Section>
    </main>
  )
}
