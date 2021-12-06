import React from 'react';
import { createUseStyles } from 'react-jss';
import { RadiusCode, SpaceCode } from '../../common';
import { StyleService } from '../../services';
import { Theme, useTheme } from '../../state';

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
    children: React.ReactNode;
};

const getBorderColor = (theme: Theme): string => StyleService.instance.mutateColor(
    StyleService.instance.getBotColor(theme),
    StyleService.instance.getTopColor(theme),
    { step: 7 },
);

const useStyles = createUseStyles((theme: Theme) => ({
    Cell: (props: CellProps) => ({
        paddingTop: props.paddingTop ? StyleService.instance.getSpace(theme, props.paddingTop) : 0,
        paddingBottom: props.paddingBottom ? StyleService.instance.getSpace(theme, props.paddingBottom) : 0,
        paddingLeft: props.paddingLeft ? StyleService.instance.getSpace(theme, props.paddingLeft) : 0,
        paddingRight: props.paddingRight ? StyleService.instance.getSpace(theme, props.paddingRight) : 0,
        borderRadius: props.radius ? StyleService.instance.getRadius(theme, props.radius) : 0,
        borderTop: props.borderTop && `1px solid ${getBorderColor(theme)}`,
        borderBottom: props.borderBottom && `1px solid ${getBorderColor(theme)}`,
        borderLeft: props.borderLeft && `1px solid ${getBorderColor(theme)}`,
        borderRight: props.borderRight && `1px solid ${getBorderColor(theme)}`,
        display: props.spaceBetween ? 'flex' : null,
        justifyContent: props.spaceBetween ? 'space-between' : null,
        alignItems: props.spaceBetween ? 'center' : null,
    }),
}));

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

    return (
        <div className={styles.Cell}>
            {props.children}
        </div>
    );
}
