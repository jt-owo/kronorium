import { FC } from 'react';
import View from '../../components/Layout/View/View';
import Entry from '../../components/Layout/View/Entry/Entry';

const MWZ: FC = () => {
	return (
		<View title="Modern Warfare Zombies">
			<Entry title="Schematics Loot Table">
				<table>
					<tr>
						<th>Tier 1</th>
					</tr>
					<tr>
						<td>Deadshot Daiquiri</td>
					</tr>
					<tr>
						<td>Speed Cola</td>
					</tr>
					<tr>
						<td>Stamin-Up</td>
					</tr>
					<tr>
						<td>Brain Rot</td>
					</tr>
					<tr>
						<td>Napalm Burst</td>
					</tr>
					<tr>
						<th>Tier 2</th>
					</tr>
					<tr>
						<td>Raw Aetherium Crystal</td>
					</tr>
					<tr>
						<td>Juggernog</td>
					</tr>
					<tr>
						<td>PHD Flopper</td>
					</tr>
					<tr>
						<td>Dead Wire</td>
					</tr>
					<tr>
						<td>Shatter Blast</td>
					</tr>
					<tr>
						<th>Tier 3</th>
					</tr>
					<tr>
						<td>Epic Aether Tool</td>
					</tr>
					<tr>
						<td>Refined Aetherium Crystal</td>
					</tr>
					<tr>
						<td>Elemental Pop</td>
					</tr>
					<tr>
						<td>Tombstone Soda</td>
					</tr>
					<tr>
						<td>Ray Gun</td>
					</tr>
				</table>
				<br />
				<br />
				<table>
					<tr>
						<th>Act 1</th>
					</tr>
					<tr>
						<td>Uncommon Aether Tool</td>
					</tr>
                    <tr>
                        <td>Quick Revive</td>
                    </tr>
                    <tr>
                        <th>Act 2</th>
                    </tr>
                    <tr>
                        <td>Rare Aether Tool</td>
                    </tr>
                    <tr>
                        <td>Cryo Freeze</td>
                    </tr>
                    <tr>
                        <th>Act 3</th>
                    </tr>
                    <tr>
                        <td>Death Perception</td>
                    </tr>
                    <tr>
                        <td>Wunderwaffe DG-2</td>
                    </tr>
				</table>
			</Entry>
		</View>
	);
};

export default MWZ;
