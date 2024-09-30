import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from './index'

const meta = {
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "sm",
    variant: "blue",
    children: "Badge",
  }
};
