import { footer, header } from "../templates/index";
import { ROWS_PER_PAGE, RenderFunc, Row } from "../types";
import { nextUrl, prevUrl } from "./utils";

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

  for (
    let i = currentPage * ROWS_PER_PAGE;
    i < (currentPage + 1) * ROWS_PER_PAGE - 1 && i < rows.length;
    i++
  ) {
    const row = rows[i];
    table +=
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
      `;
  }

  table += `</table>`;

  table += `<div class="c-pagination__controls">`;
  if (currentPage !== 0) {
    table +=
      '<a class="c-pagination__btn" href="' +
      prevUrl(currentPage, query) +
      '">Previous</a>';
  }

  table +=
    '<span class="c-pagination__pagenum">' +
    (currentPage + 1) +
    "/" +
    Math.ceil(rows.length / ROWS_PER_PAGE) +
    "</span>";

  if (currentPage < Math.floor(rows.length / ROWS_PER_PAGE)) {
    table +=
      '<a class="c-pagination__btn" href="' +
      nextUrl(currentPage, query) +
      '">Next</a>';
  }
  table += "</div>";

  return header + searchBox + table + footer;
};
