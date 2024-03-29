import { SOCIALS } from 'app/constants'
import strings from 'app/en.json'

const Header = () => (
  <header className="space-y-3 border-b-2 pb-3 md:pb-2">
    <h1>{strings.title}</h1>
    <h2 className="text-gray-400 font-light">{strings.subtitle}</h2>
    <div className="flex gap-x-4 md:gap-x-2">
      {SOCIALS.map(
        ({ name, a11yText, bgColor, icon: Icon, url, iconProps }) => (
          <span
            key={name}
            className={'border-2 p-2.5 md:p-1 rounded-full hover:opacity-75'}
            style={{ backgroundColor: bgColor }}
          >
            <a aria-label={a11yText} href={url} target="_blank">
              <Icon {...iconProps} />
            </a>
          </span>
        )
      )}
    </div>
  </header>
)

export default Header
