import type { FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import { Path } from '../util/paths';
import ScrollToAnchor from './Scrolling/ScrollToAnchor/ScrollToAnchor';

import Container from './Layout/Container/Container';
import Header from './Layout/Header/Header';

import Home from '../views/Home/Home';
import BO6 from '../views/BO6/BO6';
import Augments from '../views/BO6/Augments/Augments';
import Island from '../views/BO6/Island/Island';
import Castle from '../views/BO6/Castle/Castle';
import Mansion from '../views/BO6/Mansion/Mansion';
import MWZ from '../views/MWZ/MWZ';
import Bingo from '../games/Bingo/Bingo';
import CardsGame from '../games/CardsDuel/CardsGame';

import styles from './Kronorium.module.scss';

const Kronorium: FC = () => {
	return (
		<Container id={styles['kronorium']} flex>
			<ScrollToAnchor />
			<HashRouter>
				<Container>
					<Header />
				</Container>
				<Container id={styles['content']} flex row>
					<Routes>
						<Route path={Path.ROOT} element={<Home />} />
						<Route path={Path.BO6} element={<BO6 />} />
						<Route
							path={Path.BO6_AUGMENTS}
							element={<Augments />}
						/>
						<Route path={Path.BO6_TERMINUS} element={<Island />} />
						<Route path={Path.BO6_CITADELLE} element={<Castle />} />
						<Route
							path={Path.BO6_SHATTERED_VEIL}
							element={<Mansion />}
						/>
						<Route path={Path.MWZ} element={<MWZ />} />
						<Route path={Path.MWZ_BINGO} element={<Bingo />} />
						<Route path={Path.CARDS_DUEL} element={<CardsGame />} />
					</Routes>
				</Container>
			</HashRouter>
		</Container>
	);
};

export default Kronorium;
