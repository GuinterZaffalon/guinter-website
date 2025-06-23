// "use client"
// import icon from "../imagens/pipiipipi 1.png"
// import Image from 'next/image'
// import { Header } from "./componentes/header";

// export default function Home() {
//   return (
//     <div className="w-full min-h-screen bg-white px-4">
//       <Header />
//       <div className="items-center justify-center flex">
//         <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 mt-10 max-w-7xl w-full">
//           <div className="flex flex-col items-center md:items-start gap-4 text-center md:text-left">
//             <div className="flex gap-2 text-black">
//               <span className="text-2xl font-virgil">olá!</span>
//               <span className="text-3xl font-jetbrainsmono">Guinter Zaffalon</span>
//               <span className="text-2xl font-virgil">aqui 👋</span>
//             </div>
//             <span className="text-xl font-virgil text-black">Mobile and Web Developer!</span>
//             <div className="mt-5 flex flex-col items-center md:items-start justify-center gap-2">
//               <span className="text-2xl font-virgil text-black">Hard Skills</span>
//               <span className="text-xl font-jetbrainsmono text-black">
//                 Flutter | Next.js | Swift && SwiftUI <br />
//                 Typescript | PHP | Fastify | Node <br />
//                 Prisma | Postgres | Docker | Firebase
//               </span>
//             </div>
//           </div>
//           <Image
//             src={icon}
//             alt="icon do us"
//             height={300}
//             width={300}
//             className="rounded-3xl shadow-xl object-cover"
//           />
//         </div>
//       </div>
//     </div>
//   )
// }

// app/page.tsx
"use client"
import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">John Doe</h1>
      <p className="mt-2 text-lg sm:text-xl">Software Engineer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Hi, my name is John Doe, software engineer based in NYC.</p>

        <br />

        <p>
          This is the neobrutalism portfolio template. Check the{' '}
          <a
            target="_blank"
            className="font-heading underline"
            href="https://github.com/neobrutalism-templates/portfolio"
          >
            github repo
          </a>{' '}
          for more info.
        </p>
      </div>

      <Links />
    </div>
  )
}
