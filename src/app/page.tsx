import icon from "../imagens/pipiipipi 1.png"
import Image from 'next/image'
import { Header } from "./componentes/header";
import ReadingTracker from "./componentes/readingTracker";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <div className="flex-row flex mx-auto justify-around mt-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex flex-row gap-3">
            <span className="text-2xl font-virgil">olá!</span>
            <span className="text-3xl font-jetbrainsmono">Guinter Zaffalon</span>
            <span className="text-2xl font-virgil">aqui 👋</span>
          </div>
          <span className="text-xl font-virgil">Mobile and Web Developer!</span>
          <div className="mt-7 flex-col flex items-center justify-center" >
            <span className="text-2xl font-virgil">Hard Skills</span>
            <span className="text-xl font-jetbrainsmono">
              Flutter | Next.js | Swift && SwiftUI <br />
              Prisma | Postgres | Docker | Firebase
            </span>
          </div>
        </div>
        <Image
          src={icon}
          alt="icon do us"
          height={400}
          width={400}
          className=" rounded-full object-cover"
        />
      </div>
      <div className="items-center flex flex-col justify-center mt-5">
        <span className="text-3xl font-virgil">Projetos!</span>
        <ReadingTracker />
      </div>
    </div>
  )
}

{/* <Image
              src={icon}
              alt="icon do us"
              height={500}
              width={500}
              className="rounded-full object-cover"
            /> */}