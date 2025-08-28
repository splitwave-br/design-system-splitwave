import { Meta, StoryFn } from "@storybook/react";
import { MultiSelect } from ".";
import { MultiSelectProps } from "./types";
import { ThemePreview } from "../../../ThemePreview";
import { useState } from "react";

interface Option {
  id: string;
  label: string;
}

const options: Option[] = [
  { id: "1", label: "Opção 1" },
  { id: "2", label: "Opção 2" },
  { id: "3", label: "Opção 3" },
  { id: "4", label: "Opção gigantesca de texto muito muito grande" },
  { id: "5", label: "Opção 5" },
  { id: "6", label: "Opção 6" },
  { id: "7", label: "Opção 7" },
  { id: "8", label: "Opção 8" },
  { id: "9", label: "Opção 9" },
  { id: "10", label: "Opção 10" },
  { id: "11", label: "Opção 11" },
];

export default {
  tags: ["autodocs"],
  component: MultiSelect,
  argTypes: {
    size: { control: "radio", options: [1, 2] },
    direction: { control: "radio", options: ["top", "bottom"] },
    hasClear: { control: "boolean" },
    disableDeselect: { control: "boolean" },
    prefix: { control: false },
  },
} as Meta<typeof MultiSelect>;

const Template: StoryFn<typeof MultiSelect> = (args) => {
  const typedArgs = args as MultiSelectProps<Option>;
  const [selected, setSelected] = useState<Option[]>([]);

  const handleSelect = (optionValue: any) => {
    const exists = selected.find(
      (opt) => typedArgs.getValue(opt) === optionValue,
    );

    if (exists) {
      return setSelected((prev) =>
        prev.filter((opt) => typedArgs.getValue(opt) !== optionValue),
      );
    }

    const newOption = typedArgs.options.find(
      (opt) => typedArgs.getValue(opt) === optionValue,
    );
    if (newOption) setSelected((prev) => [...prev, newOption]);
  };

  return (
    <ThemePreview>
      <div style={{ margin: 50, maxWidth: 300 }}>
        <MultiSelect
          {...typedArgs}
          value={selected}
          onChange={handleSelect}
          onRemove={(optionValue?: any) => {
            if (!optionValue) {
              setSelected([]);
            } else {
              setSelected((prev) =>
                prev.filter((opt) => typedArgs.getValue(opt) !== optionValue),
              );
            }
          }}
        />
      </div>
    </ThemePreview>
  );
};

export const Default = Template.bind({});
Default.args = {
  options,
  getLabel: (option: Option) => option.label,
  getValue: (option: Option) => option.id,
  placeholder: "Selecione uma opção",
};

export const CustomRenderItem = Template.bind({});
CustomRenderItem.args = {
  ...Default.args,
  renderItem: ({ option, className, onClick }) => (
    <div
      className={className}
      style={{ display: "flex", justifyContent: "space-between", padding: 8 }}
      onClick={() => onClick(option)}
    >
      {option.label}
      <span>🌟</span>
    </div>
  ),
};

export const WithClearButton = Template.bind({});
WithClearButton.args = {
  ...Default.args,
  hasClear: true,
};
