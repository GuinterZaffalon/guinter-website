import Image from 'next/image'
import screen1 from "@/imagens/screenshot1RT.jpg"
import screen2 from "@/imagens/screenshotRT2.jpg"
import screen3 from "@/imagens/screenshotRT3.jpg"
import { Carousel } from "@material-tailwind/react";

export default function ReadingTracker() {
    return (
        <div className="w-full flex flex-row p-3">
            <div className="flex flex-col w-1/2 gap-2">
                <span className="text-2xl font-jetbrainsmono justify-center flex">Reading Tracker</span>
                <span className="text-xl font-virgil text-justify"> Aplicativo para acompanhar leituras, permitindo ao
                    usuario registrar livros com sua avaliação, comentários
                    e informações sobre ele. Também há a possibilidade
                    de criar listas para leituras futuras ou organizar os
                    já lidos. Os dados dos livros são buscados pela API aberta do OpenLibrary.org e os dados persistidos com Sqlite.</span>
                <span className="text-xl font-virgil">Desenvolvido com: <span className="font-jetbrainsmono">Flutter, chamadas HTTP e Sqlite</span> </span>
            </div>
            <div className="w-1/2 flex flex-col">
                {/* <Carousel className="rounded-xl" autoplay loop>
                    <div className="flex justify-center">
                        <Image
                            src={screen1}
                            height={500}
                            width={300}
                            alt="Reading Tracker"
                            className="rounded-xl"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src={screen2}
                            height={500}
                            width={300}
                            alt="Reading Tracker"
                            className="rounded-xl"
                        />
                    </div>
                    <div className="flex justify-center">
                        <Image
                            src={screen3}
                            height={500}
                            width={300}
                            alt="Reading Tracker"
                            className="rounded-xl"
                        />
                    </div>
                </Carousel> */}
            </div>
        </div>
    )
}
