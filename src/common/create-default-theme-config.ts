import { ThemeConfig } from './theme-config';
import { DefaultColors } from './default-colors';
import { DefaultParams } from './default-params';

export const createDefaultThemeConfig = () => new ThemeConfig(DefaultColors, DefaultParams);
