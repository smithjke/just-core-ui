import { Theme } from '../common';
import { ColorStep, StyleMutateColorParams } from '../services';
import { useStyleService } from '../di';

export function justToBotColor(theme: Theme, params: StyleMutateColorParams | ColorStep, color?: string): string {
    const styleService = useStyleService();

    return styleService.mutateColor(
        color || styleService.getTopColor(theme),
        styleService.getBotColor(theme),
        typeof params === 'number' ? { step: params } : params,
    );
}
