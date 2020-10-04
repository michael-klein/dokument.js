/// <reference types="react" />
import { NavbarItem } from '../../../../utils/document_interfaces';
export interface NavItemGroupProps extends NavbarItem {
    label: string;
    icon?: JSX.Element;
}
export declare const renderNavItemGroup: (props: NavItemGroupProps) => JSX.Element;
