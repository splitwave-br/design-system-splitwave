import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./index";
import { ThemePreview } from "../../../ThemePreview";

const meta = {
  component: Input,
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

const Template: Story = {
  render: ({ children, ...args }) => (
    <ThemePreview>
      <Input {...args} />
    </ThemePreview>
  ),
};

export const Default: Story = {
  ...Template,
};

export const SuffixIcon: Story = {
  ...Template,
  args: {
    suffix: "alert",
  },
};

export const PrefixIcon: Story = {
  ...Template,
  args: {
    prefix: "alert",
  },
};

export const TextSuffix: Story = {
  ...Template,
  args: {
    textSuffix: "%",
  },
};

export const TextSuffixDisabled: Story = {
  ...Template,
  args: {
    textSuffix: "%",
    disabled: true,
  },
};

export const Disabled: Story = {
  ...Template,
  args: {
    disabled: true,
  },
};

type Story = StoryObj<typeof meta>;
