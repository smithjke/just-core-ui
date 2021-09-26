import React from 'react';

export type DarkModeState = {
    darkMode: boolean;
    toggleDarkMode: () => void;
};

export const DarkModeContext = React.createContext<DarkModeState>({
    darkMode: false,
    toggleDarkMode: () => void 0,
});
