import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import NavigationBar from "../components/NavigationBar";

const meta = {
  title: "Navigation/NavigationBar",
  component: NavigationBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    showBackButton: {
      control: "boolean",
      description: "뒤로가기 버튼 표시 여부",
      defaultValue: true,
    },
    showCloseButton: {
      control: "boolean",
      description: "닫기 버튼 표시 여부",
      defaultValue: true,
    },
    showTitle: {
      control: "boolean",
      description: "페이지 타이틀 표시 여부",
      defaultValue: true,
    },
    title: {
      control: "text",
      description: "페이지 타이틀",
      defaultValue: "타이틀",
    },
  },
  args: {
    onBackButtonClick: fn(),
    onCloseButtonClick: fn(),
  },
} satisfies Meta<typeof NavigationBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    showBackButton: true,
    showCloseButton: true,
    showTitle: true,
    title: "페이지 타이틀",
  },
};
