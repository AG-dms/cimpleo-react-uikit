import type { Meta, StoryObj } from '@storybook/react';
import PasswordInput from './PasswordInput';
import { useArgs } from '@storybook/client-api';

const meta = {
  title: 'Inputs/PasswordInput',
  component: PasswordInput,
  tags: ['autodocs'],
  decorators: [
    Story => (
      <div style={{ display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    borderColor: { control: 'color' },
    error: { control: { type: 'boolean' } },
    fullWidth: { control: { type: 'boolean' } },

    helperText: { control: { type: 'text' } },
    label: { control: { type: 'text' } },
    rounded: { control: { type: 'boolean' } },
    disabled: { description: '***set button disabled***', control: { type: 'boolean' } },

    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['outline', 'contain'],
      control: { type: 'radio' },
    },
    value: { control: { type: 'text' } },
  },
} satisfies Meta<typeof PasswordInput>;
export default meta;

type Story = StoryObj<typeof meta>;

const Template = (args: Story) => {
  const [{ value, onChange }, updateArgs] = useArgs();

  return (
    <PasswordInput
      {...args}
      value={value}
      onChange={e => {
        updateArgs({ value: e.target.value });
        onChange(e);
      }}
    />
  );
};

export const Playground = Template.bind({
  meta: {
    variant: 'contain',
    placeholder: 'Password',
    label: 'Password',
  },
});
