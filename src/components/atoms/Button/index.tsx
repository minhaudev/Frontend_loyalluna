'use client';

import { forwardRef } from 'react';
import { cn } from '@/shared/utils';
import { Ripple, Spinner, useButton, type ButtonProps } from '@nextui-org/react';
import { tv } from 'tailwind-variants';

const button = tv({
  base: 'px-4 py-1 text-sm font-semibold active:opacity-80',
  variants: {
    variant: {
      solid: 'text-white',
      bordered: 'border',
      light: '',
      flat: '',
      faded: '',
      shadow: '',
      ghost: '',
    },
    color: {
      default: '',
      primary: '',
      secondary: '',
      success: '',
      warning: '',
      danger: '',
    },
    disabled: {
      true: 'pointer-events-none opacity-50',
    },
    radius: {
      sm: '!rounded',
      md: '',
      lg: '',
      none: '',
      full: '',
    },
    isIconOnly: {
      true: 'p-0',
    },
    compoundVariants: [],
    defaultVariants: {
      variant: 'solid',
      color: 'primary',
      radius: 'sm',
      size: 'md',
    },
  },
});

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    Component,
    domRef,
    children,
    spinnerSize,
    spinner = <Spinner color="current" size={spinnerSize} />,
    spinnerPlacement,
    startContent,
    endContent,
    isLoading,
    disableRipple,
    getButtonProps,
    getRippleProps,
    isIconOnly,
    styles,
  } = useButton({
    ref,
    ...props,
  });

  const style = button({
    variant: props?.variant || 'solid',
    color: props?.color || 'primary',
    radius: props?.radius || 'sm',
    disabled: props?.disabled,
    isIconOnly,
  });

  return (
    <Component
      suppressHydrationWarning
      className={cn(styles, style)}
      ref={domRef}
      {...getButtonProps()}
    >
      {startContent}
      {isLoading && spinnerPlacement === 'start' && spinner}
      {isLoading && isIconOnly ? null : children}
      {isLoading && spinnerPlacement === 'end' && spinner}
      {endContent}
      {!disableRipple && <Ripple {...getRippleProps()} />}
    </Component>
  );
});

Button.displayName = 'Button';

export { Button };
