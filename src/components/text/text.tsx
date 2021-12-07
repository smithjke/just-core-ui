import React from 'react';
import { createUseStyles } from 'react-jss';
import { StyleService } from '../../services';
import { Theme, useTheme } from '../../state';

// FONT SIZE

export type FontSize = '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl';

// FLOOR(1.125 Major Second)
export const FontSizeMobile: Record<FontSize, number> = {
    '2xs': 11,
    'xs': 12,
    's': 14,
    'm': 16,
    'l': 18,
    'xl': 20,
    '2xl': 22,
    '3xl': 25,
    '4xl': 28,
};

// CEIL(1.200 Minor Third)
export const FontSizeDesktop: Record<FontSize, number> = {
    '2xs': 10,
    'xs': 12,
    's': 14,
    'm': 16,
    'l': 20,
    'xl': 24,
    '2xl': 28,
    '3xl': 34,
    '4xl': 40,
};

// LINE HEIGHT

export type LineHeight = 's' | 'm' | 'l';

export const LineHeightBase: Record<LineHeight, number> = {
    's': 1,
    'm': 1.2,
    'l': 1.3,
};

// FONT WEIGHT

export type FontWeight = 'regular' | 'medium' | 'semi-bold' | 'bold';

export const FontWeightBase: Record<FontWeight, number> = {
    'regular': 400,
    'medium': 500,
    'semi-bold': 600,
    'bold': 700,
};

export type TextProps = {
    size?: FontSize;
    height?: LineHeight;
    weight?: FontWeight;
    color?: string;
    tag?: 'div' | 'span';
    align?: 'left' | 'center' | 'right';
    children?: React.ReactNode;
};

const useStyles = createUseStyles({
    Text: (props: TextProps & { theme: Theme }) =>  ({
        fontFamily: 'Inter, sans-serif',
        fontSize: FontSizeDesktop[props.size],
        fontWeight: FontWeightBase[props.weight],
        lineHeight: LineHeightBase[props.height],
        textAlign: props.align,
        color: typeof props.color === 'undefined' ? StyleService.instance.mutateColor(
            StyleService.instance.getBotColor(props.theme),
            StyleService.instance.getTopColor(props.theme),
            { step: 2 },
        ) : props.color,
        '@media (max-width: 400px)': {
            fontSize: (props: TextProps) => FontSizeMobile[props.size],
        },
    }),
});

export function Text(props: TextProps): JSX.Element {
    const theme = useTheme();

    const {
        size = 'm',
        height = 'm',
        weight = 'regular',
        align = 'left',
        tag = 'div',
        children,
    } = props;

    const styles = useStyles({
        ...props,
        size,
        height,
        weight,
        align,
        theme,
    });

    return React.createElement(tag, {
        className: styles.Text,
    }, children);
}
