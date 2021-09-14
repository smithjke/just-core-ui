import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, InputProps } from './input';

export default {
    title: 'Main/Input',
    component: Input,
} as Meta;

const Template: Story<InputProps> = (args) => (
    <Input {...args}/>
);

export const Primary = Template.bind({});
Primary.args = {
    title: 'Zdarova posony',
    value: 'Lol cho',
    onChange: (event) => console.log('INPUT EVENT', event),
};
