import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { FormProvider, useForm } from "react-hook-form";
import { Form } from "../../index";
import { ThemePreview } from "../../../ThemePreview";

/**
 * `Form.Checkbox` é um componente de checkbox integrado ao `react-hook-form`,
 * permitindo fácil manipulação de estado e validação.
 *
 * Ele é baseado no `Checkbox` interno do design system, herdando suas props
 * (`label`, `disabled`, `disableHover`, etc.) e adicionando a prop `name`
 * para integração com formulários.
 *
 * ### Quando usar
 * - Quando precisar de um campo booleano controlado pelo `react-hook-form`
 * - Quando quiser manter consistência visual com o design system
 *
 * ### Props principais
 * - **name** _(string)_: chave do campo no form
 * - **label** _(string?)_: texto ao lado do checkbox
 * - **disabled** _(boolean?)_: desabilita interação
 * - **disableHover** _(boolean?)_: remove estilos de hover
 * - **onCheck** _(function?)_: callback chamado com o novo valor (boolean)
 *
 * ### Integração
 * Este componente **deve** estar dentro de um `<FormProvider>` para funcionar corretamente.
 */

export default {
  component: Form.Checkbox,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "Nome do campo no formulário (react-hook-form)",
      table: { category: "Form" },
    },
    label: {
      control: "text",
      description: "Texto exibido ao lado do checkbox",
      table: { category: "Aparência" },
    },
    disabled: {
      control: "boolean",
      description: "Desabilita interação",
      table: { category: "Aparência" },
    },
    disableHover: {
      control: "boolean",
      description: "Remove efeitos de hover",
      table: { category: "Aparência" },
    },
    className: {
      control: "text",
      description: "Classe CSS extra para o container",
      table: { category: "Estilo" },
    },
    onCheck: {
      action: "checked",
      description: "Callback disparado quando o valor muda",
      table: { category: "Eventos" },
    },
  },
  decorators: [
    (Story) => {
      const methods = useForm({
        defaultValues: {
          example: false,
        },
      });

      return (
        <ThemePreview>
          <FormProvider {...methods}>
            <Story />
          </FormProvider>
        </ThemePreview>
      );
    },
  ],
} as Meta<typeof Form.Checkbox>;

type Story = StoryObj<typeof Form.Checkbox>;

export const Default: Story = {
  args: {
    label: "Default checkbox",
    name: "example",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled checkbox",
    name: "example",
    disabled: true,
  },
};

export const WithOnCheck: Story = {
  args: {
    label: "Checkbox com callback",
    name: "example",
    onCheck: (value) => alert(`Novo valor: ${value}`),
  },
};
