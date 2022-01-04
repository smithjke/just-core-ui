import { Theme } from '../common';
import { useStyleService } from '../di';

export function justParam(theme: Theme, paramName: string): any {
    const styleService = useStyleService();

    return styleService.getParam(theme, paramName);
}
