import type { Meta, StoryObj } from "@storybook/react";
import { ThemePreview } from "../ThemePreview";
import { Radio } from "./index";

const meta = {
  component: Radio,
  tags: ["autodocs"],
} satisfies Meta<typeof Radio>;

export default meta;

type Story = StoryObj<typeof meta>;

const sampleOptions = [
  { label: "Opção 1", value: "1" },
  { label: "Opção 2", value: "2" },
];

const Template: Story = {
  render: (args) => (
    <ThemePreview>
      <Radio {...args} />
    </ThemePreview>
  ),
  args: {
    options: sampleOptions,
    value: "1",
    onSelect: (val: string) => console.log("Selected:", val),
  },
};

export const Default: Story = {
  ...Template,
  args: {
    ...Template.args,
    variant: "default",
  },
};

export const Success: Story = {
  ...Template,
  args: {
    ...Template.args,
    variant: "success",
    value: "2",
  },
};
