import { FC, useRef } from 'react';

import Navigation from '../Navigation/Navigation';
import GoTop from '../../GoTop/GoTop';

import styles from './Header.module.scss';

const Header: FC = () => {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollTop = () => {
        scrollRef.current?.scrollIntoView({
            behavior: 'smooth'
        });
    }

	return (
		<div>
			<div ref={scrollRef} className={styles.header}>
				<h1>The Kronorium</h1>
				<p>Call of Duty Zombies Resource Hub & Guides</p>
			</div>
			<Navigation />
			<GoTop scrollTop={scrollTop} />
		</div>
	);
};

export default Header;
