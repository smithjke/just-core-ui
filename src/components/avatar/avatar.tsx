import React from 'react';
import { createUseStyles } from 'react-jss';
import { AvatarCode, RadiusCode, Theme } from '../../common';
import { useTheme } from '../../hooks';
import { justParam, justRadius, justToTopColor } from '../../utils';

export type AvatarProps = {
    size: AvatarCode;
    borderRadius?: RadiusCode;
    color?: string;
    children?: React.ReactNode;
};

const useStyles = createUseStyles({
    Avatar: (props: AvatarProps & { theme: Theme }) => ({
        width: justParam(props.theme, 'AVATAR')[props.size],
        height: justParam(props.theme, 'AVATAR')[props.size],
        borderRadius: typeof props.borderRadius === 'undefined'
            ? justParam(props.theme, 'AVATAR')[props.size]
            : justRadius(props.theme, props.borderRadius),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.color || justToTopColor(props.theme, { step: 7 }),
    }),
});

export function Avatar(props: AvatarProps): JSX.Element {
    const theme = useTheme();

    const styles = useStyles({
        ...props,
        theme,
    });

    return (
        <div className={styles.Avatar}>
            {props.children}
        </div>
    );
}
