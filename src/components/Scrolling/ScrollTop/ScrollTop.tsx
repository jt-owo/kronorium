import { useEffect, useState, type FC } from 'react';

import styles from './ScrollTop.module.scss';
import { useLocation } from 'react-router-dom';

type ScrollTopProps = {
	scrollTop: () => void;
};

const ScrollTop: FC<ScrollTopProps> = ({ scrollTop }) => {
	const [isVisible, setVisibility] = useState(false);
	const location = useLocation();

	const handleVisiblity = () => {
		const scrollPosition = window.pageYOffset;
		if (scrollPosition > 400) {
			return setVisibility(true);
		} else {
			return setVisibility(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', handleVisiblity);

		return () => {
			window.removeEventListener('scroll', handleVisiblity);
		};
	}, []);

	let className = `${styles.scrollTop}`;
	// FIXME: Hacky workaround.
	if (isVisible && !location.pathname.includes('bingo'))
		className += ` ${styles.active}`;

	return (
		<div className={className} onClick={scrollTop}>
			<svg
				className={styles.icon}
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor">
				<polyline
					points="18 15 12 9 6 15"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</div>
	);
};

export default ScrollTop;
