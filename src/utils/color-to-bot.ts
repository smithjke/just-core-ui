import { Theme } from '../state';
import { ColorStep, StyleMutateColorParams, StyleService } from '../services';

export function colorToBot(theme: Theme, params: StyleMutateColorParams | ColorStep, color?: string): string {
    return StyleService.instance.mutateColor(
        color || StyleService.instance.getTopColor(theme),
        StyleService.instance.getBotColor(theme),
        typeof params === 'number' ? { step: params } : params,
    );
}
