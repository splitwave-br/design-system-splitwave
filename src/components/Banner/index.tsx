import { ReactNode } from "react";
import classnames from "classnames";
import styles from "./styles.module.scss";
import variants from "./variants.module.scss";
import "./variables.scss";

export type TBannerVariants = "informative" | "danger";

export type TBannerProps = {
  children: ReactNode;
  variant?: TBannerVariants;
  className?: string;
};

export const Banner = ({
  children,
  variant = "informative",
  className,
  ...props
}: TBannerProps) => {
  return (
    <div
      {...props}
      className={classnames(styles.wrapper, className, {
        [variants[variant]]: variant,
      })}
    >
      {children}
    </div>
  );
};
