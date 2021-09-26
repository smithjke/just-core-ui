import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Avatar as AvatarComponent, AvatarProps } from './avatar';

export default {
    title: 'A/Avatar',
    component: AvatarComponent,
    argTypes: {
        children: { control: null },
    },
} as Meta;

const Template: Story<AvatarProps> = (args) => (
    <AvatarComponent {...args}/>
);

export const Avatar = Template.bind({});

Avatar.args = {
    size: 'm',
    children: '@',
};
