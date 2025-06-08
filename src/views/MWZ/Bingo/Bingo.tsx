import { FC, useEffect, useState } from 'react';

import View from '../../../components/Layout/View/View';

import entries from './mwz_bingo.json';

import styles from './Bingo.module.scss';

const Bingo: FC = () => {
	const [cards, setCards] = useState<string[]>([]);
	const [checked, setChecked] = useState(0);

	const generate = () => {
		let copy: string[] = [];
		entries.entries.forEach((list) => {
			copy.push(...list);
		});

		let cardList = [];
		for (let i = 0; i < 25; i++) {
			const item = copy[Math.floor(Math.random() * copy.length)];
			let index = copy.indexOf(item);
			if (index !== -1) copy.splice(index, 1);
			cardList.push(item);
		}

		setCards(cardList);
	};

	const check = (e: React.MouseEvent) => {
		const element = e.currentTarget as HTMLDivElement;
		if (element.classList.contains(styles.checked)) {
			element.classList.remove(styles.checked);
		} else {
			element.classList.add(styles.checked);
		}

		const count = document.getElementsByClassName(styles.checked);
		setChecked(count.length);
	};

	if (cards.length < 1) generate();

	return (
		<View title="MWZ Bingo (Prototype)">
			<p>
				<button onClick={() => window.location.reload()}>Generate</button>
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
