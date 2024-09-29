import { TCell } from "@/components/Table/types";
import { Dropdown } from "@/components/Dropdown";
import styles from "./styles.module.scss";
import { ForwardedRef } from "react";

type TProps = TCell & {
  children: React.ReactNode;
  onClick?: (...args: any) => any;
  isFixed?: boolean;
  renderTrigger?: (props: any, ref: ForwardedRef<any>) => React.ReactNode;
};

export const Actions = ({ children, renderTrigger, isFixed, onClick }: TProps) => {
  return (
    <div onClick={onClick} className={isFixed ? styles.isFixed : ""}>
      <Dropdown.Container>
        <Dropdown.Trigger>{renderTrigger}</Dropdown.Trigger>
        <Dropdown.Menu>{children}</Dropdown.Menu>
      </Dropdown.Container>
    </div>
  );
};
