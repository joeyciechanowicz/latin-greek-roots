import { rows } from "../search";
import { renderJsx } from "./customjsx";
import { renderStringConcat } from "./string-concat";
import { renderStringInterpolate } from "./string-interpolate";

it("they resolve to the same", () => {
  const args = {
    currentPage: 0,
    query: "some-query",
    rows,
  };
  const base = renderStringInterpolate(args).replace(/\n|\s+/g, "");

  const stringConcat = renderStringConcat(args).replace(/\n|\s+/g, "");

  expect(stringConcat).toEqual(base);
  // expect(buffer).toEqual(base);
});

it("they resolve to the same on page 5", () => {
  const args = {
    currentPage: 5,
    query: "some-query",
    rows,
  };
  const base = renderStringInterpolate(args).replace(/\n|\s+/g, "");

  const stringConcat = renderStringConcat(args).replace(/\n|\s+/g, "");

  expect(stringConcat).toEqual(base);
  // expect(buffer).toEqual(base);
});

it.skip("renders jsx", () => {
  const result = renderJsx({
    currentPage: 0,
    query: "some-query",
    rows,
  });

  expect(result).toMatchInlineSnapshot(`
{
  "children": {
    "children": {
      "children": undefined,
      "props": {
        "aria-label": "Search query",
        "class": "c-header__term",
        "name": "query",
        "placeholder": "Search",
        "type": "search",
        "value": "some-query",
      },
      "type": "input",
    },
    "props": {
      "action": "/search",
      "method": "get",
    },
    "type": "form",
  },
  "props": {
    "class": "c-header",
  },
  "type": "header",
}
`);
});
