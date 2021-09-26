import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input as Cmp, InputProps } from './input';

export default {
    title: 'B/Input',
    component: Cmp,
} as Meta;

const Template: Story<InputProps> = (args) => (
    <Cmp {...args}/>
);

export const Input = Template.bind({});

Input.args = {
    title: 'Zdarova posony',
    value: 'Lol cho',
    onChange: (event) => console.log('INPUT EVENT', event),
};
