import { TButtonVariants } from "../../components/Button";
import { TIcons } from "../Icon";
import './variables.scss';
interface TConfirmationModalIcon {
    name: TIcons;
    variant: "default" | "danger";
}
export interface ConfirmationModalProps {
    onConfirm: any;
    title: string;
    icon?: TConfirmationModalIcon;
    actionTitle?: string;
    description?: string;
    confirmationText: string;
    actionVariant?: TButtonVariants;
}
export declare const ConfirmationModal: ({ title, confirmationText, actionTitle, description, icon, actionVariant, onConfirm, }: ConfirmationModalProps) => import("react/jsx-runtime").JSX.Element;
export default ConfirmationModal;
