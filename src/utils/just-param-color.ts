import { Theme } from '../common';
import { useStyleService } from '../di';

export function justParamColor(theme: Theme, name: string): string {
    const styleService = useStyleService();

    return styleService.getColor(theme, styleService.getParam(theme, name) as string);
}
