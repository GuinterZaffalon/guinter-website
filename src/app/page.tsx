import icon from "../imagens/pipiipipi 1.png"
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full h-screen bg-background_page">
      <div className="max-w-2xl mx-auto h-screen">
        <div className="h-48 w-48 mx-auto">
          <div className="h-48 w-48">
            <Image
              src={icon}
              alt="icon do us"
              height={500}
              width={500}
              className="rounded-full object-cover"
            />
          </div>
        </div>
        <div className="text-center p-6">
          <h1 className="text-4xl font-bold">Guinter Zaffalon</h1>
          <p className="text- mt-3">Mobile Developer</p>
        </div>
        <div className="">

        </div>
      </div>
    </div>
  )
}