import { type Meta, type StoryObj } from '@storybook/react';

import { Button } from '.';
import { HStack } from '../HStack';
import { Icons } from '../Icons';
import { VStack } from '../VStack';

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'bordered', 'light', 'faded', 'shadow', 'ghost'],
      defaultValue: 'solid',
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'success', 'warning', 'danger'],
      defaultValue: 'default',
    },
    children: { control: 'text' },
    disabled: { control: 'boolean' },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
    radius: { control: 'select', options: ['sm', 'md', 'lg', 'full'] },
    isLoading: { control: 'boolean' },
    isIconOnly: { control: 'boolean' },
    startContent: { control: 'text' },
    endContent: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    color: 'primary',
    size: 'md',
    radius: 'sm',
  },
};

export const Variant: Story = {
  render: () => (
    <HStack>
      <Button variant="solid" color="primary">
        Solid
      </Button>
      <Button variant="bordered" color="primary">
        Bordered
      </Button>
      <Button variant="light" color="primary">
        Light
      </Button>
      <Button variant="faded" color="primary">
        Faded
      </Button>
      <Button variant="flat" color="primary">
        Flat
      </Button>
      <Button variant="ghost" color="primary">
        Ghost
      </Button>
    </HStack>
  ),
};

export const WithIcon: Story = {
  render: () => (
    <HStack>
      <Button variant="solid" color="primary" size="sm" isIconOnly>
        <Icons.settingIcon />
      </Button>
      <Button variant="solid" color="primary" size="md" isIconOnly>
        <Icons.settingIcon />
      </Button>
      <Button variant="solid" color="primary" size="lg" isIconOnly>
        <Icons.settingIcon />
      </Button>
      <Button variant="solid" color="primary" size="sm" radius="full" isIconOnly>
        <Icons.settingIcon />
      </Button>
      <Button variant="solid" color="primary" size="md" radius="full" isIconOnly>
        <Icons.settingIcon />
      </Button>
      <Button variant="solid" color="primary" size="lg" radius="full" isIconOnly>
        <Icons.settingIcon />
      </Button>
      <Button variant="light" color="primary" size="sm" isIconOnly>
        <Icons.settingIcon />
      </Button>
      <Button variant="light" color="primary" size="md" isIconOnly>
        <Icons.settingIcon />
      </Button>
      <Button variant="light" color="primary" size="lg" isIconOnly>
        <Icons.settingIcon />
      </Button>
    </HStack>
  ),
};

export const WithStartContent: Story = {
  render: () => (
    <VStack>
      <HStack>
        <Button variant="solid" color="primary" startContent={<Icons.heartIcon />}>
          Solid
        </Button>
        <Button variant="bordered" color="primary" startContent={<Icons.heartIcon />}>
          Bordered
        </Button>
        <Button variant="light" color="primary" startContent={<Icons.heartIcon />}>
          Light
        </Button>
        <Button variant="faded" color="primary" startContent={<Icons.heartIcon />}>
          Faded
        </Button>
        <Button variant="flat" color="primary" startContent={<Icons.heartIcon />}>
          Flat
        </Button>
        <Button variant="ghost" color="primary" startContent={<Icons.heartIcon />}>
          Ghost
        </Button>
      </HStack>
    </VStack>
  ),
};

export const WithEndContent: Story = {
  render: () => (
    <VStack>
      <HStack>
        <Button
          variant="solid"
          color="primary"
          endContent={<Icons.chevronDownIcon className="w-6" />}
        >
          Solid
        </Button>
        <Button
          variant="bordered"
          color="primary"
          endContent={<Icons.chevronDownIcon className="w-6" />}
        >
          Bordered
        </Button>
        <Button
          variant="light"
          color="primary"
          endContent={<Icons.chevronDownIcon className="w-6" />}
        >
          Light
        </Button>
        <Button
          variant="faded"
          color="primary"
          endContent={<Icons.chevronDownIcon className="w-6" />}
        >
          Faded
        </Button>
        <Button
          variant="flat"
          color="primary"
          endContent={<Icons.chevronDownIcon className="w-6" />}
        >
          Flat
        </Button>
        <Button
          variant="ghost"
          color="primary"
          endContent={<Icons.chevronDownIcon className="w-6" />}
        >
          Ghost
        </Button>
      </HStack>
    </VStack>
  ),
};

export const IsLoading: Story = {
  render: () => (
    <VStack>
      <HStack>
        <Button variant="solid" color="primary" size="sm" isIconOnly isLoading>
          <Icons.settingIcon />
        </Button>
        <Button variant="solid" color="primary" size="md" isIconOnly isLoading>
          <Icons.settingIcon />
        </Button>
        <Button variant="solid" color="primary" size="lg" isIconOnly isLoading>
          <Icons.settingIcon />
        </Button>
        <Button variant="solid" color="primary" size="sm" radius="full" isIconOnly isLoading>
          <Icons.settingIcon />
        </Button>
        <Button variant="solid" color="primary" size="md" radius="full" isIconOnly isLoading>
          <Icons.settingIcon />
        </Button>
        <Button variant="solid" color="primary" size="lg" radius="full" isIconOnly isLoading>
          <Icons.settingIcon />
        </Button>
        <Button variant="light" color="primary" size="sm" isIconOnly isLoading>
          <Icons.settingIcon />
        </Button>
        <Button variant="light" color="primary" size="md" isIconOnly isLoading>
          <Icons.settingIcon />
        </Button>
        <Button variant="light" color="primary" size="lg" isIconOnly isLoading>
          <Icons.settingIcon />
        </Button>
      </HStack>
      <HStack>
        <Button variant="solid" color="primary" isLoading>
          Solid
        </Button>
        <Button variant="bordered" color="primary" isLoading>
          Bordered
        </Button>
        <Button variant="light" color="primary" isLoading>
          Light
        </Button>
        <Button variant="faded" color="primary" isLoading>
          Faded
        </Button>
        <Button variant="flat" color="primary" isLoading>
          Flat
        </Button>
        <Button variant="ghost" color="primary" isLoading>
          Ghost
        </Button>
      </HStack>
    </VStack>
  ),
};
