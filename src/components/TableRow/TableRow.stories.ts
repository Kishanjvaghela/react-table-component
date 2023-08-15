import type { Meta, StoryObj } from "@storybook/react";

import TableRow from "./TableRow";

const meta: Meta = {
  title: "Example/TableRow",
  component: TableRow,
  parameters: {
    // layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof TableRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    row: { id: 1, columns: ["John", "30", "USA"] },
    isSelected: false,
    onSelect: () => {},
  },
};
