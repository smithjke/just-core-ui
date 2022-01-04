import { ColorService, StyleService } from './services';
import { getDependency, registerDependency } from './common/just-di';

registerDependency('COLOR_SERVICE', () => new ColorService());
registerDependency('STYLE_SERVICE', () => new StyleService());

export function useStyleService(): StyleService {
    return getDependency('STYLE_SERVICE');
}

export function useColorService(): ColorService {
    return getDependency('COLOR_SERVICE');
}
