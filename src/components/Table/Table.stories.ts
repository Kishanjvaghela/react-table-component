import type { Meta, StoryObj } from "@storybook/react";

import Table from "./Table";

const meta: Meta = {
  title: "Example/Table",
  component: Table,
  parameters: {
    // layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

const columns = ["Name", "Age", "Country"];
const data = [
  { id: 1, columns: ["John", "30", "USA"] },
  { id: 2, columns: ["Alice", "25", "Canada"] },
];
export const Sample: Story = {
  args: {
    columns: columns,
    data: data,
  },
};
