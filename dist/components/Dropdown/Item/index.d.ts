import { ButtonHTMLAttributes } from "react";
import "./variables.scss";
interface Item extends ButtonHTMLAttributes<HTMLButtonElement> {
}
declare const Item: ({ className, ...props }: Item) => import("react/jsx-runtime").JSX.Element;
export default Item;
