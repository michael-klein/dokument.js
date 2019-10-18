import * as React from 'react';
import { PreviousAndNextProps } from './previous_and_next';
import { NavItemProps } from './nav_item';
import { NavLevelProps } from './nav_level';
import { DocumentRendererProps } from './document_renderer';
import { SearchResultsProps } from './search_results';
import { SearchResultsItemProps } from './search_results_item';
export interface ComponentList {
    DocumentRenderer: React.FunctionComponent<DocumentRendererProps>;
    NavLevel: React.FunctionComponent<NavLevelProps>;
    Nav: React.FunctionComponent;
    SideBar: React.FunctionComponent;
    Main: React.FunctionComponent;
    Search: React.FunctionComponent;
    PreviousAndNext: React.FunctionComponent<PreviousAndNextProps>;
    NavItem: React.FunctionComponent<NavItemProps>;
    SearchResults: React.FunctionComponent<SearchResultsProps>;
    SearchResultsItem: React.FunctionComponent<SearchResultsItemProps>;
    Loading: React.FunctionComponent;
}
