import React from 'react';
import { Story, Meta } from '@storybook/react';
import { createDefaultThemeConfig } from '../../common/create-default-theme-config';
import { Theme } from '../../components/theme';
import { Button, ButtonProps } from './button';

export default {
    title: 'Example/Button',
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
    primary: true,
    label: 'Button1',
};

export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button2',
};

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button3',
};

export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button4',
};
