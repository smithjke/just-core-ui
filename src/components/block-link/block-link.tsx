import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Theme } from '../../common';
import { useTheme } from '../../hooks';
import { justParam, justParamColor, justSpace, justToBotColor } from '../../utils';
import { Cell } from '../cell';
import { Text } from '../text';

const getLinkPrimaryColor = (theme: Theme) => justParamColor(theme, 'LINK_PRIMARY_COLOR');

const getLinkPrimaryColorDisabled = (theme: Theme) => justToBotColor(theme, { opacity: 0.5 }, getLinkPrimaryColor(theme));

const getLinkPrimaryColorHovered = (theme: Theme) => justToBotColor(theme, { step: 2 }, getLinkPrimaryColor(theme));

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
        height: Number(justParam(props.theme, 'BLOCK_LINK_SIZE')),
        display: 'flex',
        alignItems: 'center',
        gap: justSpace(props.theme, 's'),
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
        size: Number(justParam(theme, 'BLOCK_LINK_SIZE')),
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
