import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Avatar as AvatarComponent, AvatarProps } from './avatar';
import { ThemeProvider } from '../theme-provider';

export default {
    title: 'Atoms/Avatar',
    component: AvatarComponent,
    argTypes: {
        children: { control: null },
    },
} as Meta;

const Template: Story<AvatarProps> = (args) => (
    <ThemeProvider>
        <AvatarComponent {...args}/>
    </ThemeProvider>
);

export const Avatar = Template.bind({});

Avatar.args = {
    size: 'm',
    children: '@',
};
