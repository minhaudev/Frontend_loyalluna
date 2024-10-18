import React, { useRef, useState, type ReactNode } from 'react';
import { cn } from '@/shared/utils';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { HStack } from '../HStack';

interface InputProps {
  onChange?: (value: string[]) => void;
  className?: string;
  value: string[];
  type?: string;
  helperText?: string;
  isRequired?: boolean;
  isError?: boolean;
  label?: ReactNode;
  placeholder?: string;
  isDisabled?: boolean;
  size?: 'sm' | 'md' | 'lg' | '2xlg' | '3xlg';
}
const sizeClasses = {
  sm: 'py-1',
  md: 'py-2',
  lg: 'py-3',
  '2xlg': 'h-[120px]',
  '3xlg': 'h-[170px]',
};

const InputTag: React.FC<InputProps> = (props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [visibleArray, setVisibleArray] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isForcus, setIsFourcus] = useState(true);

  const sizeClass = sizeClasses[props.size || 'md'];
  const handleOnchange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleDeleteTask = (taskToDelete: string, e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const updatedTags = props.value.filter((task) => task !== taskToDelete);
    setVisibleArray(updatedTags);
    props.onChange?.(updatedTags);
  };

  const currentTags = Array.isArray(props.value) ? props.value : [];

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setIsFourcus(true);
    if (e.key === 'Enter') {
      let trimmedValue = inputValue.trim();

      if (trimmedValue !== '' && !currentTags.includes(trimmedValue)) {
        const updatedTags = [...currentTags, trimmedValue];
        props.onChange?.(updatedTags);
        setInputValue('');
        setVisibleArray(updatedTags);
      }
      e.preventDefault();
    }
  };
  console.log(props.value);

  const handleOnForcus = () => {
    setIsFourcus(true);
    setVisibleArray(props.value);
    inputRef.current?.focus();
  };

  const handleOnBlur = () => {
    setIsFourcus(false);
    const maxVisibleItems = 2;
    if (props.value.length > maxVisibleItems) {
      const visibleItems = props.value.slice(0, maxVisibleItems);
      const hiddenItemsCount = props.value.length - maxVisibleItems;
      setVisibleArray([...visibleItems, `+${hiddenItemsCount}`]);
    } else {
      setVisibleArray(props.value);
    }
  };

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
        className={
          (cn('focus-within:!border-primary relative w-full rounded border '),
          props.isDisabled ? 'border-1' : 'hover:border-gray-800')
        }
      >
        <div className="flex  flex-wrap items-center px-3">
          <div
            onClick={handleOnForcus}
            onMouseDown={(e) => {
              e.preventDefault();
            }}
            className="flex max-h-[9.57143rem] w-full cursor-pointer flex-wrap items-center overflow-y-auto "
          >
            {visibleArray.map((task, index) => (
              <div key={index} className={cn('bg-primary-light p-1')}>
                <div className="border-md flex items-center rounded-2xl  bg-[#D9EDFF] py-[2px]">
                  <span
                    onClick={handleOnForcus}
                    className={cn('  max-w-[100px] truncate   text-gray-800', {
                      'cursor-pointer px-1': task.startsWith('+'),
                    })}
                  >
                    {task}
                  </span>
                  {typeof task !== 'string' || !task.startsWith('+') ? (
                    <button
                      onMouseDown={(e) => {
                        e.preventDefault();
                      }}
                      className={cn(' flex items-center justify-center hover:text-red-700')}
                      onClick={(e) => handleDeleteTask(task, e)}
                      aria-label={`Xóa tag ${task}`}
                    >
                      <FontAwesomeIcon
                        className={cn('text-primary px-1 text-center text-sm')}
                        icon={faXmark}
                      />
                    </button>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
          <input
            ref={inputRef}
            className={cn(
              'block w-full min-w-[120px] grow rounded border-0 text-[#0F1824] outline-none',
              {
                'cursor-not-allowed text-gray-400': props.isDisabled,
                'cursor-text': !props.isDisabled,
                'border border-red': props.isError,
              },
              sizeClass,
              props.className
            )}
            onChange={handleOnchange}
            placeholder={visibleArray.length === 0 || isForcus ? props.placeholder : ''}
            onKeyDown={handleKeyPress}
            onBlur={handleOnBlur}
            onFocus={handleOnForcus}
            type={props.type}
            value={inputValue}
            aria-invalid={props.isError ? 'true' : 'false'}
            disabled={props.isDisabled}
          />
        </div>
      </div>
      {props.helperText && !props.isError && (
        <p className=" ml-2 mt-1 text-[12px] text-black">{props.helperText}</p>
      )}
      {props.isError && <p className=" text-red ml-2 mt-1 text-[12px]">{props.helperText}</p>}
    </div>
  );
};

export default InputTag;
