import { FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Path from '../util/paths';
import ScrollToAnchor from './ScrollToAnchor/ScrollToAnchor';

import Container from './Layout/Container/Container';
import Row from './Layout/Row/Row';
import Column from './Layout/Column/Column';

import Header from './Layout/Header/Header';
import Sidebar from './Layout/Sidebar/Sidebar';

import Home from '../views/Home/Home';
import BO6 from '../views/BO6/BO6';
import Terminus from '../views/BO6/Terminus/Terminus';
import CitadelleDesMorts from '../views/BO6/CitadelleDesMorts/CitadelleDesMorts';
import ShatteredVeil from '../views/BO6/ShatteredVeil/ShatteredVeil';
import MWZ from '../views/MWZ/MWZ';
import Bingo from '../views/MWZ/Bingo/Bingo';

const Kronorium: FC = () => {
	return (
		<Container id="kronorium" flex>
			<ScrollToAnchor />
			<HashRouter>
				<Row>
					<Column>
						<Header />
					</Column>
				</Row>
				<Row grow>
					<Sidebar />
					<Routes>
						<Route path={Path.ROOT} element={<Home />} />
						<Route path={Path.ABOUT} element={<Home />} />
						<Route path={Path.BO6} element={<BO6 />} />
						<Route path={Path.BO6_TERMINUS} element={<Terminus />} />
						<Route path={Path.BO6_CITADELLE} element={<CitadelleDesMorts />} />
						<Route path={Path.BO6_SHATTERED_VEIL} element={<ShatteredVeil />} />
						<Route path={Path.MWZ} element={<MWZ />} />
                        <Route path={Path.MWZ_BINGO} element={<Bingo />} />
					</Routes>
				</Row>
			</HashRouter>
		</Container>
	);
};

export default Kronorium;
