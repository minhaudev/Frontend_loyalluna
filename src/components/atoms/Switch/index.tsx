import React, { type ChangeEvent, type ReactNode } from 'react';
import { Switch as SwitchUI } from '@nextui-org/switch';

import './css.css';

export interface propsSwitch {
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

const sizeClasses = {
  sm: '!w-[2.2rem] h-[1rem]',
  md: 'w-[2.5rem] !h-[1rem]',
  lg: 'w-[2.77rem] h-[1rem] ',
};

export default function Switch({
  onChange,
  defaultSelected,
  isDisabled,
  value,
  size = 'md',
  children,
  name,
  required,
  color = 'primary',
}: propsSwitch) {
  const wrapperClass = `overflow-visible p-0 ${sizeClasses[size]}`;

  return (
    <SwitchUI
      classNames={{
        wrapper: wrapperClass,
      }}
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
