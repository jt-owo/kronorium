import React from 'react';
import type { Card as CardType } from '../types';

import styles from './Card.module.scss';

const Card: React.FC<{ card: CardType; disabled?: boolean }> = ({
	card,
	disabled = false
}) => {
	return (
		<div
			className={`${styles.card} ${styles[card.type]} ${
				disabled ? styles.disabled : ''
			}`}>
			<h3>{card.title}</h3>
			<p>{card.description}</p>
		</div>
	);
};

export default Card;
