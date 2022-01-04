import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Cell as Cmp, CellProps } from './cell';
import { ThemeProvider } from '../theme-provider';

export default {
    title: 'Atoms/Cell',
    component: Cmp,
    argTypes: {
        children: { control: null },
    },
} as Meta;

const Template: Story<CellProps> = (args) => (
    <ThemeProvider>
        <Cmp {...args}/>
    </ThemeProvider>
);

export const Cell = Template.bind({});

Cell.args = {
    children: 'I`m cell',
    border: true,
};
