import React from 'react';
import { createUseStyles } from 'react-jss';
import { ColorService, StyleService } from '../../services';
import { Theme, useTheme } from '../../state';

export type ToggleProps = {
    value: boolean;
    onClick: () => void;
};

const useStyles = createUseStyles((theme: Theme) => ({
    Toggle: (props: ToggleProps) => ({
        backgroundColor: props.value
            ? StyleService.instance.getColor(theme, 'GREEN')
            : StyleService.instance.getBotColor(theme),
        display: 'flex',
        width: 32,
        height: 18,
        borderRadius: 18,
        paddingTop: 2,
        paddingLeft: props.value ? 16 : 2,
        boxSizing: 'border-box',
        cursor: 'pointer',
        transition: 'background-color 0.125s ease, padding-left 0.125s ease',
    }),
    Toggle__Ball: () => ({
        backgroundColor: StyleService.instance.getTopColor(theme),
        width: 14,
        height: 14,
        borderRadius: 14,
    }),
}));

export function Toggle(props: ToggleProps): JSX.Element {
    const theme = useTheme();

    const styles = useStyles({
        ...props,
        theme,
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
