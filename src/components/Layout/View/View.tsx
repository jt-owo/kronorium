import { type FC, type ReactNode } from 'react';

import Sidebar from '../Sidebar/Sidebar';

import styles from './View.module.scss';

type ViewProps = {
	children: ReactNode;
	title?: string;
};

const View: FC<ViewProps> = ({ children, title }) => {
	return (
		<>
			<Sidebar />
			<div id={styles.view}>
				{title && <h1>{title}</h1>}
				{children}
			</div>
		</>
	);
};

export default View;
