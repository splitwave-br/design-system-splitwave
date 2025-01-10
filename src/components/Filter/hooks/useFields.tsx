"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useFilter } from "./useFilter";
import { useSyncUrlFilters } from "./useSyncUrlFilters";
import { useQueryParams } from "@/hooks/useQueryParams";

const FilterFieldsContext = createContext<{
  registerField: (field: string) => void;
  fields: string[];
} | null>(null);

export const useFilterFields = () => {
  const context = useContext(FilterFieldsContext);
  if (!context) {
    throw new Error(
      "useFilterFields deve ser usado dentro de um FilterFieldsProvider",
    );
  }
  return context;
};

export const FilterFieldsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [fields, setFields] = useState<string[]>([]);
  const { getAllParams } = useQueryParams();

  useEffect(() => {
    const filterParams = getAllParams();
    const uniqueFields = new Set<string>();

    Object.entries(filterParams).forEach(([field]) => {
      uniqueFields.add(field);
    });

    setFields(Array.from(uniqueFields));
  }, [getAllParams]);

  const registerField = useCallback((field: string) => {
    setFields((prevFields) => {
      if (!prevFields.includes(field)) {
        return [...prevFields, field];
      }
      return prevFields;
    });
  }, []);

  return (
    <FilterFieldsContext.Provider value={{ registerField, fields }}>
      {children}
    </FilterFieldsContext.Provider>
  );
};
