import React from 'react';
import { Meta, Story } from '@storybook/react';
import { createDefaultThemeConfig } from '../../common';
import { Theme } from '../theme';
import { Loader, LoaderProps } from './loader';

export default {
    title: 'Main/Loader',
    component: Loader,
} as Meta;

const themeConfig = createDefaultThemeConfig();

const Template: Story<LoaderProps> = (args) => (
    <Theme config={themeConfig}>
        <Loader {...args}/>
    </Theme>
);

export const Primary = Template.bind({});
Primary.args = {
    size: 164,
};
