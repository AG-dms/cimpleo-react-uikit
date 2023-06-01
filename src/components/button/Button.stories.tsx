// import React from 'react'
// import Button from './Button'

// export default {
//   title: 'Button',
//   component: Button
// }
// export const Primary = () => <Button variant='primary'>Primary</Button>
// export const Secondary = () => <Button variant='secondary'>Secondary</Button>
// export const Success = () => <Button variant='success'>Success</Button>
// export const Danger = () => <Button variant='danger'>Danger</Button>
// export const Disabled = () => <Button disabled={true} >Disabled</Button>
import type { Meta, StoryObj } from '@storybook/react';

import React from 'react';
import Button from './Button';
import { IoAddCircleSharp } from 'react-icons/io5';

const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'success', 'danger'],
      control: { type: 'radio' },
    },
    type: {
      options: ['text', 'outline', 'fit'],
      control: { type: 'radio' },
    },
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    rounded: { description: '***Round border***', control: { type: 'boolean' } },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    fullWidth: { control: { type: 'radio' }, options: [true, false] },
    textTransform: { control: { type: 'radio' }, options: ['uppercase', 'lowercase', 'none'] },
    startIcon: {control: {type: null}},
    endIcon: {control: {type: null}},

    disabled: { description: '***set button disabled***', control: { type: 'boolean' } },
    loader: { control: { type: 'boolean' } },
    onClick: {
      argTypesRegex: '^on.*',
      
    },
  },
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  render: args => <Button {...args} />,
  args: {
    variant: 'primary',
    title: 'button',
    disabled: true
  },
};

export const IconButtonStart: Story = {
  render: args => <Button onClick={() => console.log('test')} {...args} />,
  args: {
    variant: 'primary',
    title: 'button',
    startIcon: <IoAddCircleSharp style={{ marginRight: 8 }} size={25} color="#fff" />,
  },
};

export const IconButtonEnd: Story = {
  render: args => <Button {...args} />,
  args: {
    variant: 'primary',
    title: 'button',
    endIcon: <IoAddCircleSharp style={{ marginLeft: 8 }} size={25} color="#fff" />,
  },
};
