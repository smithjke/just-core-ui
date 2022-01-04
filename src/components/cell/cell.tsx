import React from 'react';
import { createUseStyles } from 'react-jss';
import { RadiusCode, SpaceCode, Theme } from '../../common';
import { useTheme } from '../../hooks';
import { justRadius, justSpace, justToTopColor } from '../../utils';

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
    maxWidth?: number;
    children: React.ReactNode;
};

const getBorderColor = (theme: Theme): string => justToTopColor(theme, { step: 7 });

const useStyles = createUseStyles({
    Cell: (props: CellProps & { theme: Theme }) => ({
        paddingTop: props.paddingTop ? justSpace(props.theme, props.paddingTop) : 0,
        paddingBottom: props.paddingBottom ? justSpace(props.theme, props.paddingBottom) : 0,
        paddingLeft: props.paddingLeft ? justSpace(props.theme, props.paddingLeft) : 0,
        paddingRight: props.paddingRight ? justSpace(props.theme, props.paddingRight) : 0,
        borderRadius: props.radius ? justRadius(props.theme, props.radius) : 0,
        borderTop: props.borderTop && `1px solid ${getBorderColor(props.theme)}`,
        borderBottom: props.borderBottom && `1px solid ${getBorderColor(props.theme)}`,
        borderLeft: props.borderLeft && `1px solid ${getBorderColor(props.theme)}`,
        borderRight: props.borderRight && `1px solid ${getBorderColor(props.theme)}`,
    }),
});

export function Cell(props: CellProps): JSX.Element {
    const theme = useTheme();

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
        theme,
    });

    const children = props.maxWidth ? (
        <div
            style={{
                maxWidth: props.maxWidth,
                margin: '0 auto',
            }}
        >
            {props.children}
        </div>
    ) : props.children;

    return (
        <div className={styles.Cell}>
            {children}
        </div>
    );
}
