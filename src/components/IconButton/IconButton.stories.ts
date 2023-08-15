import type { Meta, StoryObj } from "@storybook/react";

import IconButton from "./IconButton";

const meta: Meta = {
  title: "Example/IconButton",
  component: IconButton,
  parameters: {
    // layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IconButtonSample: Story = {
  args: {
    // checked: true,
  },
};
