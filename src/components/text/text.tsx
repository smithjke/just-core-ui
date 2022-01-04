import React from 'react';
import { createUseStyles } from 'react-jss';
import { FontSize, FontWeight, LineHeight, Theme } from '../../common';
import { useTheme } from '../../hooks';
import { justParam, justToTopColor } from '../../utils';

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
        fontSize: justParam(props.theme, 'FONT_SIZE_DESKTOP')[props.size],
        fontWeight: justParam(props.theme, 'FONT_WEIGHT')[props.weight],
        lineHeight: justParam(props.theme, 'LINE_HEIGHT')[props.height],
        textAlign: props.align,
        color: props.color,
        '@media (max-width: 400px)': {
            fontSize: justParam(props.theme, 'FONT_SIZE_MOBILE')[props.size],
        },
    }),
});

export function Text(props: TextProps): JSX.Element {
    const theme = useTheme();

    const {
        color = justToTopColor(theme, 1),
        size = 'm',
        height = 'm',
        weight = 'regular',
        align = 'left',
        tag = 'div',
        children,
    } = props;

    const styles = useStyles({
        ...props,
        color,
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
