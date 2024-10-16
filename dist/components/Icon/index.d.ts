import { AlertTriangle } from "./components/AlertTriangle";
import { AnalyticsUp } from "./components/AnalyticsUp";
import Box from "./components/Box";
import { ChartLineData } from "./components/ChartLineData";
import { CheckCircle } from "./components/CheckCircle";
import { Circle } from "./components/Circle";
import { Copy } from "./components/Copy";
import { Download } from "./components/Download";
import { Edit } from "./components/Edit";
import { FileText } from "./components/FileText";
import { Folder } from "./components/Folder";
import { Gift } from "./components/Gift";
import { Link } from "./components/Link";
import Loading from "./components/Loading";
import { MoneyBag } from "./components/MoneyBag";
import { MoneySend } from "./components/MoneySend";
import { Package } from "./components/Package";
import { Search } from "./components/Search";
import { Settings } from "./components/Settings";
import { Shopify } from "./components/Shopify";
import { ShoppingBag } from "./components/ShoppingBag";
import { ShoppingBag3 } from "./components/ShoppingBag3";
import { ShoppingCart } from "./components/ShoppingCart";
import Sort from "./components/Sort";
import { SourceCode } from "./components/SourceCode";
import Swap2 from "./components/Swap2";
import { Tag } from "./components/Tag";
import { Trash } from "./components/Trash";
import { Truck } from "./components/Truck";
import { User } from "./components/User";
import { UserMultiple } from "./components/UserMultiple";
import { Webhook } from "./components/Webhook";
import { X } from "./components/X";
import { XCircle } from "./components/XCircle";
declare const icons: {
    access: () => import("react/jsx-runtime").JSX.Element;
    alert: () => import("react/jsx-runtime").JSX.Element;
    "alert-circle": () => import("react/jsx-runtime").JSX.Element;
    "alert-triangle": typeof AlertTriangle;
    "analytics-up": typeof AnalyticsUp;
    "arrow-back": () => import("react/jsx-runtime").JSX.Element;
    "arrow-down": () => import("react/jsx-runtime").JSX.Element;
    "arrow-left": () => import("react/jsx-runtime").JSX.Element;
    "arrow-right": () => import("react/jsx-runtime").JSX.Element;
    "arrow-up": () => import("react/jsx-runtime").JSX.Element;
    back: () => import("react/jsx-runtime").JSX.Element;
    bank: () => import("react/jsx-runtime").JSX.Element;
    billing: () => import("react/jsx-runtime").JSX.Element;
    block: () => import("react/jsx-runtime").JSX.Element;
    box: typeof Box;
    calendar: () => import("react/jsx-runtime").JSX.Element;
    cancel: () => import("react/jsx-runtime").JSX.Element;
    chart: () => import("react/jsx-runtime").JSX.Element;
    "chart-line-data": typeof ChartLineData;
    check: () => import("react/jsx-runtime").JSX.Element;
    "check-circle": typeof CheckCircle;
    "chevron-down": () => import("react/jsx-runtime").JSX.Element;
    circle: typeof Circle;
    clients: () => import("react/jsx-runtime").JSX.Element;
    close: () => import("react/jsx-runtime").JSX.Element;
    "close-menu": () => import("react/jsx-runtime").JSX.Element;
    "coin-stack": () => import("react/jsx-runtime").JSX.Element;
    config: () => import("react/jsx-runtime").JSX.Element;
    copy: typeof Copy;
    "credit-card": () => import("react/jsx-runtime").JSX.Element;
    customer: () => import("react/jsx-runtime").JSX.Element;
    date: () => import("react/jsx-runtime").JSX.Element;
    divide: () => import("react/jsx-runtime").JSX.Element;
    "dollar-sign": () => import("react/jsx-runtime").JSX.Element;
    download: typeof Download;
    dropdown: () => import("react/jsx-runtime").JSX.Element;
    edit: typeof Edit;
    eye: () => import("react/jsx-runtime").JSX.Element;
    "eye-off": () => import("react/jsx-runtime").JSX.Element;
    file: () => import("react/jsx-runtime").JSX.Element;
    "file-text": typeof FileText;
    folder: typeof Folder;
    forward: () => import("react/jsx-runtime").JSX.Element;
    gift: typeof Gift;
    home: () => import("react/jsx-runtime").JSX.Element;
    info: () => import("react/jsx-runtime").JSX.Element;
    "information-circle": () => import("react/jsx-runtime").JSX.Element;
    invoice: () => import("react/jsx-runtime").JSX.Element;
    link: typeof Link;
    loading: typeof Loading;
    lock: () => import("react/jsx-runtime").JSX.Element;
    logout: () => import("react/jsx-runtime").JSX.Element;
    menu: () => import("react/jsx-runtime").JSX.Element;
    "money-down": () => import("react/jsx-runtime").JSX.Element;
    "money-up": () => import("react/jsx-runtime").JSX.Element;
    "money-exchange": () => import("react/jsx-runtime").JSX.Element;
    more: () => import("react/jsx-runtime").JSX.Element;
    "money-send": typeof MoneySend;
    "money-bag": typeof MoneyBag;
    package: typeof Package;
    "paint-board": () => import("react/jsx-runtime").JSX.Element;
    "pencil-edit": () => import("react/jsx-runtime").JSX.Element;
    percent: () => import("react/jsx-runtime").JSX.Element;
    pix: () => import("react/jsx-runtime").JSX.Element;
    plus: () => import("react/jsx-runtime").JSX.Element;
    profile: () => import("react/jsx-runtime").JSX.Element;
    refresh: () => import("react/jsx-runtime").JSX.Element;
    "relationship-stroke": () => import("react/jsx-runtime").JSX.Element;
    search: typeof Search;
    "security-check": () => import("react/jsx-runtime").JSX.Element;
    "security-error": () => import("react/jsx-runtime").JSX.Element;
    "security-lock": () => import("react/jsx-runtime").JSX.Element;
    settings: typeof Settings;
    shopify: typeof Shopify;
    "shopping-bag": typeof ShoppingBag;
    "shopping-bag-3": typeof ShoppingBag3;
    "shopping-cart": typeof ShoppingCart;
    "source-code": typeof SourceCode;
    sort: typeof Sort;
    swap: () => import("react/jsx-runtime").JSX.Element;
    swap2: typeof Swap2;
    tag: typeof Tag;
    tax: () => import("react/jsx-runtime").JSX.Element;
    ticket: () => import("react/jsx-runtime").JSX.Element;
    trash: typeof Trash;
    truck: typeof Truck;
    "upload-cloud": () => import("react/jsx-runtime").JSX.Element;
    user: typeof User;
    "user-multiple": typeof UserMultiple;
    webhook: typeof Webhook;
    x: typeof X;
    "x-circle": typeof XCircle;
    checkIcon: () => import("react/jsx-runtime").JSX.Element;
    "zoom-in": () => import("react/jsx-runtime").JSX.Element;
    "zoom-out": () => import("react/jsx-runtime").JSX.Element;
};
export type TIconSizes = "nano" | "micro" | 1 | 2 | 3 | 4;
export type TIcons = keyof typeof icons;
type TIcon = {
    name: TIcons;
    size?: TIconSizes;
    className?: string;
};
export declare const Icon: ({ name, size, className }: TIcon) => import("react/jsx-runtime").JSX.Element;
export {};
