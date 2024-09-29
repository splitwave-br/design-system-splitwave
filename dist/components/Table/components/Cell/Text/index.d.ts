import { TCell } from "../../../../../components/Table/types";
type TProps = TCell & {
    children: React.ReactNode;
    isFixed?: boolean;
    shouldTruncateText?: boolean;
    canCopy?: boolean;
};
export declare const Text: ({ children, isFixed, shouldTruncateText, canCopy, }: TProps) => import("react/jsx-runtime").JSX.Element;
export {};
