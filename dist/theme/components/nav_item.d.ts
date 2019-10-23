import * as React from 'react';
export interface NavItemProps {
    path: string;
    slug?: string;
    children: React.ReactNode;
}
export declare function NavItem(props: NavItemProps): JSX.Element;
