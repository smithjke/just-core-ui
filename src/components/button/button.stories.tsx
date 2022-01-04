import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button as ButtonComponent, ButtonProps } from './button';
import { ThemeProvider } from '../theme-provider';

export default {
    title: 'Elements/Button',
    component: ButtonComponent,
    argTypes: {
        // backgroundColor: { control: 'color' },
        children: { control: null },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
    <ThemeProvider>
        <ButtonComponent {...args}/>
    </ThemeProvider>
);

export const Button = Template.bind({});

Button.args = {
    children: 'Click me',
};
