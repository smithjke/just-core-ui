import React, { useState } from 'react';
import { DarkModeContext, DarkModeState } from '../../common';
import { getCookie, setCookie } from '../../utils';

const DARK_MODE_COOKIE_KEY = 'jc_ui_dark_mode';
const DARK_MODE_ENABLED = 'enabled';

export type DarkModeProviderProps = {
    children?: React.ReactNode;
};

export function DarkModeProvider(props: DarkModeProviderProps): JSX.Element {
    const initialValue = getCookie(DARK_MODE_COOKIE_KEY) === DARK_MODE_ENABLED;
    const [darkMode, setDarkMode] = useState(initialValue);

    const toggleDarkMode = () => {
        setCookie(DARK_MODE_COOKIE_KEY, darkMode ? null : DARK_MODE_ENABLED);
        setDarkMode(!darkMode)
    };

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
