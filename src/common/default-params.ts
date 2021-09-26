import { RadiusCode } from './radius';
import { SpaceCode } from './space';

export const RADIUS: Record<RadiusCode, number> = {
    's': 3,
    'm': 6,
    'l': 12,
};

export const SPACE: Record<SpaceCode, number> = {
    '2xs': 4,
    'xs': 8,
    's': 12,
    'm': 16,
    'l': 24,
    'xl': 32,
    '2xl': 48,
    '3xl': 64,
    '4xl': 96,
};

export const DefaultParams = {
    BUTTON_PRIMARY_COLOR: 'GRAPE',
    BUTTON_SECONDARY_COLOR: 'BLUE',
    PRIMARY_COLOR: 'GRAPE',
    RADIUS,
    SPACE,
};
