import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link as Cmp, LinkProps } from './link';

export default {
    title: 'A/Link',
    component: Cmp,
} as Meta;

const Template: Story<LinkProps> = (args) => (
    <Cmp {...args}/>
);

export const Link = Template.bind({});

Link.args = {
    children: 'Zdarova posony',
};
