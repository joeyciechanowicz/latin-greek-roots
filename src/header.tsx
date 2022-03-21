import { track } from "insights-js";
import { Component } from "solid-js";

interface HeaderProps {
  onSearch: (value: string) => void;
}
export const Header: Component<HeaderProps> = ({ onSearch }) => {
  let input: HTMLInputElement;

  return (
    <header className={"c-header"}>
      <form
        onSubmit={(e) => {
          track({
            id: "search",
            parameters: {
              term: input.value,
            },
          });
          e.preventDefault();
          onSearch(input.value.trim());
        }}
      >
        <input
          type="text"
          name="search"
          className={"c-header__term"}
          placeholder="Search"
          aria-label="search term"
          ref={input}
        />
        <button type="submit" className={"c-header__submit"}>
          Search
        </button>
      </form>
    </header>
  );
};
