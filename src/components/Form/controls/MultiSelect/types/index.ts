import { BaseSelectProps, ScrollStrategy } from "../../Select/types";

export interface MultiSelectProps<T> extends Omit<BaseSelectProps<T>, "value"> {
  value: T[];
  disableDeselect?: boolean;
  hasClear?: boolean;
  onChange?: (optionValue: any) => void;
  onRemove?: (optionValue?: any) => void;
  scrollStrategy?: ScrollStrategy
}
