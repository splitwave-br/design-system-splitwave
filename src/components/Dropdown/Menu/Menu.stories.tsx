import { Meta, StoryObj } from "@storybook/react/*";
import { Dropdown } from "..";
import { MenuProps } from ".";

export default {
  title: "Components/Dropdown/Menu",
  component: Dropdown.Menu,
  parameters: {
    docs: {
      description: {
        component: "Another description, overriding the comments",
      },
    },
  },
} as Meta;

export const Default: StoryObj<MenuProps> = {
  args: {
    children: (
      <>
        <Dropdown.Item>Item 1</Dropdown.Item>
        <Dropdown.Item>Item 2</Dropdown.Item>
        <Dropdown.Item>Item 3</Dropdown.Item>
        <Dropdown.Item>Item 4</Dropdown.Item>
        <Dropdown.Item>Item 5</Dropdown.Item>
      </>
    ),
  },
};
