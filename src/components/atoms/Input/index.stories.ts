import { faMagnifyingGlass, faPencil } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';

import Input from './index';

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    tags: { control: 'object' },
    suffix: { control: 'object' },
    prefix: { control: 'object' },
    isDeleteContent: { control: 'boolean' },
    type: { control: 'select', options: ['text', 'number', 'password'] },
    value: { control: 'text' },
    isError: { control: 'boolean' },
    helperText: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isTags: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    isRequired: { control: 'boolean' },
    onChange: { action: 'onChange' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  tags: ['autodocs'],
  args: {
    label: 'Tên Khách hàng',
    isRequired: true,
    type: 'text',
    value: '',
    onChange: (value: string | string[]) => console.log(value),
  },
};

export const DisabledInput: Story = {
  tags: ['autodocs'],
  args: {
    type: 'text',
    value: 'Chi nhánh mặc định',
    isDisabled: true,
  },
};

export const textRight: Story = {
  tags: ['autodocs'],
  args: {
    label: 'Công nợ',
    type: 'text',
    positionValue: 'right',
    placeholder: 'nhập công nợ khách hàng',
    onChange: (value: string | string[]) => console.log(value),
  },
};

export const searchInput: Story = {
  tags: ['autodocs'],
  args: {
    isDeleteContent: true,
    prefix: faMagnifyingGlass,
    type: 'text',
    value: '',
    placeholder: 'Tìm kiếm theo mã đơn hàng,tên, SĐT khách hàng',
    onChange: (value: string | string[]) => console.log(value),
  },
};

export const numberValue: Story = {
  tags: ['autodocs'],
  args: {
    isDeleteContent: true,
    type: 'text',
    size: 'large',
    positionValue: 'right',
    placeholder: '0',
    onChange: (value: string | string[]) => console.log(value),
  },
};

export const note: Story = {
  tags: ['autodocs'],
  args: {
    isNote: true,
    isDeleteContent: true,
    type: 'text',
    label: 'Ghi chú',
    size: 'xlarge',
    placeholder: '0',
    onChange: (value: string | string[]) => console.log(value),
  },
};

export const tagInput: Story = {
  tags: ['autodocs'],
  args: {
    tags: ['tag1', 'tag2'],
    isDeleteContent: true,
    isTags: true,
    type: 'text',
    label: 'Ghi chú',
    value: '',
    size: 'medium',
    placeholder: 'Gõ kí tự và nhấn enter để thêm thuộc tính',
    onChange: (value: string | string[]) => console.log(value),
  },
};

export const pencil: Story = {
  tags: ['autodocs'],
  args: {
    prefix: faPencil,
    isDeleteContent: true,
    value: '',
    size: 'medium',
    placeholder: 'Nhập ghi chú đơn hàng',
    onChange: (value: string | string[]) => console.log(value),
  },
};

export const errorInput: Story = {
  tags: ['autodocs'],
  args: {
    isError: true,
    helperText: 'Lỗi rồi nè!',
    value: '',
    size: 'medium',
    placeholder: 'Nhập ghi chú đơn hàng',
    onChange: (value: string | string[]) => console.log(value),
  },
};
