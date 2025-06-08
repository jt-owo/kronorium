import { FC } from 'react';

import styles from './Augment.module.scss';

export enum Augment {
	// STAMIN-UP
	HARD_TARGET = 'hard-target',
	QUARTERBACK = 'quarterback',
	HOT_FOOT = 'hot-foot',
	FREE_FALLER = 'free-faller',
	STALKER = 'stalker',
	DASHER = 'dasher',
	// QUICK REVIVE
	SWIFT_RECOVERY = 'swift-recovery',
	KARMIC_RETURN = 'karmic-return',
	SLOW_DEATH = 'slow-death',
	EMT = 'emt',
	EQUIVALENT_EXCHANGE = 'equivalent-exchange',
	DYING_WISH = 'dying-wish',
	// JUGGERNOG
	RETALIATION = 'retaliation',
	HARDENED_PLATES = 'hardened-plates',
	DURABLE_PLATES = 'durable-plates',
	PROBIOTIC = 'probiotic',
	TURTLE_SHELL = 'turtle-shell',
	REACTIVE_ARMOR = 'reactive-armor',
	// MELEE MACCHIATO
	STICK_N_MOVE = 'stick-n-move',
	STRENGTH_TRAINING = 'strength-training',
	HIDDEN_IMPACT = 'hidden-impact',
	EXPRESSO = 'expresso',
	VAMPIRIC_EXTRACTION = 'vampiric-extracition',
	TRIPLE_SHOT = 'triple-shot',
	// SPEED COLA
	SPEEDY_ROULETTE = 'speedy-roulette',
	QUICK_SWAP = 'quick-swap',
	FAST_PITCHER = 'fast-pitcher',
	SUPERCHARGED = 'supercharged',
	CLASSIC_FORMULA = 'classic-formula',
	PHANTOM_RELOAD = 'phantom-reload',
	// PHD FLOPPER
	ENVIRONMENTALIST = 'environmentalist',
	EOD_TECHNICIAN = 'eod-technician',
	TRIBOLOGIST = 'tribologist',
	GRAVITY_MD = 'gravity-md',
	DR_RAM = 'dr-ram',
	PHD_SLIDER = 'phd-slider',
	// DEADSHOT DAIQUIRI
	DEAD_BREAK = 'dead-break',
	DEAD_DRAW = 'dead-draw',
	DEAD_SET = 'dead-set',
	DEAD_HEAD = 'dead-head',
	DEAD_FIRST = 'dead-first',
	DEAD_AGAIN = 'dead-again',
	// ELEMENTAL POP
	VULNERA_BEAN = 'vulnera-bean',
	PINEAPPLE_BLAST = 'pineapple-blast',
	CHILL_BERRY = 'chill-berry',
	CITRUS_FOCUS = 'citrus-focus',
	IMPERIL_PEACH = 'imperil-peach',
	ELECTRIC_CHERRY = 'electric-cherry',
	// VULTURE AID
	CONDORS_REACH = 'condors-reach',
	CARRION_LUGGAGE = 'carrion-luggage',
	PICKY_EATER = 'picky-eater',
	FETID_UPGR_AID = 'fetid-upgr-aid',
	SMELL_OF_DEATH = 'smell-of-death',
	PARTING_GIFT = 'parting-gift',
	// DEATH PERCEPTION
	BIRDS_EYE_VIEW = 'birds-eye-view',
	EXTRA_CHANGE = 'extra-change',
	FURTHER_INSIGHT = 'further-insight',
	TREASURE_HUNTER = 'treasure-hunter',
	DEATH_STARE = 'death-stare',
	CRITICAL_EYE = 'critical-eye',
	// DOUBLE TAP ROOT BEER
	DOUBLE_TIME = 'double-time',
	DOUBLE_OR_NOTHING = 'double-or-nothing',
	DOUBLE_PLAY = 'double-play',
	DOUBLE_JEOPARDY = 'double-jeopardy',
	DOUBLE_IMPACT = 'double-impact',
	DOUBLE_STANDARD = 'double-standard'
}

type AugmentIconProps = {
	type: Augment;
};

const AugmentIcon: FC<AugmentIconProps> = ({ type }) => {
	const getName = () => {
		if (type === Augment.EOD_TECHNICIAN) return 'EOD Technician';
		if (type === Augment.GRAVITY_MD) return 'Gravity MD';
		if (type === Augment.PHD_SLIDER) return 'PhD Slider';

		if (type === Augment.CONDORS_REACH) return "Condor's Reach";
		if (type === Augment.SMELL_OF_DEATH) return 'Smell of Death';
		if (type === Augment.FETID_UPGR_AID) return 'Fetid Upgr-aid';

		if (type === Augment.BIRDS_EYE_VIEW) return "Bird's Eye View";

		if (type === Augment.DOUBLE_OR_NOTHING) return 'Double or Nothing';

		return type.replaceAll('-', ' ').replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	};

	return <div title={getName()} className={`${styles.augment} ${styles[type]}`}></div>;
};

export default AugmentIcon;
