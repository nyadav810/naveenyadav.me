import strings from 'app/en.json'

import Emoji from '@/components/ui/emoji'

import Experience from './Experience'

export type WorkExperienceEntry = {
  employer: string
  title: string
  startDate: Date
  endDate?: Date
  location: string
  description?: string
}

const EXPERIENCE: WorkExperienceEntry[] = [
  {
    employer: 'Cruise',
    title: 'Senior Software Engineer',
    startDate: new Date(2021, 11),
    endDate: new Date(2023, 7),
    location: 'Seattle, WA',
    description: strings.cruiseDescription,
  },
  {
    employer: 'Amazon Web Services',
    title: 'Frontend Engineer II',
    startDate: new Date(2019, 9),
    endDate: new Date(2021, 10),
    location: 'Seattle, WA',
    description: strings.amazonDescription,
  },
  {
    employer: 'Groupon',
    title: 'Software Development Engineer II',
    startDate: new Date(2018, 6),
    endDate: new Date(2019, 9),
    location: 'Seattle, WA',
    description: strings.grouponDescription,
  },
  {
    employer: 'Liberty Mutual Insurance',
    title: 'Software Developer',
    startDate: new Date(2014, 6),
    endDate: new Date(2018, 5),
    location: 'Seattle, WA',
    description: strings.libertyDescription,
  },
]

const Timeline = () => (
  <section className="border-b-2 pt-4 pb-6">
    <h3 className="mb-4">
      <Emoji symbol="💼" label="briefcase" /> {strings.workExperience}
    </h3>
    {EXPERIENCE.map((entry, index) => (
      <Experience
        key={entry.employer}
        last={index === EXPERIENCE.length - 1}
        {...entry}
      />
    ))}
  </section>
)

export default Timeline
