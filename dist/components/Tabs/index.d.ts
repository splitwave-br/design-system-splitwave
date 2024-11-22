import "./variables.scss";
export interface ITabTrigger {
    label: string;
    path: string;
    isDisabled?: boolean;
    relatedPath?: string;
}
export interface ITabsProps {
    tabs: ITabTrigger[];
    currentPath?: string;
}
export declare const Tabs: ({ tabs, currentPath }: ITabsProps) => import("react/jsx-runtime").JSX.Element;
