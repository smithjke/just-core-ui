import React from 'react';
import { Meta, Story } from '@storybook/react';
import { createDefaultThemeConfig } from '../../common';
import { Theme } from '../theme';
import { Text, TextProps } from './text';

export default {
    title: 'Main/Text',
    component: Text,
} as Meta;

const themeConfig = createDefaultThemeConfig();

const Template: Story<TextProps> = (args) => (
    <Theme config={themeConfig}>
        <Text {...args}/>
    </Theme>
);

export const Primary = Template.bind({});
Primary.args = {
    children: 'Zdarova posony',
};
