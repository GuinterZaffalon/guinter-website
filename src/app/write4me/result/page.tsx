"use client";
import { useSearchParams } from 'next/navigation';
import { use, useEffect, useState } from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

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
    const [resultSelect, setResultSelect] = useState<string>('');

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

    useEffect(() => {
        const readyReadme = Template(readmeInputJson?.name || '', readmeInputJson?.describe || '', techInfo?.requisitos || [], techInfo?.instalacao || []);
        setResultSelect(readyReadme);
    }, [readmeInputJson, techInfo]);

    return (
        <div className="bg-white w-full min-h-screen">
            <div className="flex items-center justify-center pt-10 pb-5 gap-3 flex-col">
                <h1 className="text-4xl text-white font-lewis bg-black p-2 font-bold dark:text-white">WRITE 4 ME</h1>
                <div className=' lg:w-1/2 md:w-1/2 sm:w-1/2 xs:w-1/2'>
                <CopyBlock
                    text={resultSelect}
                    language={"markdown"}
                    showLineNumbers={true}
                    theme={dracula}
                    codeBlock={true}
                    codeBlockStyle={{ borderRadius: '5px' }}
                    />
                    </div>
            </div>
        </div>
    )
}

function Template(nome: string, describe: string, frameworkRequirements: string[], frameworkInstallation: string[]) {
    const requisitos = frameworkRequirements.join("\n- ");
    const instalacao = frameworkInstallation.join("\n");
    const template = `
# ${nome}

> ${describe}

## 📦 Instalação

\`\`\`
${instalacao}
\`\`\`

## 💻 Pré Requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

\`\`\`
- ${requisitos}
- Você tem uma máquina Windows / Linux / Mac
- Você conhece o git
\`\`\`

## 📫 Contribuindo para ${nome}

Para contribuir com ${nome}, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: \`git checkout -b <nome_branch>\`.
3. Faça suas alterações e confirme-as: \`git commit -m '<mensagem_commit>'\`
4. Envie para o branch original: \`git push origin <nome_repo>\`.
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
`

    return template;
};