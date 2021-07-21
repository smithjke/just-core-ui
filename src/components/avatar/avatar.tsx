import React from 'react';
import { createUseStyles } from 'react-jss';
import { midColor, radius2pixel } from '../../common';

export type AvatarPropsSize = 's' | 'm' | 'l' | 'xl' | '2xl';

export const AvatarPropsSizePixel: Record<AvatarPropsSize, number> = {
    's': 28,
    'm': 32,
    'l': 40,
    'xl': 56,
    '2xl': 64,
};

export type AvatarPropsBorderRadius = 's' | 'm' | 'l' | 'round';

export type AvatarProps = {
    /**
     * Размер аватара
     */
    size: AvatarPropsSize;

    /**
     * Радиус аватара
     */
    borderRadius?: AvatarPropsBorderRadius;

    /**
     * Цвет фона
     */
    color?: string;

    /**
     * Дочерний элемент
     */
    children?: React.ReactNode;
};

const b2p = (br: AvatarPropsBorderRadius, size: number) => br ? radius2pixel[br] || size : null;

const useStyles = createUseStyles({
    Avatar: (props: AvatarProps) => ({
        width: AvatarPropsSizePixel[props.size],
        height: AvatarPropsSizePixel[props.size],
        borderRadius: b2p(props.borderRadius, AvatarPropsSizePixel[props.size]),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.color,
    }),
});

export function Avatar(props: AvatarProps): JSX.Element {
    const {
        color = midColor(),
    } = props;

    const styles = useStyles({
        ...props,
        color,
    });

    return (
        <div className={styles.Avatar}>
            {props.children}
        </div>
    );
}
