interface SearchJobButtonProps {
    position: string | undefined;
    seniority: string | undefined;
    modality: number | undefined;
    period: string | undefined;
}

export default function SearchJobButton({ position, seniority, modality, period }: SearchJobButtonProps) {
    function notWords(seniority: string) {
        const levels = ["Estagio", "Junior", "Pleno", "Senior"];
        
        // Verifica se o valor recebido é válido
        if (!seniority || !levels.includes(seniority)) return "";

        // Mapeia os níveis para excluir
        const excludedLevels = levels.filter(level => level !== seniority);
        
        // Cria a string de exclusão
        if (excludedLevels.length === 0) return "";
        
        return `NOT ${excludedLevels.join(" NOT ")}`;
    }

    const linkbase = "https://www.linkedin.com/jobs/search/?&keywords=";

    // Verifica se todos os parâmetros estão definidos
    if (!position || !seniority || !modality || !period) {
        return (
            <button disabled className="px-4 py-2 bg-gray-400 text-white rounded-lg cursor-not-allowed">
                Preencha todos os campos
            </button>
        );
    }

    return (
        <a 
            href={`${linkbase}${encodeURIComponent(position)} ${notWords(seniority)}&f_WT=${modality}&f_TPR=${period}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
            Buscar Vaga
        </a>
    );
}