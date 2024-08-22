"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const AlertCircle_1 = require("./components/AlertCircle");
const AlertTriangle_1 = require("./components/AlertTriangle");
const AnalyticsUp_1 = require("./components/AnalyticsUp");
const ArrowDown_1 = __importDefault(require("./components/ArrowDown"));
const ArrowLeftIcon_1 = require("./components/ArrowLeftIcon");
const ArrowRightIcon_1 = require("./components/ArrowRightIcon");
const ArrowUp_1 = __importDefault(require("./components/ArrowUp"));
const Back_1 = __importDefault(require("./components/Back"));
const BankIcon_1 = require("./components/BankIcon");
const Cancel_1 = __importDefault(require("./components/Cancel"));
const CalendarIcon_1 = require("./components/CalendarIcon");
const ChartLineDataIcon_1 = require("./components/ChartLineDataIcon");
const Check_1 = require("./components/Check");
const CheckCircle_1 = require("./components/CheckCircle");
const ChevronDownIcon_1 = require("./components/ChevronDownIcon");
const Circle_1 = require("./components/Circle");
const CoinStack_1 = __importDefault(require("./components/CoinStack"));
const Copy_1 = require("./components/Copy");
const CreditCard_1 = __importDefault(require("./components/CreditCard"));
const Divide_1 = __importDefault(require("./components/Divide"));
const DollarSign_1 = __importDefault(require("./components/DollarSign"));
const Download_1 = require("./components/Download");
const EditIcon_1 = require("./components/EditIcon");
const Eye_1 = __importDefault(require("./components/Eye"));
const EyeOff_1 = __importDefault(require("./components/EyeOff"));
const FileTextIcon_1 = require("./components/FileTextIcon");
const FolderIcon_1 = require("./components/FolderIcon");
const GiftIcon_1 = require("./components/GiftIcon");
const Info_1 = __importDefault(require("./components/Info"));
const Invoice_1 = __importDefault(require("./components/Invoice"));
const LinkIcon_1 = require("./components/LinkIcon");
const Loading_1 = require("./components/Loading");
const Lock_1 = __importDefault(require("./components/Lock"));
const LogOut_1 = require("./components/LogOut");
const Menu_1 = require("./components/Menu");
const MoneyBagIcon_1 = require("./components/MoneyBagIcon");
const MoneySendIcon_1 = require("./components/MoneySendIcon");
const PackageIcon_1 = require("./components/PackageIcon");
const PaintBoard_1 = __importDefault(require("./components/PaintBoard"));
const Percent_1 = __importDefault(require("./components/Percent"));
const Pix_1 = __importDefault(require("./components/Pix"));
const PlusIcon_1 = require("./components/PlusIcon");
const Refresh_1 = __importDefault(require("./components/Refresh"));
const SearchIcon_1 = require("./components/SearchIcon");
const SecurityCheck_1 = require("./components/SecurityCheck");
const SecurityError_1 = require("./components/SecurityError");
const SecurityLock_1 = require("./components/SecurityLock");
const Settings_1 = require("./components/Settings");
const ShopifyIcon_1 = require("./components/ShopifyIcon");
const ShoppingBag_1 = require("./components/ShoppingBag");
const ShoppingBag3_1 = require("./components/ShoppingBag3");
const ShoppingCartIcon_1 = require("./components/ShoppingCartIcon");
const SourceCodeIcon_1 = require("./components/SourceCodeIcon");
const TagIcon_1 = require("./components/TagIcon");
const TrashIcon_1 = require("./components/TrashIcon");
const TruckIcon_1 = require("./components/TruckIcon");
const UploadCloud_1 = __importDefault(require("./components/UploadCloud"));
const User_1 = require("./components/User");
const UserMultipleIcon_1 = require("./components/UserMultipleIcon");
const WebhookIcon_1 = require("./components/WebhookIcon");
const X_1 = require("./components/X");
const XCircle_1 = require("./components/XCircle");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const icons = {
    plus: PlusIcon_1.PlusIcon,
    search: SearchIcon_1.SearchIcon,
    cancel: Cancel_1.default,
    'chevron-down': ChevronDownIcon_1.ChevronDownIcon,
    'arrow-left': ArrowLeftIcon_1.ArrowLeftIcon,
    'arrow-right': ArrowRightIcon_1.ArrowRightIcon,
    edit: EditIcon_1.EditIcon,
    trash: TrashIcon_1.TrashIcon,
    'chart-line-data': ChartLineDataIcon_1.ChartLineDataIcon,
    back: Back_1.default,
    bank: BankIcon_1.BankIcon,
    'file-text': FileTextIcon_1.FileTextIcon,
    package: PackageIcon_1.PackageIcon,
    gift: GiftIcon_1.GiftIcon,
    link: LinkIcon_1.LinkIcon,
    'money-bag': MoneyBagIcon_1.MoneyBagIcon,
    'user-multiple': UserMultipleIcon_1.UserMultipleIcon,
    'shopping-cart': ShoppingCartIcon_1.ShoppingCartIcon,
    'source-code': SourceCodeIcon_1.SourceCodeIcon,
    webhook: WebhookIcon_1.WebhookIcon,
    shopify: ShopifyIcon_1.ShopifyIcon,
    calendar: CalendarIcon_1.CalendarIcon,
    folder: FolderIcon_1.FolderIcon,
    truck: TruckIcon_1.TruckIcon,
    ['money-send']: MoneySendIcon_1.MoneySendIcon,
    ['alert-circle']: AlertCircle_1.AlertCircle,
    ['check-circle']: CheckCircle_1.CheckCircle,
    ['x-circle']: XCircle_1.XCircle,
    ['arrow-up']: ArrowUp_1.default,
    ['arrow-down']: ArrowDown_1.default,
    loading: Loading_1.Loading,
    eye: Eye_1.default,
    ['eye-off']: EyeOff_1.default,
    ['alert-triangle']: AlertTriangle_1.AlertTriangle,
    check: Check_1.Check,
    x: X_1.X,
    copy: Copy_1.Copy,
    circle: Circle_1.Circle,
    settings: Settings_1.Settings,
    ['upload-cloud']: UploadCloud_1.default,
    ['analytics-up']: AnalyticsUp_1.AnalyticsUp,
    ['shopping-bag']: ShoppingBag_1.ShoppingBag,
    ['shopping-bag-3']: ShoppingBag3_1.ShoppingBag3,
    user: User_1.User,
    ['log-out']: LogOut_1.LogOut,
    ['menu']: Menu_1.Menu,
    percent: Percent_1.default,
    divide: Divide_1.default,
    ['dollar-sign']: DollarSign_1.default,
    ['coin-stack']: CoinStack_1.default,
    ['paint-board']: PaintBoard_1.default,
    ['tag']: TagIcon_1.TagIcon,
    download: Download_1.Download,
    'security-check': SecurityCheck_1.SecurityCheck,
    'security-error': SecurityError_1.SecurityError,
    'security-lock': SecurityLock_1.SecurityLock,
    lock: Lock_1.default,
    pix: Pix_1.default,
    invoice: Invoice_1.default,
    ['credit-card']: CreditCard_1.default,
    refresh: Refresh_1.default,
    info: Info_1.default,
};
const Icon = ({ name, size = 2, className }) => {
    const Icon = icons[name];
    const stylesIcon = [styles_module_scss_1.default[`size-${size}`], className].join(' ');
    return (<figure className={stylesIcon}>
      <Icon />
    </figure>);
};
exports.Icon = Icon;
