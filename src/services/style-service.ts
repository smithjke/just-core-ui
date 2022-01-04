import { Theme } from '../common';
import { useColorService } from '../di';
import { ColorService, ColorStep } from './color-service';

export type StyleMutateColorParams = {
    step?: ColorStep;
    opacity?: number;
};

export class StyleService {
    private readonly colorService: ColorService;

    constructor() {
        this.colorService = useColorService();
    }

    mutateColor(baseColor: string, targetColor: string, params: StyleMutateColorParams): string {
        const {
            step = 0,
            opacity,
        } = params;

        let color = baseColor;

        if (step) {
            const percent = this.colorService.step2percent[step];

            color = this.colorService.calculateColor(baseColor, targetColor, percent);
        }

        if (typeof opacity !== 'undefined') {
            color = this.colorService.calculateOpacity(color, opacity);
        }

        return color;
    }

    getColor(theme: Theme, name: string): string {
        return theme.colors[name] || null;
    }

    getTopColor(theme: Theme): string {
        return this.getColor(theme, theme.invert ? 'DARK' : 'LIGHT');
    }

    getBotColor(theme: Theme): string {
        return this.getColor(theme, theme.invert ? 'LIGHT' : 'DARK');
    }

    getParam(theme: Theme, name: string): string | number | object {
        return theme.params[name] || null;
    }
}
