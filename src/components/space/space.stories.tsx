import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Space as Cmp, SpaceProps } from './space';
import { ThemeProvider } from '../theme-provider';

export default {
    title: 'Atoms/Space',
    component: Cmp,
} as Meta;

const Template: Story<SpaceProps> = (args) => (
    <ThemeProvider>
        <div style={{ background: '#999', height: 30 }}/>
        <Cmp {...args}/>
        <div style={{ background: '#999', height: 30 }}/>
    </ThemeProvider>
);

export const Space = Template.bind({});

Space.args = {
    h: 'm',
};
