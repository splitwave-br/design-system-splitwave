import React, { forwardRef, ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import variants from "./variants.module.scss";
import { concatStyles } from "@/utils/concatStyles";
import "./variables.scss";

export type ButtonSize = "medium" | "large";

export type TButtonVariants =
  | "primary"
  | "secondary"
  | "tertiary"
  | "link-gray"
  | "link-color"
  | "danger";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TButtonVariants;
  size?: ButtonSize;
  children: React.ReactNode;
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "medium",
      type = "button",
      disabled,
      loading,
      className,
      ...props
    },
    ref,
  ) => {
    const shouldIncreaseFontFamily =
      size === "large" && (variant === "link-color" || variant === "link-gray");

    const buttonStyles = concatStyles([
      styles.button,
      styles[`size__${size}`],
      variants[`variant__${variant}`],
      className ? className : "",
      shouldIncreaseFontFamily ? styles.textLarge : "",
      loading ? variants.loading : "",
    ]);

    return (
      <>
        {loading && <div className={styles.loading_overlay}> </div>}
        <button
          ref={ref}
          type={type}
          disabled={loading || disabled}
          className={buttonStyles}
          {...props}
        >
          {children}
        </button>
      </>
    );
  },
);

Button.displayName = "Button";
