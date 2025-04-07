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
    installation: string[];
}

export default function Result() {
    const searchParams = useSearchParams();
    const readmeInput = searchParams.get("readme");
    const [readeInputJson, setReadmeInputJson] = useState<Readme>();
    const [readmeTemplate, setReadmeTemplate] = useState<string>();

    useEffect(() => {
        if (readmeInput) {
            try {
                setReadmeInputJson(JSON.parse(readmeInput));
                console.log(readeInputJson);
            } catch (error) {
                console.error("Erro ao converter JSON:", error);
            }
        }
    }, []);

    return (
        <div className="bg-white w-full h-screen">
            <div className="flex items-center justify-center pt-10 pb-5 gap-3 flex-col">
                <h1 className="text-4xl text-white font-lewis bg-black p-2 font-bold dark:text-white">WRITE 4 ME</h1>
                <h2>{readeInputJson?.name}</h2>
                <p>{readeInputJson?.describe}</p>
                <p>{readeInputJson?.framework}</p>
            </div>
        </div>
    )
}