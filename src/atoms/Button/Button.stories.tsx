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

export const Rate: Story = {
  args: {
    type: "rate",
    content: "Avaliação",
  },
};

export const Login: Story = {
  args: {
    type: "login",
    content: "Entrar",
  },
};

export const Register: Story = {
  args: {
    type: "register",
    content: "Registrar",
  },
};

export const Icon: Story = {
  args: {
    type: "icon",
    iconArgs: {
      alt: "error",
      size: "20",
      sourceIcon: "/error.svg",
    },
  },
};
