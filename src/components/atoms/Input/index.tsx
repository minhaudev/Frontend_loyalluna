import React, { useState } from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
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
  rows?: number;
  maxRows?: number;
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
    <div className="relative w-full ">
      <HStack className="gap-1 mb-1">
        {props.label && (
          <>
            <div className="text-[#0F1824] font-medium">{props.label}</div>
            {props.isRequired && <p className="text-red text-lg">*</p>}
          </>
        )}
      </HStack>

      <div
        className={`relative w-full border rounded-md ${props.isError ? 'border-red' : ''} ${isFocused ? 'border-primary' : 'border-gray-200'}`}
      >
        <div className="flex flex-wrap items-center px-2">
          {props?.tags?.map((task, index) => (
            <div key={index} className="flex items-center bg-primary-light p-1 rounded mr-2">
              <span className="text-gray-800">{task}</span>
              <button
                className="ml-1 flex justify-center items-center hover:text-red-700"
                onClick={() => handleDeleteTask(index)}
                aria-label={`Xóa tag ${task}`}
              >
                <FontAwesomeIcon className="text-sm px-1 text-primary text-center" icon={faXmark} />
              </button>
            </div>
          ))}
          {!props?.isNote ? (
            <input
              className={`flex-grow min-w-[120px] ${props.prefix ? 'pl-[30px]' : 'pl-[1px]'} ${
                props.suffix ? 'pr-[30px]' : 'pr-[1px]'
              } ${props.isDisabled ? 'cursor-not-allowed text-gray-400' : 'cursor-text'} ${sizeClass} outline-none border-0 rounded-md text-[#0F1824] ${possition} mr-2 ${props.className}`}
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
              className={`flex-grow min-w-[120px] ${props.prefix ? 'pl-[30px]' : 'pl-[2px]'} ${
                props.suffix ? 'pr-[30px]' : 'pr-[2px]'
              } ${props.isDisabled ? 'cursor-not-allowed text-gray-400' : 'cursor-text'} ${sizeClass} outline-none border-0 rounded-md text-[#0F1824] ${possition} break-words mr-2 ${props.className}`}
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
            className="absolute left-[14px] top-[50%] transform -translate-y-1/2 text-gray-400 cursor-pointer"
          />
        )}
        {props.suffix && (
          <FontAwesomeIcon
            icon={props.suffix}
            className="absolute right-[14px] top-[50%] transform -translate-y-1/2 text-gray-400 cursor-pointer"
          />
        )}
        {props.value && !props.suffix && props.isDeleteContent && (
          <div
            onClick={() => props.setValue?.('')}
            className="absolute right-[14px] top-[50%] transform -translate-y-1/2 text-gray-400 cursor-pointer"
            aria-label="Xóa nội dung"
          >
            <FontAwesomeIcon icon={faCircleXmark} />
          </div>
        )}
      </div>
      {props.isError && <div className="text-red mt-2 ml-1">{props.helperText}</div>}
    </div>
  );
};

export default Input;
