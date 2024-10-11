import React, { useState } from 'react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { twMerge } from 'tailwind-merge'; // Import twMerge

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
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
  suffix?: IconProp;
  prefix?: IconProp;
  isDeleteContent?: boolean;
  tags?: string[] | undefined;
  isNote?: boolean;
  size?: 'sm' | 'md' | 'lg' | '2xlg' | '3xlg';
  isTags?: boolean;
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
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const sizeClass = sizeClasses[props.size || 'md'];
  const positionClass = positionClasses[props.position || 'left'];

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.isTags) {
      setInputValue(e.target.value);
    } else {
      props.onChange?.(e.target.value);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && props.isTags) {
      if (inputValue.trim() !== '') {
        const currentTags = Array.isArray(props.value) ? props.value : [];
        props.onChange?.([...currentTags, inputValue.trim()]);
        setInputValue('');
      }
      e.preventDefault();
    }
  };

  const handleDeleteTask = (index: number) => {
    if (!props.isTags || !Array.isArray(props.value)) return;
    const updatedTags = props.value.filter((_, i) => i !== index);
    props.onChange?.(updatedTags);
  };

  return (
    <div className="relative w-full">
      <HStack className="mb-1 gap-1">
        {props.label && (
          <>
            <div className="font-medium text-[#0F1824]">{props.label}</div>
            {props.isRequired && <p className="text-red text-lg">*</p>}
          </>
        )}
      </HStack>

      <div
        className={twMerge(
          `relative ${props.isTags ? 'px-1' : ''} w-full rounded-md border ${props.isError ? 'border-red' : ''} ${isFocused ? 'border-primary' : 'border-gray-200'}`
        )}
      >
        <div className="flex flex-wrap items-center">
          {props.isTags &&
            Array.isArray(props.value) &&
            props.value.map((task, index) => (
              <div
                key={index}
                className="bg-primary-light mr-[6px] flex items-center rounded border bg-gray-100 p-1"
              >
                <span className="text-gray-800">{task}</span>
                <button
                  className="ml-1 flex items-center justify-center hover:text-red-700"
                  onClick={() => handleDeleteTask(index)}
                  aria-label={`Xóa tag ${task}`}
                >
                  <FontAwesomeIcon
                    className="text-primary px-1 text-center text-sm"
                    icon={faXmark}
                  />
                </button>
              </div>
            ))}
          {!props.isNote ? (
            <input
              className={twMerge(
                `min-w-[120px] grow ${props.prefix ? 'pl-[35px]' : 'pl-2'} ${props.suffix ? 'pr-[30px]' : 'pr-[2px]'} ${props.position === 'right' ? 'pr-2' : ''} ${props.isDisabled ? 'cursor-not-allowed text-gray-400' : 'cursor-text'} ${sizeClass} ${positionClass} rounded-md border-0 text-[#0F1824] outline-none ${props.className}`
              )}
              placeholder={props.placeholder}
              onChange={handleOnChange}
              onKeyPress={handleKeyPress}
              type={props.type}
              value={props.isTags ? inputValue : props.value}
              aria-invalid={props.isError ? 'true' : 'false'}
              disabled={props.isDisabled}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          ) : (
            <div
              contentEditable={!props.isDisabled}
              tabIndex={0}
              className={twMerge(
                `min-w-[120px] grow ${props.prefix ? 'pl-[35px]' : 'pl-2'} ${props.suffix ? 'pr-[30px]' : 'pr-[2px]'} ${props.position === 'right' ? 'pr-2' : ''} ${props.isDisabled ? 'cursor-not-allowed text-gray-400' : 'cursor-text'} ${sizeClass} ${positionClass} rounded-md border-0 text-[#0F1824] outline-none ${props.className}`
              )}
              onInput={handleOnChange}
              onFocus={() => setIsFocused(!props.isDisabled)}
              onBlur={() => setIsFocused(false)}
              onKeyDown={(e) => props.isDisabled && e.preventDefault()}
            >
              {props.value}
            </div>
          )}
        </div>
        {props.prefix && (
          <FontAwesomeIcon
            icon={props.prefix}
            className="absolute left-[10px] top-1/2 -translate-y-1/2 cursor-pointer text-gray-400"
          />
        )}
        {props.suffix && (
          <FontAwesomeIcon
            icon={props.suffix}
            className="absolute right-[14px] top-[1/2] -translate-y-1/2 cursor-pointer text-gray-400"
          />
        )}
        {props.value && !props.suffix && props.isDeleteContent && (
          <div
            onClick={() => props.onChange?.('')}
            className="absolute right-[14px] top-[1/2] -translate-y-1/2 cursor-pointer text-gray-400"
            aria-label="Xóa nội dung"
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
        )}
      </div>
      {props.isError ? (
        <div className="text-red ml-2 mt-[2px]">{props.helperText}</div>
      ) : (
        <div className="ml-2 mt-[2px] text-black">{props.helperText}</div>
      )}
    </div>
  );
};

export default Input;
