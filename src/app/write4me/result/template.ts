export function Template(nome: string, describe: string, frameworkRequirements: string, frameworkInstallation: string) {
    const template = `
# ${nome}

> ${describe}

## 📦 Instalação

\`\`\`bash
${frameworkInstallation}
\`\`\`

## 💻 Pré Requisitos

Antes de começar, verifique se você atendeu aos seguintes requisitos:

\`\`\`bash
${frameworkRequirements}
- Você tem uma máquina Windows / Linux / Mac
- Você conhece o git
\`\`\`

## 📫 Contribuindo para <readingtracker>

Para contribuir com <nome_do_projeto>, siga estas etapas:

1. Bifurque este repositório.
2. Crie um branch: \`git checkout -b <nome_branch>\`.
3. Faça suas alterações e confirme-as: \`git commit -m \`<mensagem_commit>'\`
4. Envie para o branch original: \`git push origin <readingtracker>\`.
5. Crie a solicitação de pull.

Como alternativa, consulte a documentação do GitHub em [como criar uma solicitação pull](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
`

    return template;
};