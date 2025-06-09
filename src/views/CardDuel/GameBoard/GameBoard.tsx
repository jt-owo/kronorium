import { useEffect, useRef, useState } from 'react';
import { cards as allCards } from '../data/cards';
import { maps } from '../data/maps';
import type { Player } from '..';
import { baseRestrictions } from '../data/baseRestrictions';

import PlayerBoard from '../PlayerBoard/PlayerBoard';

import styles from './GameBoard.module.scss';

const MAX_LIVES = 3;
const CARDS_PER_PLAYER = 3;

function shuffleArray<T>(arr: T[]): T[] {
	const array = [...arr];
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

const initialPlayersData = [
	{ id: 'p1', name: 'Player 1', lives: MAX_LIVES },
	{ id: 'p2', name: 'Player 2', lives: MAX_LIVES }
];

const GameBoard: React.FC = () => {
	const [players, setPlayers] = useState<Player[]>([]);
	const [selectedCard, setSelectedCard] = useState<{
		playerId: string;
		cardId: string;
	} | null>(null);
	const [activePlayerIndex, setActivePlayerIndex] = useState<number>(-1);
	const activePlayerId =
		activePlayerIndex >= 0 && players.length > 0
			? players[activePlayerIndex]?.id
			: '';
	const [currentMap, setCurrentMap] = useState('');
	const [baseRestriction, setBaseRestriction] = useState('');
	const [log, setLog] = useState<string[]>([]);
	const [isRoundStarted, setIsRoundStarted] = useState(false);
	const [isSelectingWinner, setIsSelectingWinner] = useState(false);
	const [turnCount, setTurnCount] = useState(0);
	const [roundTimer, setRoundTimer] = useState<number>(0);
	const timerRef = useRef<number | null>(null);
	const [winner, setWinner] = useState<string | null>(null);
	const [deck, setDeck] = useState(allCards);

	const addLog = (message: string) => {
		setLog((prev) => [message, ...prev]);
	};

	const startGame = () => {
		setLog([]);
		setIsRoundStarted(false);
		setTurnCount(0);
		const newMap = maps[Math.floor(Math.random() * maps.length)];
		const newRestriction =
			baseRestrictions[
				Math.floor(Math.random() * baseRestrictions.length)
			];
		setCurrentMap(newMap);
		setBaseRestriction(newRestriction);

		const newDeck = shuffleArray(allCards);
		const dealtPlayers: Player[] = initialPlayersData.map((p, idx) => {
			const startIdx = idx * CARDS_PER_PLAYER;
			const handCards = newDeck.slice(
				startIdx,
				startIdx + CARDS_PER_PLAYER
			);
			return {
				...p,
				lives: MAX_LIVES,
				hand: handCards,
				incoming: []
			};
		});
		setDeck(newDeck.slice(initialPlayersData.length * CARDS_PER_PLAYER));

		setPlayers(dealtPlayers);
		setActivePlayerIndex(0); // first player active to start pre-round turns
		setSelectedCard(null);
		setIsSelectingWinner(false);
		addLog(
			`🎮 Game started! Map: ${newMap}, Restriction: ${newRestriction}`
		);
		addLog(`⏳ Pre-round: each player has 1 turn before round starts.`);
	};

	const handleCardSelect = (playerId: string, cardId: string) => {
		if (isRoundStarted) return; // no selects during round
		if (isSelectingWinner) return; // no selects during loser selection
		if (activePlayerIndex < 0) return; // no active player no select
		if (playerId !== activePlayerId) return; // only active player can select
		if (selectedCard) return; // already selected

		setSelectedCard({ playerId, cardId });
		addLog(`${players[activePlayerIndex].name} selected a card`);
	};

	const handlePlayerTarget = (targetId: string) => {
		if (isRoundStarted) return; // no plays during round
		if (isSelectingWinner) return; // no plays during loser select
		if (!selectedCard) return;
		if (activePlayerIndex < 0) return;
		if (targetId === activePlayerId) {
			alert("You can't target yourself!");
			return;
		}

		const updatedPlayers = [...players];
		const sourcePlayer = updatedPlayers.find(
			(p) => p.id === selectedCard.playerId
		)!;
		const targetPlayer = updatedPlayers.find((p) => p.id === targetId)!;
		const card = sourcePlayer.hand.find(
			(c) => c.id === selectedCard.cardId
		)!;

		sourcePlayer.hand = sourcePlayer.hand.filter(
			(c) => c.id !== selectedCard.cardId
		);
		targetPlayer.incoming = [...(targetPlayer.incoming || []), card];

		setPlayers(updatedPlayers);
		addLog(
			`${sourcePlayer.name} played "${card.title}" on ${targetPlayer.name}`
		);

		setSelectedCard(null);

		// advance turn
		const nextTurnCount = turnCount + 1;
		setTurnCount(nextTurnCount);

		if (nextTurnCount >= players.length) {
			// all players took their pre-round turn
			setActivePlayerIndex(-1); // no active player now
			setIsRoundStarted(true);
			addLog(
				`🏁 All players have taken their pre-round turn. Round officially started!`
			);
		} else {
			const nextPlayerIndex = (activePlayerIndex + 1) % players.length;
			setActivePlayerIndex(nextPlayerIndex);
			addLog(
				`⏳ Pre-round turn ${nextTurnCount} / ${players.length} completed.`
			);
		}
	};

	const onClickEndRound = () => {
		if (!isRoundStarted) {
			alert(
				'Wait for all players to complete their initial turn before ending the round.'
			);
			return;
		}
		if (players.length === 0) {
			alert('No players in game.');
			return;
		}
		setIsSelectingWinner(true);
		addLog('⚔️ Select the winner player by clicking on their board...');
	};

	const handleWinnerSelect = (playerId: string) => {
		if (!isSelectingWinner) return;

		let updatedPlayers = [...players];
		const winnerIndex = updatedPlayers.findIndex((p) => p.id === playerId);
		if (winnerIndex === -1) {
			alert('Invalid player selected.');
			return;
		}

		// Instead of losing a life, the other players lose a life (or logic you want)
		updatedPlayers = updatedPlayers.map((p, idx) => {
			if (idx !== winnerIndex) {
				return { ...p, lives: p.lives - 1 };
			}
			return p;
		});

		addLog(
			`${updatedPlayers[winnerIndex].name} is the winner of this round! Other players lose 1 life.`
		);

		// Remove players with 0 or less lives
		const alivePlayers = updatedPlayers.filter((p) => p.lives > 0);

		alivePlayers.forEach((p) => {
			if (p.lives <= 0) {
				addLog(`${p.name} has been eliminated!`);
			}
		});

		if (alivePlayers.length === 1) {
			addLog(`🏆 ${alivePlayers[0].name} has won the game!`);
			setWinner(alivePlayers[0].name);

			setTimeout(() => {
				setWinner(null);
				startGame();
			}, 3000);

			setPlayers(alivePlayers);
			setIsRoundStarted(false);
			setIsSelectingWinner(false);
			setActivePlayerIndex(-1);
			setTurnCount(0);
			return;
		}

		const resetPlayers = alivePlayers.map((p) => ({
			...p,
			incoming: []
		}));

		let deckCopy = [...deck];

		const updatedPlayersWithNewCard = resetPlayers.map((player) => {
			if (deckCopy.length === 0) return player; // no cards left

			const [newCard, ...restDeck] = deckCopy;
			deckCopy = restDeck;

			return {
				...player,
				hand: [...player.hand, newCard]
			};
		});

		setPlayers(updatedPlayersWithNewCard);
		setDeck(deckCopy);

		const newMap = maps[Math.floor(Math.random() * maps.length)];
		const newRestriction =
			baseRestrictions[
				Math.floor(Math.random() * baseRestrictions.length)
			];
		setCurrentMap(newMap);
		setBaseRestriction(newRestriction);
		setSelectedCard(null);
		setIsSelectingWinner(false);

		setIsRoundStarted(false);
		setTurnCount(0);
		setActivePlayerIndex(resetPlayers.length > 0 ? 0 : -1);

		addLog(
			`🧟 New round started! Map: ${newMap}, Restriction: ${newRestriction}`
		);
		addLog(`⏳ Pre-round: each player has 1 turn before round starts.`);
	};

	useEffect(() => {
		if (!isRoundStarted || !currentMap) return;

		if (timerRef.current !== null) {
			clearInterval(timerRef.current);
		}

		setRoundTimer(0);

		timerRef.current = window.setInterval(() => {
			setRoundTimer((prev) => prev + 1);
		}, 1000);

		return () => {
			if (timerRef.current !== null) {
				clearInterval(timerRef.current);
			}
		};
	}, [currentMap, isRoundStarted]);

	return (
		<div className={styles.gameBoard}>
			<div className={styles.combatZone}>
				<h2>🧟 Match Info</h2>
				<p>
					<strong>Map:</strong> {currentMap || 'Not chosen yet'}
				</p>
				<p>
					<strong>Base Restriction:</strong>{' '}
					{baseRestriction || 'None'}
				</p>
				<p>
					<strong>Turn:</strong>{' '}
					{activePlayerIndex >= 0
						? players[activePlayerIndex]?.name
						: 'No active player'}
				</p>
				<div className={styles.timer}>
					<strong>Round Timer:</strong> {roundTimer}s
				</div>
				<div className={styles['button-group']}>
					<button onClick={startGame}>Start</button>
					<button
						onClick={onClickEndRound}
						disabled={!isRoundStarted || players.length === 0}>
						End Round
					</button>
				</div>
				{!isRoundStarted && players.length > 0 && (
					<p className={styles.preRoundInfo}>
						⏳ Pre-round phase: {turnCount} / {players.length} turns
						taken.
					</p>
				)}
				{isSelectingWinner && (
					<p className={styles.loserPrompt}>
						Click a player board to select the winner
					</p>
				)}
			</div>

			<div className={styles.players}>
				{players.map((player) => (
					<PlayerBoard
						key={player.id}
						player={player}
						isSelf={player.id === activePlayerId}
						isTargetable={
							!!selectedCard && player.id !== activePlayerId
						}
						isActive={player.id === activePlayerId}
						onCardSelect={(cardId) =>
							handleCardSelect(player.id, cardId)
						}
						onTarget={() => {
							if (isSelectingWinner) {
								handleWinnerSelect(player.id);
							} else {
								handlePlayerTarget(player.id);
							}
						}}
						isRoundStarted={isRoundStarted}
						canPlayCards={
							!isRoundStarted &&
							!isSelectingWinner &&
							player.id === activePlayerId &&
							activePlayerIndex >= 0
						}
					/>
				))}
			</div>

			{winner && (
				<div className={styles.winnerPopup}>
					<div className={styles.tacticalOverlay}>
						<h2 className={styles.winnerTitle}>{winner}</h2>
						<p className={styles.winnerName}>{winner} WINS</p>
						<p className={styles.subtext}>
							Resetting in 3 seconds...
						</p>
					</div>
				</div>
			)}

			<div className={styles.log}>
				<h3>📝 Action Log</h3>
				<ul>
					{log.map((entry, i) => (
						<li key={i}>{entry}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default GameBoard;
