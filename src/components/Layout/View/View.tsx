import { type FC, type ReactNode } from 'react';

import styles from './View.module.scss';

type ViewProps = {
	children: ReactNode;
	title?: string;
};

const View: FC<ViewProps> = (props) => {
	const { children, title } = props;

	return (
		<div id={styles.view}>
			{title && <h2>{title}</h2>}
			{children}
		</div>
	);
};

export default View;
