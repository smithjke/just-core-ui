import { DefaultColors, DefaultParams, ThemeConfig } from '../common';

let themeConfig: ThemeConfig;

export function getThemeConfig(): ThemeConfig {
    if (!themeConfig) {
        themeConfig = new ThemeConfig(DefaultColors, DefaultParams);
    }

    return themeConfig;
}
