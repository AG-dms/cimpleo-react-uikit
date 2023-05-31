import TextInput from './TextInput';
import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/client-api';
import { BsSearch } from 'react-icons/bs';
const meta = {
  title: 'Inputs/TextInput',
  component: TextInput,
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
    fullWidth: { control: { type: 'boolean' } },
    error: { control: { type: 'boolean' } },
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
} satisfies Meta<typeof TextInput>;
export default meta;

type Story = StoryObj<typeof meta>;

// export const Playground: Story = {
//   render: args => <TextInput {...args} />,
//   args: {
//     variant: 'contain',
//     placeholder: 'Add some text',
//     label: 'Text input label',
//   },
// };

const Template = (args: Story) => {
  const [{ value, onChange }, updateArgs] = useArgs();

  return (
    <TextInput
      {...args}
      // label="Test label"
      // placeholder="Add some text"
      // variant={'contain'}
      value={value}
      onChange={e => {
        updateArgs({ value: e.target.value });
        onChange(e);
      }}
    />
  );
};

const TemplateIcon = (args: Story) => {
  const [{ value, onChange }, updateArgs] = useArgs();

  return (
    <TextInput
      {...args}
      icon={<BsSearch size={25} color="green" />}
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
    variant: 'outline',
    placeholder: 'Add some text',
    label: 'Text input label',
  },
});

export const IconInput = TemplateIcon.bind({
  meta: {
    variant: 'outline',
    placeholder: 'Add some text',
    label: 'Text input label',
    icon: <BsSearch size={23} color="green" />,
  },
});
