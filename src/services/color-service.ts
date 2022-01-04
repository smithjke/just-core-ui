export type ColorStep = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

function parseRGB(color: string): [number, number, number] {
    const hex = color.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return [r, g, b];
}

export class ColorService {
    readonly step2percent: Record<ColorStep, number> = Object.freeze({
        [0]: 0,
        [1]: 0.125,
        [2]: 0.25,
        [3]: 0.325,
        [4]: 0.5,
        [5]: 0.625,
        [6]: 0.75,
        [7]: 0.875,
        [8]: 1,
    });

    calculateOpacity(color: string, opacity: number): string {
        const rgb = parseRGB(color);

        return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
    }

    calculateColor(from: string, to: string, percent: number): string {
        const rgbResult = parseRGB(from)
            .map((n, index) => Math.floor(n + (parseRGB(to)[index] - n) * percent));

        return `#${rgbResult.map(n => n.toString(16).padStart(2, '0')).join('')}`.toUpperCase();
    }
}
