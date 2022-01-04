import { useContext } from 'react';
import { ThemeContext } from '../components';

export function useToggleInvert(): () => void {
    const themeContext = useContext(ThemeContext);

    return () => themeContext && themeContext.setTheme({
        ...themeContext.theme,
        invert: !themeContext.theme.invert,
    });
}
