import type { FC } from 'react';
import type { Augment } from '../../util/enum';
import type { FC } from 'react';
import type { Augment } from '../../util/enum';

import styles from './Augment.module.scss';

type AugmentIconProps = {
	type: Augment;
    selected?: boolean;
};

const AugmentIcon: FC<AugmentIconProps> = ({ type, selected = false }) => {
	const getName = () => {
		if (type === 'eod-technician') return 'EOD Technician';
		if (type === 'gravity-md') return 'Gravity MD';
		if (type === 'phd-slider') return 'PhD Slider';
		if (type === 'eod-technician') return 'EOD Technician';
		if (type === 'gravity-md') return 'Gravity MD';
		if (type === 'phd-slider') return 'PhD Slider';

		if (type === 'condors-reach') return "Condor's Reach";
		if (type === 'smell-of-death') return 'Smell of Death';
		if (type === 'fetid-upgr-aid') return 'Fetid Upgr-aid';
		if (type === 'condors-reach') return "Condor's Reach";
		if (type === 'smell-of-death') return 'Smell of Death';
		if (type === 'fetid-upgr-aid') return 'Fetid Upgr-aid';

		if (type === 'birds-eye-view') return "Bird's Eye View";
		if (type === 'birds-eye-view') return "Bird's Eye View";

		if (type === 'double-or-nothing') return 'Double or Nothing';
		if (type === 'double-or-nothing') return 'Double or Nothing';

		return type.replace('-', ' ').replace(/\w\S*/g, (str) => {
			return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
		return type.replace('-', ' ').replace(/\w\S*/g, (str) => {
			return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
		});
	};

	return (
		<div
			title={getName()}
			className={`${styles.augment} ${selected ? styles['selected'] : ''} ${styles[type]}`}></div>
	);
};

export default AugmentIcon;
