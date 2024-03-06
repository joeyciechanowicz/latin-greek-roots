import assert from "node:assert";
import { it } from "node:test";
import { rows } from "../search";
import { renderStringConcatStrict } from "./string-concat-strict";
import { renderStringInterpolate } from "./string-interpolate";

it("they resolve to the same", () => {
  const base = renderStringInterpolate(0, 50, "some-query", rows);

  const stringConcat = renderStringConcatStrict(0, 50, "some-query", rows);

  assert.equal(base, stringConcat);
});
