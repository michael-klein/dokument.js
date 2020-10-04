/// <reference types="react" />
import { NavbarItem } from '../../../../utils/document_interfaces';
export interface NavLevelProps extends NavbarItem {
    label: string;
    icon?: JSX.Element;
}
export declare const renderItem: (label: string, item: NavbarItem) => JSX.Element;
export declare const renderNavLevel: (props: NavLevelProps) => JSX.Element;
