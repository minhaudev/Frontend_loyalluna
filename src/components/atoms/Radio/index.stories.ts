import { type Meta, type StoryObj } from '@storybook/react';

import Radio from './index';

const meta: Meta<typeof Radio> = {
  component: Radio,
  argTypes: {
    isChecked: {
      control: 'boolean',
    },
    handleOnchange: {
      action: 'handleOnchange',
    },
    content: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
  tags: ['autodocs'],
  args: {
    isChecked: false,
    content: 'Theo sản phẩm trong đơn hàng',
    handleOnchange: () => {},
  },
};
