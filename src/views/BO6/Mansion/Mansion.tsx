import type { FC } from 'react';
import View from '../../../components/Layout/View/View';
import Guide from '../../../components/Layout/View/Guide/Guide';

import styles from './Mansion.module.scss';

import codes from './codes.json';

const Mansion: FC = () => {
	const check = (e: React.MouseEvent) => {
		const checked = document.getElementsByClassName(styles.checked);
		for (let i = 0; i < checked.length; i++) {
			checked[i].classList.remove(styles.checked);
		}

		const element = e.currentTarget as HTMLTableCellElement;
		if (element.classList.contains(styles.checked)) {
			element.classList.remove(styles.checked);
		} else {
			element.classList.add(styles.checked);
		}
	};

	const renderCodes = (list: number[]) => {
		return list.map((code) => (
			<td key={code} onClick={check}>
				{code}
			</td>
		));
	};

	return (
		<View title="Black Ops 6: Shattered Veil">
			<Guide id="rayguncode" title="Raygun MkII Code Cheatsheet">
				<table id={styles.chalkboards}>
					<thead>
						<tr>
							<th>Chalkboard</th>
							<th>NI</th>
							<th>OUY</th>
							<th>M</th>
							<th>S</th>
						</tr>
						<tr>
							<td>Moth</td>
							{renderCodes(codes.moth)}
						</tr>
						<tr>
							<td>Worm</td>
							{renderCodes(codes.worm)}
						</tr>
						<tr>
							<td>Yeti</td>
							{renderCodes(codes.yeti)}
						</tr>
						<tr>
							<td>Crab</td>
							{renderCodes(codes.crab)}
						</tr>
					</thead>
				</table>
			</Guide>
		</View>
	);
};

export default Mansion;
