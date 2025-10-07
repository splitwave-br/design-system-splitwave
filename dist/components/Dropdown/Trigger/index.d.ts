import { ButtonProps } from "../../../components/Button";
import { ReactNode, Ref } from "react";
type OmittedButtonProps = Omit<ButtonProps, "children">;
export interface TriggerProps extends OmittedButtonProps {
    children: ReactNode | ((props: OmittedButtonProps & {
        isOpen?: boolean;
    }, ref: Ref<HTMLButtonElement>) => ReactNode);
    isOpen?: boolean;
}
declare const Trigger: import("react").ForwardRefExoticComponent<TriggerProps & import("react").RefAttributes<HTMLButtonElement>>;
export default Trigger;
