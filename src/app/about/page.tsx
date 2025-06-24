"use client"

import Experience from "../../components/sections/experience";
import Skills from "../../components/sections/skills";


export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Sobre</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          Apaixonado por desenvolver soluções e obcecado por tudo que amo!
          Empenhado em dar o meu melhor em tudo o que pratico — foi assim que me tornei faixa preta e campeão sul-americano de Taekwondo. Da mesma forma, estou evoluindo continuamente minha senioridade como desenvolvedor.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
