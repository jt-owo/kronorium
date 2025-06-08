import { FC, useState } from 'react';
import View from '../../../components/Layout/View/View';
import Guide from '../../../components/Layout/View/Guide/Guide';

const Terminus: FC = () => {
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
			<Guide id='calculator' title="DR-11 Beamsmasher Calculator">
				<label htmlFor="x">
					x:
					<input type="text" name="x" value={x} onChange={(e) => setX(+e.target.value)} />
				</label>
				<br />
				<br />
				<label htmlFor="y">
					y:
					<input type="text" name="y" value={y} onChange={(e) => setY(+e.target.value)} />
				</label>
				<br />
				<br />
				<label htmlFor="z">
					z:
					<input type="text" name="z" value={z} onChange={(e) => setZ(+e.target.value)} />
				</label>
				<br />
				<br />
				<button type="button" onClick={calc}>
					Calculate
				</button>
				<br />
				<h4>Result</h4>
				<span>a: {a}</span>
				<br />
				<br />
				<span>b: {b}</span>
				<br />
				<br />
				<span>c: {c}</span>
			</Guide>
		</View>
	);
};

export default Terminus;
