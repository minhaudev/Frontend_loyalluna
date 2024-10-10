import React, { useState } from 'react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HStack } from '../HStack';

interface InputProps {
  onChange?: (value: string | string[]) => void;
  className?: string;
  positionValue?: 'left' | 'right' | 'center';
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
  size?: 'small' | 'medium' | 'large' | 'xlarge' | '2xlarge' | '3xlarge';
  isTags?: boolean;
}
const positionValue = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
};
const size = {
  small: ' py-1',
  medium: ' py-2',
  large: ' py-3',
  xlarge: 'h-[120px]',
  '2xlarge': 'h-[170px]',
  '3xlarge': 'h-[200px]',
};
const Input: React.FC<InputProps> = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const sizeClass = size[props?.size || 'medium'];
  const possition = positionValue[props?.positionValue || 'left'];

  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (props.isTags) {
      setInputValue(e.target.value);
    } else {
      props?.onChange?.(e.target.value);
    }
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && props.isTags) {
      if (inputValue.trim() !== '') {
        const currentTags = Array.isArray(props.value) ? props.value : [];
        props?.onChange?.([...currentTags, inputValue.trim()]);
        setInputValue('');
      }
      e.preventDefault();
    }
  };

  const handleDeleteTask = (index: number) => {
    if (!props?.isTags || !Array.isArray(props.value)) return;
    const updatedTags = props.value.filter((_, i) => i !== index);
    props?.onChange?.(updatedTags);
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
        className={`relative ${props?.isTags && 'px-2'} w-full rounded-md border ${props.isError ? 'border-red' : ''} ${isFocused ? 'border-primary' : 'border-gray-200'}`}
      >
        <div className="flex flex-wrap items-center">
          {props?.isTags &&
            (props?.value as string[])?.map((task, index) => (
              <div
                key={index}
                className="bg-primary-light mr-[6px] flex items-center rounded border bg-gray-100 p-1"
              >
                <span className="text-gray-800">{task}</span>
                <button
                  className="hover:text-red-700·ml-1·flex·items-center·justify-center"
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
          {!props?.isNote ? (
            <input
              className={`min-w-[120px] grow ${props.prefix ? 'pl-[35px]' : 'pl-[4px]'} ${props.suffix ? 'pr-[30px]' : 'pr-[2px]'} ${props?.positionValue === 'right' ? 'pr-2' : ''} ${props.isDisabled ? 'cursor-not-allowed text-gray-400' : 'cursor-text'} ${sizeClass} ${possition} rounded-md border-0 text-[#0F1824] outline-none ${props.className}`}
              placeholder={props.placeholder}
              onChange={handleOnchange}
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
              className={`min-w-[120px] grow ${props.prefix ? 'pl-[35px]' : 'pl-[4px]'} ${props.suffix ? 'pr-[30px]' : 'pr-[2px]'} ${props?.positionValue === 'right' ? 'pr-2' : ''} ${props.isDisabled ? 'cursor-not-allowed text-gray-400' : 'cursor-text'} ${sizeClass} ${possition} rounded-md border-0 text-[#0F1824] outline-none ${props.className}`}
              onInput={handleOnchange}
              onFocus={() => setIsFocused(props?.isDisabled ? false : true)}
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
      {props.isError && <div className="text-red ml-1 mt-2">{props.helperText}</div>}
    </div>
  );
};

export default Input;
