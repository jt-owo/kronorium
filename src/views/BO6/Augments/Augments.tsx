import { FC } from 'react';

import Path from '../../../util/paths';

import View from '../../../components/Layout/View/View';
import Guide from '../../../components/Layout/View/Guide/Guide';

import PerkIcon, { Perk } from '../../../components/Perk/Perk';
import AugmentIcon, { Augment } from '../../../components/Augment/Augment';

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
								<PerkIcon type={Perk.STAMIN_UP} />
							</td>
							<td>
								<AugmentIcon type={Augment.HOT_FOOT} />
							</td>
							<td>
								<AugmentIcon type={Augment.STALKER} />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type={Perk.QUICK_REVIVE} />
							</td>
							<td>
								<AugmentIcon type={Augment.KARMIC_RETURN} />
							</td>
							<td>
								<AugmentIcon type={Augment.DYING_WISH} />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type={Perk.JUGGERNOG} />
							</td>
							<td>
								<AugmentIcon type={Augment.HARDENED_PLATES} />
							</td>
							<td>
								<AugmentIcon type={Augment.REACTIVE_ARMOR} />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type={Perk.MELEE_MACCHIATO} />
							</td>
							<td>
								<AugmentIcon type={Augment.STRENGTH_TRAINING} />
							</td>
							<td>
								<AugmentIcon type={Augment.EXPRESSO} />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type={Perk.SPEED_COLA} />
							</td>
							<td>
								<AugmentIcon type={Augment.FAST_PITCHER} />
							</td>
							<td>
								<AugmentIcon type={Augment.CLASSIC_FORMULA} />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type={Perk.PHD_FLOPPER} />
							</td>
							<td>
								<AugmentIcon type={Augment.TRIBOLOGIST} />
							</td>
							<td>
								<AugmentIcon type={Augment.PHD_SLIDER} />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type={Perk.DEADSHOT_DAIQUIRI} />
							</td>
							<td>
								<AugmentIcon type={Augment.DEAD_BREAK} />
							</td>
							<td>
								<AugmentIcon type={Augment.DEAD_AGAIN} />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type={Perk.ELEMENTAL_POP} />
							</td>
							<td>
								<AugmentIcon type={Augment.VULNERA_BEAN} />
							</td>
							<td>
								<AugmentIcon type={Augment.ELECTRIC_CHERRY} />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type={Perk.VULTURE_AID} />
							</td>
							<td>
								<AugmentIcon type={Augment.PICKY_EATER} />
							</td>
							<td>
								<AugmentIcon type={Augment.PARTING_GIFT} />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type={Perk.DEATH_PERCEPTION} />
							</td>
							<td>
								<AugmentIcon type={Augment.EXTRA_CHANGE} />
							</td>
							<td>
								<AugmentIcon type={Augment.CRITICAL_EYE} />
							</td>
						</tr>
						<tr>
							<td>
								<PerkIcon type={Perk.DOUBLE_TAP_ROOT_BEET} />
							</td>
							<td>
								<AugmentIcon type={Augment.DOUBLE_OR_NOTHING} />
							</td>
							<td>
								<AugmentIcon type={Augment.DOUBLE_IMPACT} />
							</td>
						</tr>
					</tbody>
				</table>
			</Guide>
		</View>
	);
};

export default Augments;
