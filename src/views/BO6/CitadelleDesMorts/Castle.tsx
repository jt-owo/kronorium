import type { FC } from 'react';
import { Path } from '../../../util/paths';

import View from '../../../components/Layout/View/View';
import Guide from '../../../components/Layout/View/Guide/Guide';

import styles from './Castle.module.scss';

const Castle: FC = () => {
	return (
		<View title="Black Ops 6: Citadelle Des Morts">
			<Guide id={Path.BO6_CITADELLE_RAVEN} title="Raven Sword Codes">
				<table id={styles.codes}>
					<thead>
						<tr>
							<th>Horn (Aries)</th>
							<th>Crow (Gemini)</th>
							<th>Fish (Pisces)</th>
							<th>Jaw (Leo)</th>
							<th>Scorpion (Scorpio)</th>
						</tr>
						<tr>
							<td>
								🜂
								<br />
								♈︎
							</td>
							<td>
								🜁
								<br />
								♊︎
							</td>
							<td>
								🜄
								<br />
								♓︎
							</td>
							<td>
								🜂
								<br />
								♌︎
							</td>
							<td>
								🜄
								<br />
								♏︎
							</td>
						</tr>
					</thead>
				</table>
			</Guide>
		</View>
	);
};

export default Castle;
