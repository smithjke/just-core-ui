import React from 'react';
import { createUseStyles } from 'react-jss';
import { getThemeConfig } from '../../utils/get-theme-config';
import { useDarkMode } from '../../hooks/use-dark-mode';
import { FontSize, Text } from '../text';
import { Loader } from '../loader';

const tc = getThemeConfig();

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
     * Кнопка в состоянии загрузки
     */
    loading?: boolean;

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
        padding: `7px ${tc.getSpace('xs')}px`,
        borderRadius: tc.getRadius('s'),
        textSize: 's',
    },
    'm': {
        padding: `${tc.getSpace('xs')}px ${tc.getSpace('m')}px`,
        borderRadius: tc.getRadius('s'),
        textSize: 'm',
    },
    'l': {
        padding: `${tc.getSpace('s')}px ${tc.getSpace('l')}px`,
        borderRadius: tc.getRadius('m'),
        textSize: 'm',
    },
};

const useStyles = createUseStyles({
    Button: (props: ButtonProps) => ({
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
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
            backgroundColor: tc.getMidColor({ step: 4, darkMode: props.darkMode }),
        } : {
            backgroundColor: tc.getRawColor(props.backgroundColor, { step: -1, darkMode: props.darkMode }),
        }
    }),
    Button__Text: {
        opacity: (props: ButtonProps) => props.loading ? 0 : 1,
    },
    Button__Loader: {
        display: (props: ButtonProps) => props.loading ? 'block' : 'none',
        position: 'absolute',
        width: 20,
        height: 20,
        marginTop: -10,
        marginLeft: -10,
        top: '50%',
        left: '50%',
    },
});

export function Button(props: ButtonProps): JSX.Element {
    const darkMode = useDarkMode(props);

    const {
        size = 'm',
        type = 'primary',
    } = props;

    const backgroundColor = props.disabled
        ? tc.getMidColor({ step: 4, darkMode })
        : tc.getParamColor(type2paramName[type], { step: 0, darkMode })

    const styles = useStyles({
        ...props,
        size,
        type,
        darkMode,
        backgroundColor,
    });

    const onClick = () => !props.disabled && !props.loading && props.onClick && props.onClick();

    return (
        <button
            className={styles.Button}
            onClick={onClick}
        >
            <div className={styles.Button__Loader}>
                <Loader size={20} color={tc.getParamColor('LIGHT')}/>
            </div>
            <div className={styles.Button__Text}>
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
            </div>
        </button>
    );
}
