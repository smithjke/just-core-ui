import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Loader as Cmp, LoaderProps } from './loader';

export default {
    title: 'A/Loader',
    component: Cmp,
} as Meta;

const Template: Story<LoaderProps> = (args) => (
    <Cmp {...args}/>
);

export const Loader = Template.bind({});

Loader.args = {
    size: 164,
};
