import React from 'react';
import { createUseStyles } from 'react-jss';

export type LoaderProps = {
    size: number;
    color?: string;
};

const useStyles = createUseStyles({
    Loader: (props: LoaderProps & { radius: number }) => ({
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
            transform: 'rotate(630deg)',
        },
    },
    '@keyframes circleAnimation2': {
        '0%': {
            transform: 'rotate(-90deg)',
        },
        '50%': {
            transform: 'rotate(270deg)',
            'stroke-dashoffset': '0',
        },
        '100%': {
            transform: 'rotate(990deg)',
        },
    },
    ProgressRing: {},
    ProgressRing__Circle: (props: LoaderProps & { radius: number }) => ({
        'stroke-dasharray': `${props.radius * 2 * Math.PI} ${props.radius * 2 * Math.PI}`,
        'stroke-dashoffset': props.radius * 2 * Math.PI,
        'transform-origin': '50% 50%',
        animation: '$circleAnimation2 2s infinite ease',
    }),
});

export function Loader(props: LoaderProps): JSX.Element {
    const {
        size,
        color = 'black',
    } = props;

    const strokeWidth = size * 0.1;
    const radius = size * 0.5 - strokeWidth - size * 0.1;

    const styles = useStyles({
        ...props,
        size,
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
                    fill={'transparent'}
                    r={radius}
                    cx={size * 0.5}
                    cy={size * 0.5}
                />
            </svg>
        </div>
    );
}
