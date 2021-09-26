import { useContext } from 'react';
import { DarkModeContext } from '../common';

export interface DarkModeProps {
    darkMode?: boolean;
}

export const useDarkMode = ({ darkMode }: DarkModeProps): boolean => {
    const darkModeContext = useContext(DarkModeContext);

    return typeof darkMode === 'undefined'
        ? darkModeContext.darkMode
        : Boolean(darkMode);
}

export const useDarkModeToggle = (): () => void => useContext(DarkModeContext).toggleDarkMode;
