import type { FC } from 'react';

import View from '../../components/Layout/View/View';

const Home: FC = () => {
	return (
		<View title="Welcome to the Kronorium!">
			<p>
				The Kronorium is a resource hub for all your{' '}
				<b>Call of Duty Zombies</b> needs.
			</p>
			<p>
				You can find all kinds of guides, tips & things alike in this
				book.
			</p>
		</View>
	);
};

export default Home;
