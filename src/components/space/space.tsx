import React from 'react';
import { SpaceCode } from '../../common';
import { StyleService } from '../../services';
import { useTheme } from '../../state';

export type SpaceProps = {
    h: SpaceCode;
};

export function Space(props: SpaceProps): JSX.Element {
    const theme = useTheme();

    const height = StyleService.instance.getSpace(theme, props.h);

    return (
        <div style={{ height }}/>
    );
}
