import type { FC, ReactNode } from 'react';
import Container from '../Container/Container';

import styles from './Buttons.module.scss';

type ButtonsProps = {
	children: ReactNode;
	align?: 'left' | 'center' | 'right';
};

const Buttons: FC<ButtonsProps> = ({ children, align = 'left' }) => {
	return <Container className={`${styles['buttons']} ${styles[align]}`}>{children}</Container>;
};

export default Buttons;
