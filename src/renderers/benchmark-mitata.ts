import { run, bench, group, baseline } from "mitata";
import { renderStringInterpolate } from "./string-interpolate";
import { rows } from "../search";
import { renderStringConcat } from "./string-concat";
import { ROWS_PER_PAGE } from "../types";

const MAX = Math.floor(rows.length / ROWS_PER_PAGE) - 1;

(async () => {
  group("page = 0", () => {
    baseline("baseline - renderStringInterpolate", () =>
      renderStringInterpolate({
        currentPage: Math.floor(Math.random() * MAX),
        query: "some-query",
        rows,
      })
    );
    bench("renderStringConcat", () =>
      renderStringConcat({
        currentPage: Math.floor(Math.random() * MAX),
        query: "some-query",
        rows,
      })
    );
  });

  await run({
    silent: false, // enable/disable stdout output
    avg: true, // enable/disable avg column (default: true)
    json: false, // enable/disable json output (default: false)
    colors: true, // enable/disable colors (default: true)
    min_max: true, // enable/disable min/max column (default: true)
    percentiles: true, // enable/disable percentiles column (default: true)
  });
})().catch(console.error);
