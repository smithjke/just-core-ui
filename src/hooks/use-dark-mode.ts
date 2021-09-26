import { useContext } from 'react';
import { DarkModeContext } from '../common';

export interface DarkModeParams {
    darkMode?: boolean;
}

export const useDarkMode = ({ darkMode }: DarkModeParams): boolean => {
    const darkModeContext = useContext(DarkModeContext);

    return typeof darkMode === 'undefined'
        ? darkModeContext
        : Boolean(darkMode);
}
