import { FC } from 'react';

import styles from './Perk.module.scss';

export enum Perk {
	STAMIN_UP = 'stamin-up',
	QUICK_REVIVE = 'quick-revive',
	JUGGERNOG = 'juggernog',
	MELEE_MACCHIATO = 'melee-macchiato',
    SPEED_COLA = 'speed-cola',
    PHD_FLOPPER = 'phd-flopper',
    DEADSHOT_DAIQUIRI = 'deadshot-daiquiri',
    ELEMENTAL_POP = 'elemental-pop',
    VULTURE_AID = 'vulture-aid',
    DEATH_PERCEPTION = 'death-perception',
    DOUBLE_TAP_ROOT_BEET = 'double-tap-root-beer'
}

type PerkIconProps = {
	type: Perk;
};

const PerkIcon: FC<PerkIconProps> = ({ type }) => {
	const getName = () => {
        if (type === Perk.PHD_FLOPPER) return "PhD Flopper"

		return type.replaceAll('-', ' ').replace(/\w\S*/g, function (txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	};

	return <div title={getName()} className={`${styles.perk} ${styles[type]}`}></div>;
};

export default PerkIcon;
