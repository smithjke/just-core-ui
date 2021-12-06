import { Theme, ThemeState } from '../state';

export class ThemeService {
    static readonly instance = new ThemeService();

    toggleInvert(): void {
        ThemeState.invert$.next(ThemeState.invert$.value);
    }

    addColors(colors: Theme['colors']): void {
        ThemeState.colors$.next({
            ...ThemeState.colors$.value,
            ...colors,
        });
    }

    addParams(params: Theme['params']): void {
        ThemeState.params$.next({
            ...ThemeState.colors$.value,
            ...params,
        });
    }
}
