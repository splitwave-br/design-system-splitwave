import { ReactNode } from "react";
interface TriggerProps {
    path: string;
    children: ReactNode;
    isDisabled?: boolean;
    currentPath?: string;
}
declare const Trigger: ({ path, children, isDisabled, currentPath, }: TriggerProps) => import("react/jsx-runtime").JSX.Element;
export default Trigger;
