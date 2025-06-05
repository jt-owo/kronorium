import { FC } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Header from './Layout/Header/Header';
import Row from './Layout/Row/Row';
import Sidebar from './Layout/Sidebar/Sidebar';

import Home from '../views/Home/Home';
import Container from './Layout/Container/Container';
import Column from './Layout/Column/Column';
import BO6 from '../views/BO6/BO6';
import MWZ from '../views/MWZ/MWZ';
import Terminus from '../views/BO6/Terminus/Terminus';

const Kronorium: FC = () => {
	return (
		<Container id="kronorium" flex>
			<HashRouter>
				<Row>
					<Column>
						<Header />
					</Column>
				</Row>
				<Row grow>
					<Sidebar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<Home />} />
						<Route path="/bo6" element={<BO6 />} />
						<Route path="/bo6/terminus" element={<Terminus />} />
						<Route path="/mwz" element={<MWZ />} />
					</Routes>
				</Row>
			</HashRouter>
		</Container>
	);
};

export default Kronorium;
