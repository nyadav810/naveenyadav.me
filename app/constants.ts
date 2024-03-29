import strings from 'app/en.json'
import { Github, Linkedin, LucideIcon, LucideProps } from 'lucide-react'

export const SOCIALS: {
  name: string
  a11yText: string
  url: string
  bgColor: string
  icon: LucideIcon
  iconProps: LucideProps
}[] = [
  {
    name: 'linkedin',
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
    a11yText: strings.githubLinkA11yText,
    url: 'https://github.com/nyadav810',
    bgColor: '#333',
    icon: Github,
    iconProps: {
      color: '#fff',
    },
  },
]
