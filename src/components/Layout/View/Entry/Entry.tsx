import { FC, ReactNode } from 'react';

type EntryProps = {
	title: string;
	children: ReactNode;
	desc?: string;
};

const Entry: FC<EntryProps> = (props) => {
	const { title, desc, children } = props;

	return (
		<div>
			<h2>{title}</h2>
			{desc && <h5>{desc}</h5>}
			{children}
		</div>
	);
};

export default Entry;
