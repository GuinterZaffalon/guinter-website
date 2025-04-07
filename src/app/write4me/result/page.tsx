// "use client";
// import { useSearchParams } from 'next/navigation';
// import { use, useEffect, useState } from 'react';
// import { CopyBlock, dracula } from 'react-code-blocks';

// interface Readme {
//     name: string;
//     describe: string;
//     framework: string;
// }

// interface framework {
//     requisitos: string[];
//     instalacao: string[];
// }

// export default function Result() {
//     const searchParams = useSearchParams();
//     const readmeInput = searchParams.get("readme");
//     const [readmeInputJson, setReadmeInputJson] = useState<Readme>();
//     const [techInfo, setTechInfo] = useState<framework | null>(null);
//     const [resultSelect, setResultSelect] = useState<string>('');

//     useEffect(() => {
//         if (readmeInput) {
//             try {
//                 const json = JSON.parse(readmeInput);
//                 console.log(json);
//                 setReadmeInputJson(json);
//                 fetch("/write4me/tech.json")
//                     .then((response) => response.json())
//                     .then((data) => {
//                         const selectTechInfo = data[json.framework];
//                         console.log(data)
//                         if (selectTechInfo) {
//                             setTechInfo(selectTechInfo);
//                         } else {
//                             setTechInfo(null);
//                         }
//                     });
//             } catch (error) {
//                 console.error("Erro ao converter JSON:", error);
//             }
//         }
//     }, []);

//     useEffect(() => {
//         const readyReadme = Template(readmeInputJson?.name || '', readmeInputJson?.describe || '', techInfo?.requisitos || [], techInfo?.instalacao || []);
//         setResultSelect(readyReadme);
//     }, [readmeInputJson, techInfo]);

//     return (
//         <div className="bg-white w-full min-h-screen">
//             <div className="flex items-center justify-center pt-5 pb-5 gap-3 flex-col px-4">
//                 <h1 className="text-4xl text-white font-lewis bg-black p-2 font-bold dark:text-white">WRITE 4 ME</h1>
//                 <label className="block mb-2 text-xl font-nuno font-bold text-black dark:text-black"> Seu Readme está pronto ↓</label>
//                 <div className="w-full max-w-4xl overflow-auto rounded-md">
//                     <CopyBlock
//                         text={resultSelect}
//                         language={"markdown"}
//                         showLineNumbers={true}
//                         theme={dracula}
//                         codeBlock={true}
//                         codeBlockStyle={{ borderRadius: '5px', minWidth: '100%' }}
//                     />
//                 </div>
//             </div>
//             <label className="justify-center items-center text-center flex mb-2 text-xl font-nuno text-black dark:text-black"> Obrigado por usar Write4Me ❤</label>
//         </div>
//     );

// }

import ResultClient from "@/app/componentes/resultClient";
import { Suspense } from "react";

export default function ResultPage() {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="flex items-center justify-center pt-10 pb-5 gap-3 flex-col">
        <h1 className="text-4xl text-white font-lewis bg-black p-2 font-bold dark:text-white">
          WRITE 4 ME
        </h1>
        <label className="block mb-2 text-xl font-nuno font-bold text-black dark:text-black"> Seu Readme está pronto ↓</label>
        <Suspense fallback={<div>Carregando resultado...</div>}>
          <ResultClient />
        </Suspense>
      </div>
      <label className="justify-center items-center text-center flex mb-2 text-xl font-nuno text-black dark:text-black"> Obrigado por usar Write4Me ❤</label>
    </div>
  );
}
