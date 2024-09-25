import { FilterFieldsProvider } from "../../hooks/useFields";
import { FilterProvider, IFilterProviderProps } from "../../hooks/useFilter";

export const Wrapper = ({ children, register }: IFilterProviderProps) => {
  return (
    <FilterProvider register={register}>
      <FilterFieldsProvider>{children}</FilterFieldsProvider>
    </FilterProvider>
  );
};
