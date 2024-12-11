import { ButtonProps } from "../../../components/Button";
import "./variables.scss";
export type TTriggerVariants = 'primary' | 'secondary';
export interface TriggerProps extends ButtonProps {
    children: any;
    isOpen?: boolean;
    variant?: TTriggerVariants;
}
declare const Trigger: import("react").ForwardRefExoticComponent<TriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export default Trigger;
