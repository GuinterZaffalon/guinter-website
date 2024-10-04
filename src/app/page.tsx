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
      </div>
    </main>
  );
}
