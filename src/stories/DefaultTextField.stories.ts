import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import DefaultTextField from "../components/DefaultTextField";

const meta = {
  title: "TextFields/DefaultTextField",
  component: DefaultTextField,
  parameters: {
    layout: "centered",
  },

  tags: ["autodocs"],

  argTypes: {
    iconAlt: {
      control: "text",
      description: "아이콘 이미지의 alt 속성",
      defaultValue: "icon",
    },
    iconPath: {
      control: "text",
      description: "이미지의 경로",
      defaultValue: "",
    },
    placeholder: {
      control: "text",
      description: "텍스트 필드의 placeholder",
      defaultValue: "text를 입력해주세요",
    },
    value: {
      control: "text",
      description: "텍스트 필드의 값",
      defaultValue: "",
    },
    errorMessage: {
      control: "text",
      description: "텍스트 필드의 에러 메세지",
      defaultValue: "",
    },
    isError: {
      control: "boolean",
      description: "에러 상태",
      defaultValue: false,
    },
    id: {
      control: "text",
      description: "텍스트 필드의 id",
      defaultValue: "",
    },
  },
  args: {
    onIconClick: fn(),
    onChange: fn(),
  },
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    iconAlt: "icon",
    iconPath: "/icons/delete.png",
    placeholder: "text를 입력해주세요",
    value: "",
    errorMessage: "텍스트를 확인해주세요",
    isError: false,
    id: "email",
  },
};
