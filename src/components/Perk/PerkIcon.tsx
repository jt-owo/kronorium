import type { FC } from 'react';

import type { Perk } from '../../util/enum';

import styles from './PerkIcon.module.scss';

type PerkIconProps = {
	type: Perk;
};

const PerkIcon: FC<PerkIconProps> = ({ type }) => {
	const getName = () => {
		if (type === 'phd-flopper') return 'PhD Flopper';

		return type.replace('-', ' ').replace(/\w\S*/g, (str) => {
			return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
		});
	};

	return (
		<div
			title={getName()}
			className={`${styles.perk} ${styles[type]}`}></div>
	);
};

export default PerkIcon;
