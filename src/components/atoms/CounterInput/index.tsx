import React from 'react';
import { cn } from '@/shared/utils';

import { HStack } from '../HStack';

interface PropsCounterInput {
  value?: string;
  onChange: (value: string) => void;
  position?: 'left' | 'right' | 'center';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  setValue: (value: string) => void;
}

export default function CounterInput({
  value = '',
  onChange,
  setValue,
  position = 'center',
  size = 'sm',
  className,
}: PropsCounterInput) {
  const formatValue = (num: string) => {
    return num.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const decreaseNumber = () => {
    const currentValue = BigInt(value || '0'); // Chuyển thành BigInt
    const newValue = currentValue > BigInt(0) ? currentValue - BigInt(1) : BigInt(0);
    setValue(newValue.toString()); // Chuyển thành chuỗi để hiển thị
  };

  const increaseNumber = () => {
    const currentValue = BigInt(value || '0');
    const newValue = currentValue + BigInt(1);
    setValue(newValue.toString());
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, '');
    setValue(inputValue);
    onChange(inputValue);
  };

  const positionClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[position];

  const sizeClass = {
    sm: 'h-[20px] text-sm',
    md: 'h-[30px] text-base',
    lg: 'h-[40px] text-lg',
  }[size];

  return (
    <HStack className={`${className}`}>
      <div className={`flex w-full gap-1 ${sizeClass}`}>
        <button
          onClick={decreaseNumber}
          className="flex size-4 items-center justify-center rounded-full bg-[#A8ADB3] text-center text-white"
        >
          -
        </button>

        <input
          className={cn(
            'border-primary flex-1 border-b-[1.5px] focus:outline-none',
            positionClass,
            sizeClass
          )}
          type="text"
          onChange={handleOnChange}
          value={formatValue(value)}
        />
        <button
          onClick={increaseNumber}
          className="flex size-4 items-center justify-center rounded-full bg-[#A8ADB3] text-center text-white"
        >
          +
        </button>
      </div>
    </HStack>
  );
}
