import React from 'react';
import { ThemeConfig, ThemeConfigContext } from '../common';

export type ThemeProps = {
    children: React.ReactNode;
    config: ThemeConfig;
};

export function Theme(props: ThemeProps): JSX.Element {
    return (
        <ThemeConfigContext.Provider value={props.config}>
            {props.children}
        </ThemeConfigContext.Provider>
    );
}
