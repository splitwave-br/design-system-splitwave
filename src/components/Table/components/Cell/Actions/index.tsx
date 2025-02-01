import { TCell } from "@/components/Table/types";
import { Dropdown } from "@/components/Dropdown";
import styles from "./styles.module.scss";
import { ForwardedRef } from "react";
import { Icon } from "@/components/Icon";

type TProps = TCell & {
  children: React.ReactNode;
  onClick?: (...args: any) => any;
  isFixed?: boolean;
  renderTrigger?: (props: any, ref: ForwardedRef<any>) => React.ReactNode;
};

export const Actions = ({
  children,
  renderTrigger,
  isFixed,
  onClick,
}: TProps) => {
  return (
    <div onClick={onClick} className={isFixed ? styles.isFixed : ""}>
      <Dropdown.Container>
        <Dropdown.Trigger className={renderTrigger ? "" : styles.trigger}>
          {renderTrigger ? renderTrigger : <Icon name="more" />}
        </Dropdown.Trigger>
        <Dropdown.Menu>{children}</Dropdown.Menu>
      </Dropdown.Container>
    </div>
  );
};
