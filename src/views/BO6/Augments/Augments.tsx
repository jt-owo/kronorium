import React from 'react';
import { useState, type FC } from 'react';

import { type { Augment, Perk } from '../../../util/enum';
import { Path } } from '../../../util/paths';

import View from '../../../components/Layout/View/View';
import Guide from '../../../components/Layout/View/Guide/Guide';

import PerkIcon from '../../../components/Perk/PerkIcon';
import AugmentIcon from '../../../components/Augment/Augment';
import PerkIcon from '../../../components/Perk/PerkIcon';
import AugmentIcon from '../../../components/Augment/Augment';

import styles from './Augments.module.scss';

interface RowData {
	id: number;
	perk: Perk;
	minor: Augment;
	major: Augment;
	augments: {
		minor: Augment[];
		major: Augment[];
	};
}

const data: RowData[] = [
	{
		id: 0,
		perk: 'stamin-up',
		minor: 'hot-foot',
		major: 'stalker',
		augments: {
			minor: ['hard-target', 'quarterback', 'hot-foot'],
			major: ['free-faller', 'stalker', 'dasher']
		}
	},
	{
		id: 1,
		perk: 'quick-revive',
		minor: 'karmic-return',
		major: 'dying-wish',
		augments: {
			minor: ['swift-recovery', 'karmic-return', 'slow-death'],
			major: ['emt', 'equivalent-exchange', 'dying-wish']
		}
	},
	{
		id: 2,
		perk: 'juggernog',
		minor: 'hardened-plates',
		major: 'reactive-armor',
		augments: {
			minor: ['retaliation', 'hardened-plates', 'durable-plates'],
			major: ['probiotic', 'turtle-shell', 'reactive-armor']
		}
	},
	{
		id: 3,
		perk: 'melee-macchiato',
		minor: 'strength-training',
		major: 'expresso',
		augments: {
			minor: ['stick-n-move', 'strength-training', 'hidden-impact'],
			major: ['expresso', 'vampiric-extraction', 'triple-shot']
		}
	},
	{
		id: 4,
		perk: 'speed-cola',
		minor: 'fast-pitcher',
		major: 'classic-formula',
		augments: {
			minor: ['speedy-roulette', 'quick-swap', 'fast-pitcher'],
			major: ['supercharged', 'classic-formula', 'phantom-reload']
		}
	},
	{
		id: 5,
		perk: 'phd-flopper',
		minor: 'tribologist',
		major: 'phd-slider',
		augments: {
			minor: ['environmentalist', 'eod-technician', 'tribologist'],
			major: ['gravity-md', 'dr-ram', 'phd-slider']
		}
	},
	{
		id: 6,
		perk: 'deadshot-daiquiri',
		minor: 'dead-break',
		major: 'dead-again',
		augments: {
			minor: ['dead-break', 'dead-draw', 'dead-set'],
			major: ['dead-head', 'dead-first', 'dead-again']
		}
	},
	{
		id: 7,
		perk: 'elemental-pop',
		minor: 'vulnera-bean',
		major: 'electric-cherry',
		augments: {
			minor: ['vulnera-bean', 'pineapple-blast', 'chill-berry'],
			major: ['citrus-focus', 'imperil-peach', 'electric-cherry']
		}
	},
	{
		id: 8,
		perk: 'vulture-aid',
		minor: 'picky-eater',
		major: 'parting-gift',
		augments: {
			minor: ['condors-reach', 'carrion-luggage', 'picky-eater'],
			major: ['fetid-upgr-aid', 'smell-of-death', 'parting-gift']
		}
	},
	{
		id: 9,
		perk: 'death-perception',
		minor: 'extra-change',
		major: 'critical-eye',
		augments: {
			minor: ['birds-eye-view', 'extra-change', 'further-insight'],
			major: ['treasure-hunter', 'death-stare', 'critical-eye']
		}
	},
	{
		id: 10,
		perk: 'double-tap-root-beer',
		minor: 'double-or-nothing',
		major: 'double-standard',
		augments: {
			minor: ['double-time', 'double-or-nothing', 'double-play'],
			major: ['double-jeopardy', 'double-impact', 'double-standard']
		}
	}
];

const Augments: FC = () => {
	const [expandedRow, setExpandedRow] = useState<number | null>(null);

	const handleRowClick = (id: number) => {
		setExpandedRow((prev) => (prev === id ? null : id));
	};

	return (
		<View title="Black Ops 6: Augments">
			<Guide id={Path.BO6_AUGMENTS} title="Best Augments">
				<table id={styles['augments']}>
					<thead>
						<tr>
							<th>Perk</th>
							<th>Minor Augment</th>
							<th>Major Augment</th>
						</tr>
					</thead>
					<tbody>
						{data.map((row) => (
							<React.Fragment key={row.id}>
								<tr
									className={styles['main-row']}
									onClick={() => handleRowClick(row.id)}>
									<td>
										<PerkIcon type={row.perk} />
									</td>
									<td>
										<AugmentIcon type={row.minor} />
									</td>
									<td>
										<AugmentIcon type={row.major} />
									</td>
								</tr>
								<tr
									className={`${styles['expanded-row']} ${
										expandedRow === row.id
											? styles['expanded']
											: ''
									}`}>
									<td
										className={
											styles['expanded-content']
										}></td>
									<td>
										<div>
											{row.augments.minor.map(
												(augment) => (
													<AugmentIcon
														selected={
															row.minor ===
															augment
														}
														type={augment}
													/>
												)
											)}
										</div>
									</td>
									<td>
										<div>
											{row.augments.major.map(
												(augment) => (
													<AugmentIcon
														selected={
															row.major ===
															augment
														}
														type={augment}
													/>
												)
											)}
										</div>
									</td>
								</tr>
							</React.Fragment>
						))}
					</tbody>
				</table>
			</Guide>
		</View>
	);
};

export default Augments;
