import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Ícones utilizados no projeto",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Small: Story = {
  args: {
    source: "/popcorn.svg",
    size: "small",
  },
};
export const Normal: Story = {
  args: {
    source: "/fill-star.svg",
    size: "normal",
  },
};

export const Medium: Story = {
  args: {
    source: "/popcorn-orange.svg",
    size: "medium",
  },
};
export const Large: Story = {
  args: {
    source: "/exit.svg",
    size: "large",
  },
};
