import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from './index'
import { ThemePreview } from "../ThemePreview";

const meta = {
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "sm",
    children: "Badge",
  }
};

export const ThemeSupport: Story = {
  render: ({ children, ...args }) => (
    <ThemePreview>
      <Badge>{children}</Badge>
    </ThemePreview>
  ),
  args: {
    size: "sm",
    children: "Badge",
  }
};

export const Blue: Story = {
  args: {
    size: "sm",
    variant: "blue",
    children: "Badge",
  }
};

export const Indigo: Story = {
  args: {
    size: "sm",
    variant: "indigo",
    children: "Badge",
  }
};

export const Success: Story = {
  args: {
    size: "sm",
    variant: "success",
    children: "Badge",
  }
};
