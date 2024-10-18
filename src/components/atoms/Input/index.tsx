import React, { useRef, type ReactNode } from 'react';
import { cn } from '@/shared/utils';
import { twMerge } from 'tailwind-merge';

import { HStack } from '../HStack';

interface InputProps {
  onChange?: (value: string | string[]) => void;
  className?: string;
  position?: 'left' | 'right' | 'center';
  value: string | string[] | number;
  type?: string;
  helperText?: string;
  isRequired?: boolean;
  isError?: boolean;
  label?: ReactNode;
  placeholder?: string;
  isDisabled?: boolean;
  suffix?: ReactNode;
  prefix?: ReactNode;
  isDeleteContent?: boolean;
  tags?: string[] | undefined;
  isNote?: boolean;
  size?: 'sm' | 'md' | 'lg' | '2xlg' | '3xlg';
}

const positionClasses = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
};

const sizeClasses = {
  sm: 'py-1',
  md: 'py-2',
  lg: 'py-3',
  '2xlg': 'h-[120px]',
  '3xlg': 'h-[170px]',
};

const Input: React.FC<InputProps> = (props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const sizeClass = sizeClasses[props.size || 'md'];
  const positionClass = positionClasses[props.position || 'left'];

  return (
    <div className="relative w-full">
      <HStack className="mb-1 gap-1">
        {props.label && (
          <>
            <div
              onClick={() => inputRef.current?.focus()}
              className="cursor-pointer font-medium text-[#0F1824]"
            >
              {props.label}
            </div>
            {props.isRequired && <p className="text-red text-lg">*</p>}
          </>
        )}
      </HStack>

      <div
        className={cn(
          'relative w-full rounded border',
          props.isDisabled || props.isError ? '' : 'hover:border-gray-800',
          props.isError ? 'border-red' : 'focus-within:!border-primary'
        )}
      >
        <div className="flex flex-wrap items-center ">
          {!props.isNote ? (
            <input
              ref={inputRef}
              className={cn(
                'min-w-[120px] grow rounded border-0 px-3 text-[#0F1824] outline-none',
                {
                  'pr-2': props.position === 'right',
                  'pl-[35px]': props.prefix,
                  'pr-[40px]': props.suffix,
                  'cursor-not-allowed text-gray-400': props.isDisabled,
                  'cursor-text': !props.isDisabled,
                },
                sizeClass,
                positionClass,
                props.className
              )}
              placeholder={props.placeholder}
              type={props.type}
              value={props.value}
              aria-invalid={props.isError ? 'true' : 'false'}
              disabled={props.isDisabled}
            />
          ) : (
            <div
              contentEditable={!props.isDisabled}
              tabIndex={0}
              className={twMerge(
                cn(
                  'hover:border-primary min-w-[120px] grow rounded border-0 text-[#0F1824] outline-none hover:border',
                  {
                    'pl-[35px]': props.prefix,
                    'pl-2': !props.prefix,
                    'pr-[30px]': props.suffix,
                    'pr-[2px]': !props.suffix,
                    'pr-2': props.position === 'right',
                    'cursor-not-allowed text-gray-400': props.isDisabled,
                    'cursor-text': !props.isDisabled,
                  },
                  sizeClass,
                  positionClass,
                  props.className
                )
              )}
              onKeyDown={(e) => props.isDisabled && e.preventDefault()}
            >
              {props.value}
            </div>
          )}
        </div>
        {props.prefix && (
          <div className={cn('absolute left-[10px] top-1/2 -translate-y-1/2 text-gray-400')}>
            {props.prefix}
          </div>
        )}
        {props.suffix && (
          <div className={cn('absolute right-[14px] top-1/2 -translate-y-1/2 text-gray-400')}>
            {props.suffix}
          </div>
        )}
      </div>
      {props.helperText && !props.isError && (
        <p className=" ml-2 mt-1 text-[12px] text-black">{props.helperText}</p>
      )}
      {props.isError && <p className=" text-red ml-2 mt-1 text-[12px]">{props.helperText}</p>}
    </div>
  );
};

export default Input;
