import { h } from "preact";
import { useComponentList } from "../utils/component_list_context";

export const Header = () => {
  const { Logo, Search } = useComponentList();
  return (
    <header>
      <Logo></Logo>
      <Search></Search>
      <div></div>
    </header>
  );
};
