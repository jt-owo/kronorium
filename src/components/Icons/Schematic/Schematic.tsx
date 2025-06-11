import type { FC } from 'react';
import type { Schematic } from '../../../util/enum';

import styles from './Schematic.module.scss';

type SchematicProps = {
	type: Schematic;
};

const SchematicIcon: FC<SchematicProps> = ({ type }) => {
	const getName = () => {
		if (type === 'phd-flopper') return 'PhD Flopper';

		if (type === 'wunderwaffe-dg2') return 'Wunderwaffe DG-2';

		return type.replace('-', ' ').replace(/\w\S*/g, (str) => {
			return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
		});
	};

	return (
		<div
			title={getName()}
			className={`${styles.schematic} ${styles[type]}`}></div>
	);
};

export default SchematicIcon;
