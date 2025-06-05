import { FC, ReactNode } from 'react';

import styles from './Row.module.scss';

type RowProps = {
	children: ReactNode;
    grow?: boolean;
};

const Row: FC<RowProps> = (props) => {
	const { children, grow } = props;

    let className = styles.row;

    if (grow) className += ` ${styles.grow}`;

	return <div className={className}>{children}</div>;
};

export default Row;
