import React from 'react';
import { createUseStyles } from 'react-jss';

export type LoaderProps = {
    size: number;
    color?: string;
    strokeWidth?: number;
    radius?: number;
};

const useStyles = createUseStyles({
    Loader: (props: LoaderProps) => ({
        display: 'flex',
        width: props.size,
        height: props.size,
        backgroundColor: 'transparent'
    }),
    '@keyframes circleAnimation': {
        '0%': {
            transform: 'rotate(-90deg)',
        },
        '50%': {
            transform: 'rotate(100deg)',
            'stroke-dashoffset': '0',
        },
        '100%': {
            transform: 'rotate(270deg)',
        },
    },
    ProgressRing: {},
    ProgressRing__Circle: (props: LoaderProps) => ({
        'stroke-dasharray': `${props.radius * 2 * Math.PI} ${props.radius * 2 * Math.PI}`,
        'stroke-dashoffset': props.radius * 2 * Math.PI,
        // transition: '0.75s stroke-dashoffset',
        // axis compensation
        // transform: 'rotate(-90deg)',
        'transform-origin': '50% 50%',
        animation: '$circleAnimation 2s infinite ease',
    }),
});

export function Loader(props: LoaderProps): JSX.Element {
    const {
        size,
        strokeWidth = size * 0.1,
        radius = size * 0.5 - strokeWidth - size * 0.1,
        color = 'black',
    } = props;

    const styles = useStyles({
        ...props,
        size,
        strokeWidth,
        radius,
    });

    return (
        <div className={styles.Loader}>
            <svg
                className={styles.ProgressRing}
                width={size}
                height={size}
            >
                <circle
                    className={styles.ProgressRing__Circle}
                    stroke={color}
                    strokeWidth={size * 0.15}
                    fill="transparent"
                    r={radius}
                    cx={size * 0.5}
                    cy={size * 0.5}
                />
            </svg>
        </div>
    );
}
