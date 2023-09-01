import { Meta, StoryObj } from "@storybook/react";
import { Header } from "./Header";

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Header utilizados no projeto",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const Secondary: Story = {
  args: {
    HeaderDefault: false,
  },
};
