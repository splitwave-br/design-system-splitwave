import React from "react";
import { Meta, StoryObj } from "@storybook/react";

import { useForm } from "react-hook-form";
import {Form} from '../../index'
import meta from "../../../ButtonLink/ButtonLink.stories";

export default {
  component: Form.Checkbox,
  tags: ["autodocs"],
  decorators: [
    (Story) => {
      const decoratorForm = useForm();
      const { handleSubmit } = decoratorForm;
      const onSubmit = handleSubmit((data) => {
        console.log(data);
      });

      return (
        <Form.Container registerForm={decoratorForm} onSubmit={onSubmit}>
          <Story />
        </Form.Container>
      );
    },
  ],
} as Meta<typeof Form.Checkbox>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Default checkbox",
    name: "example",
  },
};
