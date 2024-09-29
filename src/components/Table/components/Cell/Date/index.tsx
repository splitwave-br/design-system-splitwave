import { useMemo } from "react";
import dayjs from "dayjs";

import { TCell } from "../../../types";
import styles from "./styles.module.scss";

type TProps = TCell & {
  children: string | Date;
};

const convertDateToObject = (date: string | Date) => {
  if (!date) return null;

  const formattedDate = dayjs(date).format("DD/MM/YY");
  const formattedTime = dayjs(date).format("HH:mm");

  return {
    date: formattedDate,
    time: formattedTime,
  };
};

export const Date = ({ children }: TProps) => {
  const date = useMemo(() => {
    return convertDateToObject(children);
  }, [children]);

  if (!date)
    return (
      <div>
        <p>-</p>
      </div>
    );

  return (
    <div className={styles.cell}>
      <p>{date.date}</p>
      <time>{date.time}</time>
    </div>
  );
};
