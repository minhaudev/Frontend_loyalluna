import React from 'react';
import { faMagnifyingGlass, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Meta, StoryObj } from '@storybook/react';

import Input from './index';

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    suffix: { control: 'object' },
    prefix: { control: 'object' },
    isDeleteContent: { control: 'boolean' },
    type: { control: 'select', options: ['text', 'number'] },
    size: { control: 'select', option: ['sm', 'md', 'lg', '2xlg', '3xlg'] },
    position: { control: 'select', option: ['right', 'left', 'center'] },
    value: { control: 'text' },
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

type Story = StoryObj<typeof Input>;

export const Primary: Story = {
  tags: ['autodocs'],
  args: {
    label: 'Tên Khách hàng',
    isRequired: true,
    type: 'text',
    value: '',
    onChange: (value: string | number | string[]) => console.log(value),
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
    position: 'right',
    placeholder: 'nhập công nợ khách hàng',
    onChange: (value: string | number | string[]) => console.log(value),
  },
};

export const searchInput: Story = {
  tags: ['autodocs'],
  args: {
    isDeleteContent: true,
    prefix: <FontAwesomeIcon icon={faMagnifyingGlass} />,
    value: '',
    placeholder: 'Tìm kiếm theo mã đơn hàng,tên, SĐT khách hàng',
    onChange: (value: string | number | string[]) => console.log(value),
  },
};

export const numberValue: Story = {
  tags: ['autodocs'],
  args: {
    isDeleteContent: true,
    type: 'text',
    size: 'lg',
    position: 'right',
    placeholder: '0',
    onChange: (value: string | number | string[]) => console.log(value),
  },
};

export const note: Story = {
  tags: ['autodocs'],
  args: {
    isNote: true,
    isDeleteContent: true,
    type: 'text',
    label: 'Ghi chú',
    size: '2xlg',
    placeholder: '0',
    onChange: (value: string | number | string[]) => console.log(value),
  },
};

export const pencil: Story = {
  tags: ['autodocs'],
  args: {
    prefix: <FontAwesomeIcon icon={faPencil} />,
    isDeleteContent: true,
    value: '',
    size: 'md',
    placeholder: 'Nhập ghi chú đơn hàng',
    onChange: (value: string | number | string[]) => console.log(value),
  },
};

export const errorInput: Story = {
  tags: ['autodocs'],
  args: {
    isError: true,
    helperText: 'Lỗi rồi nè!',
    value: '',
    size: 'md',
    placeholder: 'Nhập ghi chú đơn hàng',
    onChange: (value: string | number | string[]) => console.log(value),
  },
};

export const helperText: Story = {
  tags: ['autodocs'],
  args: {
    helperText: 'Đoạn này không có lỗi!',
    value: '',
    size: 'md',
    placeholder: 'Nhập ghi chú đơn hàng',
    onChange: (value: string | number | string[]) => console.log(value),
  },
};
