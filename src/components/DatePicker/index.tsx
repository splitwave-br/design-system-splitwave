"use client";

import React, { useEffect, useRef, useState } from "react";
import { DateRange, DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";

import useWindowSize from "@/hooks/useWindowSize";
import { Button } from "@/components/Button";

import styles from "./styles.module.scss";
import "./variables.scss";
import { format } from "date-fns";
import { DatePickerProps } from "./types";
import "react-day-picker/dist/style.css";
import { adjustHorizontalPosition } from "./utils/adjustHorizontalPosition";
import useClickOutside from "@/hooks/useClickOutside";

const defaultClassNames = {
  root: styles.rdpRoot,
  months: styles.months,
  month: styles.monthContainer,
  row: styles.tableRow,
  tbody: styles.tableBody,
  head_row: styles.headRow,
  head_cell: styles.weekDay,
  day: styles.day,
  table: styles.table,
  day_selected: styles.selectedDay,
  caption: styles.caption,
  caption_label: styles.monthLabel,
  cell: styles.cell,
  day_range_middle: styles.range,
  day_range_end: styles.rangeEnd,
  day_range_start: styles.rangeStart,
  day_today: styles.today,
  day_outside: styles.dayOutside,
  day_hidden: styles.dayOutside,
  button_reset: styles.buttonReset,
};

const today = new Date();
const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1);
export const DatePicker = ({
  isOpen,
  mode,
  parentRef,
  formatter,
  handleToggle,
  handlePickDate,
}: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<
    DateRange | Date | undefined
  >();
  const datePickerRef = useRef<HTMLDivElement>(null);
  const { size } = useWindowSize();

  const isSmallScreen = (size?.width || 1366) < 768;
  const numberOfMonths = isSmallScreen ? 1 : 2;

  useClickOutside({
    callback: handleToggle,
    isActive: isOpen,
    ref: datePickerRef,
  });

  useEffect(() => {
    adjustHorizontalPosition(datePickerRef, parentRef);
  }, [isOpen]);

  const formatDate = (date: Date) => {
    const formattedDate = formatter
      ? formatter?.(date)
      : format(date, "yyyy-MM-dd");
    return formattedDate;
  };

  const handleApplyClick = () => {
    if (!selectedDate) {
      handlePickDate(undefined);
      handleToggle();
      return;
    }

    if (mode === "range") {
      const { from, to } = selectedDate as DateRange;
      if (!from) {
        handlePickDate(undefined);
        handleToggle();
        return;
      }

      const startDate = formatDate(from);
      const endDate = formatDate(to || from);
      handlePickDate({ startDate, endDate });
      handleToggle();
      return;
    }

    const singleDate = selectedDate as Date;
    handlePickDate(formatDate(singleDate));
    handleToggle();
  };

  const combinedClassNames = {
    ...defaultClassNames,
    ...(isSmallScreen
      ? { nav_button: styles.navButton, nav: styles.rdpNav }
      : { nav_button: styles.iconNav }),
  };

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
    numberOfMonths,
    classNames: combinedClassNames,
    onSelect: setSelectedDate,
    ...modeSpecificProps,
  };

  if (!isOpen) return null;

  return (
    <div className={styles.container} ref={datePickerRef}>
      <DayPicker {...commonProps} />
      <div className={styles.footer}>
        <Button variant="outline" onClick={handleToggle}>
          Cancelar
        </Button>
        <Button onClick={handleApplyClick}>Aplicar</Button>
      </div>
    </div>
  );
};
