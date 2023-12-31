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

const columns = ["Operator", "Headset Display", "3G Availability"];
const data = [
  { id: 1, columns: ["*Celcom Axiata (LTE)", "CELCOM / My Celcom / 502 19", "Yes"] },
  { id: 2, columns: ["*DiGi Telecom (LTE)", "DiGi 1800 / DiGi /  MYMY18", "No"] },
  { id: 3, columns: ["*Maxis (LTE)", "U Mobile / MYS 18 / MY 18", "Yes"] },
  { id: 4, columns: ["U Mobile (LTE)", "U Mobile / MYS 18 / MY 18", "Yes"] },
];
export const Sample: Story = {
  args: {
    columns: columns,
    data: data,
  },
};

export const SortingSample: Story = {
  args: {
    columns: columns,
    data: data,
    enableSorting: true
  },
};

export const RadioButtonSample: Story = {
  args: {
    columns: columns,
    data: data,
    selection: 'single'
  },
};

export const CheckBoxSample: Story = {
  args: {
    columns: columns,
    data: data,
    selection: 'multi'
  },
};
