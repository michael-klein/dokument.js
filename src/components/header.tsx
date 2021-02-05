import { h, Fragment } from "preact";
import { useComponentList } from "../utils/component_list_context";

export const Header = () => {
  const { Logo, Search } = useComponentList();
  return (
    <>
      <Logo></Logo>
      <header>
        <Search></Search>
      </header>
    </>
  );
};
