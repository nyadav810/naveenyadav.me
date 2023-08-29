import Header from 'app/components/Header'
import List from 'app/components/List'
import ProfileIcon from 'app/components/ProfileIcon'
import { PREVIOUS_EMPLOYERS, PROFICIENCIES, SKILLS } from 'app/constants'
import strings from 'app/en.json'

const Home = () => (
  <main className="min-h-screen p-8 md:p-0 md:pt-24">
    <div className="flex flex-col-reverse space-y-6 space-y-reverse md:flex-row">
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
    {/** TODO: Add Contact Form */}
  </main>
)

export default Home
