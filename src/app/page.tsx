import InstagramIcon from "@/componentes/intagramIcon";

export default function PaginaTeste() {
    return(
        <div className="w-full h-screen bg-background_page">
            <div className="max-w-2xl mx-auto h-screen">
                <Image 
                src={icon}
                alt="icon do us"
                />
            </div>
        <div className="row-span-1 h-full w-full justify-center flex flex-col text-center gap-1">
          <p className="text-5xl">Guinter Zaffalon</p>
          <p className="text-2xl">Mobile Developer</p>
        </div>
        <div className="row-span-1 h-full w-full justify-center flex text-center p-4">
          <p className="text-3xl">Desenvolva seu mundo...</p>
        </div>
        <div className="row-span-6 w-full h-full justify-center items-center flex-col flex gap-4">
          <div className="border border-b-slate-500 rounded-lg flex-row gap-5 flex h-full w-2/6">
            <InstagramIcon sizeHeight="80" sizeWidht="80"/>
            <p>@zaffalonguinter</p>
          </div>
          <div className="border border-b-slate-500 rounded-lg flex-row gap-5 flex h-full w-2/6">
            <InstagramIcon sizeHeight="80" sizeWidht="80"/>
            <p>@zaffalonguinter</p>
          </div>
          <div className="border border-b-slate-500 rounded-lg flex-row gap-5 flex h-full w-2/6">
            <InstagramIcon sizeHeight="80" sizeWidht="80"/>
            <p>@zaffalonguinter</p>
          </div>
          <div className="border border-b-slate-500 rounded-lg flex-row gap-5 flex h-full w-2/6">
            <InstagramIcon sizeHeight="80" sizeWidht="80"/>
            <p>@zaffalonguinter</p>
          </div>
        </div>
      </div>
    </main>
  );
}
