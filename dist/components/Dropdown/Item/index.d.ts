import { ButtonHTMLAttributes } from "react";
import "./variables.scss";
interface Item extends ButtonHTMLAttributes<HTMLButtonElement> {
    shouldCloseOnClick?: boolean;
}
declare const Item: ({ className, shouldCloseOnClick, onClick, ...props }: Item) => import("react/jsx-runtime").JSX.Element;
export default Item;
