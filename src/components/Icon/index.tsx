import styles from "./styles.module.scss";
import Access from "./components/Access";
import Alert from "./components/Alert";
import AlertCircle from "./components/AlertCircle";
import { AlertTriangle } from "./components/AlertTriangle";
import { AnalyticsUp } from "./components/AnalyticsUp";
import ArrowBack from "./components/ArrowBack";
import ArrowDown from "./components/ArrowDown";
import ArrowLeft from "./components/ArrowLeft";
import ArrowRight from "./components/ArrowRight";
import ArrowUp from "./components/ArrowUp";
import Back from "./components/Back";
import Bank from "./components/Bank";
import Billing from "./components/Billing";
import Block from "./components/Block";
import Box from "./components/Box";
import Calendar from "./components/Calendar";
import Cancel from "./components/Cancel";
import Chart from "./components/Chart";
import { ChartLineData } from "./components/ChartLineData";
import Check from "./components/Check";
import { CheckCircle } from "./components/CheckCircle";
import ChevronDown from "./components/ChevronDown";
import { Circle } from "./components/Circle";
import Clients from "./components/Clients";
import Close from "./components/Close";
import CloseMenu from "./components/CloseMenu";
import { CoinStack } from "./components/CoinStack";
import Config from "./components/Config";
import { Copy } from "./components/Copy";
import CreditCard from "./components/CreditCard";
import Customer from "./components/Customer";
import Divide from "./components/Divide";
import DollarSign from "./components/DollarSign";
import { Download } from "./components/Download";
import Dropdown from "./components/Dropdown";
import { Edit } from "./components/Edit";
import Eye from "./components/Eye";
import EyeOff from "./components/EyeOff";
import File from "./components/File";
import { FileText } from "./components/FileText";
import { Folder } from "./components/Folder";
import Forward from "./components/Forward";
import { Gift } from "./components/Gift";
import Home from "./components/Home";
import Info from "./components/Info";
import InformationCircle from "./components/InformationCircle";
import Invoice from "./components/Invoice";
import { Link } from "./components/Link";
import Loading from "./components/Loading";
import Lock from "./components/Lock";
import Logout from "./components/Logout";
import Menu from "./components/Menu";
import { MoneyBag } from "./components/MoneyBag";
import MoneyExchange from "./components/MoneyExchange";
import { MoneySend } from "./components/MoneySend";
import MoneyUp from "./components/MoneyUp";
import More from "./components/More";
import { Package } from "./components/Package";
import PaintBoard from "./components/PaintBoard";
import PencilEdit from "./components/PencilEdit";
import Percent from "./components/Percent";
import Pix from "./components/Pix";
import Plus from "./components/Plus";
import Profile from "./components/Profile";
import Refresh from "./components/Refresh";
import RelationshipStroke from "./components/RelationshipStroke";
import { Search } from "./components/Search";
import SecurityCheck from "./components/SecurityCheck";
import SecurityError from "./components/SecurityError";
import SecurityLock from "./components/SecurityLock";
import { Settings } from "./components/Settings";
import { Shopify } from "./components/Shopify";
import { ShoppingBag } from "./components/ShoppingBag";
import { ShoppingBag3 } from "./components/ShoppingBag3";
import { ShoppingCart } from "./components/ShoppingCart";
import Sort from "./components/Sort";
import { SourceCode } from "./components/SourceCode";
import Swap from "./components/Swap";
import Swap2 from "./components/Swap2";
import { Tag } from "./components/Tag";
import Tax from "./components/Tax";
import Ticket from "./components/Ticket";
import { Trash } from "./components/Trash";
import { Truck } from "./components/Truck";
import UploadCloud from "./components/UploadCloud";
import { User } from "./components/User";
import { UserMultiple } from "./components/UserMultiple";
import { Webhook } from "./components/Webhook";
import { X } from "./components/X";
import { XCircle } from "./components/XCircle";
import CheckIcon from "./components/CheckIcon";
import MoneyDown from "./components/MoneyDown";

const icons = {
  access: Access,
  alert: Alert,
  "alert-circle": AlertCircle,
  "alert-triangle": AlertTriangle,
  "analytics-up": AnalyticsUp,
  "arrow-back": ArrowBack,
  "arrow-down": ArrowDown,
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "arrow-up": ArrowUp,
  back: Back,
  bank: Bank,
  billing: Billing,
  block: Block,
  box: Box,
  calendar: Calendar,
  cancel: Cancel,
  chart: Chart,
  "chart-line-data": ChartLineData,
  check: Check,
  "check-circle": CheckCircle,
  "chevron-down": ChevronDown,
  circle: Circle,
  clients: Clients,
  close: Close,
  "close-menu": CloseMenu,
  "coin-stack": CoinStack,
  config: Config,
  copy: Copy,
  "credit-card": CreditCard,
  customer: Customer,
  divide: Divide,
  "dollar-sign": DollarSign,
  download: Download,
  dropdown: Dropdown,
  edit: Edit,
  eye: Eye,
  "eye-off": EyeOff,
  file: File,
  "file-text": FileText,
  folder: Folder,
  forward: Forward,
  gift: Gift,
  home: Home,
  info: Info,
  "information-circle": InformationCircle,
  invoice: Invoice,
  link: Link,
  loading: Loading,
  lock: Lock,
  logout: Logout,
  menu: Menu,
  "money-down": MoneyDown,
  "money-up": MoneyUp,
  "money-exchange": MoneyExchange,
  more: More,
  "money-send": MoneySend,
  "money-bag": MoneyBag,
  package: Package,
  "paint-board": PaintBoard,
  "pencil-edit": PencilEdit,
  percent: Percent,
  pix: Pix,
  plus: Plus,
  profile: Profile,
  refresh: Refresh,
  "relationship-stroke": RelationshipStroke,
  search: Search,
  "security-check": SecurityCheck,
  "security-error": SecurityError,
  "security-lock": SecurityLock,
  settings: Settings,
  shopify: Shopify,
  "shopping-bag": ShoppingBag,
  "shopping-bag-3": ShoppingBag3,
  "shopping-cart": ShoppingCart,
  "source-code": SourceCode,
  sort: Sort,
  swap: Swap,
  swap2: Swap2,
  tag: Tag,
  tax: Tax,
  ticket: Ticket,
  trash: Trash,
  truck: Truck,
  "upload-cloud": UploadCloud,
  user: User,
  "user-multiple": UserMultiple,
  webhook: Webhook,
  x: X,
  "x-circle": XCircle,
  checkIcon: CheckIcon,
};

export type TIconSizes = "nano" | "micro" | 1 | 2 | 3 | 4;

export type TIcons = keyof typeof icons;

type TIcon = {
  name: TIcons;
  size?: TIconSizes;
  className?: string;
};

export const Icon = ({ name, size = 2, className }: TIcon) => {
  const Icon = icons[name];
  const stylesIcon = [styles[`size-${size}`], className].join(" ");

  return (
    <figure className={stylesIcon}>
      <Icon />
    </figure>
  );
};
