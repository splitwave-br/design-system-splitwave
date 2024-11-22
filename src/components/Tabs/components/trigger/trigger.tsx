"use client";

import { usePathname } from "next/navigation";
import styles from "./styles.module.scss";
import Link from "next/link";

interface TriggerProps {
  path: string;
  children: React.ReactNode;
  isDisabled?: boolean;
  currentPath?: string;
  relatedPath?: string;
}

const Trigger = ({
  path,
  children,
  isDisabled = false,
  currentPath,
  relatedPath,
}: TriggerProps) => {
  const pathName = currentPath || usePathname();
  const isActive =
    pathName === path || (relatedPath && pathName.includes(relatedPath));
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
