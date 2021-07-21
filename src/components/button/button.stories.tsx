import React from 'react';
import { Story, Meta } from '@storybook/react';
import { createDefaultThemeConfig } from '../../common';
import { Theme } from '../../components/theme';
import { Button, ButtonProps } from './button';

export default {
    title: 'Main/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as Meta;

const themeConfig = createDefaultThemeConfig();

const Template: Story<ButtonProps> = (args) => (
    <Theme config={themeConfig}>
        <Button {...args}/>
    </Theme>
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Button1',
};

export const Secondary = Template.bind({});
Secondary.args = {
    children: 'Button2',
};

export const Large = Template.bind({});
Large.args = {
    children: 'Button3',
};

export const Small = Template.bind({});
Small.args = {
    children: 'Button4',
};
