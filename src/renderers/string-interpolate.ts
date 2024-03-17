import { footer, header } from "../templates/index";
import { ROWS_PER_PAGE, RenderFunc } from "../types";
import { nextUrl, prevUrl } from "./utils";

export const renderStringInterpolate: RenderFunc = ({
  currentPage,
  query,
  rows,
}) => {
  const searchBox = `
      <header class="c-header">
        <form action="/search" method="get">
          <input
            type="search"
            name="query"
            class="c-header__term"
            placeholder="Search"
            aria-label="Search query"
            value="${query}"
          />
          <button type="submit" class="c-header__submit">
            Search
          </button>
        </form>
      </header>`;

  const table = `
    ${
      rows.length === 0
        ? "<p>No search results found</p>"
        : `
      <table>
        <thead>
          <tr>
            <th scope="col">Roots</th>
            <th scope="col">Meaning</th>
            <th scope="col">Origin Language</th>
            <th scope="col">Etymology</th>
            <th scope="col">Examples</th>
          </tr>
        </thead>
        ${rows
          .slice(
            currentPage * ROWS_PER_PAGE,
            (currentPage + 1) * ROWS_PER_PAGE - 1
          )
          .map(
            (row) => `<tr>
              <td>${row.roots.join(", ")}</td>
              <td>${row.meaning}</td>
              <td>${row.originLanguage}</td>
              <td>${row.etymology}</td>
              <td>${row.examples.join(", ")}</td>
            </tr>
        `
          )
          .join("")}
      </table>
      <div class="c-pagination__controls">
            ${
              currentPage !== 0
                ? `<a class="c-pagination__btn" href="${prevUrl(
                    currentPage,
                    query
                  )}">
                  Previous
                </a>`
                : ""
            }
        <span class="c-pagination__pagenum">
          ${currentPage + 1} / ${Math.ceil(rows.length / ROWS_PER_PAGE)}
        </span>
        ${
          currentPage < Math.floor(rows.length / ROWS_PER_PAGE)
            ? `<a class="c-pagination__btn" href="${nextUrl(
                currentPage,
                query
              )}">
          Next
        </a>`
            : ""
        }
  </div>
    `
    }`;
  return header + searchBox + table + footer;
};
