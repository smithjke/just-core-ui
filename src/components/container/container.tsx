import React from 'react';
import { createUseStyles } from 'react-jss';
import { SpaceCode } from '../../common';
import { Cell } from '../cell';

export type ContainerProps = {
    paddingX?: SpaceCode;
    paddingY?: SpaceCode;
    paddingTop?: SpaceCode;
    paddingBottom?: SpaceCode;
    paddingRight?: SpaceCode;
    paddingLeft?: SpaceCode;
    border?: boolean;
    maxWidth?: number;
    children?: React.ReactNode;
};

const useStyles = createUseStyles({
    Container: (props: ContainerProps) => ({
        maxWidth: props.maxWidth ? `${props.maxWidth}px` : null,
        margin: '0 auto',
    }),
});

export function Container(props: ContainerProps): JSX.Element {
    const {
        paddingX = 'm',
        paddingY,
        paddingTop,
        paddingBottom,
        paddingRight,
        paddingLeft,
        border,
        maxWidth = 700,
    } = props;

    const styles = useStyles({
        ...props,
        maxWidth,
    });

    return (
        <Cell
            paddingX={paddingX}
            paddingY={paddingY}
            paddingTop={paddingTop}
            paddingBottom={paddingBottom}
            paddingRight={paddingRight}
            paddingLeft={paddingLeft}
            border={border}
        >
            <div className={styles.Container}>
                {props.children}
            </div>
        </Cell>
    );
}
