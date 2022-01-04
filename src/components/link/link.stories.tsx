import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Link as Cmp, LinkProps } from './link';
import { ThemeProvider } from '../theme-provider';

export default {
    title: 'Atoms/Link',
    component: Cmp,
} as Meta;

const Template: Story<LinkProps> = (args) => (
    <ThemeProvider>
        <Cmp {...args}/>
    </ThemeProvider>
);

export const Link = Template.bind({});

Link.args = {
    children: 'Link to...',
};
