import { TCell } from "../../../../../components/Table/types";
type TProps = TCell & {
    children: React.ReactNode;
    isFixed?: boolean;
    shouldTruncateText?: boolean;
    canCopy?: boolean;
    onCopy?: () => void;
};
export declare const Text: ({ children, isFixed, shouldTruncateText, canCopy, onCopy, }: TProps) => import("react/jsx-runtime").JSX.Element;
export {};
