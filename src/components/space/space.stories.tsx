import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Space as Cmp, SpaceProps } from './space';

export default {
    title: 'A/Space',
    component: Cmp,
} as Meta;

const Template: Story<SpaceProps> = (args) => (
    <Cmp {...args}/>
);

export const Space = Template.bind({});

Space.args = {
    h: 'm',
};
