import { FC, ReactNode } from 'react';

import styles from './Container.module.scss';

type ContainerProps = {
	id: string;
	children: ReactNode;
	flex?: boolean;
};

const Container: FC<ContainerProps> = (props) => {
	const { id, children, flex } = props;

	let className = styles.container;

	if (flex) className += ` ${styles.flex}`;

	return (
		<div id={id} className={className}>
			{children}
		</div>
	);
};

export default Container;
