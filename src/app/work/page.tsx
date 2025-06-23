import PROJECTS from '@/data/projects'
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Work() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-neutral-900 dark:text-neutral-100 sm:text-4xl">
        Work
      </h1>

      <div className="flex flex-col gap-5">
        {PROJECTS.map((project, id) => (
          <div
            key={id}
            className="rounded-md border-2 border-neutral-800 bg-[#ff7a05] p-4 shadow-[4px_4px_0px_0px_#000] dark:bg-[#eb6d00] sm:p-5"
          >
            <AspectRatio
              className="relative rounded-md border-2 border-neutral-800 shadow-[4px_4px_0px_0px_#000] mb-[-2px]"
              ratio={71 / 26}
            >
              <img
                className="h-full w-full rounded-md object-cover"
                src={`${project.previewImage}`}
                alt={project.name}
              />
            </AspectRatio>

            <div className="mt-5 text-neutral-900 dark:text-neutral-100">
              <h2 className="text-xl font-bold sm:text-2xl">{project.name}</h2>
              <p className="mt-2 text-sm sm:text-base">{project.description}</p>

              <div className="mt-8 grid grid-cols-2 gap-5">
                <a
                  className="rounded-md border-2 border-neutral-800 bg-white px-4 py-2 text-center text-sm font-medium text-black shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:bg-neutral-800 dark:text-white sm:text-base"
                  href={project.liveLink}
                  target="_blank"
                >
                  Visit
                </a>
                <a
                  className="rounded-md border-2 border-neutral-800 bg-white px-4 py-2 text-center text-sm font-medium text-black shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:bg-neutral-800 dark:text-white sm:text-base"
                  href={project.repoUrl}
                  target="_blank"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
