const React = {
  createElement(type: string, props, children) {
    console.log("createElement", props, children);
    // return {
    //   type,
    //   props,
    //   children,
    // };
    let html = "<" + type + ">";

    for (const [key, value] of props) {
    }
  },
};
``;
const Comp = (currentPage: number, query: string, rows: Row[]) => {
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

export const renderJsx: RenderFunc = ({ currentPage, query, rows }) => {
  const objModel = Comp(currentPage, query, rows);

  return objModel;
};
