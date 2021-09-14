import React from 'react';
import { createUseStyles } from 'react-jss';
import { useDarkMode } from '../../hooks/use-dark-mode';
import { getThemeConfig } from '../../utils/get-theme-config';

const tc = getThemeConfig();

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
        color: (props: LinkProps) => tc.getParamColor('PRIMARY_COLOR', { darkMode: props.darkMode }),
        cursor: 'pointer',
        '&:hover': {
            color: (props: LinkProps) => tc.getParamColor('PRIMARY_COLOR', { step: -2, darkMode: props.darkMode }),
        },
    },
})

export function Link(props: LinkProps): JSX.Element {
    const darkMode = useDarkMode(props);

    const styles = useStyles({
        ...props,
        darkMode,
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
