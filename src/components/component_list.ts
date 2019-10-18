import * as React from 'react';
import { Navbar } from '../utils/document_provider';
import { PreviousAndNextProps } from './previous_and_next';

export interface ComponentList {
  DocumentRenderer: React.FunctionComponent<{
    slug: string;
    headingSlug: string;
  }>;
  NavItem: React.FunctionComponent<{
    path: string;
    children: React.ReactNode;
    slug?: string;
  }>;
  NavLevel: React.FunctionComponent<{
    navbar: Navbar;
  }>;
  Nav: React.FunctionComponent;
  SideBar: React.FunctionComponent;
  Main: React.FunctionComponent;
  Search: React.FunctionComponent;
  PreviousAndNext: React.FunctionComponent<PreviousAndNextProps>;
}
