import { createContext } from "preact";
import { useContext } from "preact/hooks";
import { ComponentList, componentList } from "../components/component_list";

export const componentListContext = createContext<ComponentList>(undefined);

export const useComponentList = () => useContext(componentListContext);
