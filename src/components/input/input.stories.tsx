import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input as Cmp, InputProps } from './input';
import { ThemeProvider } from '../theme-provider';

export default {
    title: 'Elements/Input',
    component: Cmp,
} as Meta;

const Template: Story<InputProps> = (args) => (
    <ThemeProvider>
        <Cmp {...args}/>
    </ThemeProvider>
);

export const Input = Template.bind({});

Input.args = {
    title: 'Zdarova posony',
    value: 'Lol cho',
    onChange: (event) => console.log('INPUT EVENT', event),
};
