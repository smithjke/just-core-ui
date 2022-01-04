import { SpaceCode, Theme } from '../common';
import { useStyleService } from '../di';

export function justSpace(theme: Theme, code: SpaceCode): number {
    const styleService = useStyleService();

    return styleService.getParam(theme, 'SPACE')[code];
}
