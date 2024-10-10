import React, { useRef, useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { DatePicker } from ".";
import { IFilterPeriod } from "./types";

export default {
  title: "Components/DatePicker",
  component: DatePicker,
} as Meta;

export const RangeMode: StoryFn = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const handleToggle = () => alert("Toggle DatePicker");

  const handlePickDate = (period: IFilterPeriod | undefined) => {
    console.log("Período selecionado:", period);
  };

  return (
    <div
      style={{
        margin: "0 auto",
        position: "relative",
      }}
      ref={parentRef}
    >
      <DatePicker
        parentRef={parentRef}
        isOpen={true}
        mode="range"
        handleToggle={handleToggle}
        handlePickDate={handlePickDate}
      />
    </div>
  );
};
