import { Theme } from '../common';
import { useStyleService } from '../di';

export function justTopColor(theme: Theme): string {
    const styleService = useStyleService();

    return styleService.getTopColor(theme);
}
