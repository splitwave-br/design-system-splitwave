import { useFormContext } from "react-hook-form";
import { MultiSelectProps } from "../../controls/MultiSelect/types";
import { MultiSelect } from "../../controls/MultiSelect";

export interface IRHFMultiSelect<T>
  extends Omit<MultiSelectProps<T>, "onChange" | "values"> {
  name: string;
}

export const RHFMultiselect = <T,>({
  getLabel,
  getValue,
  options,
  name,
  ...props
}: IRHFMultiSelect<T>) => {
  const { watch, setValue } = useFormContext();

  const fieldSelectedValues = watch(name);

  const handleSelect = (optionValue: any) => {
    const currentValues = fieldSelectedValues ?? [];
    const isSelected = currentValues?.includes(optionValue);

    if (isSelected) {
      const updatedValues = currentValues.filter(
        (value: any) => value !== optionValue,
      );
      return setValue(name, updatedValues);
    }
    setValue(name, [...currentValues, optionValue]);
  };

  const handleRemoveValue = (optionValue: any) => {
    const updatedValues = fieldSelectedValues?.filter(
      (value: any) => value !== optionValue,
    );
    return setValue(name, updatedValues);
  };

  return (
    <MultiSelect
      onChange={handleSelect}
      getLabel={getLabel}
      getValue={getValue}
      onRemove={handleRemoveValue}
      options={options}
      value={fieldSelectedValues}
      {...props}
    />
  );
};
