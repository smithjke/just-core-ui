import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Gapper as Cmp, GapperProps } from './gapper';
import { ThemeProvider } from '../theme-provider';

export default {
    title: 'Elements/Gapper',
    component: Cmp,
    argTypes: {
        children: { control: null },
    },
} as Meta;

const Template: Story<GapperProps> = (args) => (
    <ThemeProvider>
        <Cmp {...args}/>
    </ThemeProvider>
);

export const Gapper = Template.bind({});

Gapper.args = {
    step: 'm',
    children: [
        <React.Fragment key={0}>
            Hello
        </React.Fragment>,
        <React.Fragment key={1}>
            World
        </React.Fragment>,
        <React.Fragment key={2}>
            Lol
        </React.Fragment>
    ],
};
