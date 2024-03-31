import { RenderFunc, Row } from "../types";

const React = {
  createElement(
    type: string | Function,
    props: Record<string, unknown>,
    ...children: unknown[]
  ) {
    console.log("createElement", { type, props, children });

    if (typeof type === "function") {
      const result = type(props);
    }

    // for (const [key, value] in props) {
    // }
  },
};

const Header = ({ query }: { query: string }) => {
  return (
    <header class="c-header">
      <form action="/search" method="get">
        <input
          type="search"
          name="query"
          class="c-header__term"
          placeholder="Search"
          aria-label="Search query"
          value={query}
        />
        <button type="submit" class="c-header__submit">
          Search
        </button>
      </form>
    </header>
  );
};

const App = (currentPage: number, query: string, rows: Row[]) => {
  return (
    <>
      <Header query={query} />
      {rows.map((x) => (
        <span>
          {x.roots.join(", ")} - {x.meaning}
        </span>
      ))}
    </>
  );
};

function renderToString(jsx: any): string {
  console.log("renderToString", jsx);
  return "uh oh";
}

export const renderJsx: RenderFunc = ({ currentPage, query, rows }) => {
  return renderToString(
    <App currentPage={currentPage} query={query} rows={rows} />
  );
};
