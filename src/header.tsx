import { h } from "preact";
export const Header = () => {
  return (
    <header>
      <figure className="logo">dokument.js</figure>
      <div className="search">
        <input placeholder="Enter your search..."></input>
      </div>
    </header>
  );
};
