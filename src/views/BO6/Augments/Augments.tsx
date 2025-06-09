import type { FC } from 'react';

import { Path } from '../../../util/paths';

import View from '../../../components/Layout/View/View';
import Guide from '../../../components/Layout/View/Guide/Guide';

import PerkIcon from '../../../components/Perk/PerkIcon';
import AugmentIcon from '../../../components/Augment/Augment';

import styles from './Augments.module.scss';

const Augments: FC = () => {
	return (
		<View title="Black Ops 6: Augments">
			<Guide id={Path.BO6_AUGMENTS} title="Best Augments">
				<table id={styles.augments}>
					<thead>
						<tr>
							<th>Perk</th>
							<th>Minor Augment</th>
							<th>Major Augment</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								<PerkIcon type="stamin-up" />
							</td>
							<td>
								<AugmentIcon type="hot-foot" />
							</td>
							<td>
								<AugmentIcon type="stalker" />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type="quick-revive" />
							</td>
							<td>
								<AugmentIcon type="karmic-return" />
							</td>
							<td>
								<AugmentIcon type="dying-wish" />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type="juggernog" />
							</td>
							<td>
								<AugmentIcon type="hardened-plates" />
							</td>
							<td>
								<AugmentIcon type="reactive-armor" />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type="melee-macchiato" />
							</td>
							<td>
								<AugmentIcon type="strength-training" />
							</td>
							<td>
								<AugmentIcon type="expresso" />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type="speed-cola" />
							</td>
							<td>
								<AugmentIcon type="fast-pitcher" />
							</td>
							<td>
								<AugmentIcon type="classic-formula" />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type="phd-flopper" />
							</td>
							<td>
								<AugmentIcon type="tribologist" />
							</td>
							<td>
								<AugmentIcon type="phd-slider" />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type="deadshot-daiquiri" />
							</td>
							<td>
								<AugmentIcon type="dead-break" />
							</td>
							<td>
								<AugmentIcon type="dead-again" />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type="elemental-pop" />
							</td>
							<td>
								<AugmentIcon type="vulnera-bean" />
							</td>
							<td>
								<AugmentIcon type="electric-cherry" />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type="vulture-aid" />
							</td>
							<td>
								<AugmentIcon type="picky-eater" />
							</td>
							<td>
								<AugmentIcon type="parting-gift" />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type="death-perception" />
							</td>
							<td>
								<AugmentIcon type="extra-change" />
							</td>
							<td>
								<AugmentIcon type="critical-eye" />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type="double-tap-root-beer" />
							</td>
							<td>
								<AugmentIcon type="double-or-nothing" />
							</td>
							<td>
								<AugmentIcon type="double-impact" />
							</td>
						</tr>
					</tbody>
				</table>
			</Guide>
		</View>
	);
};

export default Augments;
