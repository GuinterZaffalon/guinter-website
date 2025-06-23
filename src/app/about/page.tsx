"use client"

import Experience from "../../components/sections/experience";
import Skills from "../../components/sections/skills";


export default function About() {
  return (
    <div className="font-base">
      <h1 className="mb-8 text-2xl font-heading sm:text-4xl">Sobre</h1>

      <div className="mb-10 text-base sm:text-lg">
        <p>
          Apaixonado por desenvolver soluções e obcecado por tudo
          que amo! Empenhado em dar meu melhor em tudo que prático, é assim
          que me tornei faixa preta e campeão Sul Americano no Taekwondo, e da mesma
          forma estou evoluindo minha senioriedade em desenvolvimento.
        </p>
      </div>

      <Skills />

      <Experience />
    </div>
  )
}
