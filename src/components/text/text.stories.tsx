import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Text as Cmp, TextProps } from './text';
import { ThemeProvider } from '../theme-provider';

export default {
    title: 'Atoms/Text',
    component: Cmp,
} as Meta;

const Template: Story<TextProps> = (args) => (
    <ThemeProvider>
        <Cmp {...args}/>
    </ThemeProvider>
);

export const Text = Template.bind({});

Text.args = {
    children: 'Some text...',
};
