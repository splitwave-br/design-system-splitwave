import { Field } from "./components/Field";
import { Label } from "./components/Label";
import { RHFCheckbox } from "./components/RHFCheckbox";
import { RHFMultiselect } from "./components/RHFMultiSelect";
import { RHFSelect } from "./components/RHFSelect";

export * from "./controls";
export * from "./components/types";

export const Form = {
  Field,
  Label,
  Checkbox: RHFCheckbox,
  Select: RHFSelect,
  MultiSelect: RHFMultiselect,
};
