import { Bench } from "tinybench";
import { renderStringInterpolate } from "./string-interpolate";
import { rows } from "../search";
import { renderStringConcatStrict } from "./string-concat-strict";

const bench = new Bench({ time: 5000 });

(async () => {
  console.log("Starting benchmark");
  bench
    .add("renderStringInterpolate", () => {
      return renderStringInterpolate(0, 50, "some-query", rows);
    })
    .add("renderStringInterpolateMid", () => {
      return renderStringInterpolate(1001, 1051, "some-query", rows);
    })
    .add("renderStringConcatStrict", () => {
      return renderStringConcatStrict(0, 50, "some-query", rows);
    })
    .add("renderStringConcatStrictMid", () => {
      return renderStringConcatStrict(1001, 1051, "some-query", rows);
    });

  bench.addEventListener("cycle", (e) => {
    console.log("Started a task");
  });

  await bench.warmup(); // make results more reliable, ref: https://github.com/tinylibs/tinybench/pull/50
  await bench.run();

  console.table(bench.table());
})().catch(console.error);
