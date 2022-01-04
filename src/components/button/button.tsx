import React from 'react';
import { createUseStyles } from 'react-jss';
import { FontSize, Theme } from '../../common';
import { useTheme } from '../../hooks';
import {
    justColor,
    justParamColor,
    justRadius,
    justSpace,
    justToBotColor,
    justToTopColor,
} from '../../utils';
import { Loader } from '../loader';
import { Text } from '../text';

export type ButtonPropsType = 'primary' | 'secondary';

export type ButtonPropsSize = 's' | 'm' | 'l';

export type ButtonProps = {
    type?: ButtonPropsType;
    size?: ButtonPropsSize;
    autoFill?: boolean;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    children?: React.ReactNode;
};

const type2paramName: Record<ButtonPropsType, string> = {
    'primary': 'BUTTON_PRIMARY_COLOR',
    'secondary': 'BUTTON_SECONDARY_COLOR',
};

type ButtonConfig = {
    padding: string;
    borderRadius: number;
    textSize: FontSize;
};

const getButtonConfig = (props: ButtonProps, theme: Theme): ButtonConfig => {
    const size2params: Record<ButtonPropsSize, ButtonConfig> = {
        's': {
            padding: `7px ${justSpace(theme, 'xs')}px`,
            borderRadius: justRadius(theme, 's'),
            textSize: 's',
        },
        'm': {
            padding: `${justSpace(theme, 'xs')}px ${justSpace(theme, 'm')}px`,
            borderRadius: justRadius(theme, 's'),
            textSize: 'm',
        },
        'l': {
            padding: `${justSpace(theme, 's')}px ${justSpace(theme, 'l')}px`,
            borderRadius: justRadius(theme, 'm'),
            textSize: 'm',
        },
    };

    return size2params[props.size];
};

const getButtonColor = (props: ButtonProps, theme: Theme) => justParamColor(theme, type2paramName[props.type]);

const getButtonDisabledColor = (props: ButtonProps, theme: Theme) => justToBotColor(theme, { step: 6 });

const getButtonHoveredColor = (props: ButtonProps, theme: Theme) => justToBotColor(theme, { step: 2 }, getButtonColor(props, theme));

const useStyles = createUseStyles({
    Button: (props: ButtonProps & { theme: Theme }) => ({
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        backgroundColor: props.disabled
            ? getButtonDisabledColor(props, props.theme)
            : getButtonColor(props, props.theme),
        border: 'none',
        margin: 0,
        padding: getButtonConfig(props, props.theme).padding,
        borderRadius: getButtonConfig(props, props.theme).borderRadius,
        cursor: (props.disabled || props.loading) ? null : 'pointer',
        boxSizing: 'border-box',
        width: props.autoFill ? '100%' : void 0,
        outline: 0,
        '&:hover': {
            backgroundColor: props.disabled
                ? getButtonDisabledColor(props, props.theme)
                : (props.loading ? getButtonColor(props, props.theme) :  getButtonHoveredColor(props, props.theme)),
        }
    }),
    Button__Text: (props: ButtonProps) => ({
        opacity: props.loading ? 0 : 1,
    }),
    Button__Loader: (props: ButtonProps) => ({
        display: props.loading ? 'block' : 'none',
        position: 'absolute',
        width: 20,
        height: 20,
        marginTop: -10,
        marginLeft: -10,
        top: '50%',
        left: '50%',
    }),
});

export function Button(props: ButtonProps): JSX.Element {
    const theme = useTheme();
    const colorLight = justColor(theme, 'LIGHT');

    const {
        type = 'primary',
        size = 'm',
    } = props;

    const filledProps = {
        ...props,
        size,
        type,
    };

    const styles = useStyles({
        ...filledProps,
        theme,
    });

    const onClick = () => !props.disabled && !props.loading && props.onClick && props.onClick();

    return (
        <button
            className={styles.Button}
            onClick={onClick}
        >
            <div className={styles.Button__Loader}>
                <Loader
                    size={20}
                    color={colorLight}
                />
            </div>
            <div className={styles.Button__Text}>
                <Text
                    size={getButtonConfig(filledProps, theme).textSize}
                    weight={'medium'}
                    height={'s'}
                    color={colorLight}
                >
                    {props.children}
                </Text>
            </div>
        </button>
    );
}
