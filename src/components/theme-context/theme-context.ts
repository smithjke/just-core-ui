import React from 'react';
import { Theme } from '../../common';

export type ThemeContextValue = {
    theme: Theme,
    setTheme: (theme: Theme) => void;
};

export const ThemeContext = React.createContext<ThemeContextValue>(null);
