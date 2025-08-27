// RHFSelect.stories.tsx
import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import { RHFMultiselect, IRHFMultiSelect } from ".";

interface Option {
  id: string;
  label: string;
}

const options: Option[] = [
  { id: "1", label: "Opção 1" },
  { id: "2", label: "Opção 2" },
  { id: "3", label: "Opção 3" },
];

export default {
  component: RHFMultiselect,
  tags: ["autodocs"],
  argTypes: {
    searchable: { control: "boolean" },
    hasClear: { control: "boolean" },
    disableDeselect: { control: "boolean" },
  },
} as Meta<typeof RHFMultiselect>;

const FormWrapper = ({
  children,
  defaultValue = "",
}: {
  children: React.ReactNode;
  defaultValue?: string;
}) => {
  const methods = useForm({ defaultValues: { select: defaultValue } });

  const { watch } = methods;

  return (
    <FormProvider {...methods}>
      {children}
      <div style={{ margin: 50, maxWidth: 300 }}>
        Valores selecionados: {watch("select")}
      </div>
    </FormProvider>
  );
};

const Template: StoryFn<IRHFMultiSelect<Option>> = (args) => {
  return (
    <FormWrapper>
      <RHFMultiselect {...args} />
    </FormWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  name: "select",
  options,
  getLabel: (option: Option) => option.label,
  getValue: (option: Option) => option.id,
  placeholder: "Selecione opções",
};

export const WithClearButton = Template.bind({});
WithClearButton.args = {
  ...Default.args,
  hasClear: true,
};
