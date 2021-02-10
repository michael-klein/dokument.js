import { Header } from "./header";
import { App } from "./app";
import { Logo } from "./logo";
import { Search } from "./search";
import { SearchInput } from "./search_input";
import { Sidebar } from "./sidebar";
import { SidebarLevel } from "./sidebar_level";
import { SidebarCategory } from "./sidebar_category";
import { SidebarItem } from "./sidebar_item";
import { SidebarMenu } from "./sidebar_menu";
import { DocumentRenderer } from "./document_renderer";
import { Main } from "./main";
import { BreadCrumbs } from "./bread_crumbs";

export const componentList = {
  Header,
  App,
  Logo,
  Search,
  SearchInput,
  Sidebar,
  SidebarLevel,
  SidebarCategory,
  SidebarItem,
  Main,
  SidebarMenu,
  DocumentRenderer,
  BreadCrumbs
};

export type ComponentList = typeof componentList;
