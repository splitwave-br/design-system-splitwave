import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import "./variables.scss";

interface Item extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Item = ({ className, ...props }: Item) => {
  const itemStyles = [styles.item, className].join(" ");
  return <button className={itemStyles} {...props} />;
};

export default Item;
