import React, { useState } from 'react';
import { Story, Meta } from '@storybook/react';
import { Toggle as Cmp, ToggleProps } from './toggle';

export default {
    title: 'A/Toggle',
    component: Cmp,
    argTypes: {
        children: { control: null },
    },
} as Meta;

const Template: Story<ToggleProps> = (args) => {
    const [value, setValue] = useState(false);
    const toggleValue = () => setValue(!value);

    return (
        <Cmp
            value={value}
            onClick={toggleValue}
        />
    );
};

export const Toggle = Template.bind({});
