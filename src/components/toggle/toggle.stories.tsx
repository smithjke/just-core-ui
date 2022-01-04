import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Toggle as Cmp, ToggleProps } from './toggle';
import { ThemeProvider } from '../theme-provider';

export default {
    title: 'Atoms/Toggle',
    component: Cmp,
    argTypes: {
        children: { control: null },
    },
} as Meta;

const Template: Story<ToggleProps> = (args) => {
    const [value, setValue] = useState(false);

    const toggleValue = () => setValue(!value);

    return (
        <ThemeProvider>
            <Cmp
                value={value}
                onClick={toggleValue}
            />
        </ThemeProvider>
    );
};

export const Toggle = Template.bind({});
