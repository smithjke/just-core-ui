import React from 'react';
import { ThemeConfig } from '../common/theme-config';
import { ThemeConfigContext } from '../common/theme-config-context';

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
