import { FC } from 'react';

import styles from './Acquisition.module.scss';

export enum AcquisitionType {
    DEADSHOT_DAIQUIRI = 'deadshot-daiquiri',
    SPEED_COLA = 'speed-cola',
    STAMIN_UP = 'stamin-up',
    JUGGERNOG = 'juggernog',
    PHD_FLOPPER = 'phd-flopper',
    ELEMENTAL_POP = 'elemental-pop',
    TOMBSTONE_SODA = 'tombstone-soda',
    QUICK_REVIVE = 'quick-revive',
    DEATH_PERCEPTION = 'death-perception',

    BRAIN_ROT = 'brain-rot',
    NAPALM_BURST = 'napalm-burst',
    DEAD_WIRE = 'dead-wire',
    SHATTER_BLAST = 'shatter-blast',
    CRYO_FREEZE = 'cryo-freeze',

    RAW_AETHERIUM_CRYSTAL = 'raw-aetherium-crystal',
    REFINED_AETHERIUM_CRYSTAL = 'refined-aetherium-crystal',
    FLAWLESS_AETHERIUM_CRYSTAL = 'flawless-aetherium-crystal',

    UNCOMMON_AETHER_TOOL = 'uncommon-aether-tool',
    RARE_AETHER_TOOL = 'rare-aether-tool',
    EPIC_AETHER_TOOL = 'epic-aether-tool',
    LEGENDARY_AETHER_TOOL = 'legendary-aether-tool',

    RAY_GUN = 'ray-gun',
    WUNDERWAFFE_DG2 = 'wunderwaffe-dg2'
}

type AcquisitionProps = {
	type: AcquisitionType;
};

const Acquisition: FC<AcquisitionProps> = ({ type }) => {
	return <div className={styles.acquisition}>{type}</div>;
};

export default Acquisition;
