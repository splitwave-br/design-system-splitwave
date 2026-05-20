import '../../variables.scss';
import type { IDrawerEntry } from '../../hooks/useDrawer';
interface DrawerPortalEntryProps {
    entry: IDrawerEntry;
    index: number;
    totalCount: number;
    onClose: (...args: any) => void;
}
declare function DrawerPortalEntry({ entry, index, totalCount, onClose, }: DrawerPortalEntryProps): import("react/jsx-runtime").JSX.Element;
export default DrawerPortalEntry;
