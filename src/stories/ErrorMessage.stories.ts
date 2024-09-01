import type { Meta, StoryObj } from "@storybook/react";
import ErrorMessage from "../components/ErrorMessage";

const meta = {
  title: "Buttons/ErrorMessage",
  component: ErrorMessage,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {},
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    children: "에러 메세지는 여기로",
  },
};
