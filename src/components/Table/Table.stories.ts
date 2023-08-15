import type { Meta, StoryObj } from '@storybook/react';

import Table from './Table';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'Example/Table',
  component: Table,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
const columns = ["Name", "Age", "Country"];
const data = [
  { id: 1, columns: ["John", "30", "USA"] },
  { id: 2, columns: ["Alice", "25", "Canada"] },
  // ... other data ...
];
export const Sample: Story = {
  args: {
    columns: columns,
    data: data
  },
};