import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Ícones utilizados no projeto"
      }
    }
  }
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Small: Story = {
  args: {
    alt: "Pipoca",
    sourceIcon: "/popcorn.svg",
    size: "15",
  },
};
export const Normal: Story = {
  args: {
    alt: "Estrela laranja",
    sourceIcon: "/fill-star.svg",
    size: "20",
  },
};

export const Medium: Story = {
  args: {
    alt: "Pipoca",
    sourceIcon: "/popcorn-orange.svg",
    size: "25",
  },
};
export const Large: Story = {
  args: {
    alt: "Saída",
    sourceIcon: "/exit.svg",
    size: "35",
  },
};
