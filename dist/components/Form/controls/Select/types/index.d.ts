import { TIcons } from "../../../../../components/Icon";
import { FloatingDirection } from "../../../../../hooks/useFloatingElement/hooks";
import { RefObject } from "react";
export interface SelectProps<T = any> extends BaseSelectProps<T> {
    searchable?: boolean;
    exceptionRef?: RefObject<HTMLElement> | undefined;
    enableDeselect?: boolean;
    prefix?: TIcons;
    suffix?: TIcons;
    triggerClassname?: string;
    menuContainerClassname?: string;
    menuInnerClassname?: string;
    onChange?: (option: T | undefined) => void;
}
export interface SelectMenuProps<T = any> extends BaseSelectProps<T> {
    animationDirection: FloatingDirection;
    menuContainerClassname?: string;
    menuInnerClassname?: string;
    handleGetIsSelected: (option: T) => boolean;
    onSelect: (option: T) => void;
}
export type TRenderItem<T> = {
    option: T;
    className: string;
    onClick: (option: T) => any;
};
export interface BaseSelectProps<T> extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "onSelect" | "onChange"> {
    options: T[];
    withDivider?: boolean;
    getLabel: (option: T) => string;
    getValue: (option: T) => string;
    renderItem?: (params: TRenderItem<T>) => React.ReactNode;
    asPortal?: boolean;
}
