import React, { useState } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import InputTag from '.';

const meta: Meta<typeof InputTag> = {
  component: InputTag,
  tags: ['autodocs'],
  argTypes: {
    type: { control: 'text' },
    size: { control: 'select', options: ['sm', 'md', 'lg', '2xlg', '3xlg'] },
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

// Tạo một component để xử lý state
const PrimaryComponent: React.FC = () => {
  const [tags, setTags] = useState(['Tag input value 1', 'Tag input value 2']);

  return <InputTag value={tags} placeholder="nhập ký tự và nhấn Enter" onChange={setTags} />;
};

export const Primary: Story = {
  render: () => <PrimaryComponent />,
};
