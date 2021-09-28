import React from 'react';
import { createUseStyles } from 'react-jss';
import { getThemeConfig } from '../../utils';
import { useDarkMode } from '../../hooks';

const tc = getThemeConfig();

export type ToggleProps = {
    value: boolean;
    onClick: () => void;
    darkMode?: boolean;
};

const useStyles = createUseStyles({
    Toggle: {
        backgroundColor: ({ value, darkMode }: ToggleProps) => value
            ? tc.getColor('GREEN', { step: 1 })
            : tc.getMidColor({ step: 6, darkMode }),
        display: 'flex',
        width: 32,
        height: 18,
        borderRadius: 18,
        paddingTop: 2,
        paddingLeft: ({ value }: ToggleProps) => value ? 16 : 2,
        boxSizing: 'border-box',
        cursor: 'pointer',
        transition: 'background-color 0.125s ease, padding-left 0.125s ease',
    },
    Toggle__Ball: {
        backgroundColor: tc.getMidColor({ step: 8, darkMode: false }),
        width: 14,
        height: 14,
        borderRadius: 14,
    },
});

export function Toggle(props: ToggleProps): JSX.Element {
    const darkMode = useDarkMode(props);

    const styles = useStyles({
        ...props,
        darkMode,
    });

    return (
        <div
            className={styles.Toggle}
            onClick={props.onClick}
        >
            <div className={styles.Toggle__Ball}/>
        </div>
    );
}
