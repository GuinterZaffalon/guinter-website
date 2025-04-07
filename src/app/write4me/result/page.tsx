"use client";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

interface Readme {
    name: string;
    describe: string;
    framework: string;
}

interface framework {
    requisitos: string[];
    instalacao: string[];
}

export default function Result() {
    const searchParams = useSearchParams();
    const readmeInput = searchParams.get("readme");
    const [readmeInputJson, setReadmeInputJson] = useState<Readme>();
    const [techInfo, setTechInfo] = useState<framework | null>(null);

    useEffect(() => {
        if (readmeInput) {
            try {
                const json = JSON.parse(readmeInput);
                console.log(json);
                setReadmeInputJson(json);
                fetch("/write4me/tech.json")
                    .then((response) => response.json())
                    .then((data) => {
                        const selectTechInfo = data[json.framework];
                        console.log(data)
                        if (selectTechInfo) {
                            setTechInfo(selectTechInfo);
                        } else {
                            setTechInfo(null);
                        }
                    });
            } catch (error) {
                console.error("Erro ao converter JSON:", error);
            }
        }
    }, []);

    return (
        <div className="bg-white w-full h-screen">
            <div className="flex items-center justify-center pt-10 pb-5 gap-3 flex-col">
                <h1 className="text-4xl text-white font-lewis bg-black p-2 font-bold dark:text-white">WRITE 4 ME</h1>
                <h2>{readmeInputJson?.name}</h2>
                <p>{readmeInputJson?.describe}</p>
                <p>{readmeInputJson?.framework}</p>
                {techInfo && (
          <div className="mt-6 text-left max-w-2xl">
            <h3 className="text-xl font-bold mb-2">## 💻 Pré-requisitos</h3>
            <ul className="list-disc list-inside mb-4">
              {techInfo.requisitos.map((item, index) => (
                <li key={index}>- {item}</li>
              ))}
            </ul>

            <h3 className="text-xl font-bold mb-2">## 📦 Instalação</h3>
            <p>Para instalar o {readmeInputJson?.name}, siga estas etapas:</p>
            <pre className="bg-gray-100 p-2 rounded mt-2">
              {techInfo.instalacao.map((cmd, index) => (
                <div key={index}>{cmd}</div>
              ))}
            </pre>
          </div>
        )}
            </div>
        </div>
    )
}