import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Button as ButtonComponent, ButtonProps } from './button';

export default {
    title: 'B/Button',
    component: ButtonComponent,
    argTypes: {
        // backgroundColor: { control: 'color' },
        children: { control: null },
    },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
    <ButtonComponent {...args}/>
);

export const Button = Template.bind({});
Button.args = {
    children: 'Click me',
};

// export const Secondary = Template.bind({});
// Secondary.args = {
//     children: 'Button2',
//     type: 'secondary',
// };
//
// export const Large = Template.bind({});
// Large.args = {
//     children: 'Button3',
// };
//
// export const Small = Template.bind({});
// Small.args = {
//     children: 'Button4',
// };

// export const Kekondary: React.VFC = (args) => (
//     <Button
//         size={'l'}
//         {...args}
//     >
//         Kekondary
//     </Button>
// );
