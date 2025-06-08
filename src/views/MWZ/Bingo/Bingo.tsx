import { FC, useState } from 'react';

import View from '../../../components/Layout/View/View';

import styles from './Bingo.module.scss';

const Bingo: FC = () => {
	const [card, setCard] = useState<string[]>([]);

    const PERK_CANS = [
        "Juggernog",
        "Quick Revive",
        "Deadshot Daiquiri",
        "Elemental Pop",
        "Tombstone Soda",
        "Speed Cola",
        "Stamin-Up",
        "PHD Flopper",
        "Death Perception"
    ];

    const STREAKS = [
        "Mortar Strike",
        "Sentry Turret",
        "Juggernaut"
    ]

    const LETHALS = [
        'Proximity Mine',
        'Sticky Grenade',
        'Molotov Cocktail',
        'Breacher Drone',
        'Frag Grenade',
        'Claymore',
        'Throwing Knife',
        'Thermite',
        'Drill Charge',
        'C4'
    ];

    const TACTICALS = [
        'Stun Grenade',
        'Smoke Grenade',
        'Scatter Mine',
        'Decoy Grenade',
        'Shockstick',
        'Stim',
        'Snapshot Grenade',
        'Experimental Gas'
    ];

    const AETHERIUM_CRYSTALS = [
        'Raw Aetherium Crystal',
        'Refined Aetherium Crystal',
        'Flawless Aetherium Crystal',
    ];

    const AETHER_TOOLS = [
        'Rare Aether Tool',
        'Epic Aether Tool',
    ];

    const AMMO_MODS = [
        'Brain Rot',
        'Cryo Freeze',
        'Napalm Burst',
        'Dead Wire',
        'Shatter Blast'
    ];

    const POWERUPS = [
        'Max Ammo',
        'Double Points',
        'Full Power',
        'Insta-Kill'
    ];

    const LOOT = [
        'Photo of a Dog',
        'Comic Book',
        'First Edition Comic Book',
        'Gold Skull',
        'Apsirin',
        'Gas Mask',
        'Medium Rucksack',
        'Large Rucksack',
        'Self-Revive',
		'3-Plate Vest'
    ];

    const WEAPONS = [
		'Epic Weapon',
        'Legendary Weapon',
        'Wonder Weapon'
    ];

    const ACTIVITIES = [
        'Clear Mercenary Camp',
        'Clear Mercenary Stronghold',
        'Clear Aether Nest',
        'Clear Infested Stronghold',
        'Destroy Aetherial Orb'
    ];

    const MISC = [
        'Summon Hellhound Buddy'
    ];

	let LIST = [
		...PERK_CANS,
		...STREAKS,
		...LETHALS,
		...TACTICALS,
		...AETHERIUM_CRYSTALS,
		...AETHER_TOOLS,
		...AMMO_MODS,
		...POWERUPS,
        ...LOOT,
        ...WEAPONS,
        ...ACTIVITIES,
        ...MISC
	];

	const generate = () => {
		let copy = [...LIST];
		let card = [];

		for (let i = 0; i < 25; i++) {
			const item = copy[Math.floor(Math.random() * copy.length)];
			let index = copy.indexOf(item);
			if (index !== -1) copy.splice(index, 1);
			card.push(item);
		}

		setCard(card);
	};

    const check = (e: React.MouseEvent) => {
        const element = e.currentTarget as HTMLDivElement;
        if (element.classList.contains(styles.checked))
            element.classList.remove(styles.checked);
        else
            element.classList.add(styles.checked);
    }

	if (card.length < 1) generate();

	return (
		<View>
			<div className={styles.grid}>
				{card &&
					card.map((c, i) => {
						return (
							<div key={`card${i}`} onClick={check}>
								<span>{c}</span>
							</div>
						);
					})}
			</div>
		</View>
	);
};

export default Bingo;
