import React, { useState, type ChangeEvent } from 'react';
import { type Meta, type StoryObj } from '@storybook/react';

import Switch, { type propsSwitch } from '.';

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
const SingleSwitchComponent = (args: propsSwitch) => {
  const [value, setValue] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
    console.log(`Switch value: ${e.target.checked}`);
  };

  return (
    <Switch {...args} value="switch1" onChange={handleChange} defaultSelected={value}>
      <p>Đây là Switch đơn lẻ</p>
    </Switch>
  );
};

export const SingleSwitch: Story = {
  render: (args) => <SingleSwitchComponent {...args} />,
};

// Trường hợp 2: Nhiều Switch
const MultipleSwitchesComponent = (args: propsSwitch) => {
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
        size="sm"
        color="default"
        name="switch1"
        onChange={handleChange('switch1')}
        defaultSelected={switches.switch1}
        {...args} // Truyền args vào switch
      >
        <p>Switch 1</p>
      </Switch>
      <Switch
        size="md"
        color="primary"
        name="switch2"
        onChange={handleChange('switch2')}
        defaultSelected={switches.switch2}
        {...args} // Truyền args vào switch
      >
        <p>Switch 2</p>
      </Switch>
      <Switch
        color="warning"
        size="lg"
        name="switch3"
        onChange={handleChange('switch3')}
        defaultSelected={switches.switch3}
        {...args} // Truyền args vào switch
      >
        <p>Switch 3</p>
      </Switch>
    </div>
  );
};

export const MultipleSwitches: Story = {
  render: (args) => <MultipleSwitchesComponent {...args} />,
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
