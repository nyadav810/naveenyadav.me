import { PREVIOUS_EMPLOYERS, PROFICIENCIES, SKILLS } from 'app/constants'
import strings from 'app/en.json'

import ContactForm from '@/components/ContactForm'
import Header from '@/components/Header'
import List from '@/components/List'
import ProfileIcon from '@/components/ProfileIcon'

const Home = () => (
  <main className="min-h-screen p-8 md:p-0 md:pt-12">
    <div className="flex flex-col-reverse space-y-6 space-y-reverse md:flex-row border-b-2">
      <div className="grow space-y-6">
        <Header />
        <section className="text-xl gap-3 md:flex md:flex-row md:text-sm">
          <List title={strings.previousEmployment} list={PREVIOUS_EMPLOYERS} />
          <List title={strings.skills} list={SKILLS} />
          <List title={strings.proficiencies} list={PROFICIENCIES} />
        </section>
      </div>
      <ProfileIcon />
    </div>
    <ContactForm />
  </main>
)

export default Home
