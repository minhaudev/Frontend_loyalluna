import React, { type ChangeEvent, type ReactNode } from 'react';
import { Switch as SwitchUI } from '@nextui-org/switch';

interface propsSwitch {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  defaultSelected?: boolean;
  isDisabled?: boolean;
  value: string;
  size?: 'sm' | 'md' | 'lg';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  children?: ReactNode;
  name?: string;
  required?: boolean;
}

export default function Switch({
  onChange,
  defaultSelected,
  isDisabled,
  value,
  size,
  color,
  children,
  name,
  required,
}: propsSwitch) {
  return (
    <SwitchUI
      required={required}
      name={name}
      onChange={onChange}
      defaultSelected={defaultSelected}
      isDisabled={isDisabled}
      value={value}
      size={size}
      color={color}
    >
      {children}
    </SwitchUI>
  );
}
