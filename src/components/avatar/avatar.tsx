import React from 'react';
import { createUseStyles } from 'react-jss';
import { RadiusCode } from '../../common';
import { getThemeConfig } from '../../utils/get-theme-config';

const tc = getThemeConfig();

export type AvatarPropsSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export const AvatarPropsSizePixel: Record<AvatarPropsSize, number> = {
    'xs': 28,
    's': 32,
    'm': 40,
    'l': 56,
    'xl': 64,
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
    Avatar: {
        width: ({ size }: AvatarProps) => AvatarPropsSizePixel[size],
        height: ({ size }: AvatarProps) => AvatarPropsSizePixel[size],
        borderRadius: ({ size, borderRadius }: AvatarProps) => b2p(size, borderRadius),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: ({ color }: AvatarProps) => color,
    },
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
