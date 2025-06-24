import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function Work() {
  return (
    <div>
      <h1 className="mb-8 text-2xl font-bold text-neutral-900 dark:text-neutral-100 sm:text-4xl">
        Projetos
      </h1>

      <div className="flex flex-col gap-5">
        <div
          className="rounded-md border-2 border-neutral-800 bg-[#00c8f0] p-4 shadow-[4px_4px_0px_0px_#000] dark:bg-[#009dbd] sm:p-5"
        >
          <AspectRatio
            className="relative rounded-md border-2 border-neutral-800 shadow-[4px_4px_0px_0px_#000] mb-[-2px]"
            ratio={71 / 26}
          >
            <img
              className="h-full w-full rounded-md object-cover"
              src='/intaphoto.png'
              alt="inta"
            />
          </AspectRatio>

          <div className="mt-5 text-neutral-900 dark:text-neutral-100">
            <h2 className="text-xl font-bold sm:text-2xl">IntaCard</h2>
            <p className="mt-2 text-sm sm:text-base">Aplicativo Flutter para configuração do perfil, preview do cartão criado e total customização. Utiliza o
              Supabase com integração ao serviço de autenticação e Bucket para persistir imagens. Utilizando Next.js
              para compartilhar o conteúdo com Params ID.</p>

            <div className="mt-8 grid gap-5">
              <a
                className="rounded-md border-2 border-neutral-800 bg-white px-4 py-2 text-center text-sm font-medium text-black shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:bg-neutral-800 dark:text-white sm:text-base"
                href={'https://intacard.online/'}
                target="_blank"
              >
                Dar uma olhada!
              </a>
            </div>
          </div>
        </div>
        <div
          className="rounded-md border-2 border-neutral-800 bg-[#00c8f0] p-4 shadow-[4px_4px_0px_0px_#000] dark:bg-[#009dbd] sm:p-5"
        >
          <AspectRatio
            className="relative rounded-md border-2 border-neutral-800 shadow-[4px_4px_0px_0px_#000] mb-[-2px]"
            ratio={71 / 26}
          >
            <img
              className="h-full w-full rounded-md object-cover"
              src='/readint.png'
              alt="inta"
            />
          </AspectRatio>

          <div className="mt-5 text-neutral-900 dark:text-neutral-100">
            <h2 className="text-xl font-bold sm:text-2xl">Reading Tracker</h2>
            <p className="mt-2 text-sm sm:text-base">Aplicativo Flutter em processo de aprovação na Google Play, permite registrar suas leituras, buscando os
              dados do OpenLibrary. Persiste os dados com um banco SQLite local.</p>

            <div className="mt-8 grid gap-5">
              <a
                className="rounded-md border-2 border-neutral-800 bg-white px-4 py-2 text-center text-sm font-medium text-black shadow-[4px_4px_0px_0px_#000] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none dark:bg-neutral-800 dark:text-white sm:text-base"
                href={'https://github.com/GuinterZaffalon/readingtracker/'}
                target="_blank"
              >
                GitHub!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
