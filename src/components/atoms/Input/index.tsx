import React from 'react';

interface InputProps {
  value: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ value, type = 'text' }) => {
  return (
    <div>
      <input type={type} value={value} />
    </div>
  );
};

export default Input;
