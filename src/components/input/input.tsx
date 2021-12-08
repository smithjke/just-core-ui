import React, { ChangeEvent } from 'react';
import { createUseStyles } from 'react-jss';
import { StyleService } from '../../services';
import { Theme, useTheme } from '../../state';
import { colorToTop } from '../../utils';
import { Space } from '../space';
import { Text } from '../text';

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
    Input__Input: (props: InputProps & { theme: Theme }) => ({
        background: StyleService.instance.getTopColor(props.theme),
        border: `1px solid ${colorToTop(props.theme, 7)}`,
        borderRadius: StyleService.instance.getRadius(props.theme, 's'),
        color: colorToTop(props.theme, 2),
        boxSizing: 'border-box',
        padding: '9px 8px',
        width: '100%',
    }),
});

export function Input(props: InputProps): JSX.Element {
    const theme = useTheme();

    const {
        type = 'text',
    } = props;

    const styles = useStyles({
        ...props,
        theme,
    });

    return (
        <div className={styles.Input}>
            <Space h={'xs'}/>
            <Text
                size={'s'}
                height={'s'}
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
            >
                {props.bottom || (<>&nbsp;</>)}
            </Text>
            <Space h={'xs'}/>
        </div>
    );
}
