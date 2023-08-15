import type { Meta, StoryObj } from "@storybook/react";

import RadioButton from "./RadioButton";

const meta: Meta = {
  title: "Example/RadioButton",
  component: RadioButton,
  parameters: {
    // layout: 'centered',
  },
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof RadioButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioButtonSample: Story = {
  args: {
    checked: true,
  },
};
