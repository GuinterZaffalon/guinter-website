"use client"

import icon from "../imagens/pipiipipi 1.png"
import Image from 'next/image'
import { Header } from "./componentes/header";
import screen1 from "@/imagens/screenshot1RT.jpg"
import screen2 from "@/imagens/screenshotRT2.jpg"
import screen3 from "@/imagens/screenshotRT3.jpg"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useState } from "react";
import Carrousel from "./componentes/carrousel";

function Arrow(props: {
  disabled: boolean
  left?: boolean
  onClick: (e: any) => void
}) {
  const disabled = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${props.left ? "arrow--left" : "arrow--right"
        } ${disabled}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [load, setLoad] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoad(true)
    },
  })

  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <div className="flex-row flex mx-auto justify-around mt-10">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="flex flex-row gap-3">
            <span className="text-2xl font-virgil dark:text-black">olá!</span>
            <span className="text-3xl font-jetbrainsmono dark:text-black">Guinter Zaffalon</span>
            <span className="text-2xl font-virgil dark:text-black">aqui 👋</span>
          </div>
          <span className="text-xl font-virgil dark:text-black">Mobile and Web Developer!</span>
          <div className="mt-7 flex-col flex items-center justify-center">
            <span className="text-2xl font-virgil dark:text-black">Hard Skills</span>
            <span className="text-xl font-jetbrainsmono dark:text-black">
              Flutter | Next.js | Swift && SwiftUI <br />
              Prisma | Postgres | Docker | Firebase
            </span>
          </div>
        </div>
        <Image
          src={icon}
          alt="icon do us"
          height={400}
          width={400}
          className="rounded-full object-cover"
        />
      </div>
      <div className="items-center flex flex-col justify-center mt-5">
        <span className="text-4xl font-virgil dark:text-black">Projetos!</span>
        <div className="w-full flex flex-row p-3">
          <div className="flex flex-col w-1/2 gap-2">
            <span className="text-2xl font-jetbrainsmono justify-center flex dark:text-black">Reading Tracker</span>
            <span className="text-xl font-virgil text-justify dark:text-black">
              Aplicativo para acompanhar leituras, permitindo ao
              usuário registrar livros com sua avaliação, comentários
              e informações sobre ele. Também há a possibilidade
              de criar listas para leituras futuras ou organizar os
              já lidos. Os dados dos livros são buscados pela API aberta do OpenLibrary.org e os dados persistidos com Sqlite.
            </span>
            <span className="text-xl font-virgil dark:text-black">Desenvolvido com: <span className="dark:text-black font-jetbrainsmono">Flutter, chamadas HTTP e Sqlite</span></span>
          </div>
        </div>
      </div>
    </div>
  )
}