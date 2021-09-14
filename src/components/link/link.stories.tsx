import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link, LinkProps } from './link';

export default {
    title: 'Main/Link',
    component: Link,
} as Meta;

const Template: Story<LinkProps> = (args) => (
    <Link {...args}/>
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Zdarova posony',
};
