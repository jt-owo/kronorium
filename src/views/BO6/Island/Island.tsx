import { useState, type FC } from 'react';
import View from '../../../components/Layout/View/View';
import Guide from '../../../components/Layout/View/Guide/Guide';
import Buttons from '../../../components/Layout/Buttons/Buttons';
import Container from '../../../components/Layout/Container/Container';

import Button from '../../../components/Button/Button';
import TextBox from '../../../components/TextBox/TextBox';

import styles from './Island.module.scss';

const Island: FC = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [z, setZ] = useState(0);
	const [result, setResult] = useState({
		x: 0,
		y: 0,
		z: 0
	});

	const calc = () => {
		const a = 2 * x + 11;
		const b = 2 * z + y - 5;
		const c = Math.abs(y + z - x);
		setResult({
			x: a,
			y: b,
			z: c
		});
	};

	return (
		<View title="Black Ops 6: Terminus">
			<Guide id="calculator" title="DR-11 Beamsmasher Calculator">
				<label htmlFor="x">
					x:
					<TextBox
						name="x"
						value={x}
						onChange={(e) => setX(+e.target.value)}
					/>
				</label>
				<br />
				<label htmlFor="y">
					y:
					<TextBox
						name="y"
						value={y}
						onChange={(e) => setY(+e.target.value)}
					/>
				</label>
				<br />
				<label htmlFor="z">
					z:
					<TextBox
						name="z"
						value={z}
						onChange={(e) => setZ(+e.target.value)}
					/>
				</label>
				<Buttons>
					<Button onClick={calc}>Calculate</Button>
				</Buttons>
				<Container className={styles['result-container']}>
					<div className={styles['header']}>
						<span>Locating</span>
					</div>
					<div className={styles['body']}>
						<div className={styles['output']}>
							<input
								type="text"
								value={`x: ${result.x} y: ${result.y} z: ${result.z}`}
								disabled
							/>
						</div>
					</div>
				</Container>
			</Guide>
		</View>
	);
};

export default Island;
