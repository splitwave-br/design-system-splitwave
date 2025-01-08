"use client";

import { useToggle } from "@/hooks/useToggle";
import React, { createContext, useContext } from "react";

interface IDropdownContextData {
  isOpen: boolean;
  toggleDropdown: () => void;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DropdownProviderProps extends IDropdownContextData {
  children: React.ReactNode;
}
const DropdownContext = createContext({} as IDropdownContextData);

function DropdownProvider({ children, ...props }: DropdownProviderProps) {
  return (
    <DropdownContext.Provider
      value={{
        ...props,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
}
function useDropdown(): IDropdownContextData {
  const context = useContext(DropdownContext);

  if (context === undefined) {
    throw new Error(
      "useDropdown must be used within a DropdownContextProvider",
    );
  }
  return context;
}

export { DropdownProvider, useDropdown };
