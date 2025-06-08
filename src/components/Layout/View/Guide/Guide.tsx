import { FC, ReactNode } from 'react';

type GuideProps = {
    id: string;
	title: string;
	children: ReactNode;
	desc?: string;
};

const Guide: FC<GuideProps> = (props) => {
	const { id, title, desc, children } = props;

	return (
		<div>
			<h2 id={id}>{title}</h2>
			{desc && <h5>{desc}</h5>}
			{children}
		</div>
	);
};

export default Guide;
