"use client";
import { ButtonProps } from "../../../components/Button";
import { forwardRef } from "react";
import styles from "./styles.module.scss";
import "./variables.scss";
import { concatStyles } from "../../../utils/concatStyles";
import variants from './variants.module.scss'

export type TTriggerVariants = 'primary' | 'secondary';


export interface TriggerProps extends ButtonProps {
  children: any;
  isOpen?: boolean;
  variant?: TTriggerVariants
}

const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(
  ({ children, className, isOpen, variant = 'secondary', ...props }, ref) => {
    if (typeof children === "function") {
      return children(props, ref);
    }

    const triggerStyles = concatStyles([
      styles.wrapper,
      variants[`variant__${variant}`],
      className
    ]);

    return (
      <button ref={ref} className={triggerStyles} {...props}>
        {children}
      </button>
    );
  },
);

Trigger.displayName = "Trigger";
export default Trigger;
