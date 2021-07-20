import React, { useContext } from 'react';
import { createUseStyles } from 'react-jss';
import { ThemeConfigContext } from '../../common/theme-config-context';

export type ButtonProps = {
    children?: React.ReactNode;
    kek?: string;
    label: string;
    primary?: boolean;
};

const useStyles = createUseStyles({
    Button: {
        backgroundColor: 'gold',
    },
});

export function Button(props: ButtonProps): JSX.Element {
    const theme = useContext(ThemeConfigContext);
    const styles = useStyles();

    return (
        <div className={styles.Button} style={{ border: `10px dashed ${theme.color[theme.param['BUTTON_PRIMARY_COLOR']]}` }}>
            BTN: ({props.label}) {props.children} :{props.kek}
        </div>
    );
}
