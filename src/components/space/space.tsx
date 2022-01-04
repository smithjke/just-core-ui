import React from 'react';
import { SpaceCode } from '../../common';
import { useTheme } from '../../hooks';
import { justSpace } from '../../utils';

export type SpaceProps = {
    h: SpaceCode;
};

export function Space(props: SpaceProps): JSX.Element {
    const theme = useTheme();

    const height = justSpace(theme, props.h);

    return (
        <div style={{ height }}/>
    );
}
