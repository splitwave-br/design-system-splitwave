import type { Preview } from "@storybook/react";
import "../src/components/styles/global.scss";

// TODO: Find a better way to import components variables
import "../src/components/Dropdown/Trigger/variables.scss";
import "../src/components/Dropdown/Item/variables.scss";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (story) => {
      document.body.classList.add("light-theme");
      return story();
    },
  ],
};

export const globalTypes = {
  theme: {
    name: "Theme",
    description: "Global theme",
    defaultValue: "light",
    toolbar: {
      icon: "circlehollow",
      items: ["light", "dark"],
    },
  },
};

export default preview;
