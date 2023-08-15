import type { Meta, StoryObj } from "@storybook/react";

import TableHeader from "./TableHeader";

const meta: Meta = {
  title: "Example/TableHeader",
  component: TableHeader,
  parameters: {
    // layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof TableHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Sample: Story = {
  args: {
    columns: ["Name", "Age", "Country"],
  },
};
