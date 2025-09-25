import { TIcons } from "@/components/Icon";

export type Route<T = {}> = {
    name: string;
    path: string;
    activePath?: string;
    isActive?: boolean;
    disabled?: boolean;
    icon?: TIcons;
    children?: Route<T>[];
    shouldHide?: boolean;
};
