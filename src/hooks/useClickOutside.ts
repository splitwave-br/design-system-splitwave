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
    if (!isActive) return;

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedInsideRef = ref.current?.contains(target);
      const clickedInsideException = exceptionRef?.current?.contains(target);

      if (!clickedInsideRef && !clickedInsideException) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive, ref, callback]);
};
