import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { colorize, DarkModeContext, spaceCode2pixel, radius2pixel, midColor, ThemeConfigContext } from '../../common';
import { FontSize, Text } from '../text';

export type ButtonPropsType = 'primary' | 'secondary';

export type ButtonPropsSize = 's' | 'm' | 'l';

export type ButtonProps = {
    /**
     * Тип кнопки
     */
    type?: ButtonPropsType;

    /**
     * Размер
     */
    size?: ButtonPropsSize;

    /**
     * Действие при нажатии
     */
    onClick?: () => void;

    /**
     * Заблокирована ли кнопка
     */
    disabled?: boolean;

    /**
     * Заполнять ли все пространство
     */
    autoFill?: boolean;

    /**
     * Дочерний элемент
     */
    children?: React.ReactNode;

    /**
     * Dark Mode
     */
    darkMode?: boolean;

    /**
     * Фоновый цвет кнопки
     */
    backgroundColor?: string;
};

const type2paramName: Record<ButtonPropsType, string> = {
    'primary': 'BUTTON_PRIMARY_COLOR',
    'secondary': 'BUTTON_SECONDARY_COLOR',
};

type ButtonParam = {
    padding: string;
    borderRadius: number;
    textSize: FontSize;
};

const size2params: Record<ButtonPropsSize, ButtonParam> = {
    's': {
        padding: `7px ${spaceCode2pixel['xs']}px`,
        borderRadius: radius2pixel['s'],
        textSize: 's',
    },
    'm': {
        padding: `${spaceCode2pixel['xs']}px ${spaceCode2pixel['m']}px`,
        borderRadius: radius2pixel['s'],
        textSize: 'm',
    },
    'l': {
        padding: `${spaceCode2pixel['s']}px ${spaceCode2pixel['l']}px`,
        borderRadius: radius2pixel['m'],
        textSize: 'm',
    },
};

const useStyles = createUseStyles({
    Button: (props: ButtonProps) => ({
        backgroundColor: props.backgroundColor,
        border: 'none',
        margin: 0,
        padding: size2params[props.size].padding,
        borderRadius: size2params[props.size].borderRadius,
        cursor: props.disabled ? null : 'pointer',
        boxSizing: 'border-box',
        width: props.autoFill ? '100%' : void 0,
        outline: 0,
        '&:hover': props.disabled ? {
            backgroundColor: colorize(midColor(), 4, props.darkMode),
        } : {
            backgroundColor: colorize(props.backgroundColor, -1, props.darkMode),
        }
    }),
});

export function Button(props: ButtonProps): JSX.Element {
    const theme = useContext(ThemeConfigContext);

    const {
        size = 'm',
        type = 'primary',
        darkMode = useContext(DarkModeContext),
    } = props;

    const backgroundColor = props.disabled
        ? colorize(midColor(), 4, darkMode)
        : colorize(theme.color[theme.param[type2paramName[type]]], 0, darkMode);

    const styles = useStyles({
        ...props,
        size,
        type,
        darkMode,
        backgroundColor,
    });

    const onClick = () => !props.disabled && props.onClick && props.onClick();

    return (
        <button
            className={styles.Button}
            onClick={onClick}
        >
            <Text
                size={size2params[size].textSize}
                weight={'medium'}
                height={'s'}
                colorStep={8}
                darkMode={props.darkMode}
                forceColorStep
            >
                {props.children}
            </Text>
        </button>
    );
}
