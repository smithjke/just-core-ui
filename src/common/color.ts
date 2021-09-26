const parseRGB = (color: string): [number, number, number] => {
    const hex = color.replace('#', '');
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);

    return [r, g, b];
};

export const calculateOpacity = (color: string, opacity: number): string => {
    const rgb = parseRGB(color);

    return `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, ${opacity})`;
};

export const calculateColor = (from: string, to: string, step: number): string => {
    const rgbFrom = parseRGB(from);
    const rgbTo = parseRGB(to);
    const rgbResult = rgbFrom.map((n, index) => Math.floor(n + (rgbTo[index] - n) * step));

    return `#${rgbResult.map(n => n.toString(16).padStart(2, '0')).join('')}`.toUpperCase();
};

export const step2percent = (step: number): number => {
    switch (Math.abs(step)) {
        case 0:
            return 0;
        case 1:
            return 0.125;
        case 2:
            return 0.25;
        case 3:
            return 0.325;
        case 4:
            return 0.5;
        case 5:
            return 0.625;
        case 6:
            return 0.750;
        case 7:
            return 0.875;
        case 8:
            return 1;
    }

    return 0;
};
