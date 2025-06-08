import { FC } from 'react';

import styles from './MapLink.module.scss';

type MapProps = {
	x: number;
	y: number;
	children: string;
};

const MapLink: FC<MapProps> = ({ x, y, children }) => {
	/* eslint-disable no-restricted-globals */
	const openMap = () => {
		if (!localStorage.getItem('interactive-map')) {
			let mapAllowed = (JSON.parse(localStorage.getItem('interactive-map') ?? 'false')) as boolean;

			mapAllowed = confirm('You will be redirected to an interactive map.');
			if (mapAllowed) localStorage.setItem('interactive-map', JSON.stringify(mapAllowed));
			else return;
		}

		window.open(`https:wzhub.gg/map/urzikstan/mwz?s=${x}%3B${y}`, '_blank');
	};

	return (
		<>
			&nbsp;
			<span title='Click to open interactive map' className={styles.map} onClick={openMap}>
				{children}
			</span>
		</>
	);
};

export default MapLink;
