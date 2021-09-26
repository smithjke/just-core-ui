import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text as Cmp, TextProps } from './text';

export default {
    title: 'A/Text',
    component: Cmp,
} as Meta;

const Template: Story<TextProps> = (args) => (
    <Cmp {...args}/>
);

export const Text = Template.bind({});

Text.args = {
    children: 'Zdarova posony',
};
