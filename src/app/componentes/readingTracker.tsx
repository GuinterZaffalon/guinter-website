import Image from 'next/image'
import screen from "../imagens/screenshot1RT.jpg"

export default function ReadingTracker() {
    return (
        <div className="w-full flex flex-row p-3">
            <div className="flex flex-col w-1/2 gap-2">
                <span className="text-2xl font-jetbrainsmono justify-center flex">Reading Tracker</span>
                <span className="text-xl font-virgil text-justify"> Aplicativo para acompanhar leituras, permitindo ao
                    usuario registrar livros com sua avaliação, comentários
                    e informações sobre o ele. Também há a possibilidade
                    de criar listas para leituras futuras ou organizar os
                    já lidos. Os dados dos livros são buscados pela API aberta do OpenLibrary.org e os dados persistidos com Sqlite</span>
                <span className="text-xl font-virgil">Desenvolvido com: <span className="font-jetbrainsmono">Flutter, chamadas HTTP e Sqlite</span> </span>
            </div>
            <div className="w-1/2 flex-row flex">
                <Image
                    src={screen}
                    height={700}
                    width={300}
                    alt="Reading Tracker"
                />
            </div>
        </div>
    )
}