import { Theme } from '../common';
import { useStyleService } from '../di';

export function justBotColor(theme: Theme): string {
    const styleService = useStyleService();

    return styleService.getBotColor(theme);
}
