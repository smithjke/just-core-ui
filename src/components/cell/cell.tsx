import React from 'react';
import { SpaceCode } from '../../common';
import { getThemeConfig } from '../../utils/get-theme-config';
import { createUseStyles } from 'react-jss';

const tc = getThemeConfig();

export type CellProps = {
    spaceCode?: SpaceCode;
    left?: React.ReactNodeArray;
    right?: React.ReactNodeArray;
};

const useStyles = createUseStyles({
    Cell: (props: CellProps) => ({
        paddingTop: props.spaceCode ? tc.getSpace(props.spaceCode) : 0,
        paddingBottom: props.spaceCode ? tc.getSpace(props.spaceCode) : 0,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
    }),
    Cell__Left: {},
    Cell__Right: {},
});

export function Cell(props: CellProps): JSX.Element {
    const styles = useStyles(props);

    return (
        <div className={styles.Cell}>
            <div className={styles.Cell__Left}>
                {props.left}
            </div>
            <div className={styles.Cell__Right}>
                {props.right}
            </div>
        </div>
    );
}
