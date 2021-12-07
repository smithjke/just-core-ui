import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { ColorService, StyleService } from '../../services';
import { Theme, useTheme } from '../../state';
import { Cell } from '../cell';
import { Text } from '../text';


const SIZE = 20;

const getLinkPrimaryColor = (theme: Theme) => StyleService.instance.getParamColor(theme, 'LINK_PRIMARY_COLOR');

const getLinkPrimaryColorDisabled = (theme: Theme) => ColorService.instance.calculateOpacity(getLinkPrimaryColor(theme), 0.5);

const getLinkPrimaryColorHovered = (theme: Theme) => StyleService.instance.mutateColor(
    getLinkPrimaryColor(theme),
    StyleService.instance.getBotColor(theme),
    { step: 2 },
);

export type BlockLinkProps = {
    onClick?: () => void;
    icon?: React.ComponentType<{ color: string; size: number; }>;
    disabled?: boolean;
    children?: React.ReactNode;
};

const useStyles = createUseStyles({
    BlockLink: (props: BlockLinkProps & { theme: Theme }) => ({
        cursor: props.disabled ? null : 'pointer',
    }),
    BlockLink__Container: (props: BlockLinkProps & { theme: Theme }) => ({
        height: SIZE,
        display: 'flex',
        alignItems: 'center',
        gap: StyleService.instance.getSpace(props.theme, 's'),
    }),
});

export function BlockLink(props: BlockLinkProps): JSX.Element {
    const theme = useTheme();

    const [color, setColor] = useState(getLinkPrimaryColor(theme));

    const styles = useStyles({
        ...props,
        theme,
    });

    const icon = Boolean(props.icon) && React.createElement(props.icon, {
        color,
        size: SIZE,
    });

    const onClick = () => {
        !props.disabled && props.onClick();
    };

    const elementColor = props.disabled
        ? getLinkPrimaryColorDisabled(theme)
        : getLinkPrimaryColor(theme);

    const elementHoveredColor = props.disabled
        ? getLinkPrimaryColorDisabled(theme)
        : getLinkPrimaryColorHovered(theme);

    useEffect(() => setColor(elementColor), [props.disabled]);

    return (
        <div
            className={styles.BlockLink}
            onClick={onClick}
            onMouseEnter={() => setColor(elementHoveredColor)}
            onMouseLeave={() => setColor(elementColor)}
        >
            <Cell paddingY={'xs'}>
                <div className={styles.BlockLink__Container}>
                    {icon}
                    <Text
                        height={'s'}
                        color={color}
                    >
                        {props.children}
                    </Text>
                </div>
            </Cell>
        </div>
    );
}
