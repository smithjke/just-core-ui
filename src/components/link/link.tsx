import React from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from '../../common';
import { useTheme } from '../../hooks';
import { justParamColor, justToBotColor } from '../../utils';

export type LinkProps = {
    onClick?: () => void;
    disabled?: boolean;
    children?: React.ReactNode;
};

const getLinkPrimaryColor = (theme: Theme) => justParamColor(theme, 'LINK_PRIMARY_COLOR');

const getLinkPrimaryColorDisabled = (theme: Theme) => justToBotColor(theme, { opacity: 0.5 }, getLinkPrimaryColor(theme));

const getLinkPrimaryColorHovered = (theme: Theme) => justToBotColor(theme, { step: 2 }, getLinkPrimaryColor(theme));

const useStyles = createUseStyles({
    Link: (props: LinkProps & { theme: Theme }) => ({
        color: props.disabled
            ? getLinkPrimaryColorDisabled(props.theme)
            : getLinkPrimaryColor(props.theme),
        cursor: props.disabled ? null : 'pointer',
        '&:hover': {
            color: props.disabled
                ? getLinkPrimaryColorDisabled(props.theme)
                : getLinkPrimaryColorHovered(props.theme),
        },
    }),
});

export function Link(props: LinkProps): JSX.Element {
    const theme = useTheme();

    const styles = useStyles({
        ...props,
        theme,
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
