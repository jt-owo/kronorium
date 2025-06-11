export interface Card {
    id: string;
    title: string;
    description: string;
    type: 'offensive' | 'defensive';
}

export interface Player {
    id: string;
    name: string;
    lives: number;
    hand: Card[];
    incoming?: Card[];
}