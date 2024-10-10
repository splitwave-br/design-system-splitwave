export interface IFilterPeriod {
  startDate: string;
  endDate: string;
}

export interface DatePickerRangeProps {
  mode: "range";
  handlePickDate: (date: IFilterPeriod | undefined) => void;
}

export interface DatePickerSingleProps {
  mode: "single";
  handlePickDate: (date: string | undefined) => void;
}

export interface DatePickerCommonProps {
  isOpen: boolean;
  align?: "start" | "middle" | "end";
  handleToggle: () => void;
  formatter?: (date: Date) => string;
}

export type DatePickerProps = DatePickerCommonProps &
  (DatePickerRangeProps | DatePickerSingleProps);
