import { useEffect, useRef, useState, type FC } from 'react';
import type { Card, Map, Player, Restriction, Round } from './types';

import mapData from './data/maps.json';
import resData from './data/baseRestrictions.json';
import cardData from './data/cards.json';

import styles from './CardsGame.module.scss';
import PlayerBoard from './PlayerBoard/PlayerBoard';
import Container from '../../components/Layout/Container/Container';
import Buttons from '../../components/Layout/Buttons/Buttons';
import Button from '../../components/Button/Button';

const MAX_LIVES = 3;
const CARDS_PER_PLAYER = 3;

const initialPlayersData: Player[] = [
	{ id: 'p1', name: 'Player 1', lives: MAX_LIVES, hand: [] },
	{ id: 'p2', name: 'Player 2', lives: MAX_LIVES, hand: [] }
];

type GameState = 'none' | 'pick-cards' | 'round' | 'pick-winner' | 'ending';

const CardsGame: FC = () => {
	const [cards] = useState<Card[]>(cardData.cards as Card[]);
	const [maps] = useState<Map[]>(mapData.maps as Map[]);
	const [restrictions] = useState<Restriction[]>(
		resData.restrictions as Restriction[]
	);

	const [round, setRound] = useState<Round | null>(null);
	const [players, setPlayers] = useState<Player[]>([]);
	const [state, setState] = useState<GameState>('none');
	const [turn, setTurn] = useState(0);
	const [selectedCard, setSelectedCard] = useState<{
		playerId: string;
		cardId: string;
	} | null>(null);
	const [activePlayerIndex, setActivePlayerIndex] = useState<number>(-1);
	const activePlayerID =
		activePlayerIndex >= 0 && players.length > 0
			? players[activePlayerIndex]?.id
			: undefined;

	const [roundTimer, setRoundTimer] = useState<number>(0);
	const timerRef = useRef<number | null>(null);

	const [log, setLog] = useState<string[]>([]);

	const addLog = (message: string) => {
		setLog((prev) => [message, ...prev]);
	};

	const generateRound = (): Round => {
		const map = maps[Math.floor(Math.random() * maps.length)];

		const combinedRestrictions = [...restrictions, ...map.restrictions];

		const restriction =
			combinedRestrictions[
				Math.floor(Math.random() * combinedRestrictions.length)
			];

		return {
			map,
			restrictions: [restriction]
		};
	};

	const reset = () => {
		setState('none');
		setLog([]);
		setTurn(0);
		setPlayers([]);
		setSelectedCard(null);
		setActivePlayerIndex(-1);
		setRoundTimer(0);
		setRound(null);
		if (timerRef.current) {
			clearInterval(timerRef.current);
			timerRef.current = null;
		}
	};

	const startGame = () => {
		reset();

		const roundInfo = generateRound();
		setRound(roundInfo);

		// Deal cards to players
		const dealtPlayers: Player[] = initialPlayersData.map((p) => {
			const handCards: Card[] = [];
			for (let i = 0; i < CARDS_PER_PLAYER; i++) {
				handCards.push({
					...cards[Math.floor(Math.random() * cards.length)],
					id: `${i}`
				});
			}

			return {
				...p,
				lives: MAX_LIVES,
				hand: handCards,
				incoming: []
			};
		});

		setPlayers(dealtPlayers);
		setActivePlayerIndex(0);
		setSelectedCard(null);
		setState('pick-cards');
		addLog(
			`🎮 Game started! Map: ${roundInfo.map.name}, Restriction: ${roundInfo.restrictions[0].name}`
		);
		addLog(`⏳ Pick phase: Waiting for players to pick a card.`);
	};

	const endRound = () => {
		setState('pick-winner');
	};

	const handleWinnerSelect = (playerId: string) => {
		if (state !== 'pick-winner') return;

		let updatedPlayers = [...players];
		const winnerIndex = updatedPlayers.findIndex((p) => p.id === playerId);
		if (winnerIndex === -1) {
			alert('Invalid player selected.');
			return;
		}

		updatedPlayers = updatedPlayers.map((p, idx) => {
			if (idx !== winnerIndex) return { ...p, lives: p.lives - 1 };
			return p;
		});

		addLog(
			`${updatedPlayers[winnerIndex].name} is the winner of this round!`
		);

		const alivePlayers = updatedPlayers.filter((p) => p.lives > 0);
		alivePlayers.forEach((p) => {
			if (p.lives <= 0) {
				addLog(`${p.name} has been eliminated!`);
			}
		});

		if (alivePlayers.length === 1) {
			addLog(`🏆 ${alivePlayers[0].name} won the game!`);

			setPlayers(alivePlayers);
			setRound(null);
			setState('ending');
			setActivePlayerIndex(-1);
			setTurn(0);
			return;
		}

		const resetPlayers = alivePlayers.map((p) => ({
			...p,
			incoming: []
		}));

		const updatedPlayersWithNewCard = resetPlayers.map((player) => {
			return {
				...player,
				hand: [
					...player.hand,
					{
						...cards[Math.floor(Math.random() * cards.length)],
						id: `${player.hand.length + 1}`
					}
				]
			};
		});
		setPlayers([...updatedPlayersWithNewCard]);

		generateRound();

		setSelectedCard(null);
		setState('pick-cards');
		setTurn(0);
		setActivePlayerIndex(resetPlayers.length > 0 ? 0 : -1);

		addLog(
			`🧟 New round started! Map: ${round?.map.name}, Restriction: ${round?.restrictions[0].name}`
		);
		addLog(`⏳ Pick phase: Waiting for players to pick a card.`);
	};

	const handleCardSelect = (playerId: string, cardId: string) => {
		if (state !== 'pick-cards') return;
		if (activePlayerIndex < 0) return; // no active player, no select
		if (playerId !== activePlayerID) return; // only active player can select
		if (selectedCard) return; // already selected

		setSelectedCard({ playerId, cardId });
	};

	const handlePlayerTarget = (targetId: string) => {
		if (state !== 'pick-cards') return;
		if (activePlayerIndex < 0) return; // no active player no select
		if (!selectedCard) return; // already selected
		if (targetId === activePlayerID) {
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

		const nextTurnCount = turn + 1;
		setTurn(nextTurnCount);
		if (nextTurnCount >= players.length) {
			setActivePlayerIndex(-1);
			setState('round');
			addLog(`🃏 All players picked their cards. Round starting!`);
		} else {
			const nextPlayerIndex = (activePlayerIndex + 1) % players.length;
			setActivePlayerIndex(nextPlayerIndex);
			addLog(
				`⏳ Pick phase: ${nextTurnCount} / ${players.length} completed.`
			);
		}
	};

	useEffect(() => {
		if (state !== 'round') return;

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
				timerRef.current = null;
			}
		};
	}, [state]);

	return (
		<Container className={styles['game-container']}>
			<Buttons align="center">
				<Button onClick={startGame} disabled={state !== 'none'}>
					Start
				</Button>
				<Button disabled>Settings</Button>
				{state !== 'none' && <Button onClick={reset}>Reset</Button>}
			</Buttons>
			<Container id={styles['matchInfo']}>
				<h2>
					{state === 'none'
						? "Click 'Start' to begin a new match"
						: 'Match Info'}
				</h2>
				{(state === 'round' ||
					state === 'pick-cards' ||
					state === 'ending') && (
					<div className={styles['state-display']}>
						{state === 'round' && <span>Timer: {roundTimer}s</span>}
						{state === 'pick-cards' && (
							<span>
								Pick Card: {players[activePlayerIndex].name}
							</span>
						)}
						{state === 'ending' && (
							<span>{players[0].name} Won!</span>
						)}
					</div>
				)}
				{round && (
					<>
						<p>Map: {round.map.name || 'None'}</p>
						<p>
							Restriction(s):{' '}
							{round.restrictions[0].name || 'None'}
						</p>
					</>
				)}
				{(activePlayerID || state === 'round') && (
					<Buttons align="center">
						<Button onClick={endRound} disabled={state !== 'round'}>
							End Round
						</Button>
					</Buttons>
				)}
			</Container>

			{state !== 'none' && (
				<Container id={styles['players']} flex>
					{players.map((player) => (
						<PlayerBoard
							key={player.id}
							player={player}
							isSelf={player.id === activePlayerID}
							isTargetable={
								!!selectedCard && player.id !== activePlayerID
							}
							isActive={player.id === activePlayerID}
							onCardSelect={(id) =>
								handleCardSelect(player.id, id)
							}
							onTarget={() => {
								handlePlayerTarget(player.id);
							}}
							isRoundActive={state === 'round'}
						/>
					))}
				</Container>
			)}

			{state !== 'none' && log.length > 0 && (
				<Container className={styles.log}>
					<h2>Log</h2>
					<ul>
						{log.map((entry, i) => (
							<li key={i}>{entry}</li>
						))}
					</ul>
				</Container>
			)}

			{state === 'pick-winner' && (
				<Container className={styles['winner-select']}>
					<div
						className={styles['popup']}
						onClick={(e) => e.stopPropagation()}>
						<h1>Select the Winner</h1>
						<ul>
							{players.map((player) => (
								<li
									key={player.id}
									onClick={() => {
										handleWinnerSelect(player.id);
									}}>
									{player.name}
								</li>
							))}
						</ul>
					</div>
				</Container>
			)}
		</Container>
	);
};

export default CardsGame;
