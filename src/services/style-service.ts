import { RadiusCode, SpaceCode } from '../common';
import { Theme } from '../state';
import { ColorService, ColorStep } from './color-service';

export type StyleMutateColorParams = {
    step?: ColorStep;
    opacity?: number;
};

export class StyleService {
    static readonly instance = new StyleService();

    mutateColor(baseColor: string, targetColor: string, params: StyleMutateColorParams): string {
        const {
            step = 0,
            opacity,
        } = params;

        let color = baseColor;

        if (step) {
            const percent = ColorService.instance.step2percent[step];

            color = ColorService.instance.calculateColor(baseColor, targetColor, percent);
        }

        if (typeof opacity !== 'undefined') {
            color = ColorService.instance.calculateOpacity(color, opacity);
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

    getParamColor(theme: Theme, name: string): string {
        return this.getColor(theme, this.getParam(theme, name) as string);
    }

    getParam(theme: Theme, name: string): string | number | object {
        return theme.params[name] || null;
    }

    getRadius(theme: Theme, code: RadiusCode): number {
        return this.getParam(theme, 'RADIUS')[code];
    }

    getSpace(theme: Theme, code: SpaceCode): number {
        return this.getParam(theme, 'SPACE')[code];
    }
}
