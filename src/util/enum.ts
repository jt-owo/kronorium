export type Perk =
    | 'stamin-up'
    | 'quick-revive'
    | 'juggernog'
    | 'melee-macchiato'
    | 'speed-cola'
    | 'phd-flopper'
    | 'deadshot-daiquiri'
    | 'elemental-pop'
    | 'vulture-aid'
    | 'death-perception'
    | 'double-tap-root-beer';

export type Augment =
    // STAMIN-UP
    | 'hard-target'
    | 'quarterback'
    | 'hot-foot'
    | 'free-faller'
    | 'stalker'
    | 'dasher'
    // QUICK REVIVE
    | 'swift-recovery'
    | 'karmic-return'
    | 'slow-death'
    | 'emt'
    | 'equivalent-exchange'
    | 'dying-wish'
    // JUGGERNOG
    | 'retaliation'
    | 'hardened-plates'
    | 'durable-plates'
    | 'probiotic'
    | 'turtle-shell'
    | 'reactive-armor'
    // MELEE MACCHIATO
    | 'stick-n-move'
    | 'strength-training'
    | 'hidden-impact'
    | 'expresso'
    | 'vampiric-extraction'
    | 'triple-shot'
    // SPEED COLA
    | 'speedy-roulette'
    | 'quick-swap'
    | 'fast-pitcher'
    | 'supercharged'
    | 'classic-formula'
    | 'phantom-reload'
    // PHD FLOPPER
    | 'environmentalist'
    | 'eod-technician'
    | 'tribologist'
    | 'gravity-md'
    | 'dr-ram'
    | 'phd-slider'
    // DEADSHOT DAIQUIRI
    | 'dead-break'
    | 'dead-draw'
    | 'dead-set'
    | 'dead-head'
    | 'dead-first'
    | 'dead-again'
    // ELEMENTAL POP
    | 'vulnera-bean'
    | 'pineapple-blast'
    | 'chill-berry'
    | 'citrus-focus'
    | 'imperil-peach'
    | 'electric-cherry'
    // VULTURE AID
    | 'condors-reach'
    | 'carrion-luggage'
    | 'picky-eater'
    | 'fetid-upgr-aid'
    | 'smell-of-death'
    | 'parting-gift'
    // DEATH PERCEPTION
    | 'birds-eye-view'
    | 'extra-change'
    | 'further-insight'
    | 'treasure-hunter'
    | 'death-stare'
    | 'critical-eye'
    // DOUBLE TAP ROOT BEER
    | 'double-time'
    | 'double-or-nothing'
    | 'double-play'
    | 'double-jeopardy'
    | 'double-impact'
    | 'double-standard';

type PerkSchematic =
    | 'deadshot-daiquiri'
    | 'speed-cola'
    | 'stamin-up'
    | 'juggernog'
    | 'phd-flopper'
    | 'elemental-pop'
    | 'tombstone-soda'
    | 'quick-revive'
    | 'death-perception';

type AmmoModSchematic =
    | 'brain-rot'
    | 'napalm-burst'
    | 'dead-wire'
    | 'shatter-blast'
    | 'cryo-freeze';

type AetheriumCrystalSchematic =
    | 'raw-aetherium-crystal'
    | 'refined-aetherium-crystal'
    | 'flawless-aetherium-crystal';

type AetherToolSchematic =
    | 'uncommon-aether-tool'
    | 'rare-aether-tool'
    | 'epic-aether-tool'
    | 'legendary-aether-tool';

type WonderWeaponSchematic =
    | 'ray-gun'
    | 'wunderwaffe-dg2';

export type Schematic =
    | PerkSchematic
    | AmmoModSchematic
    | AetheriumCrystalSchematic
    | AetherToolSchematic
    | WonderWeaponSchematic;