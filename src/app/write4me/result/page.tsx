"use client";
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Result() {
    const searchParams = useSearchParams();
    const pedidos = searchParams.get("readme");

    return (
        <div className="bg-white w-full h-screen">
            <div className="flex items-center justify-center pt-10 pb-5 gap-3 flex-col">
                <h1 className="text-4xl text-white font-lewis bg-black p-2 font-bold dark:text-white">WRITE 4 ME</h1>
                <h2>{pedidos}</h2>
            </div>
        </div>
    )
}