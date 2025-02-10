import icon from "../imagens/pipiipipi 1.png"
import Image from 'next/image'
import { Header } from "./componentes/header";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <div className="flex-row flex w-2/3 mx-auto">
        <div className="flex flex-col justify-center items-center gap-2 mt-32">
          <div className="flex flex-row gap-3">
            <span className="text-2xl font-virgil">olá!</span>
            <span className="text-3xl font-jetbrainsmono">Guinter Zaffalon</span>
            <span className="text-2xl font-virgil">aqui 👋</span>
          </div>
            <span className="text-xl font-virgil">Mobile and Web Developer!</span>
        </div>
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