import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Container as Cmp, ContainerProps } from './container';

export default {
    title: 'B/Container',
    component: Cmp,
    argTypes: {
        children: { control: null },
    },
} as Meta;

const Template: Story<ContainerProps> = (args) => (
    <Cmp {...args}/>
);

export const Container = Template.bind({});

Container.args = {
    children: 'I`m content in container',
    border: true,
};
