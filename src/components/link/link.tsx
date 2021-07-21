import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { colorize, DarkModeContext, ThemeConfigContext } from '../../common';

export type LinkProps = {
    /**
     * Действие, выполняемое при нажатии
     */
    onClick?: () => void;

    /**
     * Содержимое ссылки (текст)
     */
    children?: React.ReactNode;

    /**
     * Dark Mode
     */
    darkMode?: boolean;
};

const useStyles = createUseStyles({
    Link: {
        color: (props: LinkProps) => colorize(
            props['theme'].getParamColor('PRIMARY_COLOR'),
            0,
            props.darkMode,
        ),
        cursor: 'pointer',
        '&:hover': {
            color: (props: LinkProps) => colorize(
                props['theme'].getParamColor('PRIMARY_COLOR'),
                -2,
                props.darkMode,
            ),
        },
    },
})

export function Link(props: LinkProps): JSX.Element {
    const theme = useContext(ThemeConfigContext);

    const {
        darkMode = useContext(DarkModeContext),
    } = props;

    const styles = useStyles({
        ...props,
        darkMode,
        theme,
    });

    return (
        <span
            className={styles.Link}
            onClick={props.onClick}
        >
            {props.children}
        </span>
    );
}
