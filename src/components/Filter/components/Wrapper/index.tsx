"use client";

import { FilterProvider, IFilterProviderProps } from "../../hooks/useFilter";

export const Wrapper = ({ children, register }: IFilterProviderProps) => {
  return <FilterProvider register={register}>{children}</FilterProvider>;
};
