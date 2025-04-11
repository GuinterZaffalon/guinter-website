import { Header } from "../componentes/header";

export default function Projetos() {
    return (
        <div className="w-full min-h-screen bg-white px-4">
            <Header />
            <div className="flex items-center justify-center flex-col p-4">
                <span className="font-virgil text-black text-4xl">Projetos</span>
                <div className="flex flex-col w-full gap-2">
                    <span className="text-2xl font-jetbrainsmono justify-center flex dark:text-black">Reading Tracker</span>
                    <span className="text-xl font-virgil text-justify w-1/2 dark:text-black">
                        Aplicativo para acompanhar leituras, permitindo ao
                        usuário registrar livros com sua avaliação, comentários
                        e informações sobre ele. Também há a possibilidade
                        de criar listas para leituras futuras ou organizar os
                        já lidos. Os dados dos livros são buscados pela API aberta do OpenLibrary.org e os dados persistidos com Sqlite.
                    </span>
                    <span className="text-xl font-virgil dark:text-black">Desenvolvido com: <span className="dark:text-black font-jetbrainsmono">Flutter, chamadas HTTP e Sqlite</span></span>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <span className="text-2xl font-jetbrainsmono justify-center flex dark:text-black">Write 4 Me</span>
                    <span className="text-xl font-virgil text-justify w-1/2 dark:text-black">
                        Aplicacao Web para escrever um README.md de um projeto open source com apenas
                        3 perguntas, assim gerando mais valor para seu repositorio e mostrando
                        para a comunidade formas de instalar e rodar o projeto, variando de linguagem
                        a lingugagem utilizada.
                    </span>
                    <span className="text-xl font-virgil dark:text-black">Desenvolvido com: <span className="dark:text-black font-jetbrainsmono">Next.Js e TailwindCss</span></span>
                </div>
                <div className="flex flex-col w-full gap-2">
                    <span className="text-2xl font-jetbrainsmono justify-center flex dark:text-black">Job Injection</span>
                    <span className="text-xl font-virgil text-justify w-1/2 dark:text-black">
                        Aplicacao Web para filtrar vagas no LinkedIn, retirando cerca de 83% das vagas
                        "fantasmas", assim mostrando apenas as vagas que realmente existem no mercado
                        e são aplicadas aos termos filtrados.
                    </span>
                    <span className="text-xl font-virgil dark:text-black">Desenvolvido com: <span className="dark:text-black font-jetbrainsmono">Next.Js e TailwindCss</span></span>
                </div>
            </div>
        </div>
    )
}