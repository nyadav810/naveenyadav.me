import { SOCIALS } from 'app/constants'
import strings from 'app/en.json'

const Header = () => (
  <header className="space-y-3 border-b-2 pb-4">
    <h1>{strings.title}</h1>
    <h2 className="text-gray-400 font-light">{strings.subtitle}</h2>
    <div className="flex flex-row space-x-4">
      {SOCIALS.map(({ name, displayName, url }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          className="text-blue-600 hover:underline hover:text-blue-300"
        >
          {displayName}
        </a>
      ))}
    </div>
  </header>
)

export default Header
