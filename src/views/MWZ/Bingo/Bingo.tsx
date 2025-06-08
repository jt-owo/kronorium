import { FC, useEffect, useState } from 'react';

import View from '../../../components/Layout/View/View';

import entries from './mwz_bingo.json';

import styles from './Bingo.module.scss';

type BingoCard = {
	challenge: string;
	checked: boolean;
};

const Bingo: FC = () => {
	const [cards, setCards] = useState<BingoCard[]>([]);
	const [checked, setChecked] = useState(0);

	const generate = () => {
		let copy: string[] = [];
		entries.entries.forEach((list) => {
			copy.push(...list);
		});

		let cardList: BingoCard[] = [];
		for (let i = 0; i < Math.pow(5, 2); i++) {
			const item = copy[Math.floor(Math.random() * copy.length)];
			let index = copy.indexOf(item);
			if (index !== -1) copy.splice(index, 1);
			cardList.push({
				challenge: item,
				checked: false
			});
		}

		setCards(cardList);
	};

	const check = (index: number) => {
		const copy = [...cards];
		copy[index].checked = !copy[index].checked;
		setCards(copy);

		const count = document.getElementsByClassName(styles.checked);
		setChecked(count.length);
	};

	if (cards.length < 1) generate();

	return (
		<View title="MWZ Bingo (Prototype)">
			<p>
				<button onClick={() => generate()}>Generate</button>
			</p>
			<p>
				<span>
					<b>
						<u>Points:</u> {checked}
					</b>
				</span>
			</p>
			<div className={styles.grid}>
				{cards &&
					cards.map((c, i) => {
						return (
							<div key={`card${i}`} className={c.checked ? styles.checked : ''} onClick={() => check(i)}>
								<span>{c.challenge}</span>
							</div>
						);
					})}
			</div>
		</View>
	);
};

export default Bingo;
