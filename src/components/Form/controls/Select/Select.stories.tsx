import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { ThemePreview } from "../../../ThemePreview";
import { Select } from ".";

interface OptionType {
  id: string | boolean;
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
  {
    id: false,
    label:
      "Opção 8 gigante muito texto aq, aksdmnaskjdfbaklshdbflahsdvbfhasvbdfksdb",
  },
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
      <div
        style={{
          width: 150,
          display: "flex",
          flexDirection: "column",
          gap: 32,
        }}
      >
        <Select
          asPortal
          {...args}
          value={selectedOption ? args.getValue(selectedOption) : undefined}
          onChange={(option) => setSelectedOption(option)}
        />
      </div>
    </ThemePreview>
  );
};

export const Default = Template.bind({});
Default.args = {
  options,
  getLabel: (option) => option.label,
  getValue: (option) => option.id,
  placeholder: "Selecione",
  searchable: true,
  enableDeselect: true,
};

export const DeselectDisabled = Template.bind({});
DeselectDisabled.args = {
  options,
  getLabel: (option) => option.label,
  getValue: (option) => option.id,
  placeholder: "Selecione",
  searchable: true,
  enableDeselect: false,
};
