import { useFormContext } from "react-hook-form";
import { MultiSelectProps } from "../../controls/MultiSelect/types";
import { MultiSelect } from "../../controls/MultiSelect";

export interface IRHFMultiSelect<T> extends Omit<MultiSelectProps<T>, "value"> {
  name: string;
}

export const RHFMultiselect = <T,>({
  getLabel,
  getValue,
  onChange,
  onRemove,
  options,
  name,
  ...props
}: IRHFMultiSelect<T>) => {
  const { watch, setValue } = useFormContext();

  const fieldSelectedValues = watch(name) ?? [];

  const selectedOptions = options.filter((opt) =>
    fieldSelectedValues.includes(getValue(opt)),
  );

  const handleSelect = (optionValue: any) => {
    onChange?.(optionValue);

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
    onRemove?.(optionValue);
    if (!optionValue) {
      return setValue(name, []);
    }

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
      value={selectedOptions}
      {...props}
    />
  );
};
