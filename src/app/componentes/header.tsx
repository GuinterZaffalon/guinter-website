export function Header() {
    return(
        <div className="flex justify-between p-4">
            <div className="font-virgil text-black text-2xl pl-2">
                Home 
            </div>
            <div className="flex flex-row font-virgil text-black text-2xl gap-2">
                <div className="mr-4">
                     <a href="https://github.com/GuinterZaffalon">Projetos</a>
                </div>
                {/* <div className="mr-4">
                    Contato
                </div> */}
            </div>
        </div>
    )
}