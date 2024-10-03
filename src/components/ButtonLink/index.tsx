import { ReactNode, useCallback } from "react";
import { useRouter } from "next/router";
import { Button, ButtonProps } from "@/components/Button";

export type ButtonLinkProps = ButtonProps & {
  href: string;
  children: ReactNode;
};

export const ButtonLink = ({ href, children, ...props }: ButtonLinkProps) => {
  const router = useRouter();

  const onClick = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    router.push(href);
  }, []);

  return (
    <Button {...props} onClick={onClick}>
      {children}
    </Button>
  );
};
