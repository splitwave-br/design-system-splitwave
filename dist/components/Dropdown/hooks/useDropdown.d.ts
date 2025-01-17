import React from "react";
interface IDropdownContextData {
    isOpen: boolean;
    toggleDropdown: () => void;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
interface DropdownProviderProps extends IDropdownContextData {
    children: React.ReactNode;
}
declare function DropdownProvider({ children, ...props }: DropdownProviderProps): import("react/jsx-runtime").JSX.Element;
declare function useDropdown(): IDropdownContextData;
export { DropdownProvider, useDropdown };
