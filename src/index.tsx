import React from 'react';
import ReactDOM from 'react-dom/client';
import Kronorium from './components/Kronorium';

import './index.scss';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<React.StrictMode>
		<Kronorium />
	</React.StrictMode>
);
