import { h, Fragment } from "preact";
import { StateUpdater, Suspense, useEffect, useState } from "preact/compat";
import { useComponentList } from "../utils/component_list_context";
import { HexColorPicker } from "react-colorful";

const ColorPicker = (props: {
  color: string;
  setColor: StateUpdater<string>;
}) => {
  const { color, setColor } = props;
  return (
    <div className="color-picker">
      <HexColorPicker color={color} onChange={setColor} />
    </div>
  );
};
const Color = (props: { name: string }) => {
  const { name } = props;
  const [color, setColor] = useState(() =>
    getComputedStyle(document.documentElement).getPropertyValue(name)
  );
  useEffect(() => {
    if (color) {
      document.documentElement.style.setProperty(name, color);
    }
  }, [color]);
  return (
    <div className="color">
      <figure>
        <div
          style={{
            backgroundColor: color
          }}
        ></div>
        <label>{name}</label>
      </figure>
      <ColorPicker color={color} setColor={setColor}></ColorPicker>
    </div>
  );
};
const colorNames = [
  "--color-base",
  "--color-base2",
  "--color-text",
  "--color-extra-light"
];
const Colors = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="colors">
      <button className="colors-toggle" onClick={() => setShow(s => !s)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      </button>
      {show && (
        <div className="colors-wrapper">
          {colorNames.map(name => {
            return <Color key={name} name={name}></Color>;
          })}
        </div>
      )}
    </div>
  );
};
export const Header = () => {
  const { Logo, Search } = useComponentList();
  return (
    <>
      <Logo></Logo>
      <header>
        <Suspense fallback="...">
          <Search></Search>
        </Suspense>
        <Colors></Colors>
      </header>
    </>
  );
};
