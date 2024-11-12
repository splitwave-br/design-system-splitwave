import type { Meta, StoryObj } from "@storybook/react";
import Tabs, { ITabsProps } from "./index";

const meta: Meta<ITabsProps> = {
  component: Tabs,
  argTypes: {
    currentPath: { control: "text" },
  },
};

export default meta;

type Story = StoryObj<ITabsProps>;

export const Default: Story = {
  args: {
    tabs: [
      { label: "Home", path: "/home" },
      { label: "Profile", path: "/profile" },
      { label: "Settings", path: "/settings" },
    ],
    currentPath: "/home", // Define a aba ativa como "Home"
  },
};

export const WithDisabledTab: Story = {
  args: {
    tabs: [
      { label: "Home", path: "/home" },
      { label: "Profile", path: "/profile", isDisabled: true },
      { label: "Settings", path: "/settings" },
    ],
    currentPath: "/profile", // Define a aba ativa como "Profile"
  },
};

export const MultipleTabs: Story = {
  args: {
    tabs: [
      { label: "Dashboard", path: "/dashboard" },
      { label: "Reports", path: "/reports" },
      { label: "Analytics", path: "/analytics" },
      { label: "Settings", path: "/settings" },
      { label: "Support", path: "/support" },
    ],
    currentPath: "/analytics", // Define "Analytics" como a aba ativa
  },
};

export const EmptyTabs: Story = {
  args: {
    tabs: [],
  },
};
