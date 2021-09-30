import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { getThemeConfig } from '../../utils/get-theme-config';
import { Cell } from '../cell';
import { Text } from '../text';

const tc = getThemeConfig();

const SIZE = 20;
const getPrimaryColor = () => tc.getParamColor('BUTTON_PRIMARY_COLOR');
const getPrimaryColorHovered = () => tc.getRawColor(getPrimaryColor(), { step: -3 });

export type BlockLinkProps = {
    onClick?: () => void;
    children?: React.ReactNode;
    icon?: React.ComponentType<{ color: string; size: number; }>;
};

const useStyles = createUseStyles({
    BlockLink: {
        cursor: 'pointer',
    },
    BlockLink__Container: {
        height: SIZE,
        display: 'flex',
        alignItems: 'center',
        gap: tc.getSpace('s'),
    },
});

export function BlockLink(props: BlockLinkProps): JSX.Element {
    const [color, setColor] = useState(getPrimaryColor());
    const styles = useStyles();

    const icon = Boolean(props.icon) && React.createElement(props.icon, {
        color,
        size: SIZE,
    });

    return (
        <div
            className={styles.BlockLink}
            onClick={props.onClick}
            onMouseEnter={() => setColor(getPrimaryColorHovered())}
            onMouseLeave={() => setColor(getPrimaryColor())}
        >
            <Cell paddingY={'xs'}>
                <div className={styles.BlockLink__Container}>
                    {icon}
                    <Text
                        height={'s'}
                        color={color}
                        colorStep={0}
                    >
                        {props.children}
                    </Text>
                </div>
            </Cell>
        </div>
    );
}
