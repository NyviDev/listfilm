import { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";

const meta: Meta<typeof Link> = {
  component: Link,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Link utilizados no projeto",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Link>;
export const InternalBlack: Story = {
  name: "Internal Color Black",
  args: {
    color: "black",
    content: "Animação",
    externalLink: true,
    href: "https://www.google.com/search?q=filme+animação",
  },
};
export const InternalWhite: Story = {
  name: "Internal Color White",
  args: {
    color: "white",
    content: "Aventura",
    externalLink: true,
    href: "https://www.google.com/search?q=filme+aventura",
  },
};

export const ExternalWithoutIcon: Story = {
  name: "External",
  args: {
    color: "black",
    content: "Ir para o Google",
    externalLink: false,
    href: "https://www.google.com",
  },
};
export const ExternalIcon: Story = {
  name: "External With Icon",
  args: {
    color: "white",
    content: "Lista de Assistidos",
    externalLink: false,
    href: "https://www.google.com",
    iconArgs: {
      size: "large",
      source: "/eye.svg",
    },
  },
};
