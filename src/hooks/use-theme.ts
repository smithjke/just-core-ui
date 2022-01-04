import { useContext } from 'react';
import { Theme } from '../common';
import { ThemeContext } from '../components';

export function useTheme(): Theme {
    const themeContext = useContext(ThemeContext);

    return themeContext ? themeContext.theme : null;
}
