import { Theme } from '../common';
import { ColorStep, StyleMutateColorParams } from '../services';
import { useStyleService } from '../di';

export function justToTopColor(theme: Theme, params: StyleMutateColorParams | ColorStep, color?: string): string {
    const styleService = useStyleService();

    return styleService.mutateColor(
        color || styleService.getBotColor(theme),
        styleService.getTopColor(theme),
        typeof params === 'number' ? { step: params } : params,
    );
}
