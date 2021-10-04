import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { getThemeConfig } from '../../utils/get-theme-config';
import { useDarkMode } from '../../hooks/use-dark-mode';
import { Cell } from '../cell';
import { Text } from '../text';

const tc = getThemeConfig();

const SIZE = 20;
const getPrimaryColor = (darkMode: boolean) => tc.getParamColor('LINK_PRIMARY_COLOR', { darkMode });
const getPrimaryColorHovered = (darkMode: boolean) => tc.getRawColor(getPrimaryColor(darkMode), { step: -3, darkMode });
const getPrimaryColorDisabled = (darkMode: boolean) => tc.getParamColor('LINK_PRIMARY_COLOR', { step: 5, darkMode });

export type BlockLinkProps = {
    /**
     * Action on click
     */
    onClick?: () => void;

    /**
     * Icon around the children element
     */
    icon?: React.ComponentType<{ color: string; size: number; }>;

    /**
     * Link is disabled
     */
    disabled?: boolean;

    /**
     * Children element
     */
    children?: React.ReactNode;

    /**
     * Dark Mode
     */
    darkMode?: boolean;
};

const useStyles = createUseStyles({
    BlockLink: {
        cursor: ({ disabled }: BlockLinkProps) => disabled ? null : 'pointer',
    },
    BlockLink__Container: {
        height: SIZE,
        display: 'flex',
        alignItems: 'center',
        gap: tc.getSpace('s'),
    },
});

export function BlockLink(props: BlockLinkProps): JSX.Element {
    const darkMode = useDarkMode(props);

    const [color, setColor] = useState(getPrimaryColor(darkMode));

    const styles = useStyles({
        ...props,
        darkMode,
    });

    const icon = Boolean(props.icon) && React.createElement(props.icon, {
        color,
        size: SIZE,
    });

    const onClick = () => {
        !props.disabled && props.onClick();
    };

    const elementColor = props.disabled
        ? getPrimaryColorDisabled(!!darkMode)
        : getPrimaryColor(!!darkMode);

    const elementHoveredColor = props.disabled
        ? getPrimaryColorDisabled(!!darkMode)
        : getPrimaryColorHovered(!!darkMode);

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
                        colorStep={0}
                    >
                        {props.children}
                    </Text>
                </div>
            </Cell>
        </div>
    );
}
