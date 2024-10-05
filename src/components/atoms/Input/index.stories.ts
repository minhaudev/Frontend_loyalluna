import { type Meta, type StoryObj } from '@storybook/react';

import Input from './index';

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    type: { control: 'select', options: ['text', 'number', 'password'] },
    value: { control: 'text' },
    // Các props khác nếu cần
    // error: { control: 'boolean' },
    // helperText: { control: 'text' },
    // isDisabled: { control: 'boolean' },
    // isMultiline: { control: 'boolean' },
    // rows: { control: 'number' },
    // maxRows: { control: 'number' },
    // label: { control: 'text' },
    // placeholder: { control: 'text' },
    // asterisk: { control: 'boolean' }
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Primary Story
export const Primary: Story = {
  args: {
    type: 'text',
    value: '',
  },
};
