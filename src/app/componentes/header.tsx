export async function Header() {
    return(
        <div className="flex justify-around">
            <div className="font-virgil text-black text-2xl">
                Home
            </div>
            <div className="flex flex-row font-virgil text-2xl">
                <div className="mr-4">
                    Sobre
                </div>
                <div className="mr-4">
                    Projetos
                </div>
                <div className="mr-4">
                    Contato
                </div>
            </div>
        </div>
    )
}