import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";
import React from "react";
import { ThemePreview } from "../ThemePreview";

const meta = {
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;


const Template: Story = {
  render: ({ children, ...args }) => (
    <ThemePreview>
      <Button {...args}>{children}</Button>
    </ThemePreview>
  ),
};

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    name: "Button Secondary",
    variant: "secondary",
    children: "Secondary",
  },
};

export const Tertiary: Story = {
  args: {
    name: "Button Tertiary",
    variant: "tertiary",
    children: "Tertiary",
  },
};

export const Outline: Story = {
  ...Template,
  args: {
    name: "Button Ouline",
    variant: "outline",
    children: "Outline",
  },
};
export const Danger: Story = {
  args: {
    name: "Button Danger",
    variant: "danger",
    children: "Danger",
  },
};

export const Success: Story = {
  args: {
    name: "Button Success",
    variant: "success",
    children: "Success",
  },
};
export const Text: Story = {
  args: {
    name: "Button Text",
    variant: "text",
    children: "Text",
  },
};

