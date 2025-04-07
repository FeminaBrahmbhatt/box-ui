/// <reference types="react" />
export interface BaseNavItem {
    order: number;
    path?: string;
    label: string;
}
export interface SubNavItem extends BaseNavItem {
}
export interface INavItem extends BaseNavItem {
    icon: React.ReactElement;
    toggleSidebar?: boolean;
    subItems?: SubNavItem[];
}
export interface NavItemProps {
    item: INavItem;
    isActive: boolean;
    activeSubNavItem: string;
    open: boolean;
    openDropdown: boolean;
    onClick: (item: INavItem, subNavPath?: string) => void;
}
//# sourceMappingURL=NavItem.d.d.ts.map