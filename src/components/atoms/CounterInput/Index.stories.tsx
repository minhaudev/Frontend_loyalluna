import React, { useState } from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import CounterInput from './index';

const meta: Meta<typeof CounterInput> = {
  component: CounterInput,
  title: 'Components/CounterInput',
  argTypes: {
    value: { control: 'number', defaultValue: 0 },
    position: {
      control: 'select',
      options: ['left', 'center', 'right'],
      defaultValue: 'center',
      description: 'Set text alignment for input',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      defaultValue: 'sm',
      description: 'Set size for input and buttons',
    },
    className: { control: 'text', description: 'Additional classes for the component' },
    setValue: { action: 'setValue', table: { disable: true } },
  },
};

export default meta;

const DefaultComponent: StoryFn = () => {
  const [value, setValue] = useState(0);
  return <CounterInput value={value} setValue={setValue} />;
};
export const Default = DefaultComponent.bind({});

const LargeComponent: StoryFn = () => {
  const [value, setValue] = useState(0);
  return <CounterInput value={value} setValue={setValue} size="lg" />;
};
export const Large = LargeComponent.bind({});

const SmallLeftComponent: StoryFn = () => {
  const [value, setValue] = useState(0);
  return <CounterInput value={value} setValue={setValue} size="sm" position="left" />;
};
export const SmallLeft = SmallLeftComponent.bind({});

const CustomClassComponent: StoryFn = () => {
  const [value, setValue] = useState(0);
  return (
    <CounterInput
      value={value}
      setValue={setValue}
      size="md"
      className="rounded-md bg-gray-100 p-2"
    />
  );
};
export const CustomClass = CustomClassComponent.bind({});

const InitialValueComponent: StoryFn = () => {
  const [value, setValue] = useState(10);
  return <CounterInput value={value} setValue={setValue} />;
};
export const InitialValue = InitialValueComponent.bind({});
