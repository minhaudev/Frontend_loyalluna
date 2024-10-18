import { type Meta, type StoryObj } from '@storybook/react';

import InputTag from '.';

const meta: Meta<typeof InputTag> = {
  component: InputTag,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text' },
    size: { control: 'select', option: ['sm', 'md', 'lg', '2xlg', '3xlg'] },
    value: { control: 'object' },
    isError: { control: 'boolean' },
    helperText: { control: 'text' },
    isDisabled: { control: 'boolean' },

    label: { control: 'text' },
    placeholder: { control: 'text' },
    isRequired: { control: 'boolean' },
    onChange: { action: 'onChange' },
  },
};
export default meta;
type Story = StoryObj<typeof InputTag>;

export const primary: Story = {
  args: {
    value: Array.from({ length: 41 }, (_, index) => `Tag input value ${index + 1}`),
    placeholder: 'nhập ký tự và nhấn Enter',
  },
};
