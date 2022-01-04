import React, { useState } from 'react';
import { DefaultColors, DefaultParams, Theme } from '../../common';
import { ThemeContext } from '../theme-context';

export type ThemeProviderProps = {
    invert?: Theme['invert'],
    colors?: Theme['colors'],
    params?: Theme['params'],
    children?: React.ReactNode;
};

export function ThemeProvider(props: ThemeProviderProps): JSX.Element {
    const [theme, setTheme] = useState<Theme>({
        invert: Boolean(props.invert),
        colors: { ...DefaultColors, ...(props.colors || {}) },
        params: { ...DefaultParams, ...(props.params || {}) },
    });

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}
