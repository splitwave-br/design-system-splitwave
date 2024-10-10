import { DatePickerProps } from "@/components/DatePicker/types";

interface BaseDateFilterProps extends Pick<DatePickerProps, "formatter"> {
  isPeriod: boolean;
  label?: string;
}

interface SingleDateFilterProps extends BaseDateFilterProps {
  isPeriod: false;
  field: string;
}

interface RangeDateFilterProps extends Omit<BaseDateFilterProps, "field"> {
  isPeriod: true;
}

export type DateFilterProps = SingleDateFilterProps | RangeDateFilterProps;
