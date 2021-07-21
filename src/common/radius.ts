export type RadiusCode = 's' | 'm' | 'l';

export const radius2pixel: Record<RadiusCode, number> = {
    's': 3,
    'm': 6,
    'l': 12,
};
