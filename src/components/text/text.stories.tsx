import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text, TextProps } from './text';

export default {
    title: 'Main/Text',
    component: Text,
} as Meta;

const Template: Story<TextProps> = (args) => (
    <Text {...args}/>
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Zdarova posony',
};
