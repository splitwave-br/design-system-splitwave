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
  parameters: {
    layout: "centered",
  },
} as Meta;

export const RangeMode: StoryFn = () => {
  const handleToggle = () => alert("Toggle DatePicker");
  const handleSetCustomDate = (period: IFilterPeriod | Date | undefined) =>
    console.log("Selected Date", period);

  return (
    <DatePicker
      isOpen={true}
      mode="range"
      handleToggle={handleToggle}
      handleSetCustomDate={handleSetCustomDate}
    />
  );
};

export const SingleMode: StoryFn = () => {
  const handleToggle = () => alert("Toggle DatePicker");
  const handleSetCustomDate = (period: IFilterPeriod | Date | undefined) =>
    console.log("Selected Date", period);

  return (
    <DatePicker
      isOpen={true}
      mode="single"
      handleToggle={handleToggle}
      handleSetCustomDate={handleSetCustomDate}
    />
  );
};
