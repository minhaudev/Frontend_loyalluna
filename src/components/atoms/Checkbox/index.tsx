'use client';

import { forwardRef } from 'react';
import { cn } from '@/shared/utils';
import { Chip, useCheckbox, VisuallyHidden, type CheckboxProps } from '@nextui-org/react';
import { tv } from 'tailwind-variants';

import { Icons } from '../Icons';

const checkbox = tv({
  slots: {
    base: 'justify-center rounded border-2 bg-transparent',
    content: 'text-default-500',
    label: '!flex gap-2',
  },
  variants: {
    size: {
      sm: {
        base: '!size-4 min-w-4',
        content: 'text-sm',
      },
      md: {
        base: '!size-6 min-w-6',
        content: 'text-medium',
      },
      lg: {
        base: '!size-8 min-w-8',
        content: '!text-xl',
      },
    },
    isSelected: {
      true: {
        base: 'border-primary',
        content: 'text-primary-foreground',
      },
    },
    isFocusVisible: {
      true: {
        base: 'ring-focus ring-offset-background outline-none ring-2 ring-offset-2',
      },
    },
    getLabelProps: {
      base: 'flex items-center',
    },
  },
});

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  const { size = 'sm', color = 'primary', disabled = false } = props as any;
  const { children, isSelected, isFocusVisible, getBaseProps, getLabelProps, getInputProps } =
    useCheckbox({
      size,
      color,
      disabled,
      defaultSelected: true,
      ref,
      ...props,
    });

  const styles = checkbox({ isSelected, isFocusVisible, size });

  return (
    <label className={cn(styles.label(), getBaseProps().className)}>
      <VisuallyHidden>
        <input {...getInputProps()} disabled={disabled} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: cn(
            styles.base(),
            isSelected && color === 'danger' && 'border-red text-red',
            isSelected && color === 'primary' && 'border-primary text-primary',
            disabled && 'border-foreground-300 text-foreground-300 pointer-events-none'
          ),
        }}
      >
        {isSelected ? (
          <Icons.checkbox
            className={cn(
              size === 'sm' && 'size-4',
              size === 'md' && 'size-5',
              size === 'lg' && 'size-6'
            )}
          />
        ) : null}
      </Chip>
      {children && (
        <div
          className={cn(
            getLabelProps().className,
            color === 'danger' && 'text-red',
            disabled && 'text-foreground-300 pointer-events-none',
            size === 'sm' && 'text-sm',
            size === 'md' && 'text-base',
            size === 'lg' && 'text-xl'
          )}
        >
          {children}
        </div>
      )}
    </label>
  );
});

Checkbox.displayName = 'Checkbox';

export { Checkbox };
