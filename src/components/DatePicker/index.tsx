"use client";

import React, { useEffect, useRef, useState } from "react";
import { concatStyles } from "@/utils/concatStyles";
import { DateRange, DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";

import useWindowSize from "@/hooks/useWindowSize";
import { Button } from "@/components/Button";

import styles from "./styles.module.scss";
import { format } from "date-fns";
import { IFilterPeriod } from "./types";
import { Dropdown } from "../Dropdown";
import "react-day-picker/dist/style.css";

interface DatePickerProps {
  isOpen: boolean;
  mode?: "range" | "single";
  handleToggle: () => void;
  handleSetCustomDate: (period: IFilterPeriod | Date | undefined) => void;
}

const defaultClassNames = {
  root: styles.rdpRoot,
  month: styles.monthContainer,
  months: styles.months,
  table: styles.rdpTable,
  day_today: styles.actualDay,
  day: styles.day,
  day_selected: styles.selectedDay,
  day_range_start: styles.selectedStart + " selectedEnd",
  day_range_middle: styles.selectedRange + " selectedRange",
  day_range_end: styles.selectedEnd + " selectedEnd",
  day_outside: styles.dayHidden,
  caption_label: styles.month,
  row: styles.tableRow,
  tbody: styles.tableBody,
  head_row: styles.headRow,
  head_cell: styles.weekDay,
  button: styles.rdpButton,
  button_reset: styles.rdpButton,
};
const today = new Date();
const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1);

export const DatePicker = ({
  isOpen,
  mode = "range",
  handleToggle,
  handleSetCustomDate,
}: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<
    DateRange | Date | undefined
  >();
  const datePickerRef = useRef<HTMLDivElement>(null);
  const { size } = useWindowSize();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (datePickerRef.current && !datePickerRef.current.contains(target)) {
        handleToggle();
      }
    };
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, handleToggle]);

  const handleClick = () => {
    if (!selectedDate) {
      return handleSetCustomDate(undefined);
    }

    if (typeof selectedDate === "object") {
      const { from, to } = selectedDate as DateRange;
      if (!from) {
        return handleSetCustomDate(undefined);
      }
      const formattedDateFrom = format(from, "yyyy-MM-dd");
      const formattedDateTo = format(to || from, "yyyy-MM-dd");
      const period: IFilterPeriod = {
        startDate: formattedDateFrom,
        endDate: formattedDateTo,
      };
      handleSetCustomDate(period);
      return;
    }
    const formattedDate = format(selectedDate, "yyyy-MM-dd");
    const period: IFilterPeriod = {
      startDate: formattedDate,
      endDate: formattedDate,
    };
    handleSetCustomDate(period);
  };

  const numberOfMonths = (size?.width || 1366) <= 1025 ? 1 : 2;
  const isSmallScreen = (size?.width || 1366) < 1024;

  const mobileClassNames = isSmallScreen
    ? {
        caption: styles.rdpCaption,
        nav_button: styles.navButton,
        nav: styles.rdpNav,
      }
    : {};

  const combinedClassNames = { ...defaultClassNames, ...mobileClassNames };

  const modeSpecificProps =
    mode === "range"
      ? {
          mode: "range" as const,
          selected: selectedDate as DateRange,
        }
      : {
          mode: "single" as const,
          selected: selectedDate as Date,
        };

  const commonProps = {
    locale: ptBR,
    defaultMonth: oneMonthAgo,
    showOutsideDays: true,
    fixedWeeks: true,
    disabled: { after: today },
    numberOfMonths,
    classNames: combinedClassNames,
    ...modeSpecificProps,
    onSelect: setSelectedDate,
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className={styles.monthsContainer} ref={datePickerRef}>
      <DayPicker
        {...commonProps}
        classNames={{
          ...commonProps.classNames,
          cell: concatStyles([styles.cell, mode === "single" && styles.single]),
        }}
      />
      <Dropdown.Divider />
      <div className={styles.datePickerFooter}>
        <Button onClick={handleToggle} variant="outline">
          Cancelar
        </Button>
        <Button onClick={handleClick}>Aplicar</Button>
      </div>
    </div>
  );
};
