import { Field } from "./components/Field";
import { Label } from "./components/Label";
import { RHFCheckbox } from "./components/RHFCheckbox";
export declare const Form: {
    Field: typeof Field;
    Label: typeof Label;
    Checkbox: typeof RHFCheckbox;
    Container: <FieldValues extends {}>({ children, onSubmit, registerForm, ...props }: {
        children?: import("react").ReactNode | undefined;
    } & {
        onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
        registerForm: import("react-hook-form").UseFormReturn<FieldValues>;
        className?: string;
    }) => import("react/jsx-runtime").JSX.Element;
};
