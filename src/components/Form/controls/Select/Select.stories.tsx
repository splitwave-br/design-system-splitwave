import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./index";
import { ThemePreview } from "../../../ThemePreview";

const meta = {
  component: Select,
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;


const Template: Story = {
  render: ({ children, ...args }) => (
    <ThemePreview>
        <Select
          {...args}
          size={1}
          direction="top"
          options={Array.from({ length: 8 }, (_, index) =>
            String(index + 1),
          )}
          getLabel={(o) => o}
          getValue={(o) => o}
          placeholder="0"
          value={String(3)}
        />
    </ThemePreview>
  ),
};

export const Default: Story = {
  ...Template,
};

export const Disabled: Story = {
  ...Template,
  args: {
    disabled: true,
  },
};

type Story = StoryObj<typeof meta>;
