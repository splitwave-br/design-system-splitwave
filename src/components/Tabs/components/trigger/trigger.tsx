import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import Link from "next/link";

interface TriggerProps {
  path: string;
  children: ReactNode;
  isDisabled?: boolean;
  currentPath?: string;
}

const Trigger = ({
  path,
  children,
  isDisabled = false,
  currentPath,
}: TriggerProps) => {
  const pathName = currentPath || usePathname();
  const isActive = pathName === path;
  const tabStyles = [
    styles.trigger,
    isActive && styles.active,
    isDisabled && styles.disabled,
  ].join(" ");

  return (
    <Link aria-disabled={isDisabled} href={path} className={tabStyles}>
      {children}
    </Link>
  );
};

export default Trigger;
