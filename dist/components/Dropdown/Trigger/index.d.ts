import { ButtonProps } from "../../../components/Button";
export interface TriggerProps extends ButtonProps {
    children: any;
    isOpen?: boolean;
}
declare const Trigger: import("react").ForwardRefExoticComponent<TriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export default Trigger;
