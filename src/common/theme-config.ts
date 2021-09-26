import { calculateColor, calculateOpacity, step2percent } from './color';
import { RadiusCode } from './radius';
import { SpaceCode } from './space';

export type ThemeConfigColorProps = {
    step?: number;
    opacity?: number;
    darkMode?: boolean;
};

export class ThemeConfig {
    private readonly color: Record<string, string>;
    private readonly param: Record<string, any>;

    constructor(
        color: Record<string, string>,
        param: Record<string, any>,
    ) {
        this.color = color;
        this.param = param;
    }

    private processColor(from: string, props: ThemeConfigColorProps = {}): string {
        const {
            step = 0,
            darkMode = false,
        } = props;

        if (step === 0) {
            return from;
        }

        const to = step > 0
            ? (darkMode ? this.color['DARK'] : this.color['LIGHT'])
            : (darkMode ? this.color['LIGHT'] : this.color['DARK']);

        const color = calculateColor(from, to, step2percent(step));

        if (typeof props.opacity !== 'undefined') {
            return calculateOpacity(color, props.opacity);
        }

        return color;
    }

    setColor(name: string, value: string): void {
        this.color[name] = value;
    }

    setParam(name: string, value: string): void {
        this.param[name] = value;
    }

    getMidColor(props?: ThemeConfigColorProps): string {
        return this.processColor(
            calculateColor(this.color['DARK'], this.color['LIGHT'], 0.5),
            props,
        );
    }

    getRawColor(rawColor: string, props?: ThemeConfigColorProps): string {
        return this.processColor(
            rawColor,
            props,
        );
    }

    getColor(name: string, props?: ThemeConfigColorProps): string {
        return this.processColor(
            this.color[name],
            props,
        );
    }

    getParam(name: string): any {
        return this.param[name];
    }

    getParamColor(name: string, props?: ThemeConfigColorProps): string {
        return this.getColor(this.getParam(name), props);
    }

    getRadius(code: RadiusCode): number {
        return this.getParam('RADIUS')[code];
    }

    getSpace(code: SpaceCode): number {
        return this.getParam('SPACE')[code];
    }
}
