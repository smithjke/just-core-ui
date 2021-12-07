import React from 'react';
import { createUseStyles } from 'react-jss';
import { StyleService } from '../../services';
import { Theme, useTheme } from '../../state';

export type ToggleProps = {
    value: boolean;
    onClick: () => void;
};

const useStyles = createUseStyles({
    Toggle: (props: ToggleProps & { theme: Theme }) => ({
        backgroundColor: props.value
            ? StyleService.instance.getColor(props.theme, 'GREEN')
            : StyleService.instance.getBotColor(props.theme),
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
    Toggle__Ball: (props: ToggleProps & { theme: Theme }) => ({
        backgroundColor: StyleService.instance.getTopColor(props.theme),
        width: 14,
        height: 14,
        borderRadius: 14,
    }),
});

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
