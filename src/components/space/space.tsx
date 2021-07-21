import React from 'react';
import { SpaceCode, spaceCode2pixel } from '../../common';

export type SpaceProps = {
    h: SpaceCode;
};

export function Space(props: SpaceProps): JSX.Element {
    const height = spaceCode2pixel[props.h];
    return (
        <div style={{ height }}/>
    );
}
