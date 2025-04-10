export function Header() {
    return(
        <div className="flex justify-between mt-3">
            <div className="font-virgil text-black text-2xl pl-2">
                Home 
            </div>
            <div className="flex flex-row font-virgil text-black text-2xl gap-2">
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