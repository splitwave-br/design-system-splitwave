"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Icon = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const styles_module_scss_1 = __importDefault(require("./styles.module.scss"));
const Access_1 = __importDefault(require("./components/Access"));
const Alert_1 = __importDefault(require("./components/Alert"));
const AlertCircle_1 = __importDefault(require("./components/AlertCircle"));
const AlertTriangle_1 = require("./components/AlertTriangle");
const AnalyticsUp_1 = require("./components/AnalyticsUp");
const ArrowBack_1 = __importDefault(require("./components/ArrowBack"));
const ArrowDown_1 = __importDefault(require("./components/ArrowDown"));
const ArrowLeft_1 = __importDefault(require("./components/ArrowLeft"));
const ArrowRight_1 = __importDefault(require("./components/ArrowRight"));
const ArrowUp_1 = __importDefault(require("./components/ArrowUp"));
const Back_1 = __importDefault(require("./components/Back"));
const Bank_1 = __importDefault(require("./components/Bank"));
const Billing_1 = __importDefault(require("./components/Billing"));
const Block_1 = __importDefault(require("./components/Block"));
const Box_1 = __importDefault(require("./components/Box"));
const Calendar_1 = __importDefault(require("./components/Calendar"));
const Cancel_1 = __importDefault(require("./components/Cancel"));
const Chart_1 = __importDefault(require("./components/Chart"));
const ChartLineData_1 = require("./components/ChartLineData");
const Check_1 = __importDefault(require("./components/Check"));
const CheckCircle_1 = require("./components/CheckCircle");
const ChevronDown_1 = __importDefault(require("./components/ChevronDown"));
const Circle_1 = require("./components/Circle");
const Clients_1 = __importDefault(require("./components/Clients"));
const Close_1 = __importDefault(require("./components/Close"));
const CloseMenu_1 = __importDefault(require("./components/CloseMenu"));
const CoinStack_1 = require("./components/CoinStack");
const Config_1 = __importDefault(require("./components/Config"));
const Copy_1 = require("./components/Copy");
const CreditCard_1 = __importDefault(require("./components/CreditCard"));
const Customer_1 = __importDefault(require("./components/Customer"));
const Divide_1 = __importDefault(require("./components/Divide"));
const DollarSign_1 = __importDefault(require("./components/DollarSign"));
const Download_1 = require("./components/Download");
const Dropdown_1 = __importDefault(require("./components/Dropdown"));
const Edit_1 = require("./components/Edit");
const Eye_1 = __importDefault(require("./components/Eye"));
const EyeOff_1 = __importDefault(require("./components/EyeOff"));
const File_1 = __importDefault(require("./components/File"));
const FileText_1 = require("./components/FileText");
const Folder_1 = require("./components/Folder");
const Forward_1 = __importDefault(require("./components/Forward"));
const Gift_1 = require("./components/Gift");
const Home_1 = __importDefault(require("./components/Home"));
const Info_1 = __importDefault(require("./components/Info"));
const InformationCircle_1 = __importDefault(require("./components/InformationCircle"));
const Invoice_1 = __importDefault(require("./components/Invoice"));
const Link_1 = require("./components/Link");
const Loading_1 = __importDefault(require("./components/Loading"));
const Lock_1 = __importDefault(require("./components/Lock"));
const Logout_1 = __importDefault(require("./components/Logout"));
const Menu_1 = __importDefault(require("./components/Menu"));
const MoneyBag_1 = require("./components/MoneyBag");
const MoneyDown_1 = __importDefault(require("./components/MoneyDown"));
const MoneyExchange_1 = __importDefault(require("./components/MoneyExchange"));
const MoneySend_1 = require("./components/MoneySend");
const MoneyUp_1 = __importDefault(require("./components/MoneyUp"));
const More_1 = __importDefault(require("./components/More"));
const Package_1 = require("./components/Package");
const PaintBoard_1 = __importDefault(require("./components/PaintBoard"));
const PencilEdit_1 = __importDefault(require("./components/PencilEdit"));
const Percent_1 = __importDefault(require("./components/Percent"));
const Pix_1 = __importDefault(require("./components/Pix"));
const Plus_1 = __importDefault(require("./components/Plus"));
const Profile_1 = __importDefault(require("./components/Profile"));
const Refresh_1 = __importDefault(require("./components/Refresh"));
const RelationshipStroke_1 = __importDefault(require("./components/RelationshipStroke"));
const Search_1 = require("./components/Search");
const SecurityCheck_1 = __importDefault(require("./components/SecurityCheck"));
const SecurityError_1 = __importDefault(require("./components/SecurityError"));
const SecurityLock_1 = __importDefault(require("./components/SecurityLock"));
const Settings_1 = require("./components/Settings");
const Shopify_1 = require("./components/Shopify");
const ShoppingBag_1 = require("./components/ShoppingBag");
const ShoppingBag3_1 = require("./components/ShoppingBag3");
const ShoppingCart_1 = require("./components/ShoppingCart");
const Sort_1 = __importDefault(require("./components/Sort"));
const SourceCode_1 = require("./components/SourceCode");
const Swap_1 = __importDefault(require("./components/Swap"));
const Swap2_1 = __importDefault(require("./components/Swap2"));
const Tag_1 = require("./components/Tag");
const Tax_1 = __importDefault(require("./components/Tax"));
const Ticket_1 = __importDefault(require("./components/Ticket"));
const Trash_1 = require("./components/Trash");
const Truck_1 = require("./components/Truck");
const UploadCloud_1 = __importDefault(require("./components/UploadCloud"));
const User_1 = require("./components/User");
const UserMultiple_1 = require("./components/UserMultiple");
const Webhook_1 = require("./components/Webhook");
const X_1 = require("./components/X");
const XCircle_1 = require("./components/XCircle");
const icons = {
    access: Access_1.default,
    alert: Alert_1.default,
    'alert-circle': AlertCircle_1.default,
    'alert-triangle': AlertTriangle_1.AlertTriangle,
    'analytics-up': AnalyticsUp_1.AnalyticsUp,
    'arrow-back': ArrowBack_1.default,
    'arrow-down': ArrowDown_1.default,
    'arrow-left': ArrowLeft_1.default,
    'arrow-right': ArrowRight_1.default,
    'arrow-up': ArrowUp_1.default,
    back: Back_1.default,
    bank: Bank_1.default,
    billing: Billing_1.default,
    block: Block_1.default,
    box: Box_1.default,
    calendar: Calendar_1.default,
    cancel: Cancel_1.default,
    chart: Chart_1.default,
    'chart-line-data': ChartLineData_1.ChartLineData,
    check: Check_1.default,
    'check-circle': CheckCircle_1.CheckCircle,
    'chevron-down': ChevronDown_1.default,
    circle: Circle_1.Circle,
    clients: Clients_1.default,
    close: Close_1.default,
    'close-menu': CloseMenu_1.default,
    'coin-stack': CoinStack_1.CoinStack,
    config: Config_1.default,
    copy: Copy_1.Copy,
    'credit-card': CreditCard_1.default,
    customer: Customer_1.default,
    divide: Divide_1.default,
    'dollar-sign': DollarSign_1.default,
    download: Download_1.Download,
    dropdown: Dropdown_1.default,
    edit: Edit_1.Edit,
    eye: Eye_1.default,
    'eye-off': EyeOff_1.default,
    file: File_1.default,
    'file-text': FileText_1.FileText,
    folder: Folder_1.Folder,
    forward: Forward_1.default,
    gift: Gift_1.Gift,
    home: Home_1.default,
    info: Info_1.default,
    'information-circle': InformationCircle_1.default,
    invoice: Invoice_1.default,
    link: Link_1.Link,
    loading: Loading_1.default,
    lock: Lock_1.default,
    logout: Logout_1.default,
    menu: Menu_1.default,
    'money-bag': MoneyBag_1.MoneyBag,
    'money-down': MoneyDown_1.default,
    'money-exchange': MoneyExchange_1.default,
    'money-send': MoneySend_1.MoneySend,
    'money-up': MoneyUp_1.default,
    more: More_1.default,
    package: Package_1.Package,
    'paint-board': PaintBoard_1.default,
    'pencil-edit': PencilEdit_1.default,
    percent: Percent_1.default,
    pix: Pix_1.default,
    plus: Plus_1.default,
    profile: Profile_1.default,
    refresh: Refresh_1.default,
    'relationship-stroke': RelationshipStroke_1.default,
    search: Search_1.Search,
    'security-check': SecurityCheck_1.default,
    'security-error': SecurityError_1.default,
    'security-lock': SecurityLock_1.default,
    settings: Settings_1.Settings,
    shopify: Shopify_1.Shopify,
    'shopping-bag': ShoppingBag_1.ShoppingBag,
    'shopping-bag-3': ShoppingBag3_1.ShoppingBag3,
    'shopping-cart': ShoppingCart_1.ShoppingCart,
    'source-code': SourceCode_1.SourceCode,
    sort: Sort_1.default,
    swap: Swap_1.default,
    swap2: Swap2_1.default,
    tag: Tag_1.Tag,
    tax: Tax_1.default,
    ticket: Ticket_1.default,
    trash: Trash_1.Trash,
    truck: Truck_1.Truck,
    'upload-cloud': UploadCloud_1.default,
    user: User_1.User,
    'user-multiple': UserMultiple_1.UserMultiple,
    webhook: Webhook_1.Webhook,
    x: X_1.X,
    'x-circle': XCircle_1.XCircle,
};
const Icon = ({ name, size = 2, className }) => {
    const Icon = icons[name];
    const stylesIcon = [styles_module_scss_1.default[`size-${size}`], className].join(' ');
    return ((0, jsx_runtime_1.jsx)("figure", { className: stylesIcon, children: (0, jsx_runtime_1.jsx)(Icon, {}) }));
};
exports.Icon = Icon;
