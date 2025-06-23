import {
  IconType,
  SiGithub,
  SiGmail,
  SiLinkerd,
  SiMedium,
} from '@icons-pack/react-simple-icons'
import { LucideLinkedin } from 'lucide-react';

export default function Links() {
  const links: { icon: IconType; href: string }[] = [
    {
      icon: SiGmail,
      href: 'mailto:guinterzafa@gmail.com',
    },
    {
      icon: SiGithub,
      href: 'https://github.com/GuinterZaffalon',
    },
    {
      icon: LucideLinkedin,
      href: 'https://www.linkedin.com/in/guinter-zaffalon-857131241/',
    },
    {
      icon: SiMedium,
      href: 'https://medium.com/@guinterzafa',
    },
  ]

  return (
    <div className="mr-auto mt-20 flex w-full flex-wrap items-center gap-10">
      {links.map((link, id) => {
        return (
          <a target="_blank" key={id} href={link.href}>
            <link.icon title="" />
          </a>
        )
      })}
    </div>
  )
}
