/* eslint-disable jsx-a11y/anchor-is-valid */
import { FC } from 'react';
import Path from '../../util/paths';

import View from '../../components/Layout/View/View';
import Guide from '../../components/Layout/View/Guide/Guide';

import MapLink from './MapLink/MapLink';
import Acquisition, { AcquisitionType } from './Acquisition/Acquisition';

import styles from './MWZ.module.scss';

const MWZ: FC = () => {
	return (
		<View title="Modern Warfare Zombies">
			<Guide id={Path.MWZ_LOOT} title="Guaranteed Loot">
				<table>
					<thead>
						<tr>
							<th>Item</th>
							<th>Location</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Random Ammo Mod</td>
							<td>Aether Nest</td>
						</tr>
						<tr>
							<td>2-Plate Vest</td>
							<td>Mercenary Camp</td>
						</tr>
						<tr>
							<td>Mercenary Stronghold Keycard</td>
							<td>Mercenary Camp/Convoy</td>
						</tr>
						<tr>
							<td>3-Plate Vest</td>
							<td>Mercenary Stronghold</td>
						</tr>
					</tbody>
				</table>
			</Guide>
			<Guide id={Path.MWZ_SCHEMATICS} title="Schematics Loot Table">
				<table id={styles.schematics} className={styles.table}>
					<tbody>
						<tr>
							<th colSpan={5}>Tier 1</th>
						</tr>
						<tr>
							<td>
								<Acquisition type={AcquisitionType.DEADSHOT_DAIQUIRI} />
							</td>
							<td>
								<Acquisition type={AcquisitionType.SPEED_COLA} />
							</td>
							<td>
								<Acquisition type={AcquisitionType.STAMIN_UP} />
							</td>
							<td>
								<Acquisition type={AcquisitionType.BRAIN_ROT} />
							</td>
							<td>
								<Acquisition type={AcquisitionType.NAPALM_BURST} />
							</td>
						</tr>
						<tr>
							<th colSpan={5}>Tier 2</th>
						</tr>
						<tr>
							<td>
								<Acquisition type={AcquisitionType.RAW_AETHERIUM_CRYSTAL} />
							</td>
							<td>
								<Acquisition type={AcquisitionType.JUGGERNOG} />
							</td>
							<td>
								<Acquisition type={AcquisitionType.PHD_FLOPPER} />
							</td>
							<td>
								<Acquisition type={AcquisitionType.DEAD_WIRE} />
							</td>
							<td>
								<Acquisition type={AcquisitionType.SHATTER_BLAST} />
							</td>
						</tr>
						<tr>
							<th colSpan={5}>Tier 3</th>
						</tr>
						<tr>
							<td>
								<Acquisition type={AcquisitionType.EPIC_AETHER_TOOL} />
							</td>
							<td>
								<Acquisition type={AcquisitionType.REFINED_AETHERIUM_CRYSTAL} />
							</td>
							<td>
								<Acquisition type={AcquisitionType.ELEMENTAL_POP} />
							</td>
							<td>
								<Acquisition type={AcquisitionType.TOMBSTONE_SODA} />
							</td>
							<td>
								<Acquisition type={AcquisitionType.RAY_GUN} />
							</td>
						</tr>
					</tbody>
				</table>
				<br />
				<table>
					<tbody>
						<tr>
							<th colSpan={2}>Act 1</th>
						</tr>
						<tr>
							<td>
								<Acquisition type={AcquisitionType.UNCOMMON_AETHER_TOOL} />
							</td>
							<td>
								<Acquisition type={AcquisitionType.QUICK_REVIVE} />
							</td>
						</tr>
						<tr>
							<th colSpan={2}>Act 2</th>
						</tr>
						<tr>
							<td>
								<Acquisition type={AcquisitionType.RARE_AETHER_TOOL} />
							</td>
							<td>
								<Acquisition type={AcquisitionType.CRYO_FREEZE} />
							</td>
						</tr>
						<tr>
							<th colSpan={2}>Act 3</th>
						</tr>
						<tr>
							<td>
								<Acquisition type={AcquisitionType.DEATH_PERCEPTION} />
							</td>
							<td>
								<Acquisition type={AcquisitionType.WUNDERWAFFE_DG2} />
							</td>
						</tr>
					</tbody>
				</table>
			</Guide>
			<Guide id={Path.MWZ_GRAVEYARD} title="Graveyard Easter Egg">
				<p>
					You can find a grave located in
					<MapLink x={-124.9453125} y={115.828125}>
						E4
					</MapLink>
					.
				</p>
				<p>Interacting with the grave allows you to pay respects.</p>
				<p>
					This will <u>strip off</u> the <u>Rarity</u>, the <u>Pack-a-Punch Level</u> & the <u>Ammo Mod</u> of the weapon you are holding.
				</p>
				<p>
					Afterwards you can loot the grave with a chance to get an <u>Aether Tool</u>, an <u>Aetherium Crystal</u> and an <u>Ammo Mod</u> based on the weapon you payed respect with.
				</p>
				<p>
					<i>With this side easter egg & some luck, you can Exil without loosing all of your weapon upgrades.</i>
				</p>
			</Guide>
		</View>
	);
};

export default MWZ;
