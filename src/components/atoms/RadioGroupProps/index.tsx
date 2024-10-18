import React, { type ReactNode } from 'react';

interface RadioGroupProps {
  label?: ReactNode;
  value?: string;
  onChange: (value: string) => void;
  children?: React.ReactNode[];
}

const RadioGroup = ({ label, value, onChange, children }: RadioGroupProps) => {
  const handleChange = (newValue: string) => {
    onChange(newValue);
  };

  return (
    <div>
      <h3 className="text-[16px] font-semibold  text-black">{label}</h3>
      <div className="radio-group">
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              isChecked: child.props.value === value,
              onChange: () => handleChange(child.props.value),
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};

export default RadioGroup;
