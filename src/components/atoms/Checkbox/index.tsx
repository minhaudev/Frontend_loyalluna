import { Chip, tv, useCheckbox, VisuallyHidden } from '@nextui-org/react';

import { Icons } from '../Icons';

const checkbox = tv({
  slots: {
    base: 'border-default hover:bg-default-200',
    content: 'text-default-500',
  },
  variants: {
    isSelected: {
      true: {
        base: 'border-primary bg-primary hover:bg-primary-500 hover:border-primary-500',
        content: 'text-primary-foreground pl-1',
      },
    },
    isFocusVisible: {
      true: {
        base: 'ring-focus ring-offset-background outline-none ring-2 ring-offset-2',
      },
    },
  },
});

const Checkbox = () => {
  const { children, isSelected, isFocusVisible, getBaseProps, getInputProps } = useCheckbox({
    defaultSelected: true,
  });

  const styles = checkbox({ isSelected, isFocusVisible });

  return (
    <label {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        color="primary"
        startContent={isSelected ? <Icons.checkbox className="text-red ml-1 size-4" /> : null}
        variant="faded"
        // {...getLabelProps()}
      >
        <Icons.checkbox className="ml-1 size-4" />
        {children ? children : isSelected ? 'Enabled' : 'Disabled'}
      </Chip>
    </label>
  );
};

export { Checkbox };
