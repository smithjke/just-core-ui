import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Loader as Cmp, LoaderProps } from './loader';
import { ThemeProvider } from '../theme-provider';

export default {
    title: 'Atoms/Loader',
    component: Cmp,
} as Meta;

const Template: Story<LoaderProps> = (args) => (
    <ThemeProvider>
        <Cmp {...args}/>
    </ThemeProvider>
);

export const Loader = Template.bind({});

Loader.args = {
    size: 164,
};
