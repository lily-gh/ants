import wallImage from '../../assets/images/cards/wall.png';
import foundationsImage from '../../assets/images/cards/foundations.png';
import defenseImage from '../../assets/images/cards/defense.png';
import reserveImage from '../../assets/images/cards/reserve.png';
import towerImage from '../../assets/images/cards/tower.png';
import schoolImage from '../../assets/images/cards/school.png';
import wainImage from '../../assets/images/cards/wain.png';
import fenceImage from '../../assets/images/cards/fence.png';
import fortImage from '../../assets/images/cards/fort.png';
import babylonImage from '../../assets/images/cards/babylon.png';
import archerImage from '../../assets/images/cards/archer.png';
import knightImage from '../../assets/images/cards/knight.png';
import riderImage from '../../assets/images/cards/rider.png';
import platoonImage from '../../assets/images/cards/platoon.png';
import recruitImage from '../../assets/images/cards/recruit.png';
import attackImage from '../../assets/images/cards/attack.png';
import saboteurImage from '../../assets/images/cards/saboteur.png';
import thiefImage from '../../assets/images/cards/thief.png';
import SWATImage from '../../assets/images/cards/swat.png';
import BansheeImage from '../../assets/images/cards/Banshee.png';
import conjureBricksImage from '../../assets/images/cards/conjureBricks.png';
import destroyBricksImage from '../../assets/images/cards/destroyBricks.png';
import conjureWeaponsImage from '../../assets/images/cards/conjureWeapons.png';
import destroyWeaponsImage from '../../assets/images/cards/destroyWeapons.png';
import conjureCrystalsImage from '../../assets/images/cards/conjureCrystals.png';
import destroyCrystalsImage from '../../assets/images/cards/destroyCrystals.png';
import sorcererImage from '../../assets/images/cards/sorcerer.png';
import dragonImage from '../../assets/images/cards/dragon.png';
import pixiesImage from '../../assets/images/cards/pixies.png';
import curseImage from '../../assets/images/cards/curse.png';
import { Sound } from '../../sounds/Sounds';

export type CardBuilding =
    | 'wall'
    | 'foundations'
    | 'defense'
    | 'reserve'
    | 'tower'
    | 'school'
    | 'wain'
    | 'fence'
    | 'fort'
    | 'babylon';
export type CardFighting =
    | 'archer'
    | 'knight'
    | 'rider'
    | 'platoon'
    | 'recruit'
    | 'attack'
    | 'saboteur'
    | 'thief'
    | 'SWAT'
    | 'Banshee';
export type CardMagic =
    | 'conjureBricks'
    | 'destroyBricks'
    | 'conjureWeapons'
    | 'destroyWeapons'
    | 'conjureCrystals'
    | 'destroyCrystals'
    | 'sorcerer'
    | 'dragon'
    | 'pixies'
    | 'curse';

export type CardId = CardBuilding | CardFighting | CardMagic;

export interface CardDefinition {
    id: CardId;
    nameKey: string;
    descriptionKey: string;
    imageUrl: string;
    sound: Sound;
    requiredResources: {
        bricks?: number;
        weapons?: number;
        crystals?: number;
    };
    impact: {
        player?: {
            builders?: number;
            bricks?: number;
            soldiers?: number;
            weapons?: number;
            mages?: number;
            crystals?: number;
            castle?: number;
            wall?: number;
        };
        opponent?: {
            attack?: number;
            builders?: number;
            bricks?: number;
            soldiers?: number;
            weapons?: number;
            mages?: number;
            crystals?: number;
            castle?: number;
            wall?: number;
        };
    };
}

export type CardDefinitions = Record<CardId, CardDefinition>;

export const cardDefinitions: CardDefinitions = {
    // type "building"
    wall: {
        id: 'wall',
        nameKey: 'cards.wall.name',
        descriptionKey: 'cards.wall.description',
        imageUrl: wallImage,
        sound: 'buildWall',
        requiredResources: {
            bricks: 1,
        },
        impact: {
            player: {
                wall: 3,
            },
        },
    },
    foundations: {
        id: 'foundations', // original "base"
        nameKey: 'cards.foundations.name',
        descriptionKey: 'cards.foundations.description',
        imageUrl: foundationsImage,
        sound: 'buildCastle',
        requiredResources: {
            bricks: 1,
        },
        impact: {
            player: {
                castle: 2,
            },
        },
    },
    defense: {
        id: 'defense',
        nameKey: 'cards.defense.name',
        descriptionKey: 'cards.defense.description',
        imageUrl: defenseImage,
        sound: 'buildWall',
        requiredResources: {
            bricks: 3,
        },
        impact: {
            player: {
                wall: 6,
            },
        },
    },
    reserve: {
        id: 'reserve',
        nameKey: 'cards.reserve.name',
        descriptionKey: 'cards.reserve.description',
        imageUrl: reserveImage,
        sound: 'buildCastle',
        requiredResources: {
            bricks: 3,
        },
        impact: {
            player: {
                castle: 8,
                wall: -4,
            },
        },
    },
    tower: {
        id: 'tower',
        nameKey: 'cards.tower.name',
        descriptionKey: 'cards.tower.description',
        imageUrl: towerImage,
        sound: 'buildCastle',
        requiredResources: {
            bricks: 5,
        },
        impact: {
            player: {
                castle: 5,
            },
        },
    },
    school: {
        id: 'school',
        nameKey: 'cards.school.name',
        descriptionKey: 'cards.school.description',
        imageUrl: schoolImage,
        sound: 'boostPower',
        requiredResources: {
            bricks: 8,
        },
        impact: {
            player: {
                builders: 1,
            },
        },
    },
    wain: {
        id: 'wain',
        nameKey: 'cards.wain.name',
        descriptionKey: 'cards.wain.description',
        imageUrl: wainImage,
        sound: 'buildCastle',
        requiredResources: {
            bricks: 10,
        },
        impact: {
            player: {
                castle: 8,
            },
            opponent: {
                castle: -4,
            },
        },
    },
    fence: {
        id: 'fence',
        nameKey: 'cards.fence.name',
        descriptionKey: 'cards.fence.description',
        imageUrl: fenceImage,
        sound: 'buildWall',
        requiredResources: {
            bricks: 12,
        },
        impact: {
            player: {
                wall: 22,
            },
        },
    },
    fort: {
        id: 'fort',
        nameKey: 'cards.fort.name',
        descriptionKey: 'cards.fort.description',
        imageUrl: fortImage,
        sound: 'buildCastle',
        requiredResources: {
            bricks: 18,
        },
        impact: {
            player: {
                castle: 20,
            },
        },
    },
    babylon: {
        id: 'babylon',
        nameKey: 'cards.babylon.name',
        descriptionKey: 'cards.babylon.description',
        imageUrl: babylonImage,
        sound: 'buildCastle',
        requiredResources: {
            bricks: 39,
        },
        impact: {
            player: {
                castle: 32,
            },
        },
    },
    // type "army"
    archer: {
        id: 'archer',
        nameKey: 'cards.archer.name',
        descriptionKey: 'cards.archer.description',
        imageUrl: archerImage,
        sound: 'destroyWall',
        requiredResources: {
            weapons: 1,
        },
        impact: {
            opponent: {
                attack: 2,
            },
        },
    },
    knight: {
        id: 'knight',
        nameKey: 'cards.knight.name',
        descriptionKey: 'cards.knight.description',
        imageUrl: knightImage,
        sound: 'destroyWall',
        requiredResources: {
            weapons: 2,
        },
        impact: {
            opponent: {
                attack: 3,
            },
        },
    },
    rider: {
        id: 'rider',
        nameKey: 'cards.rider.name',
        descriptionKey: 'cards.rider.description',
        imageUrl: riderImage,
        sound: 'destroyWall',
        requiredResources: {
            weapons: 2,
        },
        impact: {
            opponent: {
                attack: 4,
            },
        },
    },
    platoon: {
        id: 'platoon',
        nameKey: 'cards.platoon.name',
        descriptionKey: 'cards.platoon.description',
        imageUrl: platoonImage,
        sound: 'destroyWall',
        requiredResources: {
            weapons: 4,
        },
        impact: {
            opponent: {
                attack: 6,
            },
        },
    },
    recruit: {
        id: 'recruit',
        nameKey: 'cards.recruit.name',
        descriptionKey: 'cards.recruit.description',
        imageUrl: recruitImage,
        sound: 'boostPower',
        requiredResources: {
            weapons: 8,
        },
        impact: {
            player: {
                soldiers: 1,
            },
        },
    },
    attack: {
        id: 'attack',
        nameKey: 'cards.attack.name',
        descriptionKey: 'cards.attack.description',
        imageUrl: attackImage,
        sound: 'destroyWall',
        requiredResources: {
            weapons: 10,
        },
        impact: {
            opponent: {
                attack: 12,
            },
        },
    },
    saboteur: {
        id: 'saboteur',
        nameKey: 'cards.saboteur.name',
        descriptionKey: 'cards.saboteur.description',
        imageUrl: saboteurImage,
        sound: 'destroyStock',
        requiredResources: {
            weapons: 12,
        },
        impact: {
            opponent: {
                bricks: -4,
                weapons: -4,
                crystals: -4,
            },
        },
    },
    thief: {
        id: 'thief',
        nameKey: 'cards.thief.name',
        descriptionKey: 'cards.thief.description',
        imageUrl: thiefImage,
        sound: 'increaseStock',
        requiredResources: {
            weapons: 15,
        },
        impact: {
            player: {
                bricks: 5,
                weapons: 5,
                crystals: 5,
            },
            opponent: {
                bricks: -5,
                weapons: -5,
                crystals: -5,
            },
        },
    },
    SWAT: {
        id: 'SWAT',
        nameKey: 'cards.SWAT.name',
        descriptionKey: 'cards.SWAT.description',
        imageUrl: SWATImage,
        sound: 'destroyCastle',
        requiredResources: {
            weapons: 18,
        },
        impact: {
            opponent: {
                castle: -10,
            },
        },
    },
    Banshee: {
        id: 'Banshee',
        nameKey: 'cards.Banshee.name',
        descriptionKey: 'cards.Banshee.description',
        imageUrl: BansheeImage,
        sound: 'destroyWall',
        requiredResources: {
            weapons: 28,
        },
        impact: {
            opponent: {
                attack: 32,
            },
        },
    },
    // type "magic"
    conjureBricks: {
        id: 'conjureBricks',
        nameKey: 'cards.conjureBricks.name',
        descriptionKey: 'cards.conjureBricks.description',
        imageUrl: conjureBricksImage,
        sound: 'increaseStock',
        requiredResources: {
            crystals: 8,
        },
        impact: {
            player: {
                bricks: 8,
            },
        },
    },
    destroyBricks: {
        id: 'destroyBricks', // original "crush bricks"
        nameKey: 'cards.destroyBricks.name',
        descriptionKey: 'cards.destroyBricks.description',
        imageUrl: destroyBricksImage,
        sound: 'destroyStock',
        requiredResources: {
            crystals: 8,
        },
        impact: {
            opponent: {
                bricks: -8,
            },
        },
    },
    conjureWeapons: {
        id: 'conjureWeapons',
        nameKey: 'cards.conjureWeapons.name',
        descriptionKey: 'cards.conjureWeapons.description',
        imageUrl: conjureWeaponsImage,
        sound: 'increaseStock',
        requiredResources: {
            crystals: 8,
        },
        impact: {
            player: {
                weapons: 8,
            },
        },
    },
    destroyWeapons: {
        id: 'destroyWeapons', // original "crush weapons"
        nameKey: 'cards.destroyWeapons.name',
        descriptionKey: 'cards.destroyWeapons.description',
        imageUrl: destroyWeaponsImage,
        sound: 'destroyStock',
        requiredResources: {
            crystals: 8,
        },
        impact: {
            opponent: {
                weapons: -8,
            },
        },
    },
    conjureCrystals: {
        id: 'conjureCrystals',
        nameKey: 'cards.conjureCrystals.name',
        descriptionKey: 'cards.conjureCrystals.description',
        imageUrl: conjureCrystalsImage,
        sound: 'increaseStock',
        requiredResources: {
            crystals: 4,
        },
        impact: {
            player: {
                crystals: 8,
            },
        },
    },
    destroyCrystals: {
        id: 'destroyCrystals', // original "crush crystals"
        nameKey: 'cards.destroyCrystals.name',
        descriptionKey: 'cards.destroyCrystals.description',
        imageUrl: destroyCrystalsImage,
        sound: 'destroyStock',
        requiredResources: {
            crystals: 4,
        },
        impact: {
            opponent: {
                crystals: -8,
            },
        },
    },
    sorcerer: {
        id: 'sorcerer',
        nameKey: 'cards.sorcerer.name',
        descriptionKey: 'cards.sorcerer.description',
        imageUrl: sorcererImage,
        sound: 'boostPower',
        requiredResources: {
            crystals: 8,
        },
        impact: {
            player: {
                mages: 1,
            },
        },
    },
    dragon: {
        id: 'dragon',
        nameKey: 'cards.dragon.name',
        descriptionKey: 'cards.dragon.description',
        imageUrl: dragonImage,
        sound: 'destroyWall',
        requiredResources: {
            crystals: 21,
        },
        impact: {
            opponent: {
                attack: 25,
            },
        },
    },
    pixies: {
        id: 'pixies',
        nameKey: 'cards.pixies.name',
        descriptionKey: 'cards.pixies.description',
        imageUrl: pixiesImage,
        sound: 'buildCastle',
        requiredResources: {
            crystals: 22,
        },
        impact: {
            player: {
                castle: 22,
            },
        },
    },
    curse: {
        id: 'curse',
        nameKey: 'cards.curse.name',
        descriptionKey: 'cards.curse.description',
        imageUrl: curseImage,
        sound: 'curse',
        requiredResources: {
            crystals: 25,
        },
        impact: {
            player: {
                builders: 1,
                bricks: 1,
                soldiers: 1,
                weapons: 1,
                mages: 1,
                crystals: 1,
                castle: 1,
                wall: 1,
            },
            opponent: {
                builders: -1,
                bricks: -1,
                soldiers: -1,
                weapons: -1,
                mages: -1,
                crystals: -1,
                castle: -1,
                wall: -1,
            },
        },
    },
};
