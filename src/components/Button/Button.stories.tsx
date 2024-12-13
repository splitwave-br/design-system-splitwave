import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./index";
import React from "react";

const meta = {
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;


const Template: Story = {
  render: ({ children, ...args }) => (
    <div>
      <div className="light-theme" style={{ marginBottom: "1rem" }}>
        <h2>Light Theme</h2>
        <Button {...args}>{children}</Button>
      </div>
      <div className="dark-theme">
        <h2>Dark Theme</h2>
        <div style={{ background: "black", width: "max-content", padding: 5 }}>
          <Button {...args}>{children}</Button>
        </div>
      </div>
    </div>
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

