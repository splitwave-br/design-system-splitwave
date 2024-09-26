import { Dropdown } from "@/components/Dropdown";
import { FilterFieldsProvider } from "../../hooks/useFields";

type TContainer = {
  children: React.ReactNode;
};

export const Container = ({ children }: TContainer) => {
  return (
    <FilterFieldsProvider>
      <Dropdown.Container>{children}</Dropdown.Container>
    </FilterFieldsProvider>
  );
};
