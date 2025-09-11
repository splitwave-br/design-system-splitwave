import { concatStyles } from "@/utils/concatStyles";
import styles from "./styles.module.scss";
import { RadioOption, RadioVariant } from "../../controls/Radio/types";
import { RHFRadioInput } from "../RHFRadioInput";

export interface RHFRadioGroupProps {
  name: string;
  options: RadioOption[];
  variant?: RadioVariant;
  className?: string;
  onSelect?: (value: string) => void;
}

export const RHFRadioGroup = ({
  name,
  options,
  variant = "default",
  className,
  onSelect,
}: RHFRadioGroupProps) => {
  return (
    <div className={concatStyles([styles.radioOptions, className])}>
      {options.map((option, index) => (
        <RHFRadioInput
          key={`${name}-${option.value}-${index}`}
          id={`${name}-${option.value}-${index}`}
          name={name}
          label={option.label}
          value={option.value}
          variant={variant}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};
