import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemePreview } from "../ThemePreview";
import { Button } from "./index";

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
  args: {
    children: "Button",
  },
};

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Secondary: Story = {
  ...Template,
  args: {
    name: "Button Secondary",
    variant: "secondary",
    children: "Secondary",
  },
};

export const Tertiary: Story = {
  ...Template,
  args: {
    name: "Button Tertiary",
    variant: "tertiary",
    children: "Tertiary",
  },
};

export const LinkGray: Story = {
  ...Template,
  args: {
    name: "Button Link Gray",
    variant: "link-gray",
    children: "Link gray",
  },
};

export const LinkColor: Story = {
  ...Template,
  args: {
    name: "Button Link Color",
    variant: "link-color",
    children: "Link color",
  },
};
