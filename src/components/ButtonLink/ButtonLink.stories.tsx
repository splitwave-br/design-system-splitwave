import type { Meta, StoryObj } from "@storybook/react";
import { ButtonLink } from "./index";

const meta = {
  component: ButtonLink,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: "/sites/google",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    href: "/sites/google",
    name: "Button Secondary",
    variant: "secondary",
    children: "Secondary",
  },
};

export const Tertiary: Story = {
  args: {
    href: "/sites/google",
    name: "Button Tertiary",
    variant: "tertiary",
    children: "Tertiary",
  },
};

export const Outline: Story = {
  args: {
    href: "/sites/google",
    name: "Button Ouline",
    variant: "outline",
    children: "Outline",
  },
};
export const Danger: Story = {
  args: {
    href: "/sites/google",
    name: "Button Danger",
    variant: "danger",
    children: "Danger",
  },
};

export const Success: Story = {
  args: {
    href: "/sites/google",
    name: "Button Success",
    variant: "success",
    children: "Success",
  },
};
export const Text: Story = {
  args: {
    href: "/sites/google",
    name: "Button Text",
    variant: "text",
    children: "Text",
  },
};
