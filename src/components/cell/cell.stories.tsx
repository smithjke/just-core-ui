import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Cell as Cmp, CellProps } from './cell';

export default {
    title: 'A/Cell',
    component: Cmp,
    argTypes: {
        children: { control: null },
    },
} as Meta;

const Template: Story<CellProps> = (args) => (
    <Cmp {...args}/>
);

export const Cell = Template.bind({});

Cell.args = {
    children: 'I`m cell',
    border: true,
};
