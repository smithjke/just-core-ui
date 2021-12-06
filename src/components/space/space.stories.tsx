import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Space as Cmp, SpaceProps } from './space';

export default {
    title: 'A/Space',
    component: Cmp,
} as Meta;

const Template: Story<SpaceProps> = (args) => (
    <>
        <div style={{ background: '#999', height: 30 }}/>
        <Cmp {...args}/>
        <div style={{ background: '#999', height: 30 }}/>
    </>
);

export const Space = Template.bind({});

Space.args = {
    h: 'm',
};
