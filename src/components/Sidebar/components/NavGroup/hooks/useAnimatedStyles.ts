import { useMemo } from "react";

type TUseAnimatedStyles = {
  routes: any;
  isOpened?: boolean;
};

export const useAnimatedStyles = ({ routes, isOpened }: TUseAnimatedStyles) => {
  const calculatedHeight = useMemo(() => {
    const rows = routes.length * 32;
    const gaps = (routes.length - 1) * 8;
    const paddings = 8;

    return rows + gaps + paddings;
  }, [routes.children]);

  const animatedStyles = useMemo(() => {
    if (isOpened) {
      return {
        maxHeight: calculatedHeight,
      };
    }

    return {
      maxHeight: 0,
    };
  }, [isOpened, calculatedHeight]);

  return {
    animatedStyles,
  };
};
