/// <reference types="react" />
import { NavbarItem } from '../../../../utils/document_interfaces';
export interface NavItemProps extends NavbarItem {
    icon?: JSX.Element;
    label: string;
}
export declare const renderNavItem: (props: NavItemProps) => JSX.Element;
