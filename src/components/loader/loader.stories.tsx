import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Loader, LoaderProps } from './loader';

export default {
    title: 'Main/Loader',
    component: Loader,
} as Meta;

const Template: Story<LoaderProps> = (args) => (
    <Loader {...args}/>
);

export const Primary = Template.bind({});
Primary.args = {
    size: 164,
};
