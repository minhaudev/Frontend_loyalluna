import React, { useState } from 'react'; // Đảm bảo import React
import { Radio } from '@nextui-org/react';
import { type Meta, type StoryObj } from '@storybook/react';

import RadioGroupComponent from '.';

const meta: Meta<typeof RadioGroupComponent> = {
  component: RadioGroupComponent,
  tags: ['autodocs'],
  argTypes: {
    isReadOnly: { control: 'boolean' },
    isRequired: { control: 'boolean' },
    label: { control: 'text' },
    isDisable: { control: 'boolean' },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger'],
      defaultValue: 'primary',
    },
    onChange: { action: 'changed' },
    size: { control: 'select', options: ['sm', 'md', 'lg'], defaultValue: 'md' },
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroupComponent>;

const RadioGroupStory = () => {
  const [selectedValue, setSelectedValue] = useState<string>('buenos-aires');

  return (
    <RadioGroupComponent
      label="Lựa chọn của bạn"
      color="primary"
      isRequired={true}
      value={selectedValue}
      isDisable={false}
      onChange={(value) => {
        setSelectedValue(value);
        console.log(`Selected value: ${value}`);
      }}
    >
      <Radio key="buenos-aires" value="buenos-aires">
        Buenos Aires
      </Radio>
      <Radio key="buenos" value="buenos">
        Buenos
      </Radio>
      <Radio key="aires" value="aires">
        Aires
      </Radio>
    </RadioGroupComponent>
  );
};

const RadioAlone = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  return (
    <RadioGroupComponent
      label="Single Radio"
      color="warning"
      value={selectedValue}
      isDisable={false}
      onChange={(value) => {
        setSelectedValue(value);
        console.log(`Selected value: ${value}`);
      }}
    >
      <Radio key="buenos-aires" value="buenos-aires">
        Buenos Aires
      </Radio>
    </RadioGroupComponent>
  );
};
const RadioDisable = () => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  return (
    <RadioGroupComponent
      isDisable={true}
      label="Single Radio"
      color="warning"
      value={selectedValue}
      onChange={(value) => {
        setSelectedValue(value);
        console.log(`Selected value: ${value}`);
      }}
    >
      <Radio key="buenos-aires" value="buenos-aires">
        Buenos Aires
      </Radio>
    </RadioGroupComponent>
  );
};

// Story cho RadioGroupStory
export const Primary: Story = {
  render: () => <RadioGroupStory />,
};

// Story cho RadioAlone
export const Single: Story = {
  render: () => <RadioAlone />,
};

export const disable: Story = {
  render: () => <RadioDisable />,
};
