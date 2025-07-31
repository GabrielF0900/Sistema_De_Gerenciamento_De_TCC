export const StatusColor = {
    concluído: { cor: '#202D21', colorBackground: '#C8E6C9' },
    pendente: { cor: '#343534', colorBackground: '#E0E0E0' },
    desenvolvimento: { cor: '#1D3A56', colorBackground: '#BBDEFB' },
    atrasado: { cor: '#3F2C2C', colorBackground: '#FFCDD2' },
} as const;

export type StatusType = keyof typeof StatusColor;

// Função que recebe um status e retorna as cores correspondentes
export function getStatusColor(stats: string) {
    const colorData = StatusColor[stats as StatusType]; 
    // Retorna o objeto de cores ou um padrão caso status não exista
    return colorData ?? {
        cor: '#0000',
        colorBackground: '#00000',
    };
}
