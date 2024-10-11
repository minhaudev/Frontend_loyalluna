import { type Meta, type StoryObj } from '@storybook/react';

import Radio from './Radio/index';

const meta: Meta<typeof Radio> = {
  component: Radio,
  argTypes: {
    value: {
      control: 'text',
    },
    isChecked: {
      control: 'boolean',
    },
    onChange: {
      action: 'handleOnchange',
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
    onChange: () => {},
    children: 'Chọn đơn hàng này?',
  },
};

// <RadioGroup
// label="This is label"
// value={selectedValue}
// onChange={(value) => setSelectedValue(value)}
// >
// <Radio value="1">Option 1</Radio>
// <Radio isChecked value="2">
//   Option 2
// </Radio>
// <Radio value="3">Option 3</Radio>
// </RadioGroup>
