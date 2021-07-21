import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { colorize, midColor, DarkModeContext } from '../../common';

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
    /**
     * Размер текста
     */
    size?: FontSize;

    /**
     * Высота строки
     */
    height?: LineHeight;

    /**
     * Жирнота
     */
    weight?: FontWeight;

    /**
     * Цвет
     */
    color?: string;

    /**
     * Шаг цвета
     */
    colorStep?: number;

    /**
     * Не менять цвет при Dark Mode
     */
    forceColorStep?: boolean;

    /**
     * Отключить присваивание цвета
     */
    disableColor?: boolean;

    /**
     * Тип HTML элемента
     */
    tag?: 'div' | 'span';

    /**
     * Дочерний элемент
     */
    children?: React.ReactNode;

    /**
     * Force Dark mode
     */
    darkMode?: boolean;
};

// @todo шрифт не скейлится в цифрах у продукта
const useStyles = createUseStyles({
    Text: {
        fontFamily: 'Inter, sans-serif',
        fontSize: (props: TextProps) => FontSizeDesktop[props.size],
        fontWeight: (props: TextProps) => FontWeightBase[props.weight],
        lineHeight: (props: TextProps) => LineHeightBase[props.height],
        color: (props: TextProps) => props.disableColor ? null : colorize(props.color, props.colorStep, !props.forceColorStep && props.darkMode),
        '@media (max-width: 400px)': {
            fontSize: (props: TextProps) => FontSizeMobile[props.size],
        },
    },
});

export function Text(props: TextProps): JSX.Element {
    const dm = useContext(DarkModeContext);

    const {
        size = 'm',
        height = 'm',
        weight = 'regular',
        darkMode = dm,
        color = midColor(),
        colorStep = -6,
        tag = 'div',
        children,
    } = props;

    const styles = useStyles({
        ...props,
        size,
        height,
        weight,
        darkMode,
        color,
        colorStep,
    });

    return React.createElement(tag, {
        className: styles.Text,
    }, children);
}
