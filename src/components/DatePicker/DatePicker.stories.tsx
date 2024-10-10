import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DatePicker } from ".";
import { IFilterPeriod } from "./types";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
  decorators: [
    (Story) => {
      return (
        <div
          style={{
            maxWidth: 600,
            position: "absolute",
            top: 0,
          }}
        >
          <Story />
        </div>
      );
    },
  ],
} as Meta;

export const RangeMode: StoryFn = () => {
  const handleToggle = () => alert("Toggle DatePicker");

  const handlePickDate = (period: IFilterPeriod | undefined) => {
    console.log("Período selecionado:", period);
  };

  return (
    <DatePicker
      isOpen={true}
      mode="range"
      handleToggle={handleToggle}
      handlePickDate={handlePickDate}
    />
  );
};

export const SingleMode: StoryFn = () => {
  const handlePickDate = (period: string | undefined) => {
    console.log(period);
  };

  return (
    <DatePicker
      isOpen={true}
      handlePickDate={handlePickDate}
      mode="single"
      handleToggle={() => alert("Toggle DatePicker")}
    />
  );
};
