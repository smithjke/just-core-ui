import { BehaviorSubject } from 'rxjs';
import { DefaultColors, DefaultParams } from '../common';
import { useBehaviorSubject } from '../hooks';

export type Theme = {
    invert: boolean;
    colors: Record<string, string>;
    params: Record<string, any>;
};

export const ThemeState = {
    invert$: new BehaviorSubject<Theme['invert']>(false),
    colors$: new BehaviorSubject<Theme['colors']>(DefaultColors),
    params$: new BehaviorSubject<Theme['params']>(DefaultParams),
};

export const useThemeInvert = () => useBehaviorSubject(ThemeState.invert$);

export const useThemeColors = () => useBehaviorSubject(ThemeState.colors$);

export const useThemeParams = () => useBehaviorSubject(ThemeState.params$);

export const useTheme = (): Theme => ({
    invert: useThemeInvert(),
    colors: useThemeColors(),
    params: useThemeParams(),
});
