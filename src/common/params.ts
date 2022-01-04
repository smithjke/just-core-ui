export type RadiusCode = 's' | 'm' | 'l';

export type SpaceCode = '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl';

export type AvatarCode = 'xs' | 's' | 'm' | 'l' | 'xl';

export type FontSize = '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl';

export type FontWeight = 'regular' | 'medium' | 'semi-bold' | 'bold';

export type LineHeight = 's' | 'm' | 'l';

const RADIUS: Record<RadiusCode, number> = {
    's': 3,
    'm': 6,
    'l': 12,
};

const SPACE: Record<SpaceCode, number> = {
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

const AVATAR: Record<AvatarCode, number> = {
    'xs': 28,
    's': 32,
    'm': 40,
    'l': 56,
    'xl': 64,
};

// FLOOR(1.125 Major Second)
const FONT_SIZE_MOBILE: Record<FontSize, number> = {
    '2xs': 11,
    'xs': 12,
    's': 14,
    'm': 16,
    'l': 18,
    'xl': 20,
    '2xl': 22,
    '3xl': 25,
    '4xl': 28,
};

// CEIL(1.200 Minor Third)
const FONT_SIZE_DESKTOP: Record<FontSize, number> = {
    '2xs': 10,
    'xs': 12,
    's': 14,
    'm': 16,
    'l': 20,
    'xl': 24,
    '2xl': 28,
    '3xl': 34,
    '4xl': 40,
};

const FONT_WEIGHT: Record<FontWeight, number> = {
    'regular': 400,
    'medium': 500,
    'semi-bold': 600,
    'bold': 700,
};

const LINE_HEIGHT: Record<LineHeight, number> = {
    's': 1,
    'm': 1.2,
    'l': 1.3,
};

export const DefaultParams = {
    BUTTON_PRIMARY_COLOR: 'GRAPE',
    BUTTON_SECONDARY_COLOR: 'BLUE',
    LINK_PRIMARY_COLOR: 'GRAPE',
    TOGGLE_PRIMARY_COLOR: 'GRAPE',
    PRIMARY_COLOR: 'GRAPE',
    BLOCK_LINK_SIZE: '20',
    RADIUS,
    SPACE,
    AVATAR,
    FONT_SIZE_MOBILE,
    FONT_SIZE_DESKTOP,
    FONT_WEIGHT,
    LINE_HEIGHT,
};
