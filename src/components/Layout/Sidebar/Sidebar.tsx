import type { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { Path } from '../../../util/paths';

import styles from './Sidebar.module.scss';

const Link: FC<{
	to: string;
	children: string;
}> = (props) => {
	const { to, children } = props;
	const location = useLocation();

	const getActiveStyle = (path: string) => {
		return `${
			location.pathname + location.hash === path ? styles.active : ''
		}`;
	};

	return (
		<NavLink to={to} className={getActiveStyle(to)}>
			<span className={styles.title}>{children}</span>
		</NavLink>
	);
};

const Sidebar: FC = () => {
	const location = useLocation();

	return (
		<>
			{!location.pathname.includes('bingo') &&
				!location.pathname.includes('cards') && (
					<div className={styles.sidebar}>
						<ol className={styles.toc}>
							<li>
								<Link to={Path.BO6}>Black Ops 6</Link>
								<ol>
									<li>
										<Link to={Path.BO6_AUGMENTS}>
											Best Augments
										</Link>
									</li>
									<li>
										<Link to={Path.BO6_TERMINUS}>
											Terminus
										</Link>
										<ol>
											<li>
												<Link
													to={Path.BO6_TERMINUS_CALC}>
													Calculator
												</Link>
											</li>
										</ol>
									</li>
									<li>
										<Link to={Path.BO6_CITADELLE}>
											Citadelle Des Morts
										</Link>
										<ol>
											<li>
												<Link
													to={
														Path.BO6_CITADELLE_RAVEN
													}>
													Raven Codes
												</Link>
											</li>
										</ol>
									</li>
									<li>
										<Link to={Path.BO6_SHATTERED_VEIL}>
											Shattered Veil
										</Link>
										<ol>
											<li>
												<Link
													to={
														Path.BO6_SHATTERED_VEIL_CODE_CHEATSHEET
													}>
													Code Cheatsheet
												</Link>
											</li>
										</ol>
									</li>
								</ol>
							</li>
							<li>
								<Link to="/mwz">Modern Warfare Zombies</Link>
								<ol>
									<li>
										<Link to={Path.MWZ_LOOT}>
											Guaranteed Loot
										</Link>
									</li>
									<li>
										<Link to={Path.MWZ_SCHEMATICS}>
											Schematics Loot Table
										</Link>
									</li>
									<li>
										<Link to={Path.MWZ_GRAVEYARD}>
											Graveyard
										</Link>
									</li>
								</ol>
							</li>
						</ol>
					</div>
				)}
		</>
	);
};

export default Sidebar;
