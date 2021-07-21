import React, { useContext, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { colorize, spaceCode2pixel, ThemeConfigContext } from '../../common';
import { Cell } from '../cell';
import { Text } from '../text';

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
        gap: spaceCode2pixel['s'],
    },
});

export function BlockLink(props: BlockLinkProps): JSX.Element {
    const theme = useContext(ThemeConfigContext);
    const primaryColor = theme.getParamColor('BUTTON_PRIMARY_COLOR');
    const primaryColorHovered = colorize(primaryColor, -3);

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
