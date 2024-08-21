import { AlertCircle } from './components/AlertCircle'
import { AlertTriangle } from './components/AlertTriangle'
import { AnalyticsUp } from './components/AnalyticsUp'
import ArrowDown from './components/ArrowDown'
import { ArrowLeftIcon } from './components/ArrowLeftIcon'
import { ArrowRightIcon } from './components/ArrowRightIcon'
import ArrowUp from './components/ArrowUp'
import Back from './components/Back';
import { BankIcon } from './components/BankIcon'
import Cancel from './components/Cancel';
import { CalendarIcon } from './components/CalendarIcon'
import { ChartLineDataIcon } from './components/ChartLineDataIcon'
import { Check } from './components/Check'
import { CheckCircle } from './components/CheckCircle'
import { ChevronDownIcon } from './components/ChevronDownIcon'
import { Circle } from './components/Circle'
import CoinStack from './components/CoinStack'
import { Copy } from './components/Copy'
import CreditCard from './components/CreditCard'
import Divide from './components/Divide'
import DollarSign from './components/DollarSign'
import { Download } from './components/Download'
import { EditIcon } from './components/EditIcon'
import Eye from './components/Eye'
import EyeOff from './components/EyeOff'
import { FileTextIcon } from './components/FileTextIcon'
import { FolderIcon } from './components/FolderIcon'
import { GiftIcon } from './components/GiftIcon'
import Info from './components/Info'
import Invoice from './components/Invoice'
import { LinkIcon } from './components/LinkIcon'
import { Loading } from './components/Loading'
import Lock from './components/Lock'
import { LogOut } from './components/LogOut'
import { Menu } from './components/Menu'
import { MoneyBagIcon } from './components/MoneyBagIcon'
import { MoneySendIcon } from './components/MoneySendIcon'
import { PackageIcon } from './components/PackageIcon'
import PaintBoard from './components/PaintBoard'
import Percent from './components/Percent'
import Pix from './components/Pix'
import { PlusIcon } from './components/PlusIcon'
import Refresh from './components/Refresh'
import { SearchIcon } from './components/SearchIcon'
import { SecurityCheck } from './components/SecurityCheck'
import { SecurityError } from './components/SecurityError'
import { SecurityLock } from './components/SecurityLock'
import { Settings } from './components/Settings'
import { ShopifyIcon } from './components/ShopifyIcon'
import { ShoppingBag } from './components/ShoppingBag'
import { ShoppingBag3 } from './components/ShoppingBag3'
import { ShoppingCartIcon } from './components/ShoppingCartIcon'
import { SourceCodeIcon } from './components/SourceCodeIcon'
import { TagIcon } from './components/TagIcon'
import { TrashIcon } from './components/TrashIcon'
import { TruckIcon } from './components/TruckIcon'
import UploadCloud from './components/UploadCloud'
import { User } from './components/User'
import { UserMultipleIcon } from './components/UserMultipleIcon'
import { WebhookIcon } from './components/WebhookIcon'
import { X } from './components/X'
import { XCircle } from './components/XCircle'
import styles from './styles.module.scss'

const icons = {
  plus: PlusIcon,
  search: SearchIcon,
  cancel: Cancel,
  'chevron-down': ChevronDownIcon,
  'arrow-left': ArrowLeftIcon,
  'arrow-right': ArrowRightIcon,
  edit: EditIcon,
  trash: TrashIcon,
  'chart-line-data': ChartLineDataIcon,
  back: Back,
  bank: BankIcon,
  'file-text': FileTextIcon,
  package: PackageIcon,
  gift: GiftIcon,
  link: LinkIcon,
  'money-bag': MoneyBagIcon,
  'user-multiple': UserMultipleIcon,
  'shopping-cart': ShoppingCartIcon,
  'source-code': SourceCodeIcon,
  webhook: WebhookIcon,
  shopify: ShopifyIcon,
  calendar: CalendarIcon,
  folder: FolderIcon,
  truck: TruckIcon,
  ['money-send']: MoneySendIcon,
  ['alert-circle']: AlertCircle,
  ['check-circle']: CheckCircle,
  ['x-circle']: XCircle,
  ['arrow-up']: ArrowUp,
  ['arrow-down']: ArrowDown,
  loading: Loading,
  eye: Eye,
  ['eye-off']: EyeOff,
  ['alert-triangle']: AlertTriangle,
  check: Check,
  x: X,
  copy: Copy,
  circle: Circle,
  settings: Settings,
  ['upload-cloud']: UploadCloud,
  ['analytics-up']: AnalyticsUp,
  ['shopping-bag']: ShoppingBag,
  ['shopping-bag-3']: ShoppingBag3,
  user: User,
  ['log-out']: LogOut,
  ['menu']: Menu,
  percent: Percent,
  divide: Divide,
  ['dollar-sign']: DollarSign,
  ['coin-stack']: CoinStack,
  ['paint-board']: PaintBoard,
  ['tag']: TagIcon,
  download: Download,
  'security-check': SecurityCheck,
  'security-error': SecurityError,
  'security-lock': SecurityLock,
  lock: Lock,
  pix: Pix,
  invoice: Invoice,
  ['credit-card']: CreditCard,
  refresh: Refresh,
  info: Info,
}

export type TIcons = keyof typeof icons

export type TIconSizes = 'micro' | 1 | 2 | 3 | 4

type TIcon = {
  name: TIcons
  size?: TIconSizes
  className?: string
}

export const Icon = ({ name, size = 2, className }: TIcon) => {
  const Icon = icons[name]
  const stylesIcon = [styles[`size-${size}`], className].join(' ')

  return (
    <figure className={stylesIcon}>
      <Icon />
    </figure>
  )
}
