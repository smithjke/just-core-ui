import React from 'react';
import { SpaceCode } from '../../common';
import { Space } from '../space';

export type GapperProps = {
    step: SpaceCode;
    children: Array<React.ReactNode>;
};

export function Gapper(props: GapperProps): JSX.Element {
    const list = Array.isArray(props.children) ? props.children : [props.children];

    return (
        <>
            {list.filter(Boolean).map((node, index) => (
                <React.Fragment key={index}>
                    {index > 0 && (
                        <Space h={props.step}/>
                    )}
                    {node}
                </React.Fragment>
            ))}
        </>
    );
}
