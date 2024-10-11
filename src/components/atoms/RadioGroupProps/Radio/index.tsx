import React from 'react';

interface RadioProps {
  value?: string;
  isChecked?: boolean;
  onChange?: () => void;
  children?: React.ReactNode;
}

const Radio = ({ value, isChecked, onChange, children }: RadioProps) => {
  return (
    <label className="flex items-center">
      <input type="radio" value={value} checked={isChecked} onChange={onChange} className="mr-2" />
      {children}
    </label>
  );
};

export default Radio;
