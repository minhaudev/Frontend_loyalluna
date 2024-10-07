import { type Meta, type StoryObj } from '@storybook/react';

import { Checkbox } from '.';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      defaultValue: 'primary',
    },
    isSelected: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'This is a checkbox',
  },
};
