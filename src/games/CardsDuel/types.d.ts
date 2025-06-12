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

export interface Restriction {
    name: string;
    description: string;
};

export interface Round {
    map: {
        name: string;
        restrictions: Restriction[];
    };
    restrictions: Restriction[];
};

export interface Map {
    name: string;
    restrictions: Restriction[];
}