import icon from "../imagens/pipiipipi 1.png"
import Image from 'next/image'

export default function Home() {
  const links = [
    {
      color: "bg-card1",
      text: "Meus projetos pessoais! 💻",
      link: "https://github.com/GuinterZaffalon",
    },
    {
      color: "bg-card2",
      text: "Meu perfil no LinkedIn 🤝",
      link: "https://www.linkedin.com/in/guinter-zaffalon-857131241/",
    },
    {
      color: "bg-card3",
      text: "E-Mail para contato! 📧",
      link: "https://github.com",
    },
  ];

  return (
    <div className="w-full h-screen bg-background_page">
      <div className="max-w-2xl mx-auto h-screen">
        <div className="h-48 w-48 mx-auto">
          <div className="h-48 w-48 p-6 ">
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
          <p className="text-xl mt-3 font-normal">Mobile Developer</p>
        </div>
        <div className="flex flex-col gap-10">
          {links.map(({ text, color, link }, index) => {
            return (
              <a href={link} key={index} target="_blank">
                <div
                  className={`w-80 sm:w-96 mx-auto ${color} text-center text-xl font-bold py-3 border-2 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`}
                >
                  {text}
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  )
}