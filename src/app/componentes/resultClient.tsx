// components/ResultClient.tsx
"use client";

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CopyBlock, dracula } from 'react-code-blocks';

interface Readme {
  name: string;
  describe: string;
  framework: string;
}

interface Framework {
  requisitos: string[];
  instalacao: string[];
}

export default function ResultClient() {
  const searchParams = useSearchParams();
  const readmeInput = searchParams.get("readme");
  const [readmeInputJson, setReadmeInputJson] = useState<Readme>();
  const [techInfo, setTechInfo] = useState<Framework | null>(null);
  const [resultSelect, setResultSelect] = useState<string>("");

  useEffect(() => {
    if (readmeInput) {
      try {
        const json = JSON.parse(readmeInput);
        setReadmeInputJson(json);
        fetch("/write4me/tech.json")
          .then((res) => res.json())
          .then((data) => {
            const selectTechInfo = data[json.framework];
            setTechInfo(selectTechInfo || null);
          });
      } catch (err) {
        console.error("Erro ao converter JSON:", err);
      }
    }
  }, [readmeInput]);

  useEffect(() => {
    if (readmeInputJson && techInfo) {
      const readyReadme = Template(
        readmeInputJson.name,
        readmeInputJson.describe,
        techInfo.requisitos,
        techInfo.instalacao
      );
      setResultSelect(readyReadme);
    }
  }, [readmeInputJson, techInfo]);

  return (
    <div className="w-full max-w-4xl overflow-auto rounded-md px-4">
      <CopyBlock
        text={resultSelect}
        language={"markdown"}
        showLineNumbers
        theme={dracula}
        codeBlock
        codeBlockStyle={{ borderRadius: "5px", minWidth: "100%" }}
      />
    </div>
  );
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
