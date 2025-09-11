import { Field } from "./components/Field";
import { Label } from "./components/Label";
import { RHFCheckbox } from "./components/RHFCheckbox";
import { RHFMultiselect } from "./components/RHFMultiSelect";
import { RHFRadioGroup } from "./components/RHFRadioGroup";
import { RHFRadioInput } from "./components/RHFRadioInput";
import { RHFSelect } from "./components/RHFSelect";
export * from "./controls";
export * from "./components/types";
export var Form = {
    Field: Field,
    Label: Label,
    Checkbox: RHFCheckbox,
    Select: RHFSelect,
    MultiSelect: RHFMultiselect,
    Radio: RHFRadioInput,
    RadioGroup: RHFRadioGroup
};
