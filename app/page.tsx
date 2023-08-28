import strings from './en.json'
import { PREVIOUS_EMPLOYERS, PROFICIENCIES, SKILLS, SOCIALS } from './constants'

const Header = () => (
  <div className="space-y-3 border-b-2 pb-4 mr-4">
    <h1 className="text-4xl md:text-6xl">{strings.title}</h1>
    <h2 className="text-2xl md:text-3xl text-gray-400 font-light">
      {strings.subtitle}
    </h2>
    <div className="flex flex-row space-x-4">
      {SOCIALS.map(({ name, displayName, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          className="text-xl md:text-base text-blue-600 hover:underline hover:text-blue-300"
        >
          {displayName}
        </a>
      ))}
    </div>
  </div>
)

const ProfileIcon = () => (
  <img
    className="self-end rounded-full mx-auto"
    src="https://s3.us-west-2.amazonaws.com/naveenyadav.me/naveen_in_barcelona.png"
    alt="Naveen in Barcelona"
    height={400}
    width={400}
  ></img>
)

const List = ({ title, list }: { title: string; list: string[] }) => (
  <div className="basis-1/3">
    <h3 className="font-bold mb-2">{title}</h3>
    <ul className="list-disc pl-4">
      {list.map((entry) => (
        <li className="mb-2" key={entry}>
          {entry}
        </li>
      ))}
    </ul>
  </div>
)

const Content = () => (
  <section className="text-xl gap-3 md:flex md:flex-row md:text-sm">
    <List title={strings.previousEmployment} list={PREVIOUS_EMPLOYERS} />
    <List title={strings.skills} list={SKILLS} />
    <List title={strings.proficiencies} list={PROFICIENCIES} />
  </section>
)

// const ContactForm = () => (
//   <section>
//     <h3 className="text-xl">{strings.contact}</h3>
//     <form>
//       <label>{strings.name}</label>
//     </form>
//   </section>
// )

const Home = () => (
  <main className="min-h-screen p-8 md:p-0 md:pt-24">
    <div className="flex flex-col-reverse space-y-6 space-y-reverse md:flex-row">
      <div className="grow space-y-6">
        <Header />
        <Content />
      </div>
      <ProfileIcon />
    </div>
    {/** TODO: Add Contact Form */}
  </main>
)

export default Home
