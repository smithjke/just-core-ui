import React from 'react';
import { createUseStyles } from 'react-jss';
import { RadiusCode, SpaceCode } from '../../common';
import { useDarkMode } from '../../hooks/use-dark-mode';
import { getThemeConfig } from '../../utils/get-theme-config';

const tc = getThemeConfig();

export type CellProps = {
    padding?: SpaceCode;
    paddingX?: SpaceCode;
    paddingY?: SpaceCode;
    paddingTop?: SpaceCode;
    paddingBottom?: SpaceCode;
    paddingRight?: SpaceCode;
    paddingLeft?: SpaceCode;
    border?: boolean;
    borderX?: boolean;
    borderY?: boolean;
    borderTop?: boolean;
    borderBottom?: boolean;
    borderRight?: boolean;
    borderLeft?: boolean;
    radius?: RadiusCode;
    spaceBetween?: boolean;
    darkMode?: boolean;
    children: React.ReactNode;
};

const useStyles = createUseStyles({
    Cell: {
        paddingTop: ({ paddingTop }: CellProps) => paddingTop ? tc.getSpace(paddingTop) : 0,
        paddingBottom: ({ paddingBottom }: CellProps) => paddingBottom ? tc.getSpace(paddingBottom) : 0,
        paddingLeft: ({ paddingLeft }: CellProps) => paddingLeft ? tc.getSpace(paddingLeft) : 0,
        paddingRight: ({ paddingRight }: CellProps) => paddingRight ? tc.getSpace(paddingRight) : 0,
        borderRadius: ({ radius }: CellProps) => radius ? tc.getRadius(radius) : 0,
        borderTop: ({ borderTop, darkMode }: CellProps) => borderTop && `1px solid ${tc.getMidColor({ step: 5, darkMode })}`,
        borderBottom: ({ borderBottom, darkMode }: CellProps) => borderBottom && `1px solid ${tc.getMidColor({ step: 5, darkMode })}`,
        borderRight: ({ borderRight, darkMode }: CellProps) => borderRight && `1px solid ${tc.getMidColor({ step: 5, darkMode })}`,
        borderLeft: ({ borderLeft, darkMode }: CellProps) => borderLeft && `1px solid ${tc.getMidColor({ step: 5, darkMode })}`,
        display: ({ spaceBetween }: CellProps) => spaceBetween ? 'flex' : null,
        justifyContent: ({ spaceBetween }: CellProps) => spaceBetween ? 'space-between' : null,
        alignItems: ({ spaceBetween }: CellProps) => spaceBetween ? 'center' : null,
    },
});

export function Cell(props: CellProps): JSX.Element {
    const darkMode = useDarkMode(props);
    const {
        padding,
        paddingX = padding,
        paddingLeft = paddingX,
        paddingRight = paddingX,
        paddingY = padding,
        paddingTop = paddingY,
        paddingBottom = paddingY,
        border,
        borderX = border,
        borderLeft = borderX,
        borderRight = borderX,
        borderY = border,
        borderTop = borderY,
        borderBottom = borderY,
    } = props;

    const styles = useStyles({
        ...props,
        padding,
        paddingX,
        paddingY,
        paddingTop,
        paddingBottom,
        paddingLeft,
        paddingRight,
        border,
        borderX,
        borderY,
        borderTop,
        borderBottom,
        borderLeft,
        borderRight,
        darkMode,
    });

    return (
        <div className={styles.Cell}>
            {props.children}
        </div>
    );
}
