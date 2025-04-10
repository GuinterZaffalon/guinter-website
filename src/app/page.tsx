"use client"
import icon from "../imagens/pipiipipi 1.png"
import Image from 'next/image'
import { Header } from "./componentes/header";
import { useState } from "react";

export default function Home() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <div className="flex-row items-center flex justify-around p-10 sm:flex-wrap ">
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
          className="rounded-3xl shadow-xl"
        />
      </div>
      {/* <div className="items-center flex flex-col justify-center mt-5">
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
      </div> */}
    </div>
  )
}