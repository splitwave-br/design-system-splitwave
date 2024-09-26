import type { Preview } from "@storybook/react";
import "@/styles/global.scss";
import "@/styles/breakpoints.scss";
import "@/styles/components-variables.scss";

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
