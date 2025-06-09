import { useState, type FC } from 'react';

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
		const copy: string[] = [];
		entries.entries.forEach((list) => {
			copy.push(...list);
		});

		const cardList: BingoCard[] = [];
		for (let i = 0; i < Math.pow(5, 2); i++) {
			const item = copy[Math.floor(Math.random() * copy.length)];
			const index = copy.indexOf(item);
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

		const count = cards.filter((x) => x.checked);
		setChecked(count.length);
	};

	if (cards.length < 1) generate();

	return (
		<View title="Modern Warfare Zombies Bingo">
			<h3>Prototype</h3>
			<p>
				<button onClick={() => generate()}>Generate</button>
			</p>
			<label>
				Points:
				<div className="result">{checked}</div>
			</label>
			<div className={styles['grid']}>
				{cards &&
					cards.map((c, i) => {
						return (
							<div
								key={`card${i}`}
								className={c.checked ? styles['checked'] : ''}
								onClick={() => check(i)}>
								<span>{c.challenge}</span>
							</div>
						);
					})}
			</div>
		</View>
	);
};

export default Bingo;
