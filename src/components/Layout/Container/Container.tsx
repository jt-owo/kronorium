import { type FC, type ReactNode } from 'react';

import styles from './Container.module.scss';

type ContainerProps = {
	children: ReactNode;
	id?: string;
	className?: string;
	flex?: boolean;
    row?: boolean;
    grow?: boolean;
};

const Container: FC<ContainerProps> = ({ children, id, className, flex, row, grow }) => {
	let classes = styles.container;
	if (className) classes += ` ${className}`;
	if (flex) classes += ` ${styles.flex}`;
    if (row) classes += ` ${styles.row}`;
    if (grow) classes += ` ${styles.grow}`;

	return (
		<div id={id} className={classes}>
			{children}
		</div>
	);
};

export default Container;
