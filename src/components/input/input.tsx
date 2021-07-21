import React, { ChangeEvent, useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { colorize, DarkModeContext, midColor, radius2pixel, ThemeConfigContext } from '../../common';
import { Space } from '../space';
import { Text } from '../text';

export type InputProps = {
    title: string;
    value: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: string;
    disabled?: boolean;
    darkMode?: boolean;
};

const useStyles = createUseStyles({
    Input: {},
    Input__Input: {
        border: (props: InputProps) => `1px solid ${colorize(midColor(), 5, props.darkMode)}`,
        borderRadius: radius2pixel['s'],
        boxSizing: 'border-box',
        padding: '9px 8px',
        width: '100%',
    },
});

export function Input(props: InputProps): JSX.Element {
    const theme = useContext(ThemeConfigContext);

    const {
        type = 'text',
        darkMode = useContext(DarkModeContext),
    } = props;

    const styles = useStyles({
        ...props,
        darkMode,
        theme,
    });

    return (
        <div className={styles.Input}>
            <Space h={'xs'}/>
            <Text
                size={'s'}
                height={'s'}
                colorStep={0}
            >
                {props.title}
            </Text>
            <Space h={'xs'}/>
            <input
                className={styles.Input__Input}
                type={type}
                value={props.value}
                onChange={props.onChange}
                disabled={props.disabled}
            />
            <Space h={'xs'}/>
            <Text
                size={'s'}
                height={'s'}
                colorStep={0}
            >
                &nbsp;
            </Text>
            <Space h={'xs'}/>
        </div>
    );
}
