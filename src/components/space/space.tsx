import React from 'react';
import { SpaceCode } from '../../common';
import { getThemeConfig } from '../../utils/get-theme-config';

const tc = getThemeConfig();

export type SpaceProps = {
    h: SpaceCode;
};

export function Space(props: SpaceProps): JSX.Element {
    const height = tc.getSpace(props.h);

    return (
        <div style={{ height }}/>
    );
}
