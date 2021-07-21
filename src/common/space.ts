export type SpaceCode = '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl';

export const spaceCode2pixel: Record<SpaceCode, number> = {
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
