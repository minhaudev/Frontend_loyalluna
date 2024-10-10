import { type Meta, type StoryObj } from '@storybook/react';

import Radio from './index';

const meta: Meta<typeof Radio> = {
  component: Radio,
  argTypes: {
    isChecked: {
      control: 'boolean',
      description: 'Trạng thái của nút radio, xác định xem nó có được chọn hay không.',
    },
    handleOnchange: {
      action: 'handleOnchange',
      description: 'Hàm này được gọi khi trạng thái của nút radio thay đổi.',
    },
    content: {
      control: 'text',
      description: 'Nội dung hiển thị bên cạnh nút radio.',
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
  },
};
