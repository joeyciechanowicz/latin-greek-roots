import mikado from "mikado/ssr";
import { footer, header } from "../templates/index";
import { ROWS_PER_PAGE, RenderFunc, Row } from "../types";

let view;

mikado
  .compile("view/start.html", {
    csr: false,
  })
  .then((v) => (view = v));

export const renderStringConcat: RenderFunc = ({
  currentPage,
  query,
  rows,
}) => {
  const searchBox =
    `
      <header class="c-header">
        <form action="/search" method="get">
          <input
            type="search"
            name="query"
            class="c-header__term"
            placeholder="Search"
            aria-label="Search query"
            value="` +
    query +
    `"
          />
          <button type="submit" class="c-header__submit">
            Search
          </button>
        </form>
      </header>`;

  if (rows.length === 0) {
    return header + searchBox + "<p>No search results found</p>" + footer;
  }

  let table: string = `<table>
        <thead>
          <tr>
            <th scope="col">Roots</th>
            <th scope="col">Meaning</th>
            <th scope="col">Origin Language</th>
            <th scope="col">Etymology</th>
            <th scope="col">Examples</th>
          </tr>
        </thead>`;
  table += rows
    .slice(currentPage * ROWS_PER_PAGE, (currentPage + 1) * ROWS_PER_PAGE - 1)
    .map(
      (row) =>
        `<tr>
              <td>` +
        row.roots.join(", ") +
        `</td>
              <td>` +
        row.meaning +
        `</td>
              <td>` +
        row.originLanguage +
        `</td>
              <td>` +
        row.etymology +
        `</td>
              <td>` +
        row.examples.join(", ") +
        `</td>
            </tr>
        `
    )
    .join("");

  table += `</table>`;

  table += `<div class="c-pagination__controls">
        <a class="c-pagination__btn `;

  table += currentPage - 1 === 0 ? "c-pagination__btn--disabled" : "";
  table += `" href="/?page=` + (currentPage - 1).toString();
  table += query.length ? "&query=" + query : "";
  table +=
    `">
          Previous
        </a>
        <span class="c-pagination__pagenum">
          ` +
    currentPage +
    "/" +
    Math.ceil(rows.length / ROWS_PER_PAGE) +
    `</span>
        <a class="c-pagination__btn" href="/` +
    (query.length ? query + "/" : "") +
    (currentPage + 1) +
    `">Next</a></div>
    `;

  return header + searchBox + table + footer;
};