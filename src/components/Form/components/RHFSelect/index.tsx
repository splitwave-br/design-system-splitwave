import { useFormContext } from "react-hook-form";

import { SelectProps } from "../../controls/Select/types";
import { Select } from "../../controls/Select";

export interface IRHFSelect<T> extends SelectProps<T> {
  name: string;
}

export const RHFSelect = <T,>({
  getLabel,
  getValue,
  onChange,
  options,
  name,
  ...props
}: IRHFSelect<T>) => {
  const { setValue, watch } = useFormContext();

  const value = watch(name);

  const handleSelect = (option: T | undefined) => {
    onChange?.(option);
    if (option) {
      return setValue(name, getValue(option), {
        shouldValidate: true,
      });
    }

    setValue(name, "", {
      shouldValidate: true,
    });
  };

  return (
    <Select
      onChange={handleSelect}
      getLabel={getLabel}
      getValue={getValue}
      options={options}
      value={value}
      {...props}
    />
  );
};
