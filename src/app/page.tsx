import InstagramIcon from "@/componentes/intagramIcon";

export default function Home() {

  var gambiarraForte: String = "</>"

  return (
    <main className="min-h-screen bg-gradient-to-r from-backgroundgradient1 to-backgroundgradient2 p-4">
      <div className="grid-rows-8 h-full w-full justify-center items-center">
        <div className="row-span-1 max-h-full flex justify-end p-3">
          <p className="text-white text-xl">{gambiarraForte}</p>
        </div>
        <div className="row-span-1 h-full w-full justify-center flex flex-col text-center gap-1">
          <p className="text-5xl">Guinter Zaffalon</p>
          <p className="text-2xl">Mobile Developer</p>
        </div>
        <div className="row-span-1 h-full w-full justify-center flex text-center p-4">
          <p className="text-3xl">Desenvolva seu mundo...</p>
        </div>
        <div className="row-span-6 w-full h-full justify-center flex gap-4">
          <div className="border border-b-slate-500 flex-row gap-5 flex h-full w-2/6">
            <div className="h-1/6 w-1/6">
              <InstagramIcon sizeHeight="80" sizeWidht="80"/>
            </div>
            <p>@zaffalonguinter no Instagram</p>
          </div>
        </div>
      </div>
    </main>
  );
}
