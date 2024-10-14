import { Tooltip } from '@nextui-org/react';
import { type Meta, type StoryObj } from '@storybook/react';

import { Icons } from '.';
import { VStack } from '../VStack';

const DivComponent = (props: React.HTMLAttributes<HTMLDivElement>) => <div {...props} />;

const meta: Meta<typeof DivComponent> = {
  component: DivComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof DivComponent>;

export const Primary: Story = {
  render: () => (
    <div className="grid grid-cols-12 gap-8">
      {Object.entries(Icons)
        .sort(([a], [b]) => a.localeCompare(b))
        .map(([iconName, IconComponent]) => (
          <Tooltip content={iconName} key={iconName}>
            <VStack key={iconName} justify="center" align="center" className="cursor-pointer">
              <IconComponent className="size-6 text-black" />
            </VStack>
          </Tooltip>
        ))}
    </div>
  ),
};
