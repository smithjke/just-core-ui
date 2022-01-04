import { useContext } from 'react';
import { Theme } from '../common';
import { ThemeContext } from '../components';

export function useInvert(): Theme['invert'] {
    const themeContext = useContext(ThemeContext);

    return Boolean(themeContext && themeContext.theme.invert);
}
