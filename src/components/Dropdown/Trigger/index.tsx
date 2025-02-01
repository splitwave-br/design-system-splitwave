"use client";
import { Button, ButtonProps } from "@/components/Button";
import { forwardRef } from "react";

export interface TriggerProps extends ButtonProps {
  children: any;
  isOpen?: boolean;
}

const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(
  (
    { children, isOpen, variant = "tertiary", size = "medium", ...props },
    ref,
  ) => {
    if (typeof children === "function") {
      return children(props, ref);
    }

    return (
      <Button variant={variant} size={size} ref={ref} {...props}>
        {children}
      </Button>
    );
  },
);

Trigger.displayName = "Trigger";
export default Trigger;
