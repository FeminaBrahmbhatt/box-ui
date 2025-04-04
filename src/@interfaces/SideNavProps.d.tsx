import { INavItem } from "./NavItem.d";

export interface SideNavProps {
    className?: string;
    navItemsTop: INavItem[];
    navItemsBottom: INavItem[];
    open: boolean;
    setOpen: (open: boolean) => void;
    username: string;
    email: string;
  }