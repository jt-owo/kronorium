import { useState, type FC } from 'react';
import View from '../../../components/Layout/View/View';
import Guide from '../../../components/Layout/View/Guide/Guide';

import styles from './Island.module.scss';

const Island: FC = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [z, setZ] = useState(0);
	const [a, setA] = useState(0);
	const [b, setB] = useState(0);
	const [c, setC] = useState(0);

	const calc = () => {
		const a = 2 * x + 11;
		const b = 2 * z + y - 5;
		const c = Math.abs(y + z - x);
		setA(a);
		setB(b);
		setC(c);
	};

	return (
		<View title="Black Ops 6: Terminus">
			<Guide id="calculator" title="DR-11 Beamsmasher Calculator">
				<label htmlFor="x">
					x:
					<div className="input-container">
						<input
							className="input"
							type="text"
							name="x"
							value={x}
							onChange={(e) => setX(+e.target.value)}
						/>
					</div>
				</label>
				<br />
				<label htmlFor="y">
					y:
					<div className="input-container">
						<input
							className="input"
							type="text"
							name="y"
							value={y}
							onChange={(e) => setY(+e.target.value)}
						/>
					</div>
				</label>
				<br />
				<label htmlFor="z">
					z:
					<div className="input-container">
						<input
							className="input"
							type="text"
							name="z"
							value={z}
							onChange={(e) => setZ(+e.target.value)}
						/>
					</div>
				</label>
				<p>
					<button onClick={calc}>Calculate</button>
				</p>
				<div className={styles['result-container']}>
					<div className={styles['header']}>
						<span>Locating</span>
					</div>
					<div className={styles['body']}>
						<div className={styles['output']}>
							<input
								type="text"
								value={`x: ${a} y: ${b} z: ${c}`}
								disabled
							/>
						</div>
					</div>
				</div>
			</Guide>
		</View>
	);
};

export default Island;
