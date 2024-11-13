import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, ITabsProps } from "./index";
import { ThemePreview } from "../ThemePreview";

const meta: Meta<ITabsProps> = {
  component: Tabs,
  argTypes: {
    currentPath: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<ITabsProps>;

const Template: Story = {
  render: ({ tabs, currentPath, ...args }) => (
    <ThemePreview>
      <Tabs tabs={tabs} currentPath={currentPath} {...args} />
    </ThemePreview>
  ),
};

export const Default: Story = {
  ...Template,
  args: {
    tabs: [
      { label: "Home (active)", path: "/home" },
      { label: "Profile", path: "/profile" },
      { label: "Settings", path: "/settings" },
    ],
    currentPath: "/home",
  },
};

export const WithDisabledTab: Story = {
  ...Template,
  args: {
    tabs: [
      { label: "Home (disabled)", path: "/home", isDisabled: true },
      { label: "Profile (active)", path: "/profile" },
      { label: "Settings", path: "/settings" },
    ],
    currentPath: "/profile",
  },
};

export const MultipleTabs: Story = {
  ...Template,
  args: {
    tabs: [
      { label: "Dashboard", isDisabled: true, path: "/dashboard" },
      {
        label: "Reports (active/disabled)",
        isDisabled: true,
        path: "/reports",
      },
      { label: "Analytics", path: "/analytics" },
      { label: "Settings", path: "/settings" },
      { label: "Support", path: "/support" },
    ],
    currentPath: "/reports",
  },
};
