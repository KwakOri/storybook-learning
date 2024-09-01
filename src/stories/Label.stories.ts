import type { Meta, StoryObj } from "@storybook/react";
import Label from "../components/Label";

const meta = {
  title: "Buttons/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    htmlFor: { control: "text", description: "label의 for 속성" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    htmlFor: "email",
    children: "이메일",
  },
};
