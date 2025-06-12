import { useState, type FC } from 'react';
import Container from '../../components/Layout/Container/Container';
import Buttons from '../../components/Layout/Buttons/Buttons';

import Button from '../../components/Button/Button';
import TextBox from '../../components/TextBox/TextBox';

import entries from './mwz_bingo.json';

import styles from './Bingo.module.scss';

type BingoCell = {
	challenge: string;
	checked: boolean;
};

const Bingo: FC = () => {
	const [cells, setCells] = useState<BingoCell[]>([]);

	const generate = () => {
		const copy: string[] = [];
		entries.entries.forEach((list) => {
			copy.push(...list);
		});

		const cardList: BingoCell[] = [];
		for (let i = 0; i < Math.pow(5, 2); i++) {
			const item = copy[Math.floor(Math.random() * copy.length)];
			const index = copy.indexOf(item);
			if (index !== -1) copy.splice(index, 1);
			cardList.push({
				challenge: item,
				checked: false
			});
		}

		setCells(cardList);
	};

	const check = (index: number) => {
		cells[index].checked = !cells[index].checked;
		setCells([...cells]);
	};

	if (cells.length < 1) generate();

	return (
		<Container id={styles['bingo']} flex>
			<h2>Modern Warfare Zombies Bingo</h2>
			<Buttons align="center">
				<Button onClick={generate}>Generate</Button>
			</Buttons>
			<label>
				<TextBox value={cells.filter((x) => x.checked).length} disabled />
			</label>
			<div className={styles['grid']}>
				{cells &&
					cells.map((c, i) => {
						return (
							<div
								key={i}
								className={c.checked ? styles['checked'] : ''}
								onClick={() => check(i)}>
								<span>{c.challenge}</span>
							</div>
						);
					})}
			</div>
		</Container>
	);
};

export default Bingo;
