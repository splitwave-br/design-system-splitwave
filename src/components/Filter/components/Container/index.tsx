import { Dropdown } from "@/components/Dropdown";

type TContainer = {
  children: React.ReactNode;
};

export const Container = ({ children }: TContainer) => {
  return <Dropdown.Container>{children}</Dropdown.Container>;
};
