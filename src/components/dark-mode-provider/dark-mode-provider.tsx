import React, { useState } from 'react';
import { DarkModeContext, DarkModeState } from '../../common';

export type DarkModeProviderProps = {
    children?: React.ReactNode;
};

export function DarkModeProvider(props: DarkModeProviderProps): JSX.Element {
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => setDarkMode(!darkMode);

    const state: DarkModeState = {
        darkMode,
        toggleDarkMode,
    };

    return (
        <DarkModeContext.Provider value={state}>
            {props.children}
        </DarkModeContext.Provider>
    );
}
