import React from 'react';
import { Story, Meta } from '@storybook/react';
import { BlockLink as Cmp, BlockLinkProps } from './block-link';

export default {
    title: 'B/Block Link',
    component: Cmp,
    argTypes: {
        children: { control: null },
    },
} as Meta;

const Template: Story<BlockLinkProps> = (args) => (
    <Cmp {...args}/>
);

export const BlockLink = Template.bind({});

BlockLink.args = {
    children: 'I`m link',
};
