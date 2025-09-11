import type { Meta, StoryObj } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import { RHFRadioInput } from ".";

const meta: Meta<typeof RHFRadioInput> = {
  component: RHFRadioInput,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof RHFRadioInput>;

const Template = (args: any) => {
  const methods = useForm({
    defaultValues: { choice: "a" },
  });

  const selected = methods.watch("choice");

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <RHFRadioInput {...args} />
        <span style={{ display: "block", marginTop: 8 }}>
          Valor selecionado: <strong>{selected}</strong>
        </span>
      </form>
    </FormProvider>
  );
};

export const Default: Story = {
  render: (args) => (
    <>
      <Template {...args} id="radio-a" value="a" label="Opção A" />
    </>
  ),
  args: {
    name: "choice",
    variant: "default",
  },
};
