import { type FC, useRef } from 'react';

import Navigation from '../Navigation/Navigation';
import ScrollTop from '../../Scrolling/ScrollTop/ScrollTop';

import styles from './Header.module.scss';

type HeaderProps = {
	visible?: boolean;
};

const Header: FC<HeaderProps> = ({ visible = false }) => {
	const scrollRef = useRef<HTMLDivElement>(null);

	const scrollTop = () => {
		scrollRef.current?.scrollIntoView({
			behavior: 'smooth'
		});
	};

	return (
		<div ref={scrollRef}>
			{visible && (
				<div className={styles.header}>
					<h1>The Kronorium</h1>
					<h3>Call of Duty Zombies Resource Hub & Guides</h3>
				</div>
			)}
			<Navigation />
			<ScrollTop scrollTop={scrollTop} />
		</div>
	);
};

export default Header;
