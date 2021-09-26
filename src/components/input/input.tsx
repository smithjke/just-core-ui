import React, { ChangeEvent } from 'react';
import { createUseStyles } from 'react-jss';
import { useDarkMode } from '../../hooks/use-dark-mode';
import { getThemeConfig } from '../../utils/get-theme-config';
import { Space } from '../space';
import { Text } from '../text';

const tc = getThemeConfig();

export type InputProps = {
    title: string;
    value: string;
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
    type?: 'text' | 'password';
    disabled?: boolean;
    bottom?: React.ReactNode;
    darkMode?: boolean;
};

const useStyles = createUseStyles({
    Input: {},
    Input__Input: {
        border: (props: InputProps) => `1px solid ${tc.getMidColor({ step: 5, darkMode: props.darkMode })}`,
        borderRadius: tc.getRadius('s'),
        boxSizing: 'border-box',
        padding: '9px 8px',
        width: '100%',
    },
});

export function Input(props: InputProps): JSX.Element {
    const darkMode = useDarkMode(props);

    const {
        type = 'text',
    } = props;

    const styles = useStyles({
        ...props,
        darkMode,
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
            <Space h={'m'}/>
            <Text
                size={'s'}
                height={'s'}
                colorStep={0}
            >
                {props.bottom || (<>&nbsp;</>)}
            </Text>
            <Space h={'xs'}/>
        </div>
    );
}
