import React, { useState } from 'react';
import { faMagnifyingGlass, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import type { Meta, StoryFn } from '@storybook/react';

import Input from '.';

const meta: Meta<typeof Input> = {
  component: Input,
  argTypes: {
    suffix: { control: 'object' },
    prefix: { control: 'object' },
    isDeleteContent: { control: 'boolean' },
    type: { control: 'select', options: ['text', 'number'] },
    size: { control: 'select', options: ['sm', 'md', 'lg', '2xlg', '3xlg'] },
    position: { control: 'select', options: ['right', 'left', 'center'] },
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

const PrimaryComponent: StoryFn = () => {
  const [value, setValue] = useState('');
  return (
    <Input
      label="Tên Khách hàng"
      isRequired
      type="text"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
    />
  );
};

export const Primary = PrimaryComponent.bind({});

const DisabledInputComponent: StoryFn = () => {
  const [value] = useState('Chi nhánh mặc định');
  return <Input type="text" value={value} isDisabled />;
};

export const DisabledInput = DisabledInputComponent.bind({});

const TextRightComponent: StoryFn = () => {
  const [value, setValue] = useState('');
  return (
    <Input
      label="Công nợ"
      type="text"
      position="right"
      placeholder="nhập công nợ khách hàng"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
    />
  );
};

export const TextRight = TextRightComponent.bind({});

const SearchInputComponent: StoryFn = () => {
  const [value, setValue] = useState('');
  return (
    <Input
      isDeleteContent
      prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />}
      value={value}
      placeholder="Tìm kiếm theo mã đơn hàng, tên, SĐT khách hàng"
      onChange={(e: any) => setValue(e.target.value)}
    />
  );
};

export const SearchInput = SearchInputComponent.bind({});

const NumberValueComponent: StoryFn = () => {
  const [value, setValue] = useState('');
  return (
    <Input
      isDeleteContent
      type="text"
      size="lg"
      position="right"
      placeholder="0"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
    />
  );
};

export const NumberValue = NumberValueComponent.bind({});

const NoteComponent: StoryFn = () => {
  const [value, setValue] = useState('');
  return (
    <Input
      isNote
      isDeleteContent
      type="text"
      label="Ghi chú"
      size="2xlg"
      placeholder="0"
      value={value}
      onChange={(e: any) => setValue(e.target.value)}
    />
  );
};

export const Note = NoteComponent.bind({});

const PencilComponent: StoryFn = () => {
  const [value, setValue] = useState('');
  return (
    <Input
      prefix={<FontAwesomeIcon icon={faPencil} />}
      isDeleteContent
      value={value}
      size="md"
      placeholder="Nhập ghi chú đơn hàng"
      onChange={(e: any) => setValue(e.target.value)}
    />
  );
};

export const Pencil = PencilComponent.bind({});

const ErrorInputComponent: StoryFn = () => {
  const [value, setValue] = useState('');
  return (
    <Input
      isError
      helperText="Lỗi rồi nè!"
      value={value}
      size="md"
      placeholder="Nhập ghi chú đơn hàng"
      onChange={(e: any) => setValue(e.target.value)}
    />
  );
};

export const ErrorInput = ErrorInputComponent.bind({});

const HelperTextComponent: StoryFn = () => {
  const [value, setValue] = useState('');
  return (
    <Input
      helperText="Đoạn này không có lỗi!"
      value={value}
      size="md"
      placeholder="Nhập ghi chú đơn hàng"
      onChange={(e: any) => setValue(e.target.value)}
    />
  );
};

export const HelperText = HelperTextComponent.bind({});
