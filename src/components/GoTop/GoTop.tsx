import { FC, useEffect, useState } from 'react';

import styles from './GoTop.module.scss';

type GoTopProps = {
	visible?: boolean;
    scrollTop: () => void;
};

const GoTop: FC<GoTopProps> = ({ scrollTop }) => {
	const [isVisible, setVisibility] = useState(false);

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

	let className = `${styles.goTop}`;
	if (isVisible) className += ` ${styles.active}`;

	return (
		<button className={className} onClick={scrollTop}>
			<span className={styles.text}>^</span>
		</button>
	);
};

export default GoTop;
