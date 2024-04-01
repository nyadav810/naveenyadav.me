import strings from 'app/en.json'
import { Github, Linkedin, LucideIcon, LucideProps } from 'lucide-react'

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const SOCIALS: {
  name: string
  hoverText: string
  a11yText: string
  url: string
  bgColor: string
  icon: LucideIcon
  iconProps: LucideProps
}[] = [
  {
    name: 'linkedin',
    hoverText: strings.linkedin,
    a11yText: strings.linkedinLinkA11yText,
    url: 'https://www.linkedin.com/in/naveen-yadav8000',
    bgColor: '#0a66c2',
    icon: Linkedin,
    iconProps: {
      color: '#fff',
    },
  },
  {
    name: 'github',
    hoverText: strings.github,
    a11yText: strings.githubLinkA11yText,
    url: 'https://github.com/nyadav810',
    bgColor: '#333',
    icon: Github,
    iconProps: {
      color: '#fff',
    },
  },
]

const Header = () => (
  <header className="space-y-3 border-b-2 pb-3 md:pb-2">
    <h1>{strings.title}</h1>
    <h2 className="text-gray-400 font-light">{strings.subtitle}</h2>
    <div className="flex gap-x-4 md:gap-x-2">
      {SOCIALS.map(
        ({
          name,
          hoverText,
          a11yText,
          bgColor,
          icon: Icon,
          url,
          iconProps,
        }) => (
          <TooltipProvider key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <span
                  className={
                    'border-2 p-2.5 md:p-1 rounded-full hover:opacity-75'
                  }
                  style={{ backgroundColor: bgColor }}
                >
                  <a aria-label={a11yText} href={url} target="_blank">
                    <Icon {...iconProps} />
                  </a>
                </span>
              </TooltipTrigger>
              <TooltipContent>{hoverText}</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )
      )}
    </div>
  </header>
)

export default Header
