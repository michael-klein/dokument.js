import { h } from "preact";

export const SearchInput = (props: { onChange?: (query: string) => {} }) => {
  return (
    <input
      placeholder="Enter your search..."
      type="text"
      onChange={e => {
        props.onChange?.(e.target.value);
      }}
    ></input>
  );
};
