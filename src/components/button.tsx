import React from 'react';
import { createUseStyles } from 'react-jss';

export type ButtonProps = {
    children: React.ReactNode;
    kek?: string;
};

const useStyles = createUseStyles({
    Button: {
        backgroundColor: 'gold',
    },
});

export function Button(props: ButtonProps): JSX.Element {
    const styles = useStyles();

    return (
        <div className={styles.Button} style={{ border: '10px dashed tomato' }}>
            BTN: {props.children} :{props.kek}
        </div>
    );
}
