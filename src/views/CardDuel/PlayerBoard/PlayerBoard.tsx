import type { Player } from '..';

import Card from '../Card/Card';

import styles from './PlayerBoard.module.scss';

interface Props {
	player: Player;
	onCardSelect?: (cardId: string) => void;
	onTarget?: () => void;
	isTargetable?: boolean;
	isSelf?: boolean;
	isActive?: boolean;
	isRoundStarted?: boolean;
	canPlayCards?: boolean;
}

const PlayerBoard: React.FC<Props> = ({
	player,
	onCardSelect,
	onTarget,
	isTargetable = false,
	isSelf = false,
	isActive = false,
	isRoundStarted = false,
	canPlayCards = false
}) => {
	return (
		<div
			className={`${styles.playerBoard} 
        ${isTargetable ? styles.targetable : ''} 
        ${isActive ? styles.active : ''}`}
			onClick={onTarget ? onTarget : undefined}>
			<h2>
				{player.name} - ❤️ {player.lives}
			</h2>
			<div className={styles.hand}>
				{player.hand.map((card) => (
					<div
						key={card.id}
						onClick={
							isSelf && canPlayCards && onCardSelect
								? () => onCardSelect(card.id)
								: undefined
						}>
						<Card card={card} />
					</div>
				))}
			</div>

			{player.incoming && player.incoming.length > 0 && (
				<div className={styles.incoming}>
					<h4>Incoming Restrictions:</h4>
					{player.incoming.map((c, i) => (
						<Card
							key={i}
							card={
								isRoundStarted
									? c
									: {
											...c,
											title: 'Hidden Card',
											description:
												'Will reveal on round start',
											type: 'offensive'
									  }
							}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default PlayerBoard;
