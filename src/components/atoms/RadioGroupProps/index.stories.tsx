import { type Meta, type StoryObj } from '@storybook/react';

import RadioGroup from '.';
import Radio from './Radio/index';

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    value: {
      control: 'text',
    },
    isChecked: {
      control: 'boolean',
    },
    onChange: {
      action: 'onchange',
    },
    children: {
      control: {
        type: 'object',
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

export const Primary: Story = {
  tags: ['autodocs'],
  args: {
    isChecked: false,
    value: '1',
    children: 'Chọn đơn hàng này?',
    onChange: () => {},
  },
};

export const RadioGroupExample: Story = {
  render: () => (
    <RadioGroup
      onChange={(value) => console.log('Selected value:', value)}
      label="This is label"
      value="2"
    >
      <Radio value="1">Option 1</Radio>
      <Radio value="2">Option 2</Radio>
      <Radio value="3">Option 3</Radio>
    </RadioGroup>
  ),
};
