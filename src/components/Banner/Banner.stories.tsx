import type { Meta, StoryObj } from "@storybook/react";
import { Banner, TBannerProps } from "@/components/Banner";

const meta = {
  component: Banner,
  tags: ["autodocs"],
} satisfies Meta<typeof Banner>;

export default meta;

type Story = StoryObj<TBannerProps>;

const Template: Story = {
  render: ({ children, ...args }) => (
    <div>
      <div className="light-theme" style={{ marginBottom: "1rem" }}>
        <h2>Light Theme</h2>
        <Banner {...args}>{children}</Banner>
      </div>
      <div className="dark-theme">
        <h2>Dark Theme</h2>
        <Banner {...args}>{children}</Banner>
      </div>
    </div>
  ),
};

export const Informative: Story = {
  ...Template,
  args: {
    children: "This is an informative banner",
    variant: "informative",
  },
};

export const Danger: Story = {
  ...Template,
  args: {
    children: "This is a danger banner",
    variant: "danger",
  },
};
