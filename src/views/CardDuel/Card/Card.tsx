import React from 'react';
import type { Card as CardType } from '..';

import styles from './Card.module.scss';

const Card: React.FC<{ card: CardType }> = ({ card }) => {
	return (
		<div className={`${styles.card} ${styles[card.type]}`}>
			<h3>{card.title}</h3>
			<p>{card.description}</p>
		</div>
	);
};

export default Card;
