import type { Meta, StoryObj } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import { RHFRadioGroup } from ".";
import { RadioOption } from "../../controls/Radio/types";

const meta: Meta<typeof RHFRadioGroup> = {
  component: RHFRadioGroup,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof RHFRadioGroup>;

const options: RadioOption[] = [
  { label: "Opção A", value: "a" },
  { label: "Opção B", value: "b" },
  { label: "Opção C", value: "c" },
];

const Template = (args: any) => {
  const methods = useForm({
    defaultValues: { choice: "a" },
  });

  const selected = methods.watch(args.name);

  return (
    <FormProvider {...methods}>
        <RHFRadioGroup {...args} />
        <span style={{ display: "block", marginTop: 8 }}>
          Valor selecionado: <strong>{selected}</strong>
        </span>
    </FormProvider>
  );
};

export const Default: Story = {
  render: (args) => <Template {...args} />,
  args: {
    name: "choice",
    options,
    variant: "default",
  },
};

export const SuccessVariant: Story = {
  render: (args) => <Template {...args} />,
  args: {
    name: "choice",
    options,
    variant: "success",
  },
};
