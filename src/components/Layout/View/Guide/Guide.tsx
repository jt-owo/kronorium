import { type FC, type ReactNode } from 'react';

type GuideProps = {
	id: string;
	title: string;
	children: ReactNode;
	desc?: string;
};

const Guide: FC<GuideProps> = ({ id, title, desc, children }) => {
	return (
		<div>
			<h2 id={id}>{title}</h2>
			{desc && <h5>{desc}</h5>}
			{children}
		</div>
	);
};

export default Guide;
