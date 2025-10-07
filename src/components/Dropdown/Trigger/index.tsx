"use client";
import { Button, ButtonProps } from "@/components/Button";
import { forwardRef, ReactNode, Ref } from "react";

type OmittedButtonProps = Omit<ButtonProps, "children">;

export interface TriggerProps extends OmittedButtonProps {
  children:
    | ReactNode
    | ((
        props: OmittedButtonProps & { isOpen?: boolean },
        ref: Ref<HTMLButtonElement>,
      ) => ReactNode);
  isOpen?: boolean;
}

const Trigger = forwardRef<HTMLButtonElement, TriggerProps>(
  (
    { children, isOpen, variant = "tertiary", size = "medium", ...props },
    ref,
  ) => {
    if (typeof children === "function") {
      return children({ ...props, isOpen }, ref);
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
