import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Botões utilizados no projeto",
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const IconWithStar: Story = {
  name: "Icon Star",
  args: {
    type: "icon",
    content: "star",
    iconArgs: {
      size: "normal",
      source: "/fill-star.svg",
    },
  },
};
export const Arrows: Story = {
  name: "Arrow",
  args: {
    type: "icon",
    content: "arrow left",
    iconArgs: {
      size: "normal",
      source: "/arrow-left.svg",
    },
  },
};

export const Icon: Story = {
  args: {
    type: "icon",
    content: "icon",
    iconArgs: {
      size: "normal",
      source: "/error.svg",
    },
  },
};

export const Rate: Story = {
  ...Icon,
  args: {
    type: "rate",
    content: "Avaliação",
    iconArgs: {
      size: "normal",
      source: "/error.svg",
    },
  },
};

export const Login: Story = {
  args: {
    type: "login",
    content: "Entrar",
    iconArgs: {
      size: "normal",
      source: "/error.svg",
    },
  },
};

export const Register: Story = {
  args: {
    type: "register",
    content: "Registrar",
    iconArgs: {
      size: "normal",
      source: "/error.svg",
    },
  },
};
