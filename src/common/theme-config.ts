export class ThemeConfig {
    color: Record<string, string>;
    param: Record<string, string>;

    constructor(
        color: Record<string, string>,
        param: Record<string, string>,
    ) {
        this.color = color;
        this.param = param;
    }

    setColor(name: string, value: string): void {
        this.color[name] = value;
    }

    setParam(name: string, value: string): void {
        this.param[name] = value;
    }

    getParam(name: string): string {
        return this.param[name];
    }

    getParamColor(name: string): string {
        return this.color[this.getParam(name)];
    }
}
