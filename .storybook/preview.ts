import type { Preview } from "@storybook/react";
import { createElement } from "react";
import { DesignSystemProvider, en, esMX, ptBR } from "@/i18n";

const locales = { "pt-BR": ptBR, en, "es-MX": esMX };
import "@/styles/global.scss";
import "@/styles/breakpoints.scss";
import "@/styles/components-variables.scss";
import "react-day-picker/dist/style.css";

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
    (story, context) => {
      document.body.classList.add("light-theme");
      const locale =
        locales[context.globals.locale as keyof typeof locales] ?? ptBR;
      return createElement(DesignSystemProvider, { locale }, story());
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
  locale: {
    name: "Idioma",
    description: "Idioma dos textos do design-system",
    defaultValue: "pt-BR",
    toolbar: {
      icon: "globe",
      items: [
        { value: "pt-BR", title: "Português" },
        { value: "en", title: "English" },
        { value: "es-MX", title: "Español (México)" },
      ],
      dynamicTitle: true,
    },
  },
};

export default preview;
