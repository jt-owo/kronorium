import Card from '../Card/Card';
import type { Player } from '../types';

import styles from './PlayerBoard.module.scss';

const LIFE_ICON = '❤️';

interface PlayerBoardProps {
	player: Player;
	isTargetable: boolean;
	isSelf: boolean;
	isActive: boolean;
	isRoundActive: boolean;
	onTarget: () => void;
	onCardSelect: (cardId: string) => void;
}

const PlayerBoard: React.FC<PlayerBoardProps> = ({
	player,
	onCardSelect,
	onTarget,
	isTargetable = false,
	isSelf = false,
	isActive = false,
	isRoundActive = false
}) => {
	return (
		<div
			className={`
                ${styles['player-board']} 
                ${isTargetable ? styles.targetable : ''} 
                ${isActive ? styles.active : ''}
            `}
			onClick={onTarget}>
			<h2>
				{player.name} - {LIFE_ICON.repeat(player.lives)}
			</h2>
			<div className={styles.hand}>
				{isActive &&
					player.hand.map((card) => (
						<div
							key={card.id}
							onClick={
								isSelf && !isRoundActive && isActive
									? () => onCardSelect(card.id)
									: undefined
							}>
							<Card card={card} />
						</div>
					))}
			</div>

			{player.incoming && player.incoming.length > 0 && (
				<div className={styles.incoming}>
					<h4>Restrictions:</h4>
					{player.incoming.map((c, i) => (
						<Card
							key={i}
							disabled
							card={
								isRoundActive
									? c
									: {
											...c,
											title: 'Hidden Card',
											description:
												'Will be revealed on round start',
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
