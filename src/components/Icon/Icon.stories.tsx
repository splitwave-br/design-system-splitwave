import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./index";

const meta = {
  component: Icon,
  tags: ["autodocs"],
} satisfies Meta<typeof Icon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'alert',
  }
}
