// RHFSelect.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";

import { RHFSelect } from ".";

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
  component: RHFSelect,
  tags: ["autodocs"],
} as Meta<typeof RHFSelect>;

type Story = StoryObj<typeof RHFSelect>;

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
      <div style={{ marginTop: 20 }}>Valor selecionado: {watch("select")}</div>
    </FormProvider>
  );
};

export const Default: Story = {
  render: () => (
    <FormWrapper>
      <RHFSelect
        asPortal
        name="select"
        options={options}
        getLabel={(opt) => opt.label}
        getValue={(opt) => opt.id}
        getId={(opt) => opt.id}
        placeholder="Selecione uma opção"
      />
    </FormWrapper>
  ),
};

export const PreSelected: Story = {
  render: () => {
    return (
      <FormWrapper defaultValue={"2"}>
        <RHFSelect
          asPortal
          name="select"
          options={options}
          getLabel={(opt) => opt.label}
          getValue={(opt) => opt.id}
          getId={(opt) => opt.id}
          placeholder="Selecione uma opção"
        />
      </FormWrapper>
    );
  },
};

export const Searchable: Story = {
  render: () => (
    <FormWrapper>
      <RHFSelect
        asPortal
        prefix={"search"}
        name="select"
        options={options}
        getLabel={(opt) => opt.label}
        getValue={(opt) => opt.id}
        getId={(opt) => opt.id}
        placeholder="Pesquise..."
        searchable
      />
    </FormWrapper>
  ),
};
