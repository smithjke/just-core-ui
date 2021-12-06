import React from 'react';
import { createUseStyles } from 'react-jss';
import { RadiusCode } from '../../common';
import { StyleService } from '../../services';
import { Theme, useTheme } from '../../state';

export type AvatarPropsSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export const avatarPropsSize2pixel: Record<AvatarPropsSize, number> = {
    'xs': 28,
    's': 32,
    'm': 40,
    'l': 56,
    'xl': 64,
};

export type AvatarProps = {
    size: AvatarPropsSize;
    borderRadius?: RadiusCode;
    color?: string;
    children?: React.ReactNode;
};

const useStyles = createUseStyles((theme: Theme) => ({
    Avatar: (props: AvatarProps) => ({
        width: avatarPropsSize2pixel[props.size],
        height: avatarPropsSize2pixel[props.size],
        borderRadius: typeof props.borderRadius === 'undefined'
            ? avatarPropsSize2pixel[props.size]
            : StyleService.instance.getRadius(theme, props.borderRadius),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: props.color || StyleService.instance.mutateColor(
            StyleService.instance.getBotColor(theme),
            StyleService.instance.getTopColor(theme),
            { step: 7 },
        ),
    }),
}));

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
