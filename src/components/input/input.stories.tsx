import React from 'react';
import { Meta, Story } from '@storybook/react';
import { createDefaultThemeConfig } from '../../common';
import { Theme } from '../theme';
import { Input, InputProps } from './input';

export default {
    title: 'Main/Input',
    component: Input,
} as Meta;

const themeConfig = createDefaultThemeConfig();

const Template: Story<InputProps> = (args) => (
    <Theme config={themeConfig}>
        <Input {...args}/>
    </Theme>
);

export const Primary = Template.bind({});
Primary.args = {
    title: 'Zdarova posony',
    value: 'Lol cho',
    onChange: (event) => console.log('INPUT EVENT', event),
};
