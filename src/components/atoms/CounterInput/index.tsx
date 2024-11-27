import React from 'react';
import { cn } from '@/shared/utils';

import { HStack } from '../HStack';

interface PropsCounterInput {
  value?: number;
  setValue: (value: number) => void;
  position?: 'left' | 'right' | 'center';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function CounterInput({
  value = 0,
  setValue,
  position = 'center',
  size = 'sm',
  className,
}: PropsCounterInput) {
  const decreaseNumber = () => {
    if (value > 0) setValue(value - 1);
  };

  const increaseNumber = () => {
    setValue(value + 1);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.replace(/\D/g, '').slice(0, 15);
    setValue(Number(inputValue || 0));
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
    <HStack className={cn('w-full gap-1', className)}>
      <button
        onClick={decreaseNumber}
        className="flex size-4 items-center justify-center rounded-full bg-[#A8ADB3] text-white"
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
        value={value}
      />

      <button
        onClick={increaseNumber}
        className="flex size-4 items-center justify-center rounded-full bg-[#A8ADB3] text-white"
      >
        +
      </button>
    </HStack>
  );
}
