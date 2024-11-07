import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { FormProvider, useForm } from "react-hook-form";
import {Form} from '../../index'
import meta from "../../../ButtonLink/ButtonLink.stories";


export default {
    component: Form.Checkbox,
    tags: ["autodocs"], 
     decorators: [(Story) => {
    const decoratorForm = useForm();
    return (
      <FormProvider {...decoratorForm}>
          <Story />
      </FormProvider>
    );
  }],
} as Meta<typeof Form.Checkbox>


type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default checkbox",
    name: "example"
  },
};

