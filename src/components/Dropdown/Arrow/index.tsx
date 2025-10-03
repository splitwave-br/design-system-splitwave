import { TIcon } from "@/components/Icon";
import { RotatingIcon } from "@/components/RotatingIcon";
import { useDropdown } from "../hooks/useDropdown";

export const Arrow = ({ ...props }: Partial<TIcon>) => {
  const { isOpen } = useDropdown();

  return <RotatingIcon isOpen={isOpen} {...props} />;
};
