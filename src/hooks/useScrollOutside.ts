import { useEffect } from "react";

interface UseScrollOutsideProps {
  isActive: boolean;
  containerRef: React.RefObject<HTMLElement>;
  exceptionRef?: React.RefObject<HTMLElement>;
  onTrigger: () => void;
}

export const useScrollOutside = ({
  isActive,
  containerRef,
  exceptionRef,
  onTrigger,
}: UseScrollOutsideProps) => {
  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const handleScroll = (event: Event) => {
      const target = event.target as Node;
      if (
        containerRef.current?.contains(target) ||
        exceptionRef?.current?.contains(target)
      )
        return;

      onTrigger();
    };

    window.addEventListener("scroll", handleScroll, true);

    return () => {
      window.removeEventListener("scroll", handleScroll, true);
    };
  }, [isActive, containerRef, exceptionRef, onTrigger]);
};
