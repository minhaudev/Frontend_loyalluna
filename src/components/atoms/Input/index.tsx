import React, { useState } from 'react';
import type { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faCircleXmark, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HStack } from '../HStack';

interface InputProps {
  handleOnchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  positionValue?: 'left' | 'right' | 'center';
  value: string | number;
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
  isInputTag?: boolean;
  tags?: string[] | undefined;
  isNote?: boolean;
  variantsizes?: 'small' | 'medium' | 'large' | 'xlarge' | '2xlarge' | '3xlarge';
  setTags?: (tags: string[]) => void | [];
  setValue?: (value: string) => void;
}
const positionValue = {
  left: 'text-left',
  right: 'text-right',
  center: 'text-center',
};
const variantsizes = {
  small: ' py-1',
  medium: ' py-2',
  large: ' py-3',
  xlarge: 'h-[120px]',
  '2xlarge': 'h-[170px]',
  '3xlarge': 'h-[200px]',
};
const Input: React.FC<InputProps> = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const sizeClass = variantsizes[props?.variantsizes || 'medium'];
  const possition = positionValue[props?.positionValue || 'left'];
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const value = props.value as string;
    if (e.key === 'Enter' && value.trim() !== '' && props.isInputTag) {
      props?.setTags?.([...(props?.tags ?? []), value.trim()]);
      props?.setValue?.('');
    }
  };
  const handleDeleteTask = (index: number) => {
    const updatedTasks = props?.tags?.filter((_, i) => i !== index) ?? [];
    props?.setTags?.(updatedTasks);
  };
  return (
    <div className="relative w-full">
      <HStack className="mb-1 gap-1">
        {props.label && (
          <>
            <div className="font-medium text-[#0F1824]">{props.label}</div>
            {props.isRequired && <p className="text-lg text-red">*</p>}
          </>
        )}
      </HStack>

      <div
        className={`relative ${props?.isInputTag && 'px-2'} w-full rounded-md border ${props.isError ? 'border-red' : ''} ${isFocused ? 'border-primary' : 'border-gray-200'}`}
      >
        <div className="flex flex-wrap items-center">
          {props?.tags?.map((task, index) => (
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
                <FontAwesomeIcon className="px-1 text-center text-sm text-primary" icon={faXmark} />
              </button>
            </div>
          ))}
          {!props?.isNote ? (
            <input
              className={`min-w-[120px] grow ${props.prefix ? 'pl-[35px]' : 'pl-[4px]'} ${props.suffix ? 'pr-[30px]' : 'pr-[2px]'} ${props?.positionValue === 'right' ? 'pr-2' : ''} ${props.isDisabled ? 'cursor-not-allowed text-gray-400' : 'cursor-text'} ${sizeClass} ${possition} rounded-md border-0 text-[#0F1824] outline-none ${props.className}`}
              placeholder={props.placeholder}
              onChange={props.handleOnchange}
              onKeyPress={handleKeyPress}
              type={props.type}
              value={props.value}
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
              onInput={props.handleOnchange}
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
            onClick={() => props.setValue?.('')}
            className="absolute right-[14px] top-[1/2] -translate-y-1/2 cursor-pointer text-gray-400"
            aria-label="Xóa nội dung"
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
        )}
      </div>
      {props.isError && <div className="ml-1 mt-2 text-red">{props.helperText}</div>}
    </div>
  );
};

export default Input;
