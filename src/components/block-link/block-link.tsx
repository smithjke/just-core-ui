import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import { getThemeConfig } from '../../utils/get-theme-config';
import { Cell } from '../cell';
import { Text } from '../text';

const tc = getThemeConfig();

const SIZE = 20;

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
    const primaryColor = tc.getParamColor('BUTTON_PRIMARY_COLOR');
    const primaryColorHovered = tc.getRawColor(primaryColor, { step: -3 });

    const [color, setColor] = useState(primaryColor);
    const styles = useStyles();

    return (
        <div
            className={styles.BlockLink}
            onClick={props.onClick}
            onMouseEnter={() => setColor(primaryColorHovered)}
            onMouseLeave={() => setColor(primaryColor)}
        >
            <Cell
                spaceCode={'xs'}
                left={[(
                    <div className={styles.BlockLink__Container}>
                        {Boolean(props.icon) && React.createElement(props.icon, {
                            color,
                            size: SIZE,
                        })}
                        <Text
                            height={'s'}
                            color={color}
                            colorStep={0}
                        >
                            {props.children}
                        </Text>
                    </div>
                )]}
            />
        </div>
    );
}
