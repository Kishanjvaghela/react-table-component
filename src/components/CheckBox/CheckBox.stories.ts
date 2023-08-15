import type { Meta, StoryObj } from "@storybook/react";

import CheckBox from "./CheckBox";

const meta: Meta = {
  title: "Example/CheckBox",
  component: CheckBox,
  parameters: {
    // layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CheckBoxSample: Story = {
  args: {
    checked: true,
  },
};
