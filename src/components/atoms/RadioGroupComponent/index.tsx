import React, { type ReactNode } from 'react';
import { RadioGroup as NextuiRadioGroup } from '@nextui-org/react';

interface RadioGroupProps {
  label?: ReactNode;
  value?: string;
  isDisable?: boolean;
  onChange?: ((value: string) => void) | undefined;
  children: ReactNode | ReactNode[];
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isReadOnly?: boolean;
  isRequired?: boolean;
}

const RadioGroupComponent = ({
  label,
  isDisable,
  color,
  size,
  value,
  onChange,
  children,
  isReadOnly,
  isRequired,
}: RadioGroupProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };
  return (
    <NextuiRadioGroup
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      isDisabled={isDisable}
      color={color}
      size={size}
      label={label}
      value={value}
      onChange={handleOnChange}
    >
      {children}
    </NextuiRadioGroup>
  );
};

export default RadioGroupComponent;
