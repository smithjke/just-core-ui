import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BlockLink as Cmp, BlockLinkProps } from './block-link';
import { ThemeProvider } from '../theme-provider';

export default {
    title: 'Elements/Block Link',
    component: Cmp,
    argTypes: {
        children: { control: null },
    },
} as Meta;

const Template: Story<BlockLinkProps> = (args) => (
    <ThemeProvider>
        <Cmp {...args}/>
    </ThemeProvider>
);

export const BlockLink = Template.bind({});

BlockLink.args = {
    children: 'I`m link',
};
