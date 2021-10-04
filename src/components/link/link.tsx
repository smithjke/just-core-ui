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
     * Link is disabled
     */
    disabled?: boolean;

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
        color: ({ darkMode, disabled }: LinkProps) => tc.getParamColor('LINK_PRIMARY_COLOR', { step: disabled ? 5 : 0, darkMode }),
        cursor: ({ disabled }: LinkProps) => disabled ? null : 'pointer',
        '&:hover': {
            color: ({ darkMode, disabled }: LinkProps) => tc.getParamColor('LINK_PRIMARY_COLOR', { step: disabled ? 5 : -3, darkMode }),
        },
    },
})

export function Link(props: LinkProps): JSX.Element {
    const darkMode = useDarkMode(props);

    const styles = useStyles({
        ...props,
        darkMode,
    });

    const onClick = () => {
        !props.disabled && props.onClick();
    };

    return (
        <span
            className={styles.Link}
            onClick={onClick}
        >
            {props.children}
        </span>
    );
}
