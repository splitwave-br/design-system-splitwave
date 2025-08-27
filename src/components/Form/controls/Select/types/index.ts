import { TIcons } from "@/components/Icon";
import { FloatingDirection } from "@/hooks/useFloatingElement/hooks";
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
  children?: React.ReactNode;
  handleGetIsSelected: (option: T) => boolean;
  onChange: (option: T) => void;
}

export type TRenderItem<T> = {
  option: T;
  onClick: () => any;
  isSelected: boolean;
};

export interface BaseSelectProps<T>
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onSelect" | "onChange"
  > {
  options: T[];
  getLabel: (option: T) => string;
  getValue: (option: T) => any;
  renderItem?: (params: TRenderItem<T>) => React.ReactNode;
  asPortal?: boolean;
}
