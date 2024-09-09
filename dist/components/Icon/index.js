"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
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
    return ((0, jsx_runtime_1.jsx)("figure", { className: stylesIcon, children: (0, jsx_runtime_1.jsx)(Icon, {}) }));
};
exports.Icon = Icon;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9JY29uL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsMERBQXNEO0FBQ3RELDhEQUEwRDtBQUMxRCwwREFBc0Q7QUFDdEQsdUVBQThDO0FBQzlDLDhEQUEwRDtBQUMxRCxnRUFBNEQ7QUFDNUQsbUVBQTBDO0FBQzFDLDZEQUFxQztBQUNyQyxvREFBZ0Q7QUFDaEQsaUVBQXlDO0FBQ3pDLDREQUF3RDtBQUN4RCxzRUFBa0U7QUFDbEUsOENBQTBDO0FBQzFDLDBEQUFzRDtBQUN0RCxrRUFBOEQ7QUFDOUQsZ0RBQTRDO0FBQzVDLHVFQUE4QztBQUM5Qyw0Q0FBd0M7QUFDeEMseUVBQWdEO0FBQ2hELGlFQUF3QztBQUN4Qyx5RUFBZ0Q7QUFDaEQsb0RBQWdEO0FBQ2hELG9EQUFnRDtBQUNoRCwyREFBa0M7QUFDbEMsaUVBQXdDO0FBQ3hDLDREQUF3RDtBQUN4RCx3REFBb0Q7QUFDcEQsb0RBQWdEO0FBQ2hELDZEQUFvQztBQUNwQyxtRUFBMEM7QUFDMUMsb0RBQWdEO0FBQ2hELGtEQUE4QztBQUM5Qyw2REFBb0M7QUFDcEMsZ0RBQTRDO0FBQzVDLDRDQUF3QztBQUN4Qyw0REFBd0Q7QUFDeEQsOERBQTBEO0FBQzFELDBEQUFzRDtBQUN0RCx5RUFBZ0Q7QUFDaEQsbUVBQTBDO0FBQzFDLDJEQUFrQztBQUNsQyxvREFBZ0Q7QUFDaEQsbUVBQTBDO0FBQzFDLHdEQUFvRDtBQUNwRCw4REFBMEQ7QUFDMUQsOERBQTBEO0FBQzFELDREQUF3RDtBQUN4RCxvREFBZ0Q7QUFDaEQsMERBQXNEO0FBQ3RELDBEQUFzRDtBQUN0RCw0REFBd0Q7QUFDeEQsb0VBQWdFO0FBQ2hFLGdFQUE0RDtBQUM1RCxrREFBOEM7QUFDOUMsc0RBQWtEO0FBQ2xELHNEQUFrRDtBQUNsRCwyRUFBa0Q7QUFDbEQsNENBQXdDO0FBQ3hDLG9FQUFnRTtBQUNo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