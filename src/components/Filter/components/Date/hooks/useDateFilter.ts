import { IFilterPeriod } from "@/components/DatePicker/types";
import {
  END_DATE_FIELD,
  START_DATE_FIELD,
} from "@/components/Filter/constants/dateFilter";
import { useFilterFields } from "@/components/Filter/hooks/useFields";
import { useFilterContext } from "@/components/Filter/hooks/useFilter";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useEffect, useState } from "react";

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const translateDate = (dateString: string) => {
  const date = parseISO(dateString);
  const formatted = format(date, "MMM d, yyyy", { locale: ptBR });
  return capitalize(formatted);
};

export const useDateFilter = (props: any, isPeriod: boolean) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setFilter, getValue } = useFilterContext();
  const { registerField } = useFilterFields();

  const hasField = !isPeriod && "field" in props;

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleCleanPeriod = () => {
    setFilter(START_DATE_FIELD, "");
    setFilter(END_DATE_FIELD, "");
  };

  const handlePickDate = (date: string | IFilterPeriod | undefined) => {
    if (!date) {
      if (hasField) {
        setFilter(props.field, "");
        return;
      }
      handleCleanPeriod();
      return;
    }

    if (isPeriod && typeof date === "object") {
      setFilter(START_DATE_FIELD, date.startDate);
      setFilter(END_DATE_FIELD, date.endDate);
      return;
    }

    if (hasField) setFilter(props.field, date as string);
  };

  useEffect(() => {
    if (hasField) {
      registerField(props.field);
    } else {
      registerField(START_DATE_FIELD);
      registerField(END_DATE_FIELD);
    }
  }, [isPeriod, props]);

  const getSelectedDate = () => {
    const fieldValue = hasField
      ? { startDate: getValue(props.field), endDate: getValue(props.field) }
      : {
          startDate: getValue(START_DATE_FIELD),
          endDate: getValue(END_DATE_FIELD),
        };

    if (!fieldValue.startDate && !fieldValue.endDate) {
      return null;
    }

    return {
      startDate: translateDate(fieldValue.startDate),
      endDate: translateDate(fieldValue.endDate),
    };
  };
  const selectedDate = getSelectedDate();

  const buttonLabel = !!selectedDate
    ? `${selectedDate.startDate} - ${selectedDate.endDate}`
    : "Selecione";

  return {
    isOpen,
    handleToggle,
    handlePickDate,
    buttonLabel,
  };
};
