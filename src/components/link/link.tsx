import React from 'react';
import { createUseStyles } from 'react-jss';
import { ColorService, StyleService } from '../../services';
import { Theme, useTheme } from '../../state';

export type LinkProps = {
    onClick?: () => void;
    disabled?: boolean;
    children?: React.ReactNode;
};

const getLinkPrimaryColor = (theme: Theme) => StyleService.instance.getParamColor(theme, 'LINK_PRIMARY_COLOR');

const getLinkPrimaryColorDisabled = (theme: Theme) => ColorService.instance.calculateOpacity(getLinkPrimaryColor(theme), 0.5);

const getLinkPrimaryColorHovered = (theme: Theme) => StyleService.instance.mutateColor(
    getLinkPrimaryColor(theme),
    StyleService.instance.getBotColor(theme),
    { step: 2 },
);

const useStyles = createUseStyles((theme: Theme) => ({
    Link: (props: LinkProps) => ({
        color: props.disabled
            ? getLinkPrimaryColorDisabled(theme)
            : getLinkPrimaryColor(theme),
        cursor: props.disabled ? null : 'pointer',
        '&:hover': {
            color: props.disabled
                ? getLinkPrimaryColorDisabled(theme)
                : getLinkPrimaryColorHovered(theme),
        },
    }),
}));

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
