import { rows } from "../search";
import { renderStringConcatStrict } from "./string-concat-strict";
import { renderStringInterpolate } from "./string-interpolate";

it("they resolve to the same", () => {
  const base = renderStringInterpolate(0, 50, "some-query", rows).replace(
    /\n|\s+/g,
    ""
  );

  const stringConcat = renderStringConcatStrict(
    0,
    50,
    "some-query",
    rows
  ).replace(/\n|\s+/g, "");

  expect(stringConcat).toEqual(base);
});
