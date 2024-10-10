import { faMagnifyingGlass, faPencil } from '@fortawesome/free-solid-svg-icons';
import type { Meta, StoryObj } from '@storybook/react';

import Input from './index';

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    tags: { control: 'object' },
    setTags: (newTags: any) => console.log(newTags),
    suffix: { control: 'object' },
    prefix: { control: 'object' },
    isDeleteContent: { control: 'boolean' },
    type: { control: 'select', options: ['text', 'number', 'password'] },
    value: { control: 'text' },
    isError: { control: 'boolean' },
    helperText: { control: 'text' },
    isDisabled: { control: 'boolean' },
    isInputTag: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    isRequired: { control: 'boolean' },
    handleOnchange: { action: 'handleOnchange' },
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
    handleOnchange: (e) => console.log(e.target.value),
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
    handleOnchange: (e) => console.log(e.target.value),
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
    handleOnchange: (e) => console.log(e.target.value),
  },
};

export const numberValue: Story = {
  tags: ['autodocs'],
  args: {
    isDeleteContent: true,
    type: 'text',
    variantsizes: 'large',
    positionValue: 'right',
    placeholder: '0',
    handleOnchange: (e) => console.log(e.target.value),
  },
};

export const note: Story = {
  tags: ['autodocs'],
  args: {
    isNote: true,
    isDeleteContent: true,
    type: 'text',
    label: 'Ghi chú',
    variantsizes: 'xlarge',
    placeholder: '0',
    handleOnchange: (e) => console.log(e.target.value),
  },
};

export const tagInput: Story = {
  tags: ['autodocs'],
  args: {
    tags: ['tag1', 'tag2'],
    setTags: (newTags) => console.log(newTags),
    isDeleteContent: true,
    isInputTag: true,
    type: 'text',
    label: 'Ghi chú',
    value: '',
    variantsizes: 'medium',
    placeholder: 'Gõ kí tự và nhấn enter để thêm thuộc tính',
    handleOnchange: (e) => console.log(e.target.value),
  },
};

export const pencil: Story = {
  tags: ['autodocs'],
  args: {
    prefix: faPencil,
    isDeleteContent: true,
    value: '',
    variantsizes: 'medium',
    placeholder: 'Nhập ghi chú đơn hàng',
    handleOnchange: (e) => console.log(e.target.value),
  },
};

export const errorInput: Story = {
  tags: ['autodocs'],
  args: {
    isError: true,
    helperText: 'Lỗi rồi nè!',
    value: '',
    variantsizes: 'medium',
    placeholder: 'Nhập ghi chú đơn hàng',
    handleOnchange: (e) => console.log(e.target.value),
  },
};
