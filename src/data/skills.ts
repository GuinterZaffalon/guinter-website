import {
  type IconType,
  SiDocker,
  SiFlutter,
  SiNextdotjs,
  SiNginx,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiSwift,
  SiTailwindcss,
  SiTypescript,
} from '@icons-pack/react-simple-icons'

const SKILLS: { field: string; skills: { skill: string; icon: IconType }[] }[] =
  [
    {
      field: 'Full-Stack',
      skills: [
        { skill: 'nextjs', icon: SiNextdotjs },
        { skill: 'typescript', icon: SiTypescript },
        { skill: 'react', icon: SiReact },
        { skill: 'tailwind', icon: SiTailwindcss },
        { skill: 'node', icon: SiNodedotjs },
        {skill: 'docker', icon: SiDocker,},
        {skill: 'nginx', icon: SiNginx,},
        {skill: 'postgresql', icon: SiPostgresql}
      ],
    },
    {
      field: 'Mobile',
      skills: [
        { skill: 'flutter', icon: SiFlutter },
        { skill: 'swift', icon: SiSwift },
        { skill: 'supabase', icon: SiSupabase },
      ],
    },
  ]

export default SKILLS
