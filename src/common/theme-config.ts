import { calculateColor, step2percent } from './color';
import { radius2pixel, RadiusCode } from './radius';
import { SpaceCode, spaceCode2pixel } from './space';

export type ThemeConfigColorProps = {
    step?: number;
    darkMode?: boolean;
};

export class ThemeConfig {
    private readonly color: Record<string, string>;
    private readonly param: Record<string, string>;

    constructor(
        color: Record<string, string>,
        param: Record<string, string>,
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

        return calculateColor(from, to, step2percent(step));
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

    getParam(name: string): string {
        return this.param[name];
    }

    getParamColor(name: string, props?: ThemeConfigColorProps): string {
        return this.getColor(this.getParam(name), props);
    }

    getRadius(code: RadiusCode): number {
        return radius2pixel[code];
    }

    getSpace(code: SpaceCode): number {
        return spaceCode2pixel[code];
    }
}
