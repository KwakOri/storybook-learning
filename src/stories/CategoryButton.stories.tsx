import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import CategoryButton from "../components/CategoryButton";

const meta = {
  title: "Buttons/CategoryButton",
  component: CategoryButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    iconAlt: {
      control: "text",
      description: "아이콘의 alt 속성",
    },
    iconPath: {
      control: "text",
      description: "아이콘의 경로",
    },
    text: {
      control: "text",
      description: "카테고리 버튼의 텍스트",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof CategoryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    iconAlt: "아이콘",
    iconPath: "/icons/delete.png",
    text: "카테고리",
  },
};
