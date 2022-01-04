import { RadiusCode, Theme } from '../common';
import { useStyleService } from '../di';

export function justRadius(theme: Theme, code: RadiusCode): number {
    const styleService = useStyleService();

    return styleService.getParam(theme, 'RADIUS')[code];
}
