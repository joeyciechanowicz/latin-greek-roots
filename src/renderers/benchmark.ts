import { Bench } from "tinybench";
import { renderStringInterpolate } from "./string-interpolate";
import { rows } from "../search";
import { renderStringConcat } from "./string-concat";
import { ROWS_PER_PAGE } from "../types";

const bench = new Bench({ time: 5000 });
const MAX = Math.floor(rows.length / ROWS_PER_PAGE) - 1;

(async () => {
  console.log("Starting benchmark");
  bench
    .add("renderStringInterpolate", () => {
      return renderStringInterpolate({
        currentPage: Math.floor(Math.random() * MAX),
        query: "some-query",
        rows,
      });
    })
    .add("renderStringConcat", () => {
      return renderStringConcat({
        currentPage: Math.floor(Math.random() * MAX),
        query: "some-query",
        rows,
      });
    });

  bench.addEventListener("cycle", () => {
    console.log("Started a task");
  });

  await bench.warmup(); // make results more reliable, ref: https://github.com/tinylibs/tinybench/pull/50
  await bench.run();

  console.table(bench.table());
})().catch(console.error);
