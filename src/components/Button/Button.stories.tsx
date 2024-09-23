import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";

const meta = {
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    name: "Button Ouline",
    variant: "secondary",
    children: "Secondary",
  },
};

export const Outline: Story = {
  args: {
    name: "Button Ouline",
    variant: "outline",
    children: "Outline",
  },
};
export const Danger: Story = {
  args: {
    name: "Button Ouline",
    variant: "danger",
    children: "Danger",
  },
};

export const Success: Story = {
  args: {
    name: "Button Ouline",
    variant: "success",
    children: "Success",
  },
};
export const Text: Story = {
  args: {
    name: "Button Ouline",
    variant: "text",
    children: "Text",
  },
};
