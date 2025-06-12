import type { FC } from 'react';

import { Path } from '../../util/paths';

import View from '../../components/Layout/View/View';
import Guide from '../../components/Layout/View/Guide/Guide';

import MapLink from './MapLink/MapLink';
import SchematicIcon from '../../components/Icons/Schematic/Schematic';

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
			<Guide id={Path.MWZ_SCHEMATICS} title="Schematics Loot Tables">
				<table id={styles['schematics']} className={styles['table']}>
					<tbody>
						<tr>
							<th colSpan={5}>Tier 1</th>
						</tr>
						<tr>
							<td>
								<SchematicIcon type="deadshot-daiquiri" />
							</td>
							<td>
								<SchematicIcon type="speed-cola" />
							</td>
							<td>
								<SchematicIcon type="stamin-up" />
							</td>
							<td>
								<SchematicIcon type="brain-rot" />
							</td>
							<td>
								<SchematicIcon type="napalm-burst" />
							</td>
						</tr>
						<tr>
							<th colSpan={5}>Tier 2</th>
						</tr>
						<tr>
							<td>
								<SchematicIcon type="raw-aetherium-crystal" />
							</td>
							<td>
								<SchematicIcon type="juggernog" />
							</td>
							<td>
								<SchematicIcon type="phd-flopper" />
							</td>
							<td>
								<SchematicIcon type="dead-wire" />
							</td>
							<td>
								<SchematicIcon type="shatter-blast" />
							</td>
						</tr>
						<tr>
							<th colSpan={5}>Tier 3</th>
						</tr>
						<tr>
							<td>
								<SchematicIcon type="epic-aether-tool" />
							</td>
							<td>
								<SchematicIcon type="refined-aetherium-crystal" />
							</td>
							<td>
								<SchematicIcon type="elemental-pop" />
							</td>
							<td>
								<SchematicIcon type="tombstone-soda" />
							</td>
							<td>
								<SchematicIcon type="ray-gun" />
							</td>
						</tr>
					</tbody>
				</table>
				<table id={styles['schematics-missions']}>
					<tbody>
						<tr>
							<th colSpan={2}>Act 1</th>
						</tr>
						<tr>
							<td>
								<SchematicIcon type="uncommon-aether-tool" />
							</td>
							<td>
								<SchematicIcon type="quick-revive" />
							</td>
						</tr>
						<tr>
							<th colSpan={2}>Act 2</th>
						</tr>
						<tr>
							<td>
								<SchematicIcon type="rare-aether-tool" />
							</td>
							<td>
								<SchematicIcon type="cryo-freeze" />
							</td>
						</tr>
						<tr>
							<th colSpan={2}>Act 3</th>
						</tr>
						<tr>
							<td>
								<SchematicIcon type="death-perception" />
							</td>
							<td>
								<SchematicIcon type="wunderwaffe-dg2" />
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
					This will <u>strip off</u> the <u>Rarity</u>, the{' '}
					<u>Pack-a-Punch Level</u> & the <u>Ammo Mod</u> of the
					weapon you are holding.
				</p>
				<p>
					Afterwards you can loot the grave with a chance to get an{' '}
					<u>Aether Tool</u>, an <u>Aetherium Crystal</u> and an{' '}
					<u>Ammo Mod</u> based on the weapon you payed respect with.
				</p>
				<p>
					<i>
						With this side easter egg & some luck, you can Exil
						without loosing all of your weapon upgrades.
					</i>
				</p>
			</Guide>
		</View>
	);
};

export default MWZ;
