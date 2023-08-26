import {Meta, StoryObj} from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
    component: Input,
    tags: ["autodocs"],
    parameters: {
        docs: {
          description: {
            component: "Input utilizados no projeto"
          }
        }
      }
}
export default meta;

type Story = StoryObj<typeof Input>;
export const Default: Story = {
    args: {
        InputDefault: true,
        placeholder: "Buscar...",
    }
}
export const Secondary: Story = {
    args: {
        InputDefault: false,
        placeholder: "email@exemplo.com",
    }
}

