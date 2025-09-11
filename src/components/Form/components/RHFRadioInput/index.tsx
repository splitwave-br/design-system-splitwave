import { useFormContext } from "react-hook-form";
import { Radio,  } from "../../controls/Radio";
import { RadioProps } from "../../controls/Radio/types";

export interface RHFRadioInputProps extends Omit<RadioProps, 'onSelect' | 'checked'> {
  name:string
  onSelect?: (value: string) => void;
}

export const RHFRadioInput = ({
  label,
  name,
  variant,
  className,
  id,
  value,
  onSelect,
}: RHFRadioInputProps) => {
  const { register, watch } = useFormContext();

  const fieldRegister = register(name);
  const { onChange, ref } = fieldRegister;

  const selected = watch(name);
  const checked = selected === value;

  const handleSelect = (val: string) => {
    onChange({ target: { value: val, name } });
    onSelect?.(val);
  };

  return (
    <Radio
      id={id}
      name={name}
      label={label}
      value={value}
      checked={checked}
      onSelect={handleSelect}
      ref={ref}
      variant={variant}
      className={className}
    />
  );
};
