"use client";

import React, { useEffect, useRef, useState } from "react";
import { concatStyles } from "@/utils/concatStyles";
import { DateRange, DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";

import useWindowSize from "@/hooks/useWindowSize";
import { Button } from "@/components/Button";

import styles from "./styles.module.scss";
import { format } from "date-fns";
import { DatePickerProps, IFilterPeriod } from "./types";
import "react-day-picker/dist/style.css";

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
};

const today = new Date();
const oneMonthAgo = new Date(today.getFullYear(), today.getMonth() - 1);
export const DatePicker = ({
  isOpen,
  mode,
  align = "start",
  formatter,
  handleToggle,
  handlePickDate,
}: DatePickerProps) => {
  const [selectedDate, setSelectedDate] = useState<
    DateRange | Date | undefined
  >();
  const datePickerRef = useRef<HTMLDivElement>(null);
  const { size } = useWindowSize();

  const isSmallScreen = (size?.width || 1366) < 1024;
  const numberOfMonths = isSmallScreen ? 1 : 2;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const isOutsideClick =
        datePickerRef.current &&
        !datePickerRef.current.contains(event.target as Node);

      if (isOutsideClick) handleToggle();
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, handleToggle]);

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
      : {}),
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

  const containerStyles = concatStyles([
    styles.container,
    styles[`align__${align}`],
  ]);

  if (!isOpen) return null;

  return (
    <div className={containerStyles} ref={datePickerRef}>
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
