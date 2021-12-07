import { Theme } from '../state';
import { ColorStep, StyleMutateColorParams, StyleService } from '../services';

export function colorToTop(theme: Theme, params: StyleMutateColorParams | ColorStep, color?: string): string {
    return StyleService.instance.mutateColor(
        color || StyleService.instance.getBotColor(theme),
        StyleService.instance.getTopColor(theme),
        typeof params === 'number' ? { step: params } : params,
    );
}
