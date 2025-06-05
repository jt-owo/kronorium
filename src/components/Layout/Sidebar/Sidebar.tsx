import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import styles from './Sidebar.module.scss';

const Sidebar: FC = () => {
	const location = useLocation();

	const getActiveStyle = (path: string) => {
		return `${location.pathname === path ? styles.active : ''}`;
	};

	return (
		<div className={styles.sidebar}>
			<ol className={styles.toc}>
				<li>
					<NavLink to="/bo6" className={getActiveStyle('/bo6')}>
						<span className={styles.title}>Black Ops 6</span>
					</NavLink>
					<ol>
						<li>
							<NavLink to="/bo6/terminus" className={getActiveStyle('/bo6/terminus')}>
								<span className={styles.title}>Terminus</span>
							</NavLink>
							<ol>
								<li>
									<NavLink to="/bo6/terminus#calc" className={getActiveStyle('/bo6/terminus#calc')}>
										<span className={styles.title}>Calculator</span>
									</NavLink>
								</li>
							</ol>
						</li>
					</ol>
				</li>
				<li>
					<NavLink to="/mwz" className={getActiveStyle('/mwz')}>
						<span className={styles.title}>Modern Warfare Zombies</span>
					</NavLink>
					<ol>
						<li>
							<NavLink to="/mwz#loot-table" className={getActiveStyle('/mwz#loot-table')}>
								<span className={styles.title}>Schematics Loot Table</span>
							</NavLink>
						</li>
					</ol>
				</li>
			</ol>
		</div>
	);
};

export default Sidebar;
