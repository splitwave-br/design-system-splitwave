import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemePreview } from "../../../ThemePreview";
import { Select } from ".";

interface OptionType {
  id: string;
  label: string;
}

const options: OptionType[] = [
  { id: "1", label: "Opção 1" },
  { id: "2", label: "Opção 2" },
  { id: "3", label: "Opção 3" },
  { id: "4", label: "Opção 4" },
  { id: "5", label: "Opção 5" },
  { id: "6", label: "Opção 6" },
  { id: "7", label: "Opção 7" },
  { id: "8", label: "Opção 8" },
  { id: "9", label: "Opção 9" },
  { id: "10", label: "Opção 10" },
  { id: "11", label: "Opção 11" },
];

export default {
  component: Select,
  argTypes: {
    prefix: {
      control: "text",
      description: "Ícone opcional exibido antes do valor selecionado.",
    },
    placeholder: {
      control: "text",
      description: "Texto exibido quando nenhuma opção está selecionada.",
    },
    searchable: {
      control: "boolean",
      description: "Habilita o campo de busca dentro do select.",
    },
    enableDeselect: {
      control: "boolean",
      description:
        "Permite desmarcar a opção selecionada ao clicar nela novamente.",
    },
    disabled: {
      control: "boolean",
      description: "Desabilita o select, impedindo interação do usuário.",
    },
  },
} as Meta<typeof Select>;

const Template: StoryFn<React.ComponentProps<typeof Select<OptionType>>> = (
  args,
) => {
  const [selectedOption, setSelectedOption] = useState<
    OptionType | undefined
  >();

  return (
    <ThemePreview>
      <Select
        {...args}
        value={selectedOption ? args.getValue(selectedOption) : undefined}
        onChange={(option) => setSelectedOption(option)}
      />
    </ThemePreview>
  );
};

export const Default = Template.bind({});
Default.args = {
  options,
  getId: (option) => option.id,
  getLabel: (option) => option.label,
  getValue: (option) => option.id,
  placeholder: "Selecione uma opção",
  searchable: true,
  enableDeselect: true,
};
