import { TCell } from "../../../types";
type TProps = TCell & {
    children: string | Date;
    showTime?: boolean;
};
export declare const Date: ({ children, showTime }: TProps) => import("react/jsx-runtime").JSX.Element;
export {};
