import { useContext } from 'react';
import { DarkModeContext } from '../common';

export const useDarkMode = ({ darkMode }: { darkMode?: boolean }): boolean => typeof darkMode === 'undefined'
    ? useContext(DarkModeContext)
    : Boolean(darkMode);
