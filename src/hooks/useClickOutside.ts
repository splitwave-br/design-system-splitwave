import { useEffect } from "react";

interface UseClickOutsideProps {
  ref: React.RefObject<HTMLElement>;
  callback: () => void;
  isActive: boolean;
  exceptionRef?: React.RefObject<HTMLElement>;
}

export const useClickOutside = ({
  ref,
  callback,
  isActive,
  exceptionRef,
}: UseClickOutsideProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const exceptionHasTarget =
        exceptionRef?.current && exceptionRef?.current?.contains(target);
      const refHasTarget = ref.current && ref.current.contains(target);

      if (!exceptionHasTarget && !refHasTarget) {
        callback();
      }
    };

    if (isActive) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive, ref, callback]);
};
