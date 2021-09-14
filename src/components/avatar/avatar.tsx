import React from 'react';
import { createUseStyles } from 'react-jss';
import { RadiusCode } from '../../common';
import { getThemeConfig } from '../../utils/get-theme-config';

const tc = getThemeConfig();

export type AvatarPropsSize = 's' | 'm' | 'l' | 'xl' | '2xl';

export const AvatarPropsSizePixel: Record<AvatarPropsSize, number> = {
    's': 28,
    'm': 32,
    'l': 40,
    'xl': 56,
    '2xl': 64,
};

export type AvatarProps = {
    /**
     * Размер аватара
     */
    size: AvatarPropsSize;

    /**
     * Радиус аватара
     */
    borderRadius?: RadiusCode;

    /**
     * Цвет фона
     */
    color?: string;

    /**
     * Дочерний элемент
     */
    children?: React.ReactNode;
};

function b2p(size: AvatarPropsSize, br?: RadiusCode): number {
    if (br) {
        return tc.getRadius(br);
    }

    return AvatarPropsSizePixel[size];
}

const useStyles = createUseStyles({
    Avatar: (props: AvatarProps) => ({
        width: AvatarPropsSizePixel[props.size],
        height: AvatarPropsSizePixel[props.size],
        borderRadius: b2p(props.size, props.borderRadius),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.color,
    }),
});

export function Avatar(props: AvatarProps): JSX.Element {
    const {
        color = tc.getMidColor({ step: 4 }),
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
