"use client"
import Links from '@/components/links'

export default function Home() {
  return (
    <div className="font-base">
      <h1 className="text-2xl font-heading sm:text-4xl">Guinter Zaffalon</h1>
      <p className="mt-2 text-lg sm:text-xl">Mobile and Web Developer</p>
      <div className="mt-8 text-base sm:text-lg">
        <p>Olá, meu nome é Guinter Zaffalon e sou obcecado por construir soluções!</p>

        <br />

        <p>Construindo em público e sempre que possível apoiando a comunidade, ciclista de estrada, faixa preta e alguns ótimos feitos no Taekwondo!</p>
      </div>
      <Links />
    </div>
  )
}

