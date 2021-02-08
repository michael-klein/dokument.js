import { h, Fragment } from "preact";
import { Suspense } from "preact/compat";
import { useComponentList } from "../utils/component_list_context";

export const Header = () => {
  const { Logo, Search } = useComponentList();
  return (
    <>
      <Logo></Logo>
      <header>
        <Suspense fallback="...">
          <Search></Search>
        </Suspense>
      </header>
    </>
  );
};
