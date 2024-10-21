import React, { useState, type ChangeEvent } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import Switch from '.';

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      defaultValue: 'primary',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      defaultValue: 'md',
    },
    required: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof Switch>;

// Trường hợp 1: Một Switch đơn lẻ
const SingleSwitchComponent = () => {
  const [value, setValue] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
    console.log(`Switch value: ${e.target.checked}`);
  };

  return (
    <Switch value="switch1" size="md" onChange={handleChange} defaultSelected={value} required>
      <p>Đây là Switch đơn lẻ</p>
    </Switch>
  );
};
export const SingleSwitch: Story = {
  render: () => <SingleSwitchComponent />,
};

// Trường hợp 2: Nhiều Switch
const MultipleSwitchesComponent = () => {
  const [switches, setSwitches] = useState({
    switch1: false,
    switch2: false,
    switch3: false,
  });

  const handleChange = (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setSwitches((prev) => ({
      ...prev,
      [name]: e.target.checked,
    }));
    console.log(`Switch ${name}: ${e.target.checked}`);
  };

  return (
    <div>
      <Switch
        name="switch1"
        value="switch1"
        onChange={handleChange('switch1')}
        defaultSelected={switches.switch1}
      >
        <p>Switch 1</p>
      </Switch>
      <Switch
        name="switch2"
        value="switch2"
        onChange={handleChange('switch2')}
        defaultSelected={switches.switch2}
      >
        <p>Switch 2</p>
      </Switch>
      <Switch
        name="switch3"
        value="switch3"
        onChange={handleChange('switch3')}
        defaultSelected={switches.switch3}
      >
        <p>Switch 3</p>
      </Switch>
    </div>
  );
};
export const MultipleSwitches: Story = {
  render: () => <MultipleSwitchesComponent />,
};

// Trường hợp 3: Switch bị vô hiệu hóa
const DisabledSwitchComponent = () => (
  <Switch value="disabled-switch" isDisabled defaultSelected={true}>
    <p>Switch bị vô hiệu hóa</p>
  </Switch>
);
export const DisabledSwitch: Story = {
  render: () => <DisabledSwitchComponent />,
};
