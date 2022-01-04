import { Theme } from '../common';
import { useStyleService } from '../di';

export function justColor(theme: Theme, colorName: string): string {
    const styleService = useStyleService();

    return styleService.getColor(theme, colorName);
}
