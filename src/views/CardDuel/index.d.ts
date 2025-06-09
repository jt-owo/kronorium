type CardType = 'offensive' | 'defensive' | 'challenge';

export interface Card {
    id: string;
    title: string;
    description: string;
    type: CardType;
}

export interface Player {
    id: string;
    name: string;
    lives: number;
    hand: Card[];
    incoming?: Card[];
}