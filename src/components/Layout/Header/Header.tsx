import { FC } from 'react';

import Navigation from '../Navigation/Navigation';

import styles from './Header.module.scss';

const Header: FC = () => {
	return (
		<div>
			<div className={styles.header}>
				<h1>The Kronorium</h1>
				<p>Call of Duty Zombies Resource Hub & Guides</p>
			</div>
			<Navigation />
		</div>
	);
};

export default Header;
