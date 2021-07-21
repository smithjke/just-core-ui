import React from 'react';
import { Meta, Story } from '@storybook/react';
import { createDefaultThemeConfig } from '../../common';
import { Theme } from '../theme';
import { Link, LinkProps } from './link';

export default {
    title: 'Main/Link',
    component: Link,
} as Meta;

const themeConfig = createDefaultThemeConfig();

const Template: Story<LinkProps> = (args) => (
    <Theme config={themeConfig}>
        <Link {...args}/>
    </Theme>
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Zdarova posony',
};
