import type { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { Path } from '../../../util/paths';

import styles from './Navigation.module.scss';

const Navigation: FC = () => {
	const location = useLocation();

	const getActiveStyle = (path: string) => {
		return `${location.pathname === path ? styles.active : ''}`;
	};

	return (
		<div className={styles.navbar}>
			<ul>
				<li>
					<NavLink to={Path.ROOT} className={getActiveStyle('/')}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						to={Path.MWZ_BINGO}
						className={`${styles.last} ${getActiveStyle(
							'/bingo'
						)}`}>
						Bingo
					</NavLink>
				</li>
				<li>
					<NavLink
						to={Path.CARDS_DUEL}
						className={`${styles.last} ${getActiveStyle(
							Path.CARDS_DUEL
						)}`}>
						Cards Duel
					</NavLink>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
